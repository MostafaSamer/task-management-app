# Task Management app

This task is manly a frotend development with a fake API integration using JSON-SERVER

Token, authrization, and all the Backend feature from validate existing email is not implemented but is doable


## how to run

This project has its frontend and backend dockerizte so we can use docker or use scripts if docker is not avalialbe

- Docker

make sure `docker` and `docker-compose` is installed and 3000, 5000, and 6002 ports is not alocated to a services or another project

run `docker-compose up`

- Run scripts

1- Make sure `node`, and `npm` is installed

2- As any react project first install dependencies we can run it with `npm install`

3- then run `npm run start` to start the react project on port `3000`

4- Run `npm run server` to run ower fake API Client on port `5000`

## Project Strucher

- `__test__` for testing files
- `assets` for assets
- `components` for project shared and reusable components
- `components/atoms` for small component like Alert or Buttons
- `components/molecules` for big components used in screens and pages
- `layouts` we can use this folder to add layouts in case we have more than user role, we can create layput for eveny layout
- `redux` each slice has its own adapter, selector, and thunks, so we can add more complex actions
- `router` this folder handle routes in the project, index.jsx file fold all the routes, and each route has a custom wraper to run some checker and function like checking the logged in user in `userRoute`
- `screens` this folder contain all the pages components and seperated correctly
- `theme` use this folder to edit scss variables
- `utils` used to add a side functions will be used in alot of componetns, like handling the localStorage



## Documention

Its dockerized but if want to run seperated we need to run `npm run storybook`

## Testes

to run tests `npm run test`