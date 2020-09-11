# Git Commands
Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows.

At Shift3, we use git for a majority of our software projects.

## Shift3 Git specific resources
1. [Commits](commits.md)
2. [Branching](branching.md)
3. [Code Versioning](code-versioning.md)

### Lesser known Git Commands

#### Git Stash

Git Official Documentation: https://git-scm.com/docs/git-stash

Git Stash is useful when you want to go back to a clean working directory but don't want to discard your current changes. It works by locally storing the current state of the working directory and index (the code within the current branch). In order to "stash" your code away for future use, first `git add` the files you want to stash away but *do not use git commit*. You use the `git stash push` command to create your stash. You can switch your branches and then apply the same code to the new branch with `git stash pop`. 

In the below example, we are pushing this readme into our `foo-999-big-feature` branch which leaves us with a clean working directory/index within our original branch `mac-192-lesser-known-git`.
```shell
$ git add standards/git-commands.md
$ git stash push
Saved working directory and index state WIP on mac-192-lesser-known-git: 60a39ed Merge remote-tracking branch 'origin/master' into mac-192-lesser-known-git
$ git checkout foo-999-big-feature
$ git stash pop
On branch mac-test-branch
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   standards/git-commands.md

Dropped refs/stash@{0} (1a5b247bdd51df733d9ab2e1d1aadc270eded2ce)
```

A good visual representation can be seen in Gitkrakens documentation: [Gitkraken Stashing](https://support.gitkraken.com/working-with-commits/stashing/)

### Git Hooks

Git Official Documentation: https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks

Git Hooks are stored in the hooks subdirectory of the `.git` directory. This folder is automatically created when you initialize a new repository in GitKraken and is located in `.git\hooks` in your project directory.

Hooks are unique to your local repository and will not be copied over if you create a new repository. Feel free to add, change, or remove scripts from this folder as necessary.

How to use git hooks with example code from GitHub: https://githooks.com/

Using Git Hooks and node: https://medium.com/@satya164/improving-nodejs-workflow-with-git-hooks-40996830619f
