

var z_calculation_composer___gcalcui = Vue.component('z-calculation-composer', {
  
  template: '#template-gcalcui-z-calculation-composer',
  
  props: [],
  
  data: function() {
    var $r = {  
      input : {},
      calculation_attributes: {}
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
      return Object.assign(raw, custom);
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


/*
    validate_attributes: function( ){
      var composer_validation_data = this.$store.getters.composer_validation_data;
      

      for( var i in composer_validation_data ){
        delete validator;
        delete fixer;

        var product_input_form = this.$root.$refs.calculation.$refs[ 'input-form' ].$refs[ 'product-input-form' ];
        var rule = composer_validation_data[ i ];
        eval( rule.validator );
        eval( rule.fixer );
        if ( typeof validator !== "undefined") {
            var valid = validator( this.calculation_attributes, product_input_form );
            
            if ( typeof valid === 'object') {
              var valid_return = valid;
              valid = valid.valid;
            }


            if ( rule.attr_name === "color_pages") {
              debugger
            }




            if ( !valid  ) {
              var fixed = fixer( this.$root.$refs.calculation.$refs[ 'input-form' ].$refs[ 'product-input-form' ] );
              
              var attr_ui = product_input_form.$refs[ rule.attr_name ];
              var infobox = typeof attr_ui === "undefined" ? 'other' : attr_ui.infobox;
              
              if ( fixed !== false ) {                
                this.$store.getters.infobox[infobox].addInfo({ msg: rule.msg.fixer.fixed, attr_name: rule.attr_name });
                //fixing display value
                attr_ui.$children["0"]._data.localValue = fixed;
                attr_ui.$children["0"].$refs.input.value = fixed;
               
              } else {
                this.$store.getters.infobox[infobox].addError({ msg: rule.msg.fixer.unfixed, attr_name: rule.attr_name });
                attr_ui.error = true;
              }

            } 
          
        }

      }

     // debugger
    //  this.$store.getters.infobox.basics.addError({ type: 'fatal', msg: 'chuje dwa'})
    }

*/
  }
  
});