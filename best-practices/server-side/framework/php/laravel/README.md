# Laravel

## Value elegance, simplicity, and readability? You’ll fit right in. Laravel is designed for people just like you.  An amazing ORM, painless routing, powerful queue library, and simple authentication give you the tools you need for modern, maintainable PHP. We sweat the small stuff to help you deliver amazing applications.

#### Resources

Official Docs: https://laravel.com/docs

API Docs: https://laravel.com/docs/7.x/eloquent-resources#introduction

Learning Videos: https://laracasts.com

Server Management: https://forge.laravel.com

#### Docker Setup

1. Start by copying the `docker-compose.yml` file along with the `docker` directory into the root of your Laravel project.

2. Edit the `docker-compose.yml` database section to match the credentials in your .env file.

3. Start the containers with `docker-compose up -d`

4. Access your project in your browser at <http://127.0.0.1>

5. Stop containers with `docker-compose stop`

6. Common commands:
* docker exec -it {project-name}_fpm_1 php artisan {any artisan command}
* docker exec -it {project-name}_mysql_1 bash
* docker container ls (view running docker containers)
