

var z_calculation_composer___gcalcui = Vue.component('z-calculation-composer', {
  
  template: '#template-gcalcui-z-calculation-composer',
  
  props: [],
  
  data: function() {
    var $r = {  
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
    
    input: function( val ){
      this.calculation_attributes = this.get_input_attr();
      setTimeout( this.validate_attributes, 100 ); //validation need to be triggered after all rendering events
    }

  },

  computed:{

  },

  mounted: function() {
    this.$root.$on( 'markups-change', this.update_markups );
    this.$root.$on( 'request-calculation', this.request_calculation );

    this.$store.commit( 'setCalculationComposer', this );
    this.bussy = false;  
  },



  methods: {

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
        var custom = this.input.custom;
        var combined = Object.assign(raw, custom);
        var opt_attr = this.$store.getters.opt_attr;
        var opt_attr_grups = this.$store.getters.opt_attr_grups;
        var tmp = {};

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
      return combined;
    },

    validate_attributes: function( ){

      var composer_validation_data = this.$store.getters.composer_validation_data;
      var product_input_form = this.$root.$refs.calculation.$refs[ 'input-form' ].$refs[ 'product-input-form' ];
      
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

    }


  }
  
});