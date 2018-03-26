module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    



    concat: {
      
      app: {
        files: {         
          'dist/js/app.js': [
              'js/components/*.js',             
              'js/app.js'
            ], 
        },
      },

      modules: {
        files: {         
          'dist/js/modules.min.js': [
              'node_modules/tether/dist/js/tether.min.js',
              'node_modules/bootstrap-vue/dist/bootstrap-vue.min.js'
            ], 
        },
      },

      modules_full: {
        files: {         
          'dist/js/modules.js': [
              'node_modules/tether/dist/js/tether.min.js',
              'node_modules/vue/dist/vue.min.js',
              'node_modules/bootstrap-vue/dist/bootstrap-vue.min.js',
              'node_modules/vuex/dist/vuex.min.js'
            ], 
        },
      },

      components: {
        files: {         
          'sass/app-components.scss': [              
              'sass/components/*.scss'
            ], 
        },
      },

      modules_css: {
        files: {         
          'css/modules.min.css': [
              'node_modules/tether/dist/css/tether.min.css'             
            ], 
        },
      },
    },
    
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: [
          'dist/js/*.js',
          '!dist/js/app.min.js',
          '!dist/js/modules.js'
        ],
        dest: 'dist/js/app.min.js'
      }
    },
    
     sass: { // sass tasks
      dist: {
        options: {
          compass: true, // enable the combass lib, more on this later
          style: 'expanded' // we don't want to compress it
        },
        files: {
          'css/app.css': 'sass/base-app.scss', // this is our main scss file
          'css/app-components.css': 'sass/app-components.scss'
        }
      },
      dev: {
        options: {
         // compass: true, // enable the combass lib, more on this later
          style: 'expanded',
          loadPath : ['/', 'sass/']
        },
        files: {
          'css/app.css'                                  : 'sass/base-app.scss', // this is our main scss file
          'css/components/c-dashboard.css'                    : 'sass/components/c-dashboard.scss',
          'css/components/c-calculation.css'                  : 'sass/components/c-calculation.scss',
          'css/components/c-archives.css'                     : 'sass/components/c-archives.scss',
          'css/components/login-form.css'                     : 'sass/components/login-form.scss',
          'css/components/c-input-form-book.css'              : 'sass/components/c-input-form-book.scss',
          'css/components/main.css'                           : 'sass/components/main.scss',
          'css/components/c-calculation-attr-input-form.css'  : 'sass/components/c-calculation-attr-input-form.scss',
          'css/components/b-total-basic.css'                  : 'sass/components/b-total-basic.scss',
          'css/components/c-input-form-default.css'           : 'sass/components/c-input-form-default.scss',
          'css/components/b-input-attr-form-field.css'        : 'sass/components/b-input-attr-form-field.scss',
          'css/components/c-calculation-product-selector.css' : 'sass/components/c-calculation-product-selector.scss',
          'css/components/e-total-calculation.css'            : 'sass/components/e-total-calculation.scss',
          'css/components/f-archives-calculations.css'        : 'sass/components/f-archives-calculations.scss',
          'css/components/e-total-production-process.css'     : 'sass/components/e-total-production-process.scss',
          'css/components/f-total-production-processes.css'   : 'sass/components/f-total-production-processes.scss',
        }

      }
    },

    cssmin: { // minifying css task
      dist: {
        files: {
          'dist/css/app.min.css': 'css/*.css'          
        }
      }
    },
























    watch: { // watch task for general work
      options:{
        spawn: false
      },

      sass: {
        files: ['sass/**/*.scss'],
        tasks: ['sass:dev']
      },

      styles: {
        files: ['css/app.css'],
        tasks: ['cssmin']
      }
    },
 
    browserSync: {
        dev: {
            bsFiles: {
                src : [
                    'css/*.css',
                    'class/*.php',
                    'js/*.js'
                ]
            },
            options: {
                watchTask: true,
                proxy: 'localhost/gaadcalcapi/przykladowa-strona/#/calculation'
                //server : './gaad-calc-ui/aaa'
            }
        }
    }
    
   
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');  
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch'); 
  //grunt.loadNpmTasks('grunt-sass-replace'); 
  grunt.loadNpmTasks('grunt-contrib-compress');
  // Default task(s).
  
  grunt.registerTask( 'dist', [ 'sass:dist', 'concat:app', 'concat:components', 'concat:modules', 'concat:modules_css', 'uglify', 'cssmin' ] );
  grunt.registerTask( 'dev' , [ /*'sass:dev', 'browserSync',*/ 'watch' ] );
  

};