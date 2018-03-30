# Web-portal-resumes(R) Version 1.0     / 30.03.2018

This is a web site which helps employees easily find job by sharing their resumes in common domain

## Built With

* [Node.js](http://nodejs.org) - Run-time environment - *version 6.x*
* [PostgreSQL](https://www.postgresql.org/) - Database - *version 9.6.5*

## Deploying

### Installing:

Download this project and install **built with** soft.

Change path to project directory and run next commands:

```
npm install express
npm install sequelize 
npm install pg@6.4.1 
npm install passport
npm install passport-local
npm install body-parser	
npm install express-session 
npm install bcrypt-nodejs
npm install express-handlebars 
npm install dotenv
npm install react
```
Change database connection config (*app/config/config.json* ):

```
...
"username": "[your_username]",
"password": "[your_password]",
"database": "[your_database_name]",
"host": "localhost", 		// if you work locally
"port": "5432", 		// by default in PostgreSQL
...
```  
### Running application

To run your site enter next command in project path:

```
npm start
```
If everything fine you will see node message:

```
Site is alive!
```
and  database message:

```
Nice!
```
in node cmd.

## Authors

* **Butyshkis Ilya** - *Back-end and documentation work* - [PurpleBooth](https://github.com/slyscrat)
* **Ershov Roman** - *Front-end work* - 
    
## License

@ 2018 Butyshkis Ilya and Ershov Roman. All rights reserved
