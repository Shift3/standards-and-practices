#!/bin/bash

DockerRepository="";
ProjectName="";
Region="";

print_message() {
  echo "
----------

$1
";
}

if [ "${DockerRepository}" == "" ] || [ "${ProjectName}" == "" ]  || [ "${Region}" == "" ]; then
  echo '
----------

Please populate the following values at the top of the file before running the build script:

DockerRepository=
ProjectName=
Region=
';
  exit 1
fi

read -p "What is the next deployment version? " ImageVersion

read -p "Create build $ProjectName:$ImageVersion? (Yes/No) > " ConfirmBuild

if [ $ConfirmBuild != "Yes" ] && [ $ConfirmBuild != "yes" ] && [ $ConfirmBuild != "No" ] && [ $ConfirmBuild != "no" ]; then
  print_message "Please respond Yes or No.";
  read -p "Create build $ProjectName:$ImageVersion? (Yes/No) > " ConfirmBuild;
fi

if [ $ConfirmBuild != "Yes" ] && [ $ConfirmBuild != "yes" ]; then
  print_message "Cancelling build of $ProjectName:$ImageVersion";
  exit 1;
fi

print_message  "Building and pushing $DockerRepository/$ProjectName:$ImageVersion...";

$(aws ecr get-login --no-include-email --region $Region);

docker build -t $ProjectName ./server -f ./server/Dockerfile.prod;

docker tag $ProjectName:latest $DockerRepository/$ProjectName:$ImageVersion;

docker push $DockerRepository/$ProjectName:$ImageVersion;

print_message "Docker image pushed to $DockerRepository/$ProjectName:$ImageVersion!";