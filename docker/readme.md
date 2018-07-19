# Docker

Docker is an amazing container environment tool that can be used to normalize development and production environments.

## Installing Docker

Installing docker on different operating systems:
- Mac: [Docker Installation for Mac](https://docs.docker.com/docker-for-mac/install/)
- Ubuntu: [Docker Installation for Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
- Windows: [Docker Installation for Windows Requires Windows Pro](https://docs.docker.com/docker-for-windows/install/)
- Homebrew: `brew cask install docker` [Stackoverflow Resource](https://stackoverflow.com/questions/40523307/brew-install-docker-does-not-include-docker-engine)

Install docker compose:
- [Docker compose installation instructions](https://docs.docker.com/compose/install/)

## Using The Docker Cli

Docker for the most part is run from the terminal, the docker cli is fairly straight forward.

Docker cli documentation:
- [Docker Cli](https://docs.docker.com/engine/reference/commandline/cli/)

## Docker Files

Docker files are the building blocks of how docker runs your application. Each file contains layers in order to install the dependencies you need (node, python, mongo etc.) and run any other commands you may need to start your app!

Docker File Documentation:
- [Docker File Docs](https://docs.docker.com/engine/reference/builder/)

## Docker Compose Files

Docker compose files are where we can define the architecture in our application so docker can create containers for every service we need. We can use the compose file to easily set things like environment variables, exposed ports, data volumes and networks for our docker containers to talk over. We normally use compose files for development and then switch to a stack file for production!

Docker Compose File Documentation:
- [Docker Compose Docs](https://docs.docker.com/compose/compose-file/)

## Example configurations:

  - [Nodejs](./nodejs)
  - [Django](./django)

Generally a project should have three files for Docker support:

   - Dockerfile
   - docker-compose.yml
   - .dockerignore (copy of .gitignore)

With those files in place one can simply `docker-compose up` to get a running system.
