# Symantic Versioning (SymVer)

### What is SymVer?

Ever used NPM before? How about Homebrew, or RubyGems? Each of those and most other package management systems need a way of keeping track of what version their public codebase is on, what versions they have had before, and what version they are heading toward.

The three package management systems I mentioned above all use a system of organization called [**Symantic Versioning**](https://semver.org/) to maintain uniform control of their code and how it is recieved by thier users. In short, versioning helps code maintainers and users of open source code identify several aspects of the code in question.

### SymVer Basics:
  * Always have an up-to-date documented API (in our case, README.md for our projects or Wiki)
  * Increment your versions based on a **Major.Minor.Patch** format where:
    * **Major** changes are breaking, non-backwards compatable changes to your code base.
    * **Minor** changes are new features or functionality that ius still backwards-compatable
    * **Patch** changes are bug fixes or hotfixes that only address issues and don't introduce anything new.
  * Releases should be unalterable and locked -- forever.
  * Initial development (so most of our lives) should be treated as 0.x.x so as to indicate that there is no release as yet.
    * Generally, any software with a major version of 0 should be treated as unstable.

### Why should Shift3 care?

This should be self-evident: more maintainable code makes our jobs easier! Symantic Versioning does the following things  
  * Provides markers for points in our development cycle such as releases, patches, hotfixes, etc.
  * Keeps in-development projects organized by allowing for pre-releases (ie. 0.1.0, 0.2.0) that can be mapped to specific milestones
  * Allows for quicker set-up time for new developers being added to your project
  * Help us avoid introducing major breaking changes unintentionally for enforcing the major/minor/patch methodology.  

### How do I do it?  

Glad you asked! Because of our reliance on Git and GitHub.com, we have some pretty awesome out of the box tools we can use to implement SymVer *right now*!
  Let's go through our use cases:

  ## I need to create my project's first version
  1. Get your code to a place you're happy with  
    *i.e. no console.logs, errant code, everything works, etc*
  2. Create a Git tag using `git tag v0.1.0` or `git tag -a v0.1.0`

  
  
  
### Resources
[](https://www.jvandemo.com/a-simple-guide-to-semantic-versioning/)