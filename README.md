# https://ahorrapp.store

In this project I wanted to do on my own every part of our final project ([Ahorrapp](https://github.com/Matilop15/Ahorrapp)) of Holberton Schools Uruguay. The objective is to refactor and improve backend code, create a new frontend with Django MVT and deploy the project on AWS.  

### During this process I've learnt;  
 * Creating AWS EC2 Linux instance and configuring inbound & outbound security rules.
 * Configuring users, permissions and roles with AWS IAM. 
 * Connecting to instance with SSH and private key.  
 * Creating and activating a virtual environment for app.
 * Installing requirements of a project.  
 * Using VIM to edit files.  
 * Using environment variables.
 * Creating AWS RDS Postgres instance within same VPC with EC2 instance and configuring inbound & outbound security rules. 
 * Using Django’s WSGIServer in Development.
 * Installing and configuring Gunicorn to replace WSGIServer of Django.
 * Installing and configuring Nginx to serve the app to the end users.
 * Configuring Nginx and Django to serve static files of the project.
 * Linking to a Domain.
 * Turning on HTTPS with SSL certificate.
 * Being patient xD
 <br>

### TODOs 
 * TODO: Adding search product feature
 * TODO: Refactoring html files
 * TODO: Refactoring main.js
 * TODO: Refactoring list.js
 * TODO: Activating weekly price update
 * TODO: Getting rid of unnecesarry css libraries.
 * TODO: Redirecting HTTP to HTTPS
 * TODO: Setting the Referrer-Policy Header
 * TODO: Adding a Content-Security-Policy (CSP) Header  
<br>  

### Changelog Summary  
* Backend deployment changed with AWS EC2 Linux instance with NGINX and Gunicorn.
* Database type changed to Postgres and created on AWS RDS instance.
* Frontend recreated with Django MVT (model, view, template) design pattern in order to reduce usage of an extra server. A seperate frontend server with Node.js and Nuxt.js is now obsolete.
* Domain name - Namecheap and SSL certificate is done via CertBot.

