## Angular Exercises
Angular exercises with Bootstrap and Express. Can be used as a model for prototype applications. Application uses Grunt taskrunner, Bower, LESS for precompiled CSS and autoreload files with Liveload. Templating engine is Swig. Work in progress.

## Prerequisites
Make sure you have Node.js, Bower and grunt-cli installed on your machine. If not, download Node.js (http://www.nodejs.org/download/) and install the package. With npm install globally Bower and grunt-cli via command line:

```
$ npm install -g bower
$ npm install -g grunt-cli
```

Start application by installing Node.js depedencies in application folder (path/to/installation/angular-exercises):

```
$ npm install
```

After the installation run grunt default task:

```
$ grunt
```
Open browser and type localhost:3000 in the address bar.

### Folder structure

Server side files are located in the app folder.

    app
       |
       |--configuration         # Configuration files for application information.
       |--router                # Express routing REST configuration files
       |--views                 # Server side views
          |--swig-templates     # Templates for Swig

    node_modules                # Storage for npm modules

Public folder contains all front-end files

    public
        |
        |--bower_components     # Front-end packages installed by Bower
        |--css                  # Location of compiled Less files
        |--modules              # AngularJS modules
        |   |
        |   |--core             # General modules shared application wide
        |   |   |
        |   |   |--controllers  # AngularJS Controllers
        |   |   |--css          # General Less files
        |   |   |--views        # General html-files e.g. container for articles
        |   |
        |   |--< module name >  # Name of current module
        |       |
        |       |--controllers  # AngularJS Controllers
        |       |--css          # Module specific Less files
        |       |--directives   # Module specific AngularJS
        |       |--filter       # Module specific AngularJS filters
        |       |--services     # Module specific AngularJS services
        |       |--views        # Module specific html-files
        |
        |--resources            # Application wide shared resources e.g. images
        |       |--images
        |
        |--app.js               # Configuration of AngularJS providers

Application files at the bottom

    .bowerrc                    # Directory path to Bower packages
    .gitignore                  # Untracked Git files
    bower.json                  # Manifest file for Bower packages
    gruntfile.js                # Grunt tasks
    package.json                # Manifest file for npm packages
    README.md                   # Reading it, mate
    server.js                   # Initializing application e.g. Express