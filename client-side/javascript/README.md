# Client Side / Javascript

## Best practices and standards such as space or tabs, all is finalized here

## ES6
  ###General Guidelines
  * As a matter of practice, we use ES6 on the client side for every application we start from scratch. 
    * Exceptions are projects that are rolling into a new phase that were written in ES5. If you inherit an older project, it is best practice to maintain the standard already in place in that project.
  
  ### Promises
  * Native promises are the standard use case for our client-side promises. This means we dont need $q or any other flavor of promise library. Again, if you are working in a legacy project, utilize whatever is in place for that project.

  ### Modules
  * Because of ES6, we have access to amazing import and export functionality. Depending on the framework you are working in, if any, you may have to adjust how you use imports and exports. 
    * The standard way we utilize imports and exports (baring any framework quirks) is using the default named export method:

    ```javascript
        // Export method and variable from config.js

        function returnAuth() {
            return 'auth';
        }

        var mongoUri = 'admin@1234.mongodb.com';

        export { returnAuth, mongoUri };
    ```

    ```javascript
        // Import same methods into home.js

        import {returnAuth, mongoUri} from 'config';

        // ======= OR ========

        import * as exp from 'config';

        
        exp.returnAuth();

        console.log(exp.mongoUri);

    ```

    
* ESLint - [not complete]