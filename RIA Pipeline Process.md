## RIA Pipeline Process (fcd-scraper-v1)

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

IP: 10.0.10.30   → private IP of scraper v1 server
Username: ubuntu 

<img src="https://i.ibb.co/zR4BJ0s/scr-3.png">

-This will log you into the server

1.	Once logged in & list file in ubuntu folder
```
$ cd /home/ubuntu && ll
```
<img src="https://i.ibb.co/MnHzKBT/scr-4.png">

2.	check the .bashrc file in the ubuntu root folder
```
$ cat  .bashrc
```
3.	Then copy the bashrc-production file to bashrc file
```
$ sudo cp .bashrc-production .bashrc
```
<img src="https://i.ibb.co/SBjWcpg/scr-5.png">

4.	Need to activate the .bashrc file with below command
```
$ source .bashrc
```
<img src="https://i.ibb.co/4P16tkF/scr-6.png">

5.	Activate the Virtual environment using below command 
```
$ cd ~/backend/first_class
```
$ pipenv shell

<img src="https://i.ibb.co/k40h8Hw/scr-9.png">

6.	Now you need to check if the import folder is present on the backend folder 
```
$ ls ~/backend
```
<img src="https://i.ibb.co/vHPqpCy/ria-8.png">

7.	If there is no import folder, then we need to move it from staging environment 
```
$ sudo mv ~/staging-fcd/staging-backend/import ~/backend
```

<img src="https://i.ibb.co/6rJcn54/ria-9.png">

8.	Check the env file with production credentials using below command 
```
$ cat .env
```

<img src="https://i.ibb.co/sFw39Ff/ria-10.png">

9.	Now execute the RIA script file in the /usr/local/bin folder
```
$ cd /usr/local/bin

$ sh build-all-ria.sh
```

<img src="https://i.ibb.co/HNVbyzs/ria-11.png">
