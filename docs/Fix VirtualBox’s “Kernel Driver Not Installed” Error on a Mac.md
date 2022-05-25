# Fix VirtualBox’s “Kernel Driver Not Installed” Error on a Mac


##### ERROR:
 
<img src="https://i.ibb.co/rp7b41J/image-0.png">

Solution:

-	Whether we are trying to set up a Linux VM the error is appearing because this is our Mac’s first time installing any Oracle products (like VirtualBox). You’ll need to give the piece of software explicit permission to access the computer. For this Error, we have found a solution kernel issue.


**Step1: Updating the Security policy in MAC Machine**

-	First, navigate to System Preferences by clicking the Apple icon on the top menu bar

<img src="https://i.ibb.co/wzw2Hkn/image-1.png">

-	Select the “System Preferences” button. 

<img src="https://i.ibb.co/BnByDw6/image-2.png">

-	From there, click the “Security and Privacy” option.

-	Under the “General” tab, there should be text near the bottom that says, “System Software from Developer ‘Oracle America, Inc.’ Was Blocked from Loading.”


<img src="https://i.ibb.co/Qj9XmxL/image-3.png">

-	The installation will now complete successfully

<img src="https://i.ibb.co/nD2Cdzk/image-4.png">

**Alternate way:**

Download and install the latest VirtualBox 6.1.18 or higher. And then follow the below steps to resolve.

Step 1 - run:

```
sudo kextload -b org.virtualbox.kext.VBoxDrv
```

Step 2: Go into System Preferences->Security & Privacy

Step 3: Unlock the security center

Step 4: Approve the software by Oracle

Step 5: Follow the below commands

```
sudo kextload -b org.virtualbox.kext.VBoxNetFlt
sudo kextload -b org.virtualbox.kext.VBoxNetAdp
sudo kextload -b org.virtualbox.kext.VBoxUSB
```
