**                              ****Socios Homebrew Formula**** **

**Homebrew Formula**

The Homebrew tap/formula process is the combination of two GitHub repositories. 

*  The First GitHub repo contains the functionality package (socios).

* The second GitHub repo contains the homebrew formula with the ruby file (homebrew-socios).

# ![image alt text](image_0.png)

# **Step1: Creating Tag and Releases**

* We need to clone the First repository(socios) in a specific path. Using the below Git clone command

$ git clone [https://github.com/SociOS-Linux/socios.git](https://github.com/SociOS-Linux/socios.git)

![image alt text](image_1.png)

* Switch into that cloned repository folder(socios) then we need to place the updated script packages in that folder(socios).

* By using the git commands. We need to push the updated files to the First repository(socios)

$ git status && git branch

$ git add .

![image alt text](image_2.png)

$ git commit -am "Sociois: Updated to the latest version"

* For every commit, we need to update the commit message.

![image alt text](image_3.png)

$ git push -u origin main //  git push -u origin develop

$ git tag v1.3.0

$ git push origin v1.3.0

![image alt text](image_4.png)

* Once we push the tag into the First repository(socios). Refresh the Repository once.

* Then we can able to view the changes in the Releases option.

![image alt text](image_5.png) 

* Now, Click on the latest update tag 

* We can able to view the old releases here. Now we need to click on "Release"

![image alt text](image_6.png)

* Then we can able to access the "Tag" section. Click on Tag 

* Here we can able to see the Updated build file with (zip, Tar.gz) formate

![image alt text](image_7.png)

* Now select the Release tab. Click on the Draft a new release button

![image alt text](image_8.png)

* Next, we need to choose the "Tag" with (Latest version) and the target branch

![image alt text](image_9.png)

* Update the Release title with "Version Name" with Description 

![image alt text](image_10.png)

* Now un-check the pre-release and click on "Publish release"

![image alt text](image_11.png)

* Finally, We can able the see the latest release in the socios repository

![image alt text](image_12.png)

# **Step2: Creating Homebrew Tap/Formula**

* Already we have a package zip and tar.gz file in our First repository(socios)

* Right-click the Filename(Source code (tar.gz)) - Now Copy the latest version of the tar.gz package file URL

![image alt text](image_13.png)

* We can able to see the socios package file URL below

[https://github.com/SociOS-Linux/socios/archive/refs/tags/v1.3.0.tar.gz](https://github.com/SociOS-Linux/socios/archive/refs/tags/v1.3.0.tar.gz)

* we need to copy the socios package compressed tar.gz file link from the GitHub release.

* Create the ruby file formula by running the below command in the terminal.

Syntax: brew create <socios package URL>

$ brew create [https://github.com/SociOS-Linux/socios/archive/refs/tags/v1.3.0.tar.gz](https://github.com/SociOS-Linux/socios/archive/refs/tags/v1.3.0.tar.gz)

Notes: If there is an existing version configured in mac Machine we need to untap the previous version.

$ brew uninstall socios

		$ brew untap  [SociOS-Linux/socios](https://github.com/SociOS-Linux/socios/archive/refs/tags/v1.3.0.tar.gz)

![image alt text](image_14.png)

* The above command will generate the default formula file in a ruby format for our socios packages

* Once created homebrew editor will open - we need to exit the editor terminal (:wq)

* Now the Updated formula is created in the below file location.

         /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core/Formula/socios.rb

**Homebrew Directory list**

          Homebrew package uses the below folder's path to configuration.

**Formula** – The package definition uses the path /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core/Formula/socios.rb

**Keg **- The installation prefix of a Formula uses the path /usr/local/Cellar/Socios/v1.3.6

**Cellar **- All Kegs are installed in path /usr/local/Cellar

**Tap **- A Git repository of Formulae and/or commands uses the path /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core

# **Step3: Creating  Second Repository for Homebrew Formula/ Socios**

* Create a second repository(homebrew-socios) for the ruby formula. 

![image alt text](image_15.png)

* Then clone that repository in our local System using the below git clone command.

	$ git clone [https://github.com/SociOS-Linux/homebrew-socios.git](https://github.com/SociOS-Linux/homebrew-socios.git)

![image alt text](image_16.png)

* After we clone the repository - Switch to the homebrew socios folder.

     ![image alt text](image_17.png)

* Now we need to update the socios.rb file with some functions.

* Copy the default socios.rb file with cloned repository folder (homebrew-socios)

$ cp /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core/Formula/socios.rb .

* Using nano command. We need to update the socios.rb file using the below Line.

                           ![image alt text](image_18.png)

Syntax:

     def install

              bin.install "socios"

              prefix.install Dir["lib"]

     end

end

* Then we need to commit the updated file to Second Repository (homebrew-socios)

* Check the branch and status using the git commands.

		$ git status && git branch

![image alt text](image_19.png)

* Check the changes in the file using the below terminal

$ git diff 

* It will show changes between commits, commit, and the working tree

![image alt text](image_20.png)

$ git add .

$ git commit -m "Socios: Updated version V1.3.0"

$ git push -u origin main / git push -u origin develop

![image alt text](image_21.png)

* Once committed the file we need to refresh the GitHub page 

![image alt text](image_22.png)

* Once completed the above procedures, we can able to download and use our socios packages by using the below commands.

* Then we can check the functions of Socios using the below commands.

  

         $ brew tap SociOS-Linux/socios 

![image alt text](image_23.png)

	

         $ brew install socios

         $ socios --version

![image alt text](image_24.png)

Steps to uninstall socios

$ brew uninstall socios

