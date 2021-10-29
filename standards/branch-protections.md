# Protected Branches

You can protect important branches by setting branch protection rules, which define whether collaborators can delete or force push to the branch and set requirements for any pushes to the branch, such as passing status checks or a linear commit history.

By protecting branches team leads can ensure developers cannot merge changes into code without a proper Pull Request. The only exception should be given to Team leads, who as admin users, can force push branches in cases of emergency or fixups.  

## Manage Access

In order for branch protections to work, the PR-Team (which is used for Pull Request Feedback must be set to “Write”.

![image](https://user-images.githubusercontent.com/398491/139479481-0423c726-2a14-45b1-af3a-35c9b1a2c3dc.png)


1. First click on Settings
2. Then click Manage Access
3. Then click Add Teams

![image](https://user-images.githubusercontent.com/398491/139479511-f47319b0-3e52-4914-b3dd-22acbb76d706.png)

Search for PR-Team, then select Write. Finally click “Add Shift3/pr-team to this repository”.

## Set up branch protections

![image](https://user-images.githubusercontent.com/398491/139479542-8c23cd2f-d0dd-458e-b154-3d05c5bdc638.png)

1. Navigate to the github repository you want to apply branch protections to. Click on Settings tab
2. Click on Branches
3. Click on Add rule

![image](https://user-images.githubusercontent.com/398491/139479558-88765909-b4b4-4a14-acf3-03fa0eb5e6f6.png)

For the main and development branch, the following is considered best practices:
1. Click on “Require a pull request before merging”. This will make sure all developers (other than admin role users) have to make a pull request before making code changes to this branch.
2. Click on “Require approvals”
3. Click on “Required number of approvals before merging: 1”

Side note: Team leads may choose to have more than one approval or restrict who can merge based on their product/team.

