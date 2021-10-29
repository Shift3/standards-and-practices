# Protected Branches

You can protect important branches by setting branch protection rules, which define whether collaborators can delete or force push to the branch and set requirements for any pushes to the branch, such as passing status checks or a linear commit history.

By protecting branches team leads can ensure developers cannot merge changes into code without a proper Pull Request. The only exception should be given to Team leads, who as admin users, can force push branches in cases of emergency or fixups.  

## Manage Access

In order for branch protections to work, the PR-Team (which is used for Pull Request Feedback must be set to “Write”.

TODO: Image here

1. First click on Settings
2. Then click Manage Access
3. Then click Add Teams

TODO: Image here

Search for PR-Team, then select Write. Finally click “Add Shift3/pr-team to this repository”.

## Set up branch protections

TODO: Image here

1. Navigate to the github repository you want to apply branch protections to. Click on Settings tab
2. Click on Branches
3. Click on Add rule

TODO: Image here

For the main and development branch, the following is considered best practices:
1. Click on “Require a pull request before merging”. This will make sure all developers (other than admin role users) have to make a pull request before making code changes to this branch.
2. Click on “Require approvals”
3. Click on “Required number of approvals before merging: 1”

Side note: Team leads may choose to have more than one approval or restrict who can merge based on their product/team.

