FROM php:7.1-fpm

RUN apt-get update && apt-get install -y \
    curl \
    libssl-dev \
    zlib1g-dev \
    libicu-dev \
    libmcrypt-dev
RUN docker-php-ext-configure intl
RUN docker-php-ext-install pdo_mysql mbstring intl opcache mcrypt

# Install xdebug
RUN pecl install xdebug \
    && docker-php-ext-enable xdebug

RUN usermod -u 1000 www-data

WORKDIR /var/www/html

CMD ["php-fpm"]

EXPOSE 9000