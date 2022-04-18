# Storefront Backend Project

Store for using API and database to make orders and store products

## Authors

- Ahmed Samir

## Installation Instructions
This section contains all the packages 
used in this project and how to install them

### Packages
Here are packages that are used in this 
project
### Express
```
npm install express
npm install @types/express
```
### Supertest
```
npm install supertest
```
### Typescript
```
npm install typescript
npm install tsc-watch
```
### body-parser
```
npm install body-parser
```


### Bcrypt
```
npm install bcrypt
npm install @types/bcrypt
``` 
### Dotenv
```
npm install dotenv
```

### Jsonwebtoken
```
npm install jsonwebtoken
``` 

### pg
```
npm install pg
npm install @types/pg
```

### Jasmine
```
npm install jasmine
npm install @types/jasmine
npm install jasmine-spec-reporter
npm install jasmine-ts
```
### db-migrate
```
npm install db-migrate
npm install db-migrate-pg
```

### Create databases
Creating test and dev databases

- Connect to postgres default database using `psql -U postgres`
    - Create a new user `CREATE USER frontstore WITH PASSWORD 'password';`
- Create the dev and test database
    - `CREATE DATABASE fronstore;`
    - `CREATE DATABASE storefront_test;`

#### Migrate database
Run the following commands in the project
directory to migrate
```
npm run migrate
npm run migrate_test
```

## Starting the app

To run this project run

```bash
  npm start
```
After start up the server will start on port 80

```bash
0.0.0.0:80
````

### Running ports

After startup the server will start on port `80` and database on port `5432`

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

### Endpoints

API Endpoints can be found in REQUIREMENTS.md