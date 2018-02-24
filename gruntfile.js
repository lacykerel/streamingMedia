module.exports = function(grunt) {
  // time grunt tasks
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    project: {
      dev: 'src',
      dist: 'dist',
      build: '<%= grunt.template.today("yyyymmdd") %>'
    },

    // local server
    connect: {
      server: {
        options: {
          protocol: 'http',
          hostname: 'localhost',
          port: 9000,
          base: '<%= project.dev %>',
        }

      },
    },

    // watch files
    watch: {
      styles: {
        files: ['<%= project.dev %>/less/**/*.less'],
        tasks: ['less:dev'],
        options: {
          livereload: true
        }
      },
      scripts: {
        files: ['<%= project.dev %>/js/**/*.js', 'gruntfile.js'],
        tasks: ['webpack:build', 'jshint:dev', 'less:dev'],
        options: {
          livereload: true,
          reload: true
        }
      }
    },

    // compile less
    less: {
      dev: {
        files: {
          '<%= project.dev %>/css/style.css': ['<%= project.dev %>/less/style.less']
        }
      }
    },

    // lint js
    jshint: {
      options: {
        report: require('jshint-stylish')
      },
      dev: ['<%= project.dev %>/js/**/*.js', '<%= project.dev %>/js/build.js']
    },

    // webpack
    webpack: {
      build: {
        entry: ['./src/js/App.js'],
        output: {
          path: __dirname + '/src/js/',
          filename: 'build.js'
        },
        stats: {
          colors: true,
          modules: true,
          reasons: true
        },
        storeStatsTo: 'webpackStats',
        progress: true,
        failOnError: true,
        watch: true,
        module: {
          loaders: [
            { test: /\.svg$/, use: 'svg-react-loader'},
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                presets: ['es2015', 'react']
              }
            },
          ],

        }
      }
    }
  });

  // tasks
  grunt.registerTask('default', ['connect', 'watch']);
  // grunt.registerTask('develop', ['connect:server']);
};
