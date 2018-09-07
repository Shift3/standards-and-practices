# Access Permissions

## All access permissions should always be handled by the server. The client should be permission aware to provide a good user experience, but the server should enforce all requirements and limitations.

NPM Express - [express](https://www.npmjs.com/package/express)

#### The following is recommended to secure routes to the database and protect data from unauthorized users. If different methods are used, they must be as secure or better.

### Middleware

1. Only admin users should be allowed to use request intended exclusively for admin users.
```js
/**
* Require admin permissions
*/

export function admin(req, res, next){
  if (req.current_user.role !== 'admin') {
    res.statusMessage = 'Not authorized.';
    return res.status(403).end();
  }
  next();
}
```
2. User update requests should be limited to the same user unless the user has an admin role if allowed at all.
```js
/**
* Require user same as employee
*/

export function same(req, res, next) {
  if (req.current_user.id !== req.body._id && req.current_user.role !== 'admin') {
    res.statusMessage = 'Not authorized.';
    return res.status(400).end();
  }
  next();
}
```

## Applying Midleware
Middleware permission functions can be applied to the router to prevent access to api calls by users that are not authorized even if they have valid credentials.

```js
router.route('/')
  .post(jwtModule.protect, required.admin, userController.create)
  .get(jwtModule.protect, required.admin, userController.getAll)
  .put(jwtModule.protect, required.admin, userController.update)

router.route('/pwd')
  .put(jwtModule.protect, required.same, userController.setPassword)
```

## Removing Sensitive Keys
Users that have access to an api but not necessarily all parts of the record should have sensitive data keys removed before processing the request. It should not be possible for a user to directly set the password key without hashing the password. A user should not be allowed to set their own role or admin privedges and should only be allowed to set role or admin privledges if they have admin status.

* Example updating user
```js
export async function update(req, res) {

  delete req.body.password;                      // not possible to set password

  if (
    req.current_user.id === req.body._id ||     // if update user = current user
    req.current_user.role !== 'admin'           // if current user is not admin
    ) {
    delete req.body.role;                       // user can not change their own role
    delete req.body.isActive;                   // user can not set themselves to inactive
  }
```

## Database
1. Required items should be set to required in the model and database.
2. Unique items should be set to unique in the model and database.