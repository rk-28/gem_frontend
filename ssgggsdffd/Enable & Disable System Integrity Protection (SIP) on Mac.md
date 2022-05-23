**        **

**                  ****Enable & Disable System Integrity Protection (SIP) on Mac**

**Step1:  Turn off System Integrity Protection (SIP) on Mac.**

* Click on the "Apple Icon" - Click on “about this MAC” then Click on “System reports”

* Now click on the Software section we can able to the SIP status

![image alt text](image_0.png)

* Turn off the MAC machine or device

![image alt text](image_1.png)

* Now we need to enter recovery mode to edit system settings and disable System Integrity Protection on Mac. 

* Hold down Command-R and press the Power button. Keep holding Command-R until the Apple logo appears.

![image alt text](image_2.png)

* Select the User and enter the password - Click on continue 

*  Wait for OS X to boot into the OS X Utilities window.

![image alt text](image_3.png)

* Click on Utilities then select the terminal option. Now open Terminal and enter the  Below Command in terminal 

$ csrutil status

* Check the status on SIP in MAC Machine if it is enabled - We need to Disable the SIP option on the Mac machine

$  csrutil disable

![image alt text](image_4.png)

* Now Click on the Quit terminal. Now we need to restart the Mac machine.

![image alt text](image_5.png)

* Once restart done. 

* Open the terminal and check the status of the SIP option.

$ csrutil status

![image alt text](image_6.png)

**Step2:  Turn on System Integrity Protection (SIP) on Mac.**

* Click on the "Apple Icon" - Click on “about this MAC” then Click on “System reports”

* Now click on the Software section we can able to the SIP status

![image alt text](image_7.png)

* Turn off the MAC machine or device

![image alt text](image_8.png)

* Now we need to enter recovery mode to edit system settings and Enable System Integrity Protection on Mac. 

* Hold down Command-R and press the Power button. Keep holding Command-R until the Apple logo appears.

![image alt text](image_9.png)

* Select the User and enter the password - Click on continue 

*  Wait for OS X to boot into the OS X Utilities window.

![image alt text](image_10.png)

* Click on Utilities then select the terminal option. Now open Terminal and enter the  Below Command in terminal 

$ csrutil status

* Check the status on SIP in MAC Machine if it is Disable - We need to Enable the SIP option on the Mac machine

$  csrutil Enable

![image alt text](image_11.png)

* Now Click on the Quit terminal. Now we need to restart the Mac machine.

![image alt text](image_12.png)

* Once restart Done. 

* Open the terminal and check the status of the SIP option.

$ csrutil status

![image alt text](image_13.png)

