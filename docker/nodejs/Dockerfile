FROM node:latest

#create an app directory in container
RUN mkdir /usr/src/app

#use nodemon in development
RUN npm install --global nodemon

WORKDIR /usr/src/app
ADD package.json /usr/src/app/package.json

RUN npm install

#copy everything to the app directory
COPY . /usr/src/app

EXPOSE 3000

#starts nodemon using legacy watch
CMD ["nodemon","-L","/usr/src/bin/www"]
