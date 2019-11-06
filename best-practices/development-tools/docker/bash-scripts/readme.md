# ECR Push Script

This script will log you into an AWS Elastic Container Repository **(ECR)** using your saved AWS cli credentials. This script will cover any project you want to push to an existing ECR on AWS. Simply modify the following variables in the script:

- DockerRepository=""
  - This is the repository url provided by AWS, i.e. `01234.dkr.ecr.us-west-2.amazonaws.com`
- ProjectName=""
  - This is the project name when you create the repository in ECR, i.e. `map-point`
- Region=""
  - This is the AWS region your ECR resides in, i.e. `us-west-2`

After filling these out, you should be able to just run `bash docker-ecr.sh` and it will ask you for the new version of the image you are pushing, i.e. v1/v2/v3 etc...

Be sure to add this file to your `.gitignore` since it will contain the exact path to your ECR!