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
          { expiresIn: 30 * 24 * 60 * 60 * 1000 }
        )
      });
  });
```

1. Password reset tokens should be a unique key stored in the .env file and in the user record. The reset secret should not be set unless a password reset has been requested and should be erased after a successful password reset. This will ensure that reset tokens only work for a single password reset. Password reset tokens should expire in 30 minutes or less.

### Creating Token
```js
const reset = rando('Aa0', 16); // random string generation
const token = jwt.sign(
    { email: employee.email,  _id: employee._id},
    process.env.JWT_RESET_SECRET + reset,
    { expiresIn: 60 * 30 }
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
        res.status(401);
        return res.json({error: 'Invalid authorization header'});  
    }

    req.current_user = user;
        
    if (!user.isActive) {
        res.status(401);
        return res.json({error: 'User not found.'});
    }

    const data = _pick(user, ['_id', 'first', 'last', 'role']);
    const m = Buffer.from(JSON.stringify(data)).toString('base64');
    res.header(‘M-Data', m);        
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