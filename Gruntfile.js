module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    



    concat: {
       options: {
          stripBanners: true,
          banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */',
        },
      
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
          'dist/js/node_modules.js': [
              
              

              //'node_modules/tether/dist/js/tether.min.js',
              //'node_modules/js-cookie/src/js.cookie.js',
              //'node_modules/js-base64/base64.min.js',
              'node_modules/vue/dist/vue.min.js',
              'node_modules/vuelidate/dist/vuelidate.min.js',
              'node_modules/vuelidate/dist/validators.min.js',
              //'js/parse-model.js',
              'node_modules/vuex/dist/vuex.min.js',
              'node_modules/bootstrap-vue/dist/bootstrap-vue.min.js',
              'node_modules/vue-localstorage/dist/vue-local-storage.min.js',
              'node_modules/vue-router/dist/vue-router.min.js',
              'node_modules/vue-awesome/dist/vue-awesome.js',

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
        //  compass: true, // enable the combass lib, more on this later
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
          'css/app.css'                                      : 'sass/base-app.scss', // this is our main scss file
          'css/components/c-dashboard.css'                   : 'sass/components/c-dashboard.scss',
          'css/components/c-calculation.css'                 : 'sass/components/c-calculation.scss',
          'css/components/f-archives.css'                    : 'sass/components/f-archives.scss',
          'css/components/login-form.css'                    : 'sass/components/login-form.scss',
          'css/components/c-input-form-book.css'             : 'sass/components/c-input-form-book.scss',
          'css/components/main.css'                          : 'sass/components/main.scss',
          'css/components/c-calculation-attr-input-form.css' : 'sass/components/c-calculation-attr-input-form.scss',
          'css/components/b-total-basic.css'                 : 'sass/components/b-total-basic.scss',
          'css/components/c-input-form-default.css'          : 'sass/components/c-input-form-default.scss',
          'css/components/b-input-attr-form-field.css'       : 'sass/components/b-input-attr-form-field.scss',
          'css/components/c-calculation-product-selector.css': 'sass/components/c-calculation-product-selector.scss',
          'css/components/e-total-calculation.css'           : 'sass/components/e-total-calculation.scss',
          'css/components/f-archives-calculations.css'       : 'sass/components/f-archives-calculations.scss',
          'css/components/e-total-production-process.css'    : 'sass/components/e-total-production-process.scss',
          'css/components/f-total-production-processes.css'  : 'sass/components/f-total-production-processes.scss',
          'css/components/b-fgroup-infobox.css'              : 'sass/components/b-fgroup-infobox.scss',
          'css/components/z-calculation-composer.css'        : 'sass/components/z-calculation-composer.scss',
          'css/components/a-infobox-item.css'                : 'sass/components/a-infobox-item.scss',
          
          'css/components/x-markups-input-form.css'          : 'sass/components/x-markups-input-form.scss', 
          
          
          'css/components/t-calc-text-details.css'           : 'sass/components/t-calc-text-details.scss',
          'css/components/s-calc-text-details-book.css'      : 'sass/components/s-calc-text-details-book.scss',
          'css/components/s-calc-text-details-book.css'      : 'sass/components/s-calc-text-details-book.scss',
          'css/components/g-calculation-save-panel.css'      : 'sass/components/g-calculation-save-panel.scss',
          'css/components/g-calculation-new-panel.css'       : 'sass/components/g-calculation-new-panel.scss',
          'css/components/g-calculation-save-panel.css'      : 'sass/components/g-calculation-save-panel.scss',
          'css/components/z-acalculation-composer.css'       : 'sass/components/z-acalculation-composer.scss', 
          'css/components/k-pdf-created-notifications.css'   : 'sass/components/k-pdf-created-notifications.scss', 
          'css/components/g-archives-view.css'               : 'sass/components/g-archives-view.scss', 
          'css/components/k-pdf-sent-notifications.css'      : 'sass/components/k-pdf-sent-notifications.scss', 


          'css/components/f-archives-filters.css'      : 'sass/components/f-archives-filters.scss', 
          'css/components/f-archives-pagination.css'   : 'sass/components/f-archives-pagination.scss', 
          'css/components/f-archives-actions-aplet.css': 'sass/components/f-archives-actions-aplet.scss', 
          'css/components/e-archives-actions.css'      : 'sass/components/e-archives-actions.scss', 
          'css/components/c-total-archives-basic.css'      : 'sass/components/c-total-archives-basic.scss', 




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
  
  grunt.registerTask( 'dist', [ 'sass:dist', 'concat:app', 'concat:components', 'concat:modules', 'concat:modules_css', /*'uglify'*/, 'cssmin' ] );
  grunt.registerTask( 'dev' , [ /*'sass:dev', 'browserSync',*/ 'watch' ] );
  

};