# Readme Guidelines

All Shift3 projects should include a readme file with the following sections:
- Project Name and Description
- Project Requirements
- Project Setup / Build Instructions
- How-to Run the Project
- Development Process
- Deployment Instructions
- Link to Wiki for additional info
  - This is where additional info will go, such as user documentation, server setup, installation instructions, troubleshooting steps, gotchas, etc...

It is important that this readme is kept up-to-date throughout the project.

# Example
Here is an example readme file which can be used as a template for new projects:
<br/>

```
```
# Magtek Card Reader Middleware
Middleware for Windows Machines to Forward eDynamo card info the the Magensa Decrypt and Forward service.   
Supports printing commands for the TSP100 Thermal Receipt Printer.

## Project Requirements
- Visual Studio 2017
- Visual Studio 2017 Installer Projects (https://marketplace.visualstudio.com/items?itemName=VisualStudioProductTeam.MicrosoftVisualStudio2017InstallerProjects)

## Project Setup
- Install required packages
  - Open the Package Manager Console
  - Type and run `nuget restore`

## Running the Project
- Click Run Project button or hit F5.

## Development Process
- Increment Assembly Version
  - When starting work on a new release version, increment the `minor` version 
    - Right-click on the main project and go to Properties > Application > Assembly Information

## Deployment Process
- Increment Assembly Information
  - Right-click on the main project and go to Properties > Application > Assembly Information
  - Increment `File version`
- Increment 
  - View Properties on the MagtekCardReaderMiddleware project
  - Increment the `Version` field (ideally it should match the `File version` from above
  - Click `YES` on the popup asking to change the `ProductCode`
- Build the release version
  - Set build mode to `Release`
  - `Clean` and `Rebuild` the main project
  - `Rebuild` the Setup Project
- Create deployment zip file
  - Create a new folder in the `PublishedInstallers` folder. Match the existing naming convention and use the version number as found on the config page of the application
  - Copy the Release installer files into this new folder. These are located in `MagtekCardReaderMiddlewareSetup/Release`
  - Create a zip file from the folder
- Update the release notes file
- Check in and merge project to Github
  - Check in the project and create a PR into `Development`
  - After PR is merged, create a PR into `Main`
- Create a Release on Github
  - After PR is merged, go to `Releases` on Github and click on `Create New Release`
  - For the tag version, enter the full version Number. For example: `v1.3.6543.18931`
  - The target for the release should be the `Main` branch (default option)
  - For the release title, enter: `Magtek Card Reader Middleware Release vX.X` where `x.x` is the first two digits of the release number
  - Copy the release notes into the release description textbox
  - Attach the installer zip file in the upload area
  - Click `Publish Release`

## Wiki
For information on Installation and API, see the [wiki](https://github.com/Shift3/standards-and-practices/wiki/Sample-Installation-and-API)
