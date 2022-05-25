Bottle Available ERROR & Virtualbox Socios Inaccessible error

Error: 

<img src="https://prnt.sc/F75j04jcXEAk">

After updating the Socios repository(Socios). We need to install the latest changes on our MAC machine.

While trying to install the socios package in the MAC machine. We are facing a No Bottle available Error.

Solution:

Need to run the below commands:

		$  brew install --build-from-source socios

		$  brew update

Then We need to update the Socios.rb with the below lines
Path:   /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core/Formula/socios.rb

Syntax:
     def install
              bin.install "socios"
              prefix.install Dir["lib"]
     end
end

Then re-run the below commands.

		$ brew tap SociOS-Linux/socios

<img src="https://i.ibb.co/rMvsfxV/image-1.png" width="700" height="300">

$ brew install Socios

$ socios --version

<img src="https://i.ibb.co/yYT79YC/image-2.png" width="700" height="350">

Virtualbox Socios Inaccessible error

<img src="https://i.ibb.co/JWYMGHH/image-3.png" width="500" height="350">

For Inaccessible error: the  Virtualbox script file is missing on a specific path. Once the ISO image installation and partition are completed.

Solution:

Re-Run the Below command for creating the ISO image and disk partition

		$ socios --check

Once the installation process is completed without any error.

We can able create a build with a specific path.

 		$  socios --build