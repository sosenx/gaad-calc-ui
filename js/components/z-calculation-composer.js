

var z_calculation_composer___gcalcui = Vue.component('z-calculation-composer', {
  
  template: '#template-gcalcui-z-calculation-composer',
  
  props: [],
  
  data: function() {
    var $r = {  

      calculation_save_name:'',

      tooltip_title : '',
      bussy : true,
      input : {},
      
      calculation_attributes: {},
      markups : {},
      request_attributes : {},
      errors_raport : {},
      valid : false
    }

    return $r;
  },

  watch: {
    request_attributes: function( val ){
      
    },

    input: function( val ){
      var calculation_attributes = this.get_input_attr();
      if (typeof calculation_attributes.quantity !== "undefined") {
        this.calculation_attributes = calculation_attributes;
        
        setTimeout( this.validate_attributes, 200 ); //validation need to be triggered after all rendering events
        EventBus.$emit( 'input-attr-changed' );

      }

      
    }

  },


  created:function(){
    this.input = {
      out : this.$store.getters.current_calculation.output.a,
    //  out : {},
      custom  : {},
      opt_attr : {}
    };
    EventBus.$emit('input-form-reloaded', {input_form: this});
  },

  computed:{

  },

  mounted: function() {
    this.$root.$on( 'markups-change', this.update_markups );
    this.$root.$on( 'request-calculation', this.request_calculation );
    EventBus.$on('product-reset', this.product_reset );
    this.$store.commit( 'setCalculationComposer', this );
    
    this.valid = true;
    this.bussy = false;  
  },



  methods: {

    save_calculation: function(){
      this.$router.push({ name: 'save_calculation' , params: { name: this.calculation_save_name }})
     // debugger
    },

    set_input: function( data ){

      setTimeout( function( data) { 

        data.root.input = data.data;
        data.root.get_input_attr();

       }, 200, {data:data, root:this} );
      
    }, 


    reload: function(){
      this.calculation_attributes = this.get_input_attr();

      this.bussy = false;
     setTimeout( this.validate_attributes, 200 ); //validation need to be triggered after all rendering events
    }, 

    product_reset: function( ){
        console.log('composer product_reset');
          this.tooltip_title          = '';
          this.bussy                  = false;
          this.input                  = {};
          this.calculation_attributes = {};
          this.markups                = {};
          this.request_attributes     = {};
          this.errors_raport          = {};
          this.valid                  = false;            
       
    }, 

    update_markups: function( markups ){
        this.markups = markups;
    }, 



    add_prefix: function( obj, prefix ){
      if( typeof obj !== "undefined" ){
        var r = {};
        if ( typeof obj.length !== "undefined" ) {
          for( var i in obj ){
            r[ prefix+obj[i] ] = "";
          }
        } else {
          for( var i in obj ){
            r[ prefix+i ] = obj[i];
          }
        }
        return r;          
      }
      return obj;
    },

    add_additional_request_data: function( request_attributes ){
      if ( typeof request_attributes !== "undefined" ) {
        var _request_data = Object.assign( 
          {
            product_slug : this.$store.getters.productType,
            product_id : this.$store.getters.product_id,
            Authorization : Cookies.get('GCUIA')
          },
          this.$store.getters.usrData,            
          this.add_prefix( this.$store.getters.calculationGroups, 'group_')
          );
          
        return Object.assign( request_attributes, _request_data );        
      }

      return request_attributes;
    },

    beforeSend: function( xhr ){
      var data = JSON.parse( JSON.stringify( this.request_attributes ) );

      var markups = JSON.parse( JSON.stringify( this.markups ) );
      Object.assign( data, markups );

      for( var i in data){
        xhr.setRequestHeader( i, data[i] );
      }
        
    },

    success: function( data ){
      this.bussy = false;
      this.$store.commit( 'recieveCalculation', { calculation: data, root: this.$root });

      var calculation_id = data.calculation_id;
      var calculations = this.$localStorage.get('calculations');  
      calculations[ calculation_id ] = data;
      this.$localStorage.set('calculations', calculations );
    },

    request_calculation: function( ){
      debugger
      this.bussy = true;

      jQuery.ajax({         
          type: "GET",
          url: "http://localhost/gaadcalcapi/wp-json/gcalc/v1/c",           
          data: {},
          success: this.success,          
          beforeSend: this.beforeSend,
          dataType: 'json'
        });

    },

    get_validation_errors_raport: function( ){
      
      var r = {
        errors : this.$store.getters.notifications__errors.length,
        warnings : this.$store.getters.notifications__warnings.length,
        infos : this.$store.getters.notifications__infos.length
      };

      this.tooltip_title = [
          this.$root.__tr( 'errors' ) + ': ' + this.$store.getters.notifications__errors.length + ', ',
          this.$root.__tr( 'warnings' ) + ': ' + this.$store.getters.notifications__warnings.length + ', ',
          this.$root.__tr( 'infos' ) + ': ' + this.$store.getters.notifications__infos.length
      ].join('');
      return r;
    },

    get_input_attr : function(){
        var raw = this.input.out;


        var custom = typeof this.input.custom  === "undefined" ? this.input.custom : {};
        if ( typeof raw === "undefined" || typeof raw.quantity === "undefined" ) { return {} }

        var combined = Object.assign(raw, custom);
        var opt_attr = this.$store.getters.opt_attr;
        var opt_attr_grups = //this.$store.getters.opt_attr_grups;

        this.$store.getters.ui.calculationComposer.$root.$refs["router-view"].$children[0].$refs["input-form"].$children[0].optional_attributes_groups;
        var tmp = {};
debugger
        var patt = [];
        for( var i in opt_attr_grups ){
          patt.push( i ); 
        }
        patt = patt.join('|');

        for( var i in combined ){
          var patt = new RegExp( patt );
          var match = patt.test( i );
          if ( match ) {
            //attribute is on list optional attr
            
            if ( opt_attr[ patt.exec( i )[0] ] == 'true' || opt_attr[ patt.exec( i )[0] ] === true ? true : false ) { //use it
              tmp[ 'pa_' + i ] = combined[ i ];
            } 

          } else tmp[ 'pa_' + i ] = combined[ i ];
        }
        
      this.request_attributes = this.add_additional_request_data( tmp );
      this.errors_raport = this.get_validation_errors_raport();
      this.valid = this.errors_raport.errors == 0;


      EventBus.$emit('calculation-change', { request_attributes : this.request_attributes } );

      return combined;
    },

    validate_attributes: function( ){

     //if ( typeof this.$root.$refs['router-view'].$refs[ 'input-form' ] === "undefined" ) { return; }

      var composer_validation_data = this.$store.getters.composer_validation_data;
       // need to be checked, no idea if needed component will alwals be on index 0
      var product_input_form = this.$root.$refs['router-view'].$children[0].$refs[ 'input-form' ].$refs[ 'product-input-form' ];

      if ( typeof this.calculation_attributes.Authorization === "undefined" ) {
        this.calculation_attributes = this.get_input_attr();
      }

      debugger
      for( var i in composer_validation_data ){
        delete validator;
        var rule = composer_validation_data[ i ];
        eval( rule.validator );
        
        if ( typeof validator === "function" ) {
          validator( this.calculation_attributes, product_input_form );
        }
      }

      this.errors_raport = this.get_validation_errors_raport();
      this.valid = this.errors_raport.errors == 0;

      if ( this.valid ) {
        
         EventBus.$emit( 'product-changed' );
      }
    }


  }
  
});