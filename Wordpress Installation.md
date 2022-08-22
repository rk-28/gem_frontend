## WORDPRESS INSTALLATION

#### STEP-1:
1.Update the server 
```
	$ sudo apt-get update -y
```
2.Install nginx web-server
```	
	$ sudo apt-get install nginx -y
```
3.Start the nginx web server
```	
	$ sudo service nginx start
	$ sudo service nginx enable
```
#### STEP-2: Installing PHP:

1.Install the php package for version 7.4
```
	$ sudo apt-get install software-properties-common -y
	$ sudo add-apt-repository ppa:ondrej/php -y
	$ sudo apt-get install php7.4 -y
	$ sudo apt-get install php7.4 php7.4-cli php7.4-fpm php7.4-mysql php7.4-json php7.4-opcache php7.4-mbstring php7.4-xml php7.4-gd php7.4-curl php7.4-intl php7.4-bcmath php7.4-imap php7.4-zip unzip -y 
	$ sudo php –version
```
2.Restart the php fpm
```
	$ sudo service php7.4-fpm start
	$ sudo service php7.4-fpm enable
```
#### STEP-3: Installing Mysql:

1.Install the mysql package
```
	$ sudo apt install mysql-server -y
	$ sudo mysql
```
2.Create database
	-mysql>CREATE DATABASE database;

2. Create user:
	-mysql>CREATE USER 'root'@'%' IDENTIFIED BY 'password';
	-mysql>GRANT ALL PRIVILEGES ON database.* TO 'root'@'%';
	-mysql>FLUSH PRIVILEGES;
	-exit

#### STEP - 4: Install Wordpress

1.Create a application directory
```
	$ cp /temp/application.zip /var/www/html
	$ sudo apt-get install unzip
	$ sudo unzip application.zip
```
4.Provide the necessary permission
```
	$ sudo chown -R www-data:www-data /var/www/html/application
	$ sudo chmod -R 755 /var/www/application.com
```
#### STEP-5: Edit config file
```	
	$ sudo vim /etc/nginx/conf.d/mysite.com.conf
```
[//]: # Redirect HTTP -> HTTPS
server {
listen 80;
server_name www.application application;

include snippets/letsencrypt.conf;
return 301 https://application$request_uri;
}

[//]: # Redirect WWW -> NON-WWW
server {
listen 443 ssl http2;
server_name application.com;
	if ($forwarded_scheme_http = "http"){
        return 301 https://www.application.com$request_uri;
	}


ssl_certificate /etc/letsencrypt/live/application/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/application/privkey.pem;

[//]: #return 301 https://application$request_uri;
}

server {
listen 443 ssl http2;
server_name www.application.com application.com;

root /var/www/html/application;
index index.php index.html;

[//]: # SSL parameters
ssl_certificate /etc/letsencrypt/live/application/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/application/privkey.pem;

[//]: # log files
access_log /var/log/nginx/application.access.log;
error_log /var/log/nginx/application.error.log;

location = /favicon.ico {
log_not_found off;
access_log off;
}

location = /robots.txt {
allow all;
log_not_found off;
access_log off;
}

location / {
try_files $uri $uri/ /index.php?$args;
}

location ~ \.php$ {
include snippets/fastcgi-php.conf;
fastcgi_pass unix:/run/php/php7.2-fpm.sock;
}

location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
expires max;
log_not_found off;
}

$ sudo rm /etc/nginx/sites-enabled/default
$ sudo rm /etc/nginx/sites-available/default
$ sudo nginx -t
$ sudo service nginx start

#### STEP-6: Database backup and download

1.Log in to the User Portal
2.Select the environment name
3.Click Backup Points
4.All the checkpoint are present in the page
5.Click on backup now if a new backup has to be created 
6.Add backup description and email ID to notify
7.Select the recently created checkpoint and click on Download ZIP
8.Select Full backup and provide a email id to receive a notification regarding database download
9.click Download production backup zip

#### STEP-7: Restoring the database in server

1.Tranfer the extracted sql zip file into the server using Win SCP 

2.Import the sql file database.sql in production database for the user root 
	-mysql -u root -p production < /var/www/html/mysite.com/database.sql
