# JSON Web Tokens

## This is a reccomendation for how to implement JSON web tokens. Projects choosing to implement them differently should provide the same level of security or better.
### Links
* NPM Node JSON Webtoken - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken/)
* NPM Random Number Generator - [randomatic](https://www.npmjs.com/package/randomatic)

### Using Secrets and Salt Values
1. Tokens should be created and verified using a two section secret. One section should be stored in an .env file, the other should be a random string stored on the user record. This will allow for expiring tokens when a password is changed by also changing the random token on the user. Expiring the token in this way can also be useful in situations where only a single login is permitted by changing the token on login, but this is not required. Tokens should have an expiration date set.

```js
function verify(token, salt){
  if (salt) {
    try{
      return jwt.verify(token, secret + salt);
    } catch(err){
        return null;
    }
  } else {
    return null;
  }
}
```

2. All sensitive data should be excluded from the token whether encrypted or not.

```js
router.route('/')
  .post(passport.authenticate('local', {session: false}),(req, res) => {
    const user = req.user.toJSON();

    res.json({
        token: jwt.sign(
          _omit(req.user.toJSON(),['password', 'ssn', 'sort', 'reset', 'secret', '__v']), 
          process.env.JWT_SECRET + user.secret,
          { expiresIn: 24 * 60 * 60 }                       // expires in 24 hours
        )
      });
  });
```

1. Password reset tokens should be a unique key stored in the .env file and in the user record. The reset secret should not be set unless a password reset has been requested and should be erased after a successful password reset. This will ensure that reset tokens only work for a single password reset. Password reset tokens should expire in 30 minutes or less.

### Creating Token
```js
const reset = rando('Aa0', 16);                           // random string generation
const token = jwt.sign(
    { email: user.email,  _id: user._id},
    process.env.JWT_RESET_SECRET + reset,
    { expiresIn: 60 * 30 }                                // expires in 30 minutes
  );

user.reset = reset;
```

### Verifying token
```js
// this verify should use the reset secret
const found = verify(req.headers.authorization.split(' ')[1], user.reset); 

user.reset = null;
```

### Mongo Example
```js
const User = mongoose.model('User');
User.findOne({ _id }).then(function(user){
    const secret = user ? user.secret : null;
    const verified = verify(req.headers.authorization.split(' ')[1], secret);

    if (!verified) {
        return res.status(401).json({error: 'Invalid authorization header'});
    }

    req.current_user = user;
        
    if (!user.isActive) {
        return res.status(401).json({error: 'User not found.'});
    }

    const data = _pick(user, ['_id', 'first', 'last', 'role']);
    const m = Buffer.from(JSON.stringify(data)).toString('base64');
    res.header('M-Data', m);        
    next();
});
```
1. The user matching the token id is requested from the database.
2. User is verified using the secret set on the user.
3. If user is not active, request will fail.
4. If user is valid, a header is set that will return some user information and permissions. Only useful information is included.
5. To use this header, it must be set to exposed.

```js
res.header('Access-Control-Expose-Headers', 'M-Data');
```

### Using Meta Data Header in Client
Setting and reading a meta data header is not required, but can be used to improve the user experience.

The client should contain a service providing a single point where all http requests are routed. As the requests come in, a service can be used to set a value to the contents of the header. This information can then be used to update the user interface to match user information and permissions as they are changed.

```js
const mData = res.headers.get('m-data');

if (mData) {
    const user = JSON.parse(atob(mData));
    this.context.setContext({ user });
}
```

#### Angular Http vs HttpClient
The header will be readable on the response if using Angular Http. If using Angular HttpClient, the header will not be readable unless observe response is set.

```js
export function authHeaders() {
  const token = localStorage.getItem('auth_token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token
  });
  return { headers, observe: 'response' };
}
```