# Responsive Wordpress Starter Theme

This is a Responsive Wordpress starter theme built with underscores.me, [bourbon](http://bourbon.io/) (mixins) and [neat](http://neat.bourbon.io/)(grids)

> **Note:** In order to use this starter theme, you must know how to use [Bourbon](http://bourbon.io/) mixins and [Neat](http://neat.bourbon.io/) grids. Neat is a semantic grid framework built on top of Sass and Bourbon. It is simple enough to get you up and running in minutes, and powerful enough to handle any responsive layout you can dream of.


## Steps to download, install and configure

1. Close this repository to your local machine with the below command.

	```bash
	git clone git://github.com/nirmalkc/Responsive-Wordpress-starter-theme
	```
	> Note: You must have git installed in your machine.
	> After cloning this repository, do not forget to delete the `readme.txt` file from the `/mytheme` folder.

2. Download the underscores theme with sassify option (advanced view) from [underscores.me](http://underscores.me/). 
Extract the downloaded `ZIP` file to `/mytheme` folder.

3. Move the `sass` folder to `/src` folder, which is one level above.

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
	@import "vendors/bourbon/bourbon"
	@import "vendors/neat/bourbon"
	```
	> You can change the theme details like name, theme url, author, author url, description, version etc by changing the values of the comments mentioned in the beginning of the `style.scss` file.

7. Open `package.json` file and change the name `ResponsiveWordpressTheme` to your `project` name and change the description `Starter theme` to your `project description`.

	> Note: Project name cannot have whitespace character.
 
8. Run the command `npm install`, this will install all the required node modules to run the grunt tasks.

9. Reponsive wordpress starter theme is ready now.

## Deploy

It is quite simple to deploy all the compiled files to your wordpress theme folder. 

Just copy the `mytheme` folder to your wordpress theme directory `/wp-content/themes`.

> You can also change `mytheme` folder name to whichever name you would prefer. If you do so, please change the destination path in the `Gruntfile.js` appropriately.








