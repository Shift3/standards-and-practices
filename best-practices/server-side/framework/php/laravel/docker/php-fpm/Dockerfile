FROM php:7.2-fpm

RUN apt-get update && apt-get install -y \
    curl \
    libssl-dev \
    zlib1g-dev \
    libicu-dev \
    libmcrypt-dev \
    libxml2-dev
RUN docker-php-ext-configure intl
RUN docker-php-ext-install xml pdo pdo_mysql mbstring intl bcmath ctype json tokenizer

# Install xdebug
RUN pecl install xdebug \
    && docker-php-ext-enable xdebug

RUN usermod -u 1000 www-data

WORKDIR /var/www/html

CMD ["php-fpm"]

EXPOSE 9000
