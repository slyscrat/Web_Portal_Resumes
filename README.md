Web-portal-resumes(R) Version 1.0 30.03.2018
#This is a web site which helps employees easily find job by sharing their resumes in common domain
--------------------------------------------------------------------------------------------------
INSTALLATION:

Web-portal works with node 6.x/7.x and PostgreSQL 9.x.x

Install Node and NPM
Install PostgreSQL 9.x.x

Run next commands:
    	<p style="margin-left: 40px">npm install express</p>
	</br>npm install sequelize 
	</br>npm install pg@6.4.1 
	</br>npm install passport
	</br>npm install passport-local
	</br>npm install body-parser	
	</br>npm install express-session 
	</br>npm install bcrypt-nodejs
	</br>npm install express-handlebars 
	</br>npm install dotenv

Change database connection config (app/config/config.json) on yours:
    </br>username,
    </br>password,
    </br>database,
    </br>host ("localhost" if you work locally),
    </br>port (5432 by default)
    
--------------------------------------------------------------------------------------------------
QUICK START

Run 'npm start'
If everything fine you will see 'Site is alive'(Node message) and 'Nice'(Database message) in node cmd.

--------------------------------------------------------------------------------------------------
STILL HAS QUESTIONS?

Contact information:
    </br>email: ilyabut99@gmail.com
           </br>roman.ershov.1998@mail.ru
    </br>github: github.com/slyscrat
--------------------------------------------------------------------------------------------------
@ 2018 Butyshkis Ilya and Ershov Roman. All rights reserved
