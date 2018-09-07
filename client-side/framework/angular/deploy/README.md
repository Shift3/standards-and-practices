# Angular 2+ Deploy
## Guidelines For a New App Deploy
What you should be aware of when deploying a new angular application:
1. When deploying in development mode, all variables will be exposed and easily accessible. Tools like Augury can be used to read and modify anything in the running code. Observables can be fired and values can be changed directly.
2. Development mode is designed for testing. Some errors will cause the app to come to a screeching halt in development mode, but not in production mode.
3. Deploying an app with aot (Ahead of Time Compilation) disabled increases the initial load time by over 400%. Angular has become pickier about TypeScript with each new version. Specifically, errors on the template that would not cause an aot compile to fail on older versions will now cause the aot compile to fail. The proper solution is not --aot=false.

### Fixing AOT Compile Errors
If the dev server runs without any errors and aot fails, the issue most likely has something to do with the template. If there are multiple template issues, the returned error might just indicate that the main.ts file can not be found.

>"ERROR in ./src/main.ts Module not found ..."

1. Add --verbose to your build command if aot errors are not helpful. This can be removed once the issues have been fixed.

> "deploy": "ng build --prod --verbose ..."

2. Error most likely to be seen here are:
  * Variables in template not present in component ts file.
  * Miss-matched function parameters or parameters not marked as optional when they are excluded on the template call of the function.
  * Accessing properties that do not exist in a model on the template.

3. If it is true of the ts file, it's true on the template. Follow all typescript rules on the template, even if Webpack dev server does not complain about it.

### Useful Utilities For Deploy
npm - [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)

#### Install
>npm install --save-dev webpack-bundle-analyzer

#### Add to scripts section of package.json
>"bundle-report": "webpack-bundle-analyzer dist/stats.json"

1. Run build with --stats-json flag added to create the stats.json file in the build folder.
2. This utility will open a webpage with details about code size. Are you importing all of lodash and all the moment locales (Spoiler alert, you are). This will also let you know what sizes you can expect the main.ts and vendors.ts file to be once you deploy. The --stats-json flag should not be part of your deploy script.