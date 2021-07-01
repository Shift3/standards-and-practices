# Bitwise's convention on how to structure, write, and use commit messages

Using a convention for commit messages has several benefits. For one, it makes it easier to find individual commits. It also forces us to keep our commits small enough to be able easily reason what they're doing. And lastly to be able to revert small chunks of code if needed.

## Git Commit Messages Conventions

There are [many conventions](https://github.com/conventional-changelog/commitlint#shared-configuration) available, many follow a close resemblance to the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/).

👍 **The one we use at Bitwise is based on the [Karma Runner](http://karma-runner.github.io/1.0/dev/git-commit-msg.html) project.** Please review it.

## Guidelines:

- Each commit should contain files that all pertain to the same _scope_
- If you have changed multiple files that apply to different scopes, add and commit them separately
- Make your messages as direct and succinct as possible

## Format

### Your commit messages should be formatted as follows:

`type(scope):subject`

Commit **Type**: Select one of the following 8 commit types. These are your _only_ options for commit type:

- **_feat_**: A new feature for the application user. Rolling out a new module, new piece of functionality, etc.
- **_fix_**: Bug fix to your production code. Dealing with GH Issues, fixing a bug, etc.
- **_docs_**: Changes to your documentation. Adding a comment, editing a comment, changing README.md files, etc.
- **_style_**: Changes to your code formatting. _This does **not** address CSS styling_ but rather the style of your code. Reformatting, adding semi-colons, etc.
- **_refactor_**: Refactor to production code. Upgrading a package and changing your code to meet the new demands, changing a **let** or a **const** name, etc.
- **_test_**: All things that apply to unit testing. Creating tests, refactoring tests, etc. No changes to production code occur.
- **_chore_**: Updating gulp, webpack, package.json files. This is developer-facing _only_.
- **_workaround_**: Temporary fix until a more robust solution is found or until other factors are resolved.

Commit **Scope**: Narrow the scope of the commit to a one or two word description in parentheses

Message **Subject**: Favor imperative mood, present tense, active voice, and start with verbs. Don't use a period at the end. Think of it as a newspaper headline.

Message **Body**: If necessary, write a short sentence detailing pertinent information for other developers. This is normally unnecessary but some use cases are:

- If the commit contains a new package you've added to the project
- If the commit contains a change to your build that you need to notate
- If the commit is the last in a series that will become a Pull Request and you want to communicate something to your senior developer.

## Examples

Say you have changed four files:

> app.component.ts
> app.router.ts
> login.component.ts
> login.component.scss

There are at least two _scopes_ being dealt with here: the **app.component** scope and the **login.component** scope.

- `git add` the **app.component.ts** and the **app.router.ts** and create a commit for those files.

  > `git commit -m "refactor(app-component): import user service and add routes"`

        _Now you have 1 commit, dedicated to the **app.component** scope._

- Next, `git add` the login files and create a new commit message for these files.
  > `git commit -m "feat(login): create/setup"`
        _Note that this message is less verbose because it isnt necessary to add detail_

## Automation Tools 🛠

There are many tools available to help you ***enforce*** the commit convention rules via git hooks. This way you can always be sure that your commit will satisfy the rules before they're added to the history.

One example, if you're using npm/package.json in your project, you can install [commitlint](https://github.com/conventional-changelog/commitlint) package. This adds a commit message linter to your command line. There are many plugins available for it with pre-configured convention rules, you can check them out [here](https://github.com/conventional-changelog/commitlint#shared-configuration). If those don't meet your needs you can extend them using a commitlint [configuration file](https://github.com/conventional-changelog/commitlint#config). You can then add the commitlint as a hook using Husky ([directions here](https://github.com/conventional-changelog/commitlint#getting-started)). After you set that up every time you try to run `git commit` it will first pass your commit message through the linter and either it will succeed or get rejected with a violation reason if it doesn't comply with the rules.

*If you find any other tools that you would like to share please open a PR.*

