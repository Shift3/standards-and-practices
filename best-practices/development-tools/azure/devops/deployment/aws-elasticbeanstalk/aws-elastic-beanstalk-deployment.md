# Deploying into AWS Elastic Beanstalk

## Pre-Deployment

### Install AzureDevOps Extensions

Please install the following two extensions:

- [AWS Toolkit for Azure DevOps](https://marketplace.visualstudio.com/items?itemName=AmazonWebServices.aws-vsts-tools&targetId=af056fb1-e0c2-4678-9ac3-dee687452af2&utm_source=vstsproduct&utm_medium=ExtHubManageList).
- [ReplaceTokens](https://marketplace.visualstudio.com/items?itemName=citrus-andriessen.cag-replace-tokens&targetId=af056fb1-e0c2-4678-9ac3-dee687452af2&utm_source=vstsproduct&utm_medium=ExtHubManageList).

### Configure AzureDevOps Service Connection

Navigate to the project in AzureDevOps then choose Project Settings. In the Project Settings page navigate to the Service Connections page. Choose Create service connection, select AWS, and choose Next. Input an Access Key ID and Secret Access Key. (You’ll need an IAM user with permissions for Amazon ECR and Amazon ECS in order to deploy via the Azure DevOps pipeline.) Choose Save. (Get the Access Key ID and Secret Access Key credentials from Vault)

## Docker with ECR deployment

### Option 1

1. Go to the pipeline page in Azure DevOps and choose New Pipeline.
2. Choose `Use the classic editor`.
3. Select GitHub as a source. (You might need to authorize Azure Pipelines with GitHub via OAuth . If so, choose "Authorize using OAuth ". This will open a new window to either log in with GitHub or grant permission to authorize Azure Pipelines with the logged in GitHub account. Granting access to the team organization where the repository is located might require an additional step: approval by an owner from that organization.) Select the target Repository and the default GitHub branch then continue.
4. On the Choose a Template page, select Docker Container and choose Apply.
5. Remove the `Push an image` task.
6. Add an `Amazon ECR Push` task to the end of the tasks list by choosing the + symbol next to Agent job 1. You can search for “AWS” in the Add tasks page to filter for all AWS tasks.
7. Add a `Replace Tokens` task to the top of the tasks list by choosing the + symbol next to Agent job 1. You can search for “Replace” in the Add tasks page to filter.
8. Choose `Replace Tokens` and make sure to have the following settings:

- Source Path: `.`.
- Target File Pattern: `appsettings.json`.
- Token Regex: In the project this syntax `#{(\w+)}#` has been used.
- Token to Replace: `Actual_Variable_Name:$(Variable_Name_Library_To_Replace)
                        ...
                       `
  Note: The Azure DevOps instance manages environment variables for each environment. To add a new environment variables, add them to the `replaceTokenList` property in the pipeline. Then update `appsettings.json` to use that value with the `#{example}#` syntax. Finally the variable and its value need to be added to the [Azure DevOps pipeline Library].

9. Choose `Docker` task and configure its information. like the image name and display name.
10. Choose `Push Image To Amazon ECR` and make sure to have the following settings:

- Aws Credentials : Select the service connection [Configure AzureDevOps Service Connection](#Azure_DevOps_AWS_Connection).
- Aws Region: Select the proper region that has the ECR repository in AWS.
- Source Image Name: Should be the same `Image Name` that has been entered in previous task.
- Target Repository Name: Get the repository name from AWS ECR.

11. Choose `Triggers` tab from top and make sure to check `Enable continuous integration` under Continuous integration. (To trigger deployment process after each commit to the default GitHub branch).
12. Choose `Variables` tab from top then choose `Variable groups` then click `Link variable group`. (To link it with environments that have been created in pipeline Library above).
13. Choose Save and queue to try it.
14. Upload `Dockerrun.aws.json` (That has a link to docker image)file to Elastic Beanstalk. [Upload File to Elastic Beanstalk](#upload_file_to_elastic_beanstalk).

### Option 2

Create a new Pipeline then choose `GitHub yaml` then choose the repository then choose `docker` template then attach to `azure-pipelines-aws-eb-docker-cd.yml`.

## .NET Core with deploy to Elastic Beanstalk

### Option 1

1. Go to the pipeline page within Azure DevOps and choose New Pipeline.
2. Choose Use the classic editor.
3. Select GitHub as a source. (You might need to authorize Azure Pipelines with GitHub via OAuth . If so, choose "Authorize using OAuth ". This will open a new window to either log in with GitHub or grant permission to authorize Azure Pipelines with the logged in GitHub account. Granting access to the team organization where the repository is located might require an additional step: approval by an owner from that organization.) Select the target Repository and the default GitHub branch then continue.
4. On the Choose a Template page, select ASP.NET Core and choose Apply.
5. Add an `Deploy to Elastic Beanstalk` task to the end of the tasks list by choosing the + symbol next to Agent job 1. You can search for “AWS” in the Add tasks page to filter for all AWS tasks.
6. Add a `Replace Tokens` task to the top of the tasks list by choosing the + symbol next to Agent job 1. You can search for “Replace” in the Add tasks page to filter.
7. Choose `Replace Tokens` and make sure to have the following settings:

- Source Path: `.`.
- Target File Pattern: `appsettings.json`.
- Token Regex: In the project this syntax `#{(\w+)}#` has been used.
- Token to Replace: `Actual_Variable_Name:$(Variable_Name_Library_To_Replace)
                        ...
                       `
  Note: The Azure DevOps instance manages environment variables for each environment. To add a new environment variables, add them to the `replaceTokenList` property in the pipeline. Then update `appsettings.json` to use that value with the `#{example}#` syntax. Finally the variable and its value need to be added to the [Azure DevOps pipeline Library].

8. Choose `Publish` and make sure to have the following settings:

- Arguments: `--configuration $(BuildConfiguration) --output $(build.artifactstagingdirectory)`
- Zip published projects: `Unchecked`.
- Add project's folder name to publish path: `Unchecked`.

9.  Choose `Deploy to Elastic Beanstalk` and make sure to have the following settings:

- Aws Credentials : Select the service connection [Configure AzureDevOps Service Connection](#Azure_DevOps_AWS_Connection).
- Aws Region: Select the proper region that has the ECR repository in AWS.
- Application Name: Elastic Beanstalk project name in AWS.
- Environment Name: Under above project get the proper environment name in AWS.
- Deploy Bundle Type: `ASP.NET CORE (Source: dotnet publish)`.
- Published Applicaion Path: `$(build.artifactstagingdirectory)`.

10. Choose `Triggers` tab from top and make sure to check `Enable continuous integration` under Continuous integration. (To trigger deployment process after each commit to the default GitHub branch).
11. Choose `Variables` tab from top then choose `Variable groups` then click `Link variable group`. (To link it with environments that have been created in pipeline Library above).
12. Choose Save and queue to try it.

### Option 2

Create a new Pipeline then choose `GitHub yaml` then choose the repository then choose `asp.net core` template then attach to `azure-pipelines-aws-eb-cd.yml`.
