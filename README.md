# Standards and Practices

## Reason for Repo

- Set and maintain standards for Bitwise projects.
- Have a central repository where other Bitwise members can share knowledge of best practices.
- Have a reference point to start a new project or answer questions on different topics.

[Click Here](/standards/contributing.md) to contribute!

## Code of Conduct

1. No cussing; we're beyond that.
2. Keep the requests and issues professional and relevant to the work we're doing at Bitwise.
3. Treat others with the same respect you would if you were talking to them in person. Don't be a jerk.
4. Have fun and share your knowledge!

## New to Bitwise?

### Here's what we expect you to know _before_ you write any code:

- Please read _all_ the links included:

#### Git

- [Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
  - Keep branches for main and development
  - Branch off of development for features
  - Request reviews on your Pull Requests
  - Merge _reviewed_ code into development
- [Branching](/standards/branching.md) at Bitwise
- [Commit Messages](/standards/commits.md) at Bitwise

#### Code Versioning
- [Bitwise SemVer](/standards/code-versioning.md)

#### Project Setup
- [Using Github Projects](/standards/project-setup.md) to communicate progress
- [Readme Guidelines](/standards/readme-guidelines.md) to document projects

#### Code Review

- [Code Review](/standards/code-reviews.md#process) process at Bitwise
  - [Code Review Slides](https://docs.google.com/presentation/d/16S4qMbwdBT2u9c3-djHhSRXoUUytf12HGxloWh4y4cE/edit#slide=id.g35f391192_00)
- [Acceptance Testing](/standards/acceptance-testing.md)
- [Bug Reporting](/standards/bug-reporting.md)

#### Machine Setup

##### Mac: Install:

- [Homebrew](https://brew.sh/)
- [nvm](https://www.wdiaz.org/how-to-install-nvm-with-homebrew/)
- [Slack](https://slack.com/downloads/osx)
  - Sign into shift3tech.slack.com team with your work email
- Either [WebStorm](https://www.jetbrains.com/webstorm/download/#section=mac)(See below _before_ you install) or [Visual Studio Code](https://code.visualstudio.com/download)

##### Windows:

- (Optional) Install a third-party antivirus product of your choice.
- Activate Windows using a valid license key. If you don't already have one, ask HR about getting one.
- Install all available Microsoft updates, restarting your computer as necessary.
- Open PowerShell with Administrator privileges. Run `Set-ExecutionPolicy RemoteSigned`. Type Y and press Enter to confirm that you want to make this change. (If you don't perform this step, you will not be able to run **any** PowerShell scripts on your system.)
- Install the [Chocolatey package manager for Windows](https://chocolatey.org/install).
- Reopen PowerShell with Administrator privileges, if necessary. Run the [install-apps-via-chocolatey.ps1](/best-practices/development-tools/windows-setup/install-apps-via-chocolatey.ps1) script to install a number of programs you will probably need. (Feel free to peek at this file's contents to see what it contains.)
- (Optional) From the same PowerShell window, run the command `oosu10`. Here, you can easily configure several settings to have Windows respect your privacy a little more. Just make sure you understand what each setting does before you change it.
- After running `oosu10`, restart Windows (if applicable).
- Install Android Studio
- Install the regular version of Visual Studio (as opposed to Visual Studio Code). Visual Studio Community Edition may be sufficient, or you may need a paid license for Visual Studio Professional, Enterprise, or similar. Either way, ask your PM (Project Manager).
- You may wish to use the [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/faq).
- Ask your Project Manager if you need to install anything else.

Using Chocolatey has several advantages:
1. You can install most of the software you need just by running a single script.
2. You can update all of this software later by running `choco upgrade all` as Administrator.
3. Chocolatey will automatically skip installing browser toolbars and junk like that.

#### Account Setup

#### You will need to schedule time with [Greg Goforth](mailto:ggoforth@bitwiseindustries.com), [Corey Schuman](mailto:cshuman@bitwiseindustries.com), [Chris Hawkins](mailto:chawkins@bitwiseindustries.com), or [Jody Hicks](mailto:jhicks@bitwiseindustries.com) to gain access to the following:

##### AWS Account:

- AWS is our primary platform for deployment (staging and production) so you should familiarize yourself with their [JavaScript SDK](https://aws.amazon.com/sdk-for-node-js/) and [whitepapers](https://aws.amazon.com/whitepapers/).

##### Bitwise Standards & Practices Meetings:

###### Meetings are now split into two types:

- *[Presentations](presentations/README.md)*: Twice a month the software development teams in the Bitwise ecosystem meet on every other Wednesday from 4:00 pm - 5:00 pm PST to share their accomplishments, horror stories, workflow, and lessons learned with the rest of the BW community. While these meetings will generally be developer-focused, we invite anyone in the BW family to drop in and participate. You are highly encouraged to participate actively by leading a meeting on a topic of your choice. Ask [Elizabeth Eidelson](mailto:eeidelson@bitwiseindustries.com), [Sonia Rohani](mailto:nrohani@bitwiseindustries.com), or [Joel (Gyuhun Lee)](mailto:glee@bitwiseindustries.com) to add you to the GCal event so that you get reminders and emails.
- *[Workshops](workshops/README.md)*: Once a month we will do a deep dive into a topic of interest for our workflow and/or processes. These will typically take longer than 1 hour and will be a classroom/workshop setting. One developer will lead the workshop and the goal will be to produce developers who are proficient at a skill or process that will help us in our work.

##### Frontend Masters:

- Bitwise main online teaching tool is [Frontend Masters](https://frontendmasters.com/). They have courses on all of the platforms we employ at Bitwise, and you should take advantage of as many as possible.

##### WebStorm:

- If you prefer to use JetBrains' tooling, Bitwise provides us with WebStorm Suite for free. We also use [Visual Studio](https://visualstudio.microsoft.com/) and [Visual Studio Code](https://code.visualstudio.com/).

##### Photoshop:

- If your job entails design work, you will need to get access to the Bitwise Adobe Photoshop license.

## Need Help?
Getting stuck is a natural part of development and happens to the best of us. It's better to reach out than to stay silent, and we encourage you to do so. If you find yourself stuck on a task for more than 45 minutes, here are a couple of places to get help:

##### Slack channels:
1. **bwtc-technical-discussions** - Great place for technical questions that involve some code.
2. **Your team channel** - When you start a project, you will be added to a private team channel. Feel free to ask your questions there! Your team lead may be able to help you through your blocker.

## Contributing to Bitwise

#### You are expected to contribute _something_ to our processes. You can do this in many different ways, such as leading a BW Developer Connect meeting, writing up a markdown sheet for this repository on a topic you are passionate about, leading a workshop, or posting discussion topics in Bitwise's #bwtc-technical-discussions channel.

#### [Click Here](/standards/contributing.md) to start contributing.

