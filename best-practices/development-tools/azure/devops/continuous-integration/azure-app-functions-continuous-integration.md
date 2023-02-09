# Continuous Integration using Azure DevOps

## .NET Core Unit Test

1. Go to the Pipelines page in Azure DevOps and choose New Pipeline.
2. Choose `GitHub Yaml`.
3. Select GitHub as a source. (You might need to authorize Azure Pipelines with GitHub via OAuth. If so, choose "Authorize using OAuth ". This will open a new window to either log in with GitHub or grant permission to authorize Azure Pipelines with the logged in GitHub account. Granting access to the team organization where the repository is located might require an additional step: approval by an owner from that organization.) Select the target Repository and the default GitHub branch then continue.
4. On the Choose a Template page, select `ASP.NET Core` template and choose `Apply`.
5. Get the pipeline from `azure-pipelines-azure-app-functions-ci.yml`.
6. Click on `Variables` to define a list of all variables have been used with running test command.
7. Click on `Save and run`.
8. Choose above created pipeline. Click on `Edit` then `Triggers` from right-hand side. Make sure to check `Enable continuous integration` under `Pull request validation` (To trigger above pipeline process after each commit into the pull request).
