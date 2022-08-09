## SCRAPING PROCESS (fcd-scraper-v1)

Step 1: Download and Install OpenVPN from the below URL

https://openvpn.net/downloads/openvpn-connect-v3-windows.msi

-	Connect the OpenVPN with the correct profile,

<img src="https://i.ibb.co/FKHcq5s/scr-1.png">
  
Step 2: Login to AWS console 

-	Login using the respective AWS user credential in AWS console

-	Click on the EC2 in the dashboard or search for EC2 in the AWS search bar

-	Click on the fcd -scraper-v1 server, we can see the Private IP 
<img src="https://i.ibb.co/ZhH2zQs/scr-2.png">
 
Step 3: Login to server:

-Use that private IP to login to the server using putty with the respective private key

IP: 10.0.10.30
Username: ubuntu 

<img src="https://i.ibb.co/zR4BJ0s/scr-3.png">

-This will log you into the server
 
1.After you logged into the server, go to user directory and list the contents using the below command 
```
$ cd ~ && ll
```

<img src="[https://i.ibb.co/MnHzKBT/scr-4.png](https://i.ibb.co/MnHzKBT/scr-4.png)">

2.Need to check the environment credentials in .bashrc file for (Staging or Production)
```
$ nano .bashrc
```
<img src="https://i.ibb.co/SBjWcpg/scr-5.png">

For Staging:
```
export SQL_ENGINE=django.db.backends.postgresql
export SQL_DATABASE=postgres
export SQL_USER=postgres
export SQL_PASSWORD=akZzWcBB72BpeaCT
export SQL_HOST=fcd-qa.cndbcmevjl4s.us-east-2.rds.amazonaws.com
export SQL_PORT=5432
export ES_HOST=https://vpc-fcd-qa-h5z6k5znr2zzl6r6cm5bpoyawm.us-east-2.es.amazonaws.com
export DATABASE=postgres
export DJANGO_DEBUG=True
export DJANGO_IMPORT_DIR=/home/ubuntu/staging-fcd/import
Export SENTRY_DSN=https://52a6cee2ccd74de59217d236de21a05f@o1135282.ingest.sentry.io/6184032
export DATA_PIPELINE_CONCURRENCY=8
```
```
$ source .bashrc
```
<img src="https://i.ibb.co/4P16tkF/scr-6.png">

```
$ echo $ES_HOST && echo $SQL_HOST
```
Check the Environment for Elastic search host and Database host

3.Need to Switch with staging application folder
```
$ cd ~/staging-fcd/staging-backend/
```
<img src="https://i.ibb.co/J2jGcWJ/scr-7.png"> 

4. Need to update the .env file with the below credential for staging the application 

<img src="https://i.ibb.co/3sVcMvn/scr-8.png">

5. Activate the Virtual environment
```
$ cd ~/backend/first_class

$ pipenv shell 
```
<img src="https://i.ibb.co/k40h8Hw/scr-9.png">

6. Then Switch to staging folder
```
$ cd ~/staging-fcd/staging-backend/first_class/
```
<img src="https://i.ibb.co/yq20GSq/scr-10.png">

7. Execute the Scraping and parsing command with corresponding state name
```
python3.8 manage.py scrape_ohio
python3.8 manage.py scrape_ohio --step parse
```
<img src="https://i.ibb.co/ngD61R0/scr-11.png">

8. Once the scraping process is finished, you need to sync the import folder with the staging s3 bucket (fcd-staging-scrapper).
```
$ aws s3 sync --exclude "*.DS_Store" /home/ubuntu/staging-fcd/staging-backend/import s3://fcd-staging-scrapper/latest-staging
```
<img src="https://i.ibb.co/Th2Gy4j/scr-12.png">

9. Should constantly need to check for errors that are intervening the process
