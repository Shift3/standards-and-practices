FROM python:2.7-stretch

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /usr/src/app

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get -y install binutils libproj-dev gdal-bin postgresql-client libevent-dev \
                       curl
RUN wget https://downloads.wkhtmltopdf.org/0.12/0.12.5/wkhtmltox_0.12.5-1.stretch_amd64.deb
RUN apt install -y ./wkhtmltox_0.12.5-1.stretch_amd64.deb
RUN rm ./wkhtmltox_0.12.5-1.stretch_amd64.deb

RUN pip install --upgrade pip

RUN mkdir -p /usr/src/app
COPY ./requirements.txt /usr/src/app/requirements.txt
RUN pip install -r ./requirements.txt

COPY ./docker-entrypoint.sh /
COPY . /usr/src/app
RUN mkdir -p /usr/src/app/public/media
RUN mkdir -p /usr/src/app/public/static
RUN python /usr/src/app/manage.py collectstatic --noinput

ENTRYPOINT [ "/docker-entrypoint.sh" ]
