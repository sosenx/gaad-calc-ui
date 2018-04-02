

var z_calculation_composer___gcalcui = Vue.component('z-calculation-composer', {
  
  template: '#template-gcalcui-z-calculation-composer',
  
  props: [],
  
  data: function() {
    var $r = {  
      bussy : true,
      input : {},
      calculation_attributes: {},
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
    this.$store.commit( 'setCalculationComposer', this );
    this.bussy = false;  
  },



  methods: {

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
      var data = {};
        for( var i in this.request_attributes){
          if ( typeof this.request_attributes[i] !== "object" && typeof this.request_attributes[i] !== "undefined" && this.request_attributes[i] !== null ) {
          data[i] = this.request_attributes[i];
            
          }
        }

/*
    console.log(data);
      var data = {
          "product_slug" : "book",
        //"multi_quantity" : "10,50,150",
        "pa_format" : "145x260",
        "pa_quantity" : Math.floor( Math.random() * ( 1000 - 100 + 1 ) + 100 )  ,    



        "pa_paper" : "coated-350g",
        "pa_print" : "4x4",                 
        "pa_finish" : "gloss-1x1",   
        "pa_spot_uv" : "1x0",
        "pa_folding" : "half-fold",
        "pa_cover_format" : "175x235",
        "pa_cover_paper" : "coated-300g",
        "pa_cover_print" : "4x0",    
        "pa_cover_type" : "hard",    
        //"pa_cover_dust_jacket_paper" : "coated-150g",
        //"pa_cover_dust_jacket_print" : "4x4",
        //"pa_cover_dust_jacket_finish" : "0x0",
        //"pa_cover_dust_jacket_spot_uv" : "1x0",
        "pa_cover_cloth_covering_paper" : "uncoated-150g",
        "pa_cover_cloth_covering_finish" : "gloss-1x0",
        "pa_cover_cloth_covering_print" : "4x4",
        "pa_cover_cloth_covering_spot_uv" : "1x0",
        "pa_cover_ribbon" : true,    
        "pa_cover_finish" : "gloss-1x0",    
        "pa_cover_spot_uv" : "1x1",
        "pa_cover_flaps" : true,
        "pa_cover_left_flap_width" : 100,
        "pa_cover_right_flap_width" : 100,
        "pa_cover_board_thickness" : "2.5mm",
        "pa_bw_pages" : 100,
        "pa_bw_format" : "175x235",
        "pa_bw_paper" : "ekobookw-70g-2.0",
        "pa_bw_print" : "1x1", 
        "pa_color_pages" : 100,
        "pa_color_format" : "210x297",
        "pa_color_paper" : "coated-135g",
        "pa_color_print" : "4x4",
        "pa_color_stack" : "stack", 
        "group_cover" : "",
        "group_bw" : "",
        "group_color" : "", 
        "apikey" : "g1a2a3d",
        "apisecret" : "k1o2o3t",
        "Authorization":"Basic Z2FhZDprb290MTIz "
        }
console.log(data);*/


      for( var i in data){
        xhr.setRequestHeader( i, data[i] );
      }
        
       

    },

    success: function( data ){
      debugger
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