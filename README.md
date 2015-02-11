# Responsive-Wordpress-starter-theme
This is a Responsive Wordpress starter theme built with underscores.me, [bourbon](http://bourbon.io/) (mixins) and [neat](http://neat.bourbon.io/)(grids)

## Steps to download, install and configure

1. Close this repository to your local machine with the below command.

	```bash
	git clone git://github.com/nirmalkc/Responsive-Wordpress-starter-theme
	```
	> Note: You must have git installed in your machine.
	> After cloning this repository, do not forget to delete the `readme.txt` file from the `/mytheme` folder.

2. Download the underscores theme with sassify option (advanced view) from [underscores.me](http://underscores.me/). 
Extract the downloaded `ZIP` file to `/mytheme` folder.

3. Move the "sass" folder to `/src` folder, which is one level above.

4. Go to the `/sass` folder, create a new folder called `vendors`. Go inside the `/vendors` folder and run the following commands to install [bourbon](http://bourbon.io/) and [neat](http://neat.bourbon.io/).

	If you are not installed [bourbon](http://bourbon.io/) and [neat](http://neat.bourbon.io/) in your computer before, do the following

	```bash
	gem install bourbon
	gem install neat
	bourbon install
	neat install
	```

	If you have already installed [bourbon](http://bourbon.io/) and [neat](http://neat.bourbon.io/) in your computer.

	```bash
	bourbon install
	neat install
	```
5. Move the `_grid-settings.scss` file inside the `/neat` folder.

6. Open `style.scss` and add the following code at the end to support bourbon and neat.

	```sass
	/*--------------------------------------------------------------
	Vendors
	--------------------------------------------------------------*/
	@import "vendors/bourbon"
	@import "vendors/neat"
	```

7. Change `mytheme` folder name to whichever name you would prefer. If you do so, please change the destination path in the `Gruntfile.js` appropriately.

8. Open `package.json` file and change the name `Responsive Wordpress Theme` to your project name and change the description `Starter theme` to your project description.

9. Run the command `npm install`, this will download all the required node modules to the root.

## Deploy

It is quite simple to deploy all the compiled files to your wordpress theme folder. Just copy the "mytheme" folder to your wordpress "theme" directory.


