
# SociOS Package Installation

### Step1: Steps to Install socios packages

Steps to install the socios packages in MAC machine by using the below commands. Before we need to tap the formula in repo

```bash
$ brew install Socios
```

Then we can check the functions of Socios using the command

```bash
$ socios --help
$ socios --version
```

<img src="https://i.ibb.co/Gc65Lm4/image-0.png" width="800px">

### Step2: SociOS Package

Socios package contains the below files and directory

Socios – root bin command file.

Lib – directory contains with below script files

**Install_virtualbox.scpt -** this script file will be run by calling the check function

**Image.sh –** this script file is included in the above file as a source

**Create_vm.sh –** this file will be run by calling the build function

**Disk_partition.sh -** this script file gets the disk name from the user input and adds the custom disk space from the user

**Csrutil_status.sh -**  This script will check the SIP option is Enable / Disabled

### Socios bin command file.

This file contains the functions and arguments of socios such as build, check, help, and version. Currently, we have added 4 functions to this file.

<img src="https://i.ibb.co/t3SKk29/Screenshot-1.jpg" width="600px">

The above functions are passed through the below arguments 

<img src="https://i.ibb.co/0t0rncg/Screenshot-2.jpg" width="600px">

### Install_virtualbox.scpt

This file helps us to check whether the virtual box is installed or not and prompts the question to the user to install the virtual box.

<img src="https://i.ibb.co/D4LwJSd/Screenshot-3.jpg" width=600px">

Based on the user input from the source 

The Script file will install the latest version of virtual box in our Mac machine

The installation process will take some time (2 - 3 Minutes)

Once the installation process completed. We can able check the Virtual box version
 
<img src="https://i.ibb.co/Cbd6GVM/image-1.png" width="700px">

### Image.sh

This helps us download the Socios image from the remote repository to the local directory /tmp/socios next to the installation of the VirtualBox. 

Currently, we have added google drive for testing purposes.

<img src="https://i.ibb.co/JsT2rBP/image-2.png" width="700px">

In the future, we need to add the launchpad repository instead of google cloud.

<img src="https://i.ibb.co/tH4BF3N/image-3.png" width="700px">

Check our macOS version & product version from the Terminal

```
$ sw_vers -productVersion 

$ system_profiler SPSoftwareDataType
```

<img src="https://i.ibb.co/K0fHbFC/image-4.png" width="700px">

### Create_vm.sh

We can able to create a virtual machine to boot our socios image in the physical partition.

Temporarily we used default disk space of 30 GB and ubuntu image. We need to alter the script file once the Socios image.

<img src="https://i.ibb.co/HxrRK35/Screenshot-4.jpg" width="700px">

### Csrutil_status.sh

This script will check if the SIP option is Enable / Disabled

<img src="https://i.ibb.co/4phBQBM/image-5.png" width="700px">

Check the SIP(System integration protection) is enabled or disabled on a Mac machine using the below command 

```bash
Disable SIP: $ csrutil disable

Enable SIP:  $  csrutil enable

Check SIP status: $ csrutil status
```

### Disk_partition.sh

We have created the Disk partition script for the condition for getting the disk name from the user input and adding the custom disk space from the user.

Automated script for creating partition from APFS to Linux.

<img src="https://i.ibb.co/GC0zk7X/image-6.png" width="700px">

The above script will unmount the disk from our partition disk.
