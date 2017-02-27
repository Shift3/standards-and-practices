# Git Commit Messages

## Shift3's convention for how to structure, write, and use your commits  
 _([reference](http://karma-runner.github.io/1.0/dev/git-commit-msg.html))_  


### Guidelines:

 * Each commit should contain files that all pertain to the same _scope_ 

 * If you have changed multiple files that apply to different scopes, add and commit them separately  

 * Make your messages as direct and succinct as possible

### Format:

 * **Your commit messages should be formatted as follows:** 
    >**type(scope):body**  

    1. Commit **Type**: Select one of the following 7 commit types. These are your _only_ options for commit type:
        * *feat* : A new feature for the application user. Rolling out a new module, new piece of functionality, etc. 
        * *fix* : Bug fix to your production code. Dealing with GH Issues, fixing a bug, etc.
        * *docs* : Changes to your documentation. Adding a comment, editing a comment, changing README.md files, etc.
        * *style* : Changes to your code formatting. _This does **not** address CSS styling_ but rather the style of your code. Reformatting, adding semi-colons, etc.
        * *refactor* : Refactor to production code. Upgrading a package and changing your code to meet the new demands, changing a **let** or a **const** name, etc.
        * *test* :  All things that apply to unit testing. Creating tests, refactoring tests, etc. No changes to production code occur.
        * *chore* : Updating gulp, webpack, package.json files. This is developer-facing _only_.
    
    2. Commit **Scope**: Narrow the scope of the commit to a one or two word description in parentheses
    
    3. Message **Body**: If necessary, write a short sentence detailing pertinent information for other developers. This is normally unnecessary but some use cases are:

        * If the commit contains a new package you've added to the project
        * If the commit contains a change to your build that you need to notate
        * If the commit is the last in a series that will become a Pull Request and you want to communicate something to your senior developer.

### Examples: 
  * Say you have changed four files: 
    
    > app.component.ts
    > app.router.ts
    > login.component.ts
    > login.component.scss

  * There are at least two _scopes_ being dealt with here: the **app.component** scope and the **login.component** scope.
    * `git add` the  **app.component.ts** and the **app.router.ts** and create a commit for those files. 
        > `git commit -m "refactor(app-component): import user service and add routes"`        
            _Now you have 1 commit, dedicated to the **app.component** scope._  
    
    * Next, `git add` the login files and create a new commit message for these files.   
        > `git commit -m "feat(login): create/setup"`  
            _Note that this message is less verbose because it isnt necessary to add detail_