# Angular 2+ Client Side Permissions
## Recommendations for handling Angular app permission in client side code
1. Is user authorized.
```js
// checking for local storage token or set cookie
// { providedIn: 'root'} only for angular 6 and above
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService) {}

  canActivate() {
    return this.authService.loggedIn();
  }
}
```
2. Is user level admin
```js
// checking for user role of admin
// { providedIn: 'root'} only for angular 6 and above
@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {

  constructor(private context: ContextService) {}

  canActivate() {
    return _get(this.context.get(), 'user.role', null) === 'admin';
  }
}
```
3. Checking for valid token before navigating to password reset
```js
// checking for valid password reset
// { providedIn: 'root'} only for angular 6 and above
@Injectable({ providedIn: 'root' })
export class ResetGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private router: Router,
    private notify: NotifyService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let user;
    let path = '';

    path = this.authService.loggedIn() ? 'dashboard' : 'login';

    try {
      const token = _get(state, 'root.queryParams.token', '').split('.')[1];
      user = JSON.parse(atob(token));
    } catch {
      this.router.navigate([path]);
      return false;
    }
    return true;
  }
}
```

### Router Example
```js
const routes: Routes = [
  {
    path: 'login',
    component: loginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [
      AuthGuard,
      AdminGuard
    ]
  }
];
```