# Responsive-Wordpress-starter-theme
This is a Responsive Wordpress starter theme built with underscores.me, [bourbon](http://bourbon.io/) (mixins) and [neat](http://neat.bourbon.io/)(grids)

## Steps to install and setup

1. Download the underscores theme with sassify option (advanced view) from [underscores.me](http://underscores.me/). 
Extract the downloaded folder to "mytheme" folder.

2. Move the "sass" folder to "src" folder which is one level above.

3. Inside the "sass" folder, create a new folder called "vendors". Go inside the '/vendors' folder and run the following commands.

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

4. Change "mytheme" folder name to whichever name you would prefer. If you do so, please change the destination path in the Gruntfile.js appropriately.

5. Open "package.json" file and change the name and description.

6. Run the command "npm install", this will download all the required node modules to the root.

## Deploy

It is quite simple to deploy all the compiled files to your wordpress theme folder. Just copy the "mytheme" folder to your wordpress "theme" directory.


