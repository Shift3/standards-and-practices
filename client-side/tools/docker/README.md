# docker

Docker standardizes the build process to work across multiple platforms.
"Docker Compose" bundles the necessary services with the application for easier development.

Install Docker Compose: https://docs.docker.com/compose/install/

A project should have three files for Docker support:

 - Dockerfile
 - docker-compose.yml
 - .dockerignore (recommended copy .gitignore)

Additionally one should create their own `docker-compose.override.yml` for altering the configuration for local purposes (see https://docs.docker.com/compose/extends/ ).


Example configurations:

# [Nodejs](./nodejs)
# [Django](./django)
