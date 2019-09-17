# Windows Server 2016 / Windows Server 2019 / Windows 10

## On Mac Hardware

To install Windows 10 in a dual-boot configuration on a Mac, I recommend first backing up your system; then using Bootcamp Assistant, following a guide such as [this one](https://support.apple.com/en-us/HT201468).

## In General

Once Windows is installed:

* (Optional) Install a third-party antivirus product of your choice.
* Activate Windows using a valid license key. If you don't already have one, ask HR about getting one.
* Install all available Microsoft updates, restarting your computer as necessary.
* Install the [Chocolatey package manager for Windows](https://chocolatey.org/install).
* Open either PowerShell or Command Prompt (your choice) with Administrator privileges. Run, or copy and paste, the [install-apps-via-chocolatey.cmd](./install-apps-via-chocolatey.cmd) script to install a number of programs you will probably need. (Feel free to peek at this file's contents to see what it contains.)
* From the same PowerShell or Command Prompt window, run the command `shutup10`. Here, you can easily configure a number of settings to have Windows respect your privacy a little more.
* After running shutup10, restart Windows if necessary.
* Install Android Studio.
* Install the regular version of Visual Studio (as opposed to Visual Studio Code). Visual Studio Community Edition may be sufficient, or you may need a paid license for Visual Studio Professional, Enterprise, or similar. Either way, ask your PM (Project Manager).
* Ask your Project Manager if you need to install anything else.
