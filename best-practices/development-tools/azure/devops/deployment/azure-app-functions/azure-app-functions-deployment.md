# Azure Functions Deployment using Azure DevOps

## Pre-Deployment

### Install AzureDevOps Extensions

Please install the following extension:
AzureDevOps [ReplaceTokens](https://marketplace.visualstudio.com/items?itemName=citrus-andriessen.cag-replace-tokens&targetId=af056fb1-e0c2-4678-9ac3-dee687452af2&utm_source=vstsproduct&utm_medium=ExtHubManageList).

## .NET Core with deployment to Azure Function Apps

### Option 1

1. Go to the Pipelines page in Azure DevOps and choose New Pipeline.
2. Choose `Use the classic editor`.
3. Select GitHub as a source. (You might need to authorize Azure Pipelines with GitHub via OAuth. If so, choose "Authorize using OAuth ". This will open a new window to either log in with GitHub or grant permission to authorize Azure Pipelines with the logged in GitHub account. Granting access to the team organization where the repository is located might require an additional step: approval by an owner from that organization.) Select the target Repository and the default GitHub branch then continue.
4. On the Choose a Template page, select `ASP.NET Core` template and choose `Apply`.
5. Choose `Triggers` tab from top and make sure to check `Enable continuous integration` under Continuous integration. (To trigger deployment process after each commit to the default GitHub branch).
6. Click on `Save`.

### Option 2

Create a new Pipeline then choose `GitHub yaml`. Choose the repository from GitHub, then choose `ASP.NET Core` template, then attach to `azure-pipelines-azure-app-functions-cd.yml` template.

### Create Pipeline Release

1. Navigate to `Releases` left-hand menu under `Pipelines`.
2. Click on `New` then `New release pipeline`.
3. For `Stages` select the template `Deploy a function to Azure Functions` then click `Apply`.
4. Click on `Add an artifact` under `Artifacts` then Select the source which is above created pipeline.
5. On the right top side of the added artifact click on the small icon that has the tooltip `Continuous deployment trigger` and make sure it is set to `Enabled`.
6. Click on the blue label and configure the Azure subscription, App type and App service name.
