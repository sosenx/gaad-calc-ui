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

    enable_attr: function( attributes ){
      if ( typeof attributes === "object" ) {
        for(var i in attributes){
          if ( typeof this.$refs[ attributes[ i ] ] !== " undefined" ) {
            this.$refs[ attributes[ i ] ].enable_ui();
          }
        }
      }
    },

    disable_attr: function( attributes ){
      if ( typeof attributes === "object" ) {
        for(var i in attributes){
          if ( typeof this.$refs[ attributes[ i ] ] !== " undefined" ) {
            this.$refs[ attributes[ i ] ].disable_ui();
          }
        }
      }
    },

    get_infobox_name_by_attr: function( attr_name ){
      
      debugger
    },

    valid: function( not_code ){
      var not = this.$store.getters.notifications;
      for( var i in not){
        if ( not[ i ].code === not_code ) {
          delete not[ i ];
        }
      }
      var _not = [];
      var c = 0;
      for( var i in not){   _not[ c ] = not[ i ];   c++; }

      this.$store.commit( 'rewriteNotifications', _not );
      
    },

    unvalid: function( attr_data ){
      
      if ( typeof attr_data.msg !== "undefined" && typeof attr_data.infobox !== "undefined" ) {
        this.$store.commit('addNotificaton', {
          attr_name : typeof attr_data.attr_name !== "undefined" ? attr_data.attr_name : false,
          msg : typeof attr_data.msg !== "undefined" ? attr_data.msg : "Unknown error",
          type  : typeof attr_data.type !== "undefined" ? attr_data.type : "error",
          code  : typeof attr_data.code !== "undefined" ? attr_data.code : "404",
          infobox : typeof attr_data.infobox !== "undefined" ? attr_data.infobox : 
              ( attr_name ? this.get_infobox_name_by_attr() : 'other' )
        } );
        
      }
      


      if ( typeof attr_data.set_value !== "undefined" ) {
        this[ 'pa_' + attr_data.attr_name] = attr_data.set_value;
      }

    }

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