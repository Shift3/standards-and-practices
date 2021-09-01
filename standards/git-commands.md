# Git Commands

Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows.

At Bitwise, we use git for a majority of our software projects.

## Bitwise Git specific resources

1. [Commits](commits.md)
2. [Branching](branching.md)
3. [Code Versioning](code-versioning.md)

### Lesser known Git Commands

### Switch & Restore

Git Switch (and Restore) were added to address overloading of the `checkout` command, and to provide alternative (and clearer) ways to do some basic work.
These commands do not provide new functionality, but may be easier to remember how to use them and what they do.

#### Git Switch

Git Official Documentation: https://git-scm.com/docs/git-switch

Switch is useful to switch to another branch, creating a new branch in the process if desired.

```shell
$ git switch <branch-name>
```

can be used to switch to an existing branch instead of the checkout analog:

```shell
$ git checkout <branch-name>
```

For creating new branches, then switching to them, `switch -c` may seem more intuitive than `checkout -b`.

```shell
$ git switch -c <branch-name>
```

can be used to create a new branch and switch to it. Alternatively,

```shell
$ git checkout -b <branch-name>
```

provides identical functionality.

#### Git Restore

Git Official Documentation: https://git-scm.com/docs/git-restore

Git Restore is useful to undo either changes made or changes staged.

To undo changes made since the last commit (back to HEAD):

```shell
$ git restore <file-name>
```

If we wanted to restore the file to what it looked like say, two commits ago, we can use `--source` option and `HEAD~1` pointer:

```text
$ git restore --source HEAD~1 <file-name>
```

Commit hashes can also be used instead of the `HEAD~#` pointer for "rewind" operations. In this context, restore is "rewinding" one or more files to a previous point in those file(s) history. In this way, files can be worked on as if they hadn't undergone any changes since the given point in time (e.g.: point in time refers to a commit hash or HEAD pointer).

Undoing staged files is another use for Restore. For instance, if we forgot to include a file in `.gitignore`, and we've staged the files for a commit, these can be unstaged prior to a commit in a relatively simple manner.

To undo staged files (remove file entries from staging):

```shell
$ git restore --staged <file-name>
```

Git Status will inform us of the availability of the `restore` command when it will be useful.

#### Git Stash

Git Official Documentation: https://git-scm.com/docs/git-stash

Git Stash is useful when you want to go back to a clean working directory but don't want to discard your current changes. It works by locally storing the current state of the working directory and index (the code within the current branch). In order to "stash" your code away for future use, first `git add` the files you want to stash away but _do not use git commit_. You use the `git stash push` command to create your stash. You can switch your branches and then apply the same code to the new branch with `git stash pop`.

In the below example, we are pushing this readme into our `foo-999-big-feature` branch which leaves us with a clean working directory/index within our original branch `mac-192-lesser-known-git`.

```shell
$ git add standards/git-commands.md
$ git stash push
Saved working directory and index state WIP on mac-192-lesser-known-git: 60a39ed Merge remote-tracking branch 'origin/main' into mac-192-lesser-known-git
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
