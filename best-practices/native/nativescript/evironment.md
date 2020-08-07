The best prectice recomends not use more than 2 properties, production and apiUrl properties.
To achive that, we need to make some chagens on environment files as you can see below:

1 - This goes to environment.<dev|stage|prod>.ts
<export const environment = {
    production: true,
    apiUrl: 'http://www.yoursite.com'
};>

2 - On environment.tns.ts:

<import { environment as devEnvironment } from './environment.dev';
import { environment as prodEnvironment } from './environment.prod';
// TODO: import additional environment (e.g. uat) if required.
export const environment = (() ={
  let envVars;
  if (Object.prototype.hasOwnProperty.call(process.env, 'environment') &&
        process.env.environment
  ) {
    switch (process.env.environment) {
      case 'prod':
        envVars = prodEnvironment;
        break;
      // TODO: Add additional environment (e.g. stage) if required. 
      default:
        envVars = devEnvironment;
    }
  } else {
    envVars = devEnvironment;
  }
  return envVars;
})();>

Also we need make some changes on "webpack.comfig.js".
So, look for "new webpack.DefinePlugin" on "webpack.comfig.js". in that place modify to looks like this:
 
<new webpack.DefinePlugin({
        'global.TNS_WEBPACK': 'true',
        // 'process': undefined,
        'process.env': {
          environment: (env && Object.prototype.hasOwnProperty.call(env, 'environment')) ? JSON.stringify(env.environment) : undefined
        }
      }),
>

To use the environment 
Import your environment as before in any seccion of the code as needed like this:

<import { environment as env } from '@env/environment';>

To compile the project you can do this way:

NS version 5:
$ tns run/debug/build android --bundle --env.environment="prod|dev"
$ tns run/debug/build ios --bundle --env.environment="prod|dev"

NS version 6 or up:
$ tns run/debug/build android --env.environment="prod|dev"
$ tns run/debug/build ios --env.environment="prod|dev"

P.S.: if "--env.environment" is not declared the system default compiles in dev mode.

Angular: 
$ ng serve --prod


Thats is all we need todo to simplify compilation tasks.











