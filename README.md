# Code Seed Full Stack Project by Vlasis Ioannidis

## Install Front End Dependencies 
`$ cd code-seed-task-ui`<br />
`$ npm install`

## Install Server Dependencies 
`$ cd server`<br />
`$ npm install`

## Then - Run the Front-End side
`$ npm run start`
Open [http://localhost:3000] -- Client Side. 

## Create the Database
The code that i used to create my database (postgres) and my table (beers) are in the databaseSchema.sql file.<br />
`$ psql -U postgres`
Put the password for your postgres user.<br />
`$ \c devicesdb`
Run the commands in the databaseSchema.sql file.<br />


!!IMPORTAN NOTE: BEFORE YOU RUN THE BACK-END SIDE YOU HAVE TO CHANGE THE PASSWORD INSIDE THE .env file!!!!


## Run the Back-end side 
`$ npm run serve`
Open [http://localhost:3001] -- Server Side. 

## Technologies
React.js / Typescript (Front-End) <br />
Node.js v16.14.0 (Back-End) <br />
Postgres 12.1-3-windows-x64 (Database) <br />
Express.js (API requests) <br />
Sequelize (ORM) <br />
