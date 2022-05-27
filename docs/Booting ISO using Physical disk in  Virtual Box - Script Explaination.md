# Booting a VM using MAC Physical Disk:

1. The script first creates a free space with default size of 50 gb if the user's choice is to stick to default settings by giving a "Yes/yes". 

```
default_size=50
```

2. The user can also deny the default settings and can give a "No/no" which lets them decide how much space they need for SociOS.Either choice will create a free space for the sgdisk to do the rest.

```
read -p "Click Yes to use the default disk space for the partition, No to select custom disk space (Yes\No):" choice

case "$choice" in
	Yes|yes|"") Input=1;;
	No|no) Input=0;;
	* ) { echo "Invalid option. Please select the correct option."; exit 1; };;
esac
```

3. The below code creates the free space of desired size for Example if 40 is given in the disk0s2 disk having a total space of 250gb

```
$ diskutil apfs resizeContainer disk0s2 210g
```
by doing this we are allocating 210gb for disk0s2, so rest of it becomes the free space

4. The information about the free available space is given to user for them to conviniently choose the disk space from their Mac machine. 

```
$ space_available=$(diskutil info / | grep "Container Free Space" | awk '{print $4$5}')
```

5. After the free space is created, the sgdisk kicks in and creates 2 volumes
	a. Swap space - 4gb Larger than the Mac machine RAM size, Swap space is limited to 16gb even if the Mac machine possess larger memory.
	b. Storage space - The rest of the space from the free space is alloted to the storage space. This space is used in the future to boot ISO
	c. Mac machine user password is needed to proceed with sgdisk for which user is asked for.
	
The sgdisk code explaination is given below:

```	
$ sudo sgdisk -n 0:0:$extra_ram -c 0:"SWAP" -t 0:0700 "$whole_disk"
$ sudo sgdisk -n 0:0:"$ENDSECTOR" -c 0:"FEDORA" -t 0:0700 "$whole_disk"
```
	sudo  - need root permission to access sgdisk
	-n    - New partition
	0:0:+5G - Partition number (adding 0 will select the default):First sector(adding 0 will select the default):how much memory you want from the free space (for 5 gb ----> +5G (G indicated gb))

```
ENDSECTOR = $ sudo sgdisk -E "$whole_disk"
```

	-E    - its the end of the largest available sector, so that every other free space gets allotted to FEDORA storage

	-c	  - naming the partition, 0 indicates the default partition number and SWAP is the name of the partition
	0:0700- partition format hexa code for default partition number (0), 0700 is the hexa code for MS-DOS partition format  
	"whole disk" - its the whole disk disk0, disk1 

```
$ sudo sgdisk -p "$whole_disk"
```
	-p     - prints the partition of the whole disk i.e.(disk0)
	
6. After all the partitions are done the Virtual Machine is created from the Virtual Box, the user is prompted for the Virtual machine name of their choice. The VM name is created with the date and time information, so even if they provide similar name by mistake a separate VM will get created.

```
cd ~
if [ -d socios/VirtualBoxVMs ]; then
        rm -rf socios/VirtualBoxVMs
fi

mkdir -p socios/VirtualBoxVMs
```
- At first, the script check for the required folder in the root. If not present, it created it and provides the permission along with it.

7. The user is prompted for the disk identifier which was created for storage just then. The ask has been simplified at its finest so that a user cannot get too confused which one to enter.

```
Please mention the identifier of the volume size close to 32 GB which was alloted for SociOS(Eg:disk0s3, disk0s4) 
```
-Mention the identifier of the volume size anywhere near 32 GB like disk0s4

8. After the disk identifier is entered in, the particular disk is pointed to the vmdk file that is created for the virtual machine. The Mac physical disk is converted to storage space for Virtual Machine.

9. The Mac user name is asked from the user for providing necessary permission to the VMDK file.

10. The ISO image is loaded from the iso destination folder, and both the VMDK file and the ISO is attached to the Virtual Machine to Boot.

11. The Virtual Machine boots with Fedora Linux having the physical storage space and the Fedora ISO image 