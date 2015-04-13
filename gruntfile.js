'use strict';

module.exports = function(grunt) {

  var watchFiles = {
    serverViews: ['app/views/**/*.html'],
    clientViews: ['public/modules/**/**/*.html', 'public/resources/templateUrl/*.html'],
    serverJS: ['gruntfile.js', 'server.js', 'app/**/**/*.js'],

    clientJS: ['public/javascript/**/*.js', 'public/*.js', 'public/modules/core/**/**/*.js', 'public/modules/sharingData/**/**/*.js', 'public/modules/filters/**/**/*.js', 'public/modules/ngFilters/**/**/*.js', 'public/modules/directivesToCtrl/**/**/*.js', 'public/modules/isolatedScopes/**/**/*.js', 'public/modules/stringScope/**/**/*.js'],
    clientCSS: ['public/modules/core/css/*.less', 'public/modules/sharingData/css/*.less', 'public/modules/ngFilters/css/*.less', 'public/modules/directivesToCtrl/css/*.less','public/modules/isolatedScopes/css/*.less','public/modules/stringScope/css/*.less']
  };

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      serverViews: {
        files: watchFiles.serverViews,
        options: {
          livereload: true
        }
      },
      clientViews: {
        files: watchFiles.clientViews,
        options: {
          livereload: true
        }
      },
      serverJS: {
        files: watchFiles.serverJS,
        /*tasks: ['jshint'],*/
        options: {
          livereload: true
        }
      },
      clientJS: {
        files: watchFiles.clientJS,
        options: {
          livereload: true,
        }
      },
      clientCSS: {
        files: watchFiles.clientCSS,
        tasks: ['less'],
        options: {
          livereload: true,
        }
      }
    },
    less: {
      development: {
        options: {
          paths: watchFiles.clientCSS,
        },
        files: {
          'public/css/app.css': watchFiles.clientCSS
        }
      }
    },
    nodemon: {
      dev: {
        script: 'server.js',
        options: {
          nodeArgs: ['--debug'],
          ext: 'js,html',
          watch: watchFiles.serverViews.concat(watchFiles.serverJS)
        }
      }
    },
    'node-inspector': {
      custom: {
        options: {
          'web-port': 1337,
          'web-host': 'localhost',
          'debug-port': 5858,
          'save-live-edit': true,
          'no-preload': true,
          'stack-trace-limit': 50,
          'hidden': []
        }
      }
    },
    concurrent: {
      default: ['nodemon', 'watch'],
      debug: ['nodemon', 'watch', 'node-inspector'],
      options: {
        logConcurrentOutput: true,
        limit: 10
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['concurrent:default']);
  grunt.registerTask('debug', ['lint', 'concurrent:debug']);

};
