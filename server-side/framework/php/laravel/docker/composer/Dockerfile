FROM php:7.1-cli

RUN apt-get update && apt-get install -y \
    libmcrypt-dev
RUN docker-php-ext-install pdo_mysql mbstring mcrypt

RUN usermod -u 1000 www-data
WORKDIR /var/www/html
ENTRYPOINT ["php", "artisan"]