# iwashere-web - 'I was here' frontend application

_Iwashere-web_ is the frontend for the contact tracing web application _Iwashere_. It can be used by restaurants, cafes, 
bars and the likes to track visits of patrons. Access to guestlists can be invaluable in pandemic times when you need 
to contact patrons in case one of the guests had a COVID-19 infections and other needs to be informed about such a case. 

The app allows venues to register on the site and create a unique QR code that can be scanned by mobile phone and 
provided a link to the registration page of this venue to register the visit. The application will automatically delete 
any visit data after a defined retention time. 

The frontend application is a web application that was designed using the VUE.js framework and bulma.io as a design 
system. The application can easily be deployed as a container on any container host (Kubernetes, Docker, ...).

## Requirements

* Postgres database
* MQ Service
* Mailgun account (to send mails)
* Container host (Kubenetes, Docker, Podman, ...)
* Backend application (https://github.com/doerfli/iwashere/)
* Frontend application (https://github.com/doerfli/iwashere-web/)

## Local startup (development)

1. Start the backend as described [here](https://github.com/doerfli/iwashere/)
1. Install node dependencies using `yarn install` 
1. Start the frontend using `yarn serve`
1. Open the web application at the provided URL

## Deployment on container host

This docker-compose.yaml can be used as a base for deployment on a container host

```yaml
version: '3'
services:
  database:
    image: postgres:12-alpine
    environment:
      - POSTGRES_PASSWORD=myveryveryverysecretpassword
    volumes:
      - ./pgdata:/var/lib/postgresql/data
  mq:
    image: rabbitmq:3-alpine
    environment:
      - RABBITMQ_DEFAULT_USER=roger
      - RABBITMQ_DEFAULT_PASS=funnybunnyisahoney
    volumes:
      - ./rabbitmq:/var/lib/rabbitmq
  backend:
    image: docker.pkg.github.com/doerfli/iwashere/iwashere-backend:master
    environment:
      - SPRING_DATASOURCE_URL=jdbc:postgresql://database/postgres
      - SPRING_DATASOURCE_PASSWORD=myveryveryverysecretpassword
      - SPRING_RABBITMQ_HOST=mq
      - SPRING_RABBITMQ_USERNAME=roger
      - SPRING_RABBITMQ_PASSWORD=funnybunnyisahoney
      - MAILGUN_APIKEY=1234567890
    depends_on:
      - database
      - mq
  frontend:
    image: docker.pkg.github.com/doerfli/iwashere-web/iwashere-frontend:master
    ports:
      - 8888:80
    depends_on:
      - backend
```

This will expose the web application at port 8888 on the container host. 
Please not that **this is only an example and should not be used for production setup**. For a safe
and secure production environment, more configuration and tightening of security will be necessary!!! 
