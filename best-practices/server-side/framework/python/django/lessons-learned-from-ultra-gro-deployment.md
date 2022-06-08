# Lessons Learned from Ultra-Gro Deployment

This project was a Dockerized Django web app using a Postgres variant called PostGIS for the database server. We deployed it to an AWS EC2 instance running Ubuntu 18.04 LTS, with nginx as the front end.

## Gotchas to look out for

`nginx` misconfiguration. Read the nginx [docs](https://www.nginx.com/nginx-wiki/build/dirhtml/start/topics/tutorials/config_pitfalls/) for common config mistakes, including some made by `cert-bot` during LetsEncrypt setup. In particular, nginx highly discourages using `if` blocks.

Firewall issues. Be sure to open the appropriate ports through AWS’ / Azure’s firewall. (SSH, HTTP, HTTPS, possibly others.) Also, I recommend that you use an internal firewall, such as `ufw`. (`ufw` is an Ubuntu firewall tool — actually a front end for `iptables` — which allows you to lock down all ports except the ones that really need to be open.) Be sure to open the appropriate ports through that as well — and to allow communication within Docker’s internal network(s), if needed.

`gunicorn` configuration issues. In the Ultra-Gro site, gunicorn had a host whitelist built into the .py settings file. I had to add the external domain name to it. I was able to do this using environment settings, specifically an environment variable named `ALLOWED_HOSTS`.

Environment variable conflicts. As it turns out, if you use both `env_file` and `environment` in a `docker-compose.yml` file, they conflict with each other. Use `env_file`, and skip the `environment` entry.

In the `nginx` site config, note that server names do not need to be unique to a specific block. At one point, the config I was using had a server name as simply `_`. The result was that trying to visit the site without specifying `https`, resulted in the browser literally attempting to redirect to `https://_`.

Finally, please note that you do not need to create a custom System V service unit to run `docker-compose` when the machine starts up (which is what I did). Simply set each of the containers to `restart: always`; run `docker-compose up --build` once in the appropriate folder; then enable the prebuilt `docker` service unit. That will take care of it for you.

## Sample files

Sample config files from this project are located [here](../../../os/ubuntu/README.md) for Ubuntu itself, and [here](../../../tools/nginx/README.md) for nginx.

Also, in this directory and its `app` subdirectory, you can find the docker files: [Dockerfile](./app/Dockerfile) itself; [docker-entrypoint.sh](./app/docker-entrypoint.sh), which is, as its name suggests, the Docker entry point; [docker-compose.yml](./docker-compose.yml), for the Development environment; and [docker-compose.stage.yml](./docker-compose.stage.yml), for the Staging environment. I think you will find it interesting how these files work together. The `docker-entrypoint.sh` script basically waits for the db container to be fully ready, then runs a hard-coded command or two, followed by whatever command is passed into it from the `docker-compose*.yml` file. If you wanted to automate running pending migrations every time, you would stick that in this file. I had that in there for a while, but took it out again. I think the reason was that it would interfere with our process of restoring a copy of the live database to the test and production servers.
