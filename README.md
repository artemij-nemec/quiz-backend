# Test quiz(back-end)

A back-end of test React/Nodejs project

## Getting Started

To deploy the application on a local machine,
enter the database data in config/config.json.

## Prerequisites

Make sure you have NodeJS and yarn installed before starting the program.

## Installing

After you prepare your configs you can start installing dependencies on the server with the command below

    yarn install

To create the database structure you can run the command:

    yarn db-migrate-up

To fill the database with test data run (For demo purposes images are stored in the database):

    yarn db-seed-up

After installing you can start server:

    yarn start

or use a nodemon:

    npm run dev
