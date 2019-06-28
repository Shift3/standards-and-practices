# Lessons Learned from Ultra-Gro Deployment

This project was a Dockerized Django web app using a Postgres variant called PostGIS for the database server. We deployed it to an AWS EC2 instance running Ubuntu 18.04 LTS, with nginx as the front end.

## Gotchas to look out for

`nginx` misconfiguration. Read the nginx [docs](https://www.nginx.com/resources/wiki/start/topics/tutorials/config_pitfalls/) for common config mistakes, including some made by `cert-bot` during LetsEncrypt setup. In particular, nginx highly discourages using `if` blocks.

Firewall issues. Be sure to open the appropriate ports through AWS’ / Azure’s firewall. (SSH, HTTP, HTTPS, possibly others.) Also, I recommend that you use an internal firewall, such as `ufw`. (`ufw` is an Ubuntu firewall tool — actually a front end for `iptables` — which allows you to lock down all ports except the ones that really need to be open.) Be sure to open the appropriate ports through that as well — and to allow communication within Docker’s internal network(s), if needed.

`gunicorn` configuration issues. In the Ultra-Gro site, gunicorn had a host whitelist built into the .py settings file. I had to add the external domain name to it ([ultra-gro.shift3sandbox.com](https://ultra-gro.shift3sandbox.com), in this case). I was able to do this using environment settings, specifically an environment variable named `ALLOWED_HOSTS`.

Environment variable conflicts. As it turns out, if you use both `env_file` and `environment` in a `docker-compose.yml` file, they conflict with each other. Use `env_file`, and skip the `environment` entry.

In the `nginx` site config, note that server names do not need to be unique to a specific block. At one point, the config I was using had a server name as simply `_`. The result was that trying to visit the site without specifying `https`, resulted in the browser literally attempting to redirect to `https://_`.

Sample config files from this project are located [here](../../../os/ubuntu/README.md) for Ubuntu itself, and [here](../../../tools/nginx/README.md) for nginx.
