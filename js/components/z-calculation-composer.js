

var z_calculation_composer___gcalcui = Vue.component('z-calculation-composer', {
  
  template: '#template-gcalcui-z-calculation-composer',
  
  props: [],
  
  data: function() {
    var $r = {  
      input : {},
      calculation_attributes: {},
      request_attributes : {}
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
    this.$store.commit( 'setCalculationComposer', this );   
  },

  methods: {
    
    attribute_valid: function( data ){
      console.log(data);
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
              tmp[ i ] = combined[ i ];
            } 

          } else tmp[ i ] = combined[ i ];
        }
        
      this.request_attributes = tmp;
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
    }


  }
  
});