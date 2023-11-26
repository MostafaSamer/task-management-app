# Task Management app

This task is manly a frotend development with a fake API integration using JSON-SERVER

Token, authrization, and all the Backend feature from validate existing email is not implemented but is doable


## how to run

This project has its frontend and backend dockerizte so we can use docker or use scripts if docker is not avalialbe

- Docker

make sure `docker` and `docker-compose` is installed and 3000, and 5000 ports is not alocated to a services or another project

run `docker-compose up`

- Run scripts

1- Make sure `node`, and `npm` is installed

2- As any react project first install dependencies we can run it with `npm install`

3- then run `npm run start` to start the react project on port `3000`

4- Run `npm run server` to run ower fake API Client on port `5000`

## Documention

Its not dockerized so we need to run `npm run storybook`

## Testes

to run tests `npm run test`