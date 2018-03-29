var c_input_form_book___gcalcui = Vue.component('c-input-form-book', {

  

  template: '#template-gcalcui-c-input-form-book',
    data: function() {
      var r = {   
        defaults:{},  
        custom: {},
        fields : this.$root.get_attr_input_form_fields(),
        values : this.$root.get_attr_input_form_fields_values(),
        values_names : this.$root.get_attr_input_form_fields_values_names()
      };


      var matrix = gcalcui__app_model.gcalc_ui_model.product_constructor_data.book.rest_data.form_validation.matrix;
      if ( matrix ) {
        for( var i in matrix ){               
          r[i] = typeof r.fields[i].default !== "undefined" ? r.fields[i].default : '';
          r.defaults[ i ] = r[i]; 
        }

      } else {
        console.error('no validation matrix, validation imposibble')
      }

      var attr_bw_lists = gcalcui__app_model.gcalc_ui_model.product_constructor_data.book.rest_data.attr_bw_lists;
      for( var rule in attr_bw_lists){
        var attr = attr_bw_lists[rule];
        var name = attr.name;
        var current_value = r[name];
        var procedures = attr.data[current_value];
          if ( procedures ) {
              for( var procedure in procedures){
                  if ( typeof r[procedure] !== "undefined") {
                    r.values[procedure.replace(/^pa_/,'')] = procedures[procedure].values;              
                  }            
              }        
          }
      }
    return r;
  },

  computed:{

    /**
     * Gathers all calculation custom attributes to send away for further validations
     * @return {[type]} [description]
     */
    $custom: function(){
      return this.custom;
    },

    /**
     * Gathers all calculation attributes to send away for further validations
     * @return {[type]} [description]
     */
    $out: function(){
      /**
       * Raw list of attributes before applying any validations filters
       */
      var raw = {};
      for (var i in this.values_names) {        
        raw[ i ] = typeof this[ 'pa_' + i ] !== "undefined" ? this[ 'pa_' + i ] : "";        
      }

      return raw;
    },

  },

  updated: function() {
   // this.$root.commit( 'setCalculationInputForm', this );

  },

  beforeUpdate: function() {
   // this.$root.commit( 'setCalculationInputForm', this );

  },

  watch:{

    $out : function( val ){
      this.$store.commit( 'setCurrentOut', val );
      this.$store.dispatch( 'sendCalculationDataToComposer' );
    },
    
    $custom : function( val ){            
      this.$store.commit( 'setCurrentCustom', val );
      this.$store.dispatch( 'sendCalculationDataToComposer' );
    },
    
  },

  created: function( ){
    this.$store.commit( 'setCurrentOut', this.$out );
    this.$store.commit( 'setCurrentCustom', this.$custom );
    this.$store.dispatch( 'sendCalculationDataToComposer' );
  },

  validations: gcalcui__app_model.gcalc_ui_model.product_constructor_data.book.rest_data.form_validation.matrix,

  methods: {
/*
    setAttribute: function( name, value ){
      var patt = new RegExp(/^pa_/);
      var pa_test = patt.test( name );
      var index = pa_test ? name : 'pa_' + name;
      debugger;
      //this[index] = value;

    }
    */
  }


});