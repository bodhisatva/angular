'use strict';

module.exports = function(grunt) {

  var watchFiles = {
    serverViews: ['app/views/**/*.html'],
    clientViews: ['public/modules/**/**/*.html', 'public/resources/templateUrl/*.html'],
    serverJS: ['gruntfile.js', 'server.js', 'app/**/**/*.js'],

    clientJS: ['public/javascript/**/*.js', 'public/*.js', 'public/modules/**/**/*.js'],
    clientCSS: ['public/modules/**/**/*.less']
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
