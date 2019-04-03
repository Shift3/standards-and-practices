#!/bin/bash

DockerRepository="";
ProjectName="";
Region="";

echo What is the next deployment version?;

read ImageVersion;

echo Building and pushing version $ProjectName:$ImageVersion to ECR...;

$(aws ecr get-login --no-include-email --region $Region);

docker build -t $ProjectName ./server -f ./server/Dockerfile.prod;

docker tag $ProjectName:latest $DockerRepository/$ProjectName:$ImageVersion;

docker push $DockerRepository/$ProjectName:$ImageVersion;

echo Docker image saved to $DockerRepository/$ProjectName:$ImageVersion;