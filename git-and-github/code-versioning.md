# Git Tagging & Releases

## What is Git Tagging?

  * [Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging) is a simple, easy way to keep track of your code at a certain point in time. Some instances where this becomes useful are:
    * Client-facing deliverables such as milestones, UAT, or production launch/release
    * Internal-facing code at a point that you or your team wants to demarcate as important
    * Versioning of your code (such as following SemVer or other release formats)
  * Because we are not following a strict rule or methodology, each of our teams can decide for themselves which method of tag naming they want to follow. You could go strict and version your code based on milestones or releases, or you could use human-readable tag names. In the end, the power is _yours_!

## Why should Shift3 care?

This should be self-evident: more maintainable code makes our jobs easier! Tagging does the following things  
  * Provides markers for points in our development cycle such as releases, patches, hotfixes, etc.
  * Keeps in-development projects organized by allowing for pre-releases that can be mapped to specific milestones (using systems such as [SemVer](https://semver.org/)
  * Allows for quicker set-up time for new developers being added to your project

## How do I do it?  

  Let's go through our use cases:
  *All the examples below are using SemVer's standards for tag naming, but again, that convention is up to your team lead*

### I need to create my project's first tag
  1. Get your code to a place your team is happy with
    *i.e. no console.logs, errant code, everything works, etc*
  2. Create a Git tag using `git tag v0.1.0` or `git tag -a v0.1.0`
    *Your team will have to decide what minor version to start with if you've already begun development*
  3. Push your tag to GitHub.com using `git push origin <YOUR-TAG-NAME>`
    *Note: < YOUR-TAG-NAME > would be replaced by `v0.1.0` in our above example and _must_ match*
  4. If this is a release (i.e. you are going to deploy this for the client to test, or it is an update to a production app that will go live) [create a release](https://help.github.com/en/articles/creating-releases) on `GitHub.com`

### I need to increment my project's tag
  1. Be sure your hotfix or bugfix changes or new feature(s) have been reviewed and approved by your project's lead developer
  2. Once the fix is approved and your Pull Request is merged, checkout to your base branch (develop or master, whatever you use as your source of truth) and pull your changes
  3. Create your tag using `git tag v0.1.1`, following the standard that your team has adopted for incrementing versions
  4. Push your tag to GitHub.com using `git push origin <YOUR-TAG-NAME>`
    *Note: < YOUR-TAG-NAME > would be replaced by `v0.1.1` in our above example and _must_ match*

### I need to create a Release  
  *Releases are useful for marking a client-facing milestones in your code's history. Your project lead should determine when and how often a tag should be marked as a release.*
  1. Every Release must start as a tag, so make sure that the tag you want to become this release has been pushed to GitHub.
  2. Click on `releases` on the **code** tab of your repository.
  3. Click the button labelled `Draft a new release`
  4. Enter your tag's name (must be exact) into the input to target your desired tag.  
    *It is possible to target a branch's current state as your release, but this is _not_ advisable.*
  5. Enter a title for your release that makes contextual sense for the release's contained changes.
  6. Include any release notes that your team has deemed important or necessary for each release. Generally these notes _should_ include:  
    i. Brief summary of feature changes or hotfixes that are included  
    ii. Additional notes for users of the code that are pertinent for the code base.  
  7. If you want to, you can include a diff link (provided automatically by GitHub) to view the differences between any two tags in your code base. As long as you have two or more tags, this can be accomplished by including a standard markdown link with the following format:  
    **https: //github .com /shift3/ < your-repository-name > /compare/< original-tag-name >...< new-tag-name >**  
    _example: https://github.com/shift3/ifg/compare/0.4.1...0.4.2_

### Resources
[Git Tagging Docs](https://git-scm.com/book/en/v2/Git-Basics-Tagging)
[SemVer Main Docs](https://semver.org/)  
[SemVer Breakdown](https://www.jvandemo.com/a-simple-guide-to-semantic-versioning/)  
[Convincing Argument for SemVer](https://www.sitepoint.com/semantic-versioning-why-you-should-using/)  
[Slides for Tagging at Shift3](https://docs.google.com/presentation/d/1mZ35fZ7GhIBcCAPzeAXXAprcQZUv4WL-BELp9tEsFE8/edit?usp=sharing)  
