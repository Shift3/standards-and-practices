# **Environment Setup in NativeScript-Angular**

The best practice recommends not to use more than 2 properties, `production` and `apiUrl`.
To achieve that, we need to make some changes on environment files as you can see below:

https://medium.com/most-wanted-experts/angular-application-configurations-best-practices-2e28514b9b4e

The configuration on `angular.json` does not make effect when we build the application in NativeScript. Below we have a work around to use environment.

https://medium.com/@derekfong/nativescript-angular-setup-environment-ts-for-different-environments-631b4c5219b6

## To setup the environment

1 - On `environment.<dev|stage|prod>.ts`

```typescript
export const environment = {
    production: true,
    apiUrl: 'http://www.yoursite.com',
};
```

2 - On `environment.tns.ts`:

```typescript
import { environment as devEnvironment } from './environment.dev';
import { environment as prodEnvironment } from './environment.prod';
// TODO: import additional environment (e.g. stage) if required.

export const environment = (() ={
  if (Object.prototype.hasOwnProperty.call(process.env, 'environment') &&
        process.env.environment
  ) {
    switch (process.env.environment) {
      case 'prod':
        return  prodEnvironment;
        break;
      // TODO: Add additional environment (e.g. stage) if required.
      default:
        return  devEnvironment;
    }
  }
  
  return  devEnvironment;
})();
```

3- On `webpack.config.js` look for `new webpack.DefinePlugin`, modify that to looks like this:

```typescript
new webpack.DefinePlugin({
  'global.TNS_WEBPACK': 'true',
  'process.env': {
    environment: (env && Object.prototype.hasOwnProperty.call(env, 'environment')) ?stringify(env.environment) : undefined
  }
}),
```

## To use the environment
Import your environment as before in any section of the code as needed like this:

```typescript
import { environment as env } from '@env/environment';
```

To compile the project you can do this way:

**NS version 5:

```typescript
$ tns run/debug/build android --bundle --env.environment="prod|dev"
$ tns run/debug/build ios --bundle --env.environment="prod|dev"
```

**NS version 6 or up:

```typescript
$ tns run/debug/build android --env.environment="prod|dev"
$ tns run/debug/build ios --env.environment="prod|dev"
```

P.S.: if "--env.environment" is not declared the system default compiles in dev mode.

**Angular: `$ ng serve --prod`

That is all we need todo to simplify compilation tasks.
