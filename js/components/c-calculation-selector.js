

var c_calculation_selector___gcalcui = Vue.component('c-calculation-selector', {
  
  template: '#template-gcalcui-c-calculation-selector',
      data: function() {
    return {      
      calculations : this.$store.getters.calculations,
      calculation_id : this.$store.getters.current_calculation_id,
      valid: false
    }
  },

  computed: {
    options: function( calculations ){
        var options = [];
        for( var i in this.calculations ){
          var calculation = this.calculations[ i ];
      		var calculation_id = calculation.output.cid;	

          var product_slug  = this.$root.__tr( calculation.output.a.product_slug );
          var product_type  = this.get_product_type_string( calculation );

          var pa_quantity = calculation.output.a.pa_quantity + this.$root.__tr( 'pcs.' );
          var average_markup  = this.$root.round( calculation.output.t.average_markup * 100 ) + "%";
          var total_cost = this.$root.round( calculation.output.t.total_cost_ ) + ' ' + this.$root.__tr( 'zł' );

        var bw_pages = parseInt( calculation.output.a.pa_bw_pages ) > 0 ? parseInt( calculation.output.a.pa_bw_pages ) : false;
        var color_pages = parseInt( calculation.output.a.pa_color_pages ) > 0 ? parseInt( calculation.output.a.pa_color_pages ) : false;

      var calculation_name = [ 
        product_slug,
        product_type,
        pa_quantity
        ];

        if ( bw_pages ) {
          calculation_name.push( this.$root.__tr( 'BW:' ) + ' ' + bw_pages ); 
        }
        if ( color_pages ) {
          calculation_name.push( this.$root.__tr( 'Col:' ) + ' ' + color_pages ); 
        }

        calculation_name.push( total_cost );
        calculation_name.push( average_markup );
        calculation_name.push( calculation_id );

         // debugger 

      		options.push( { value: calculation_id, text: calculation_name.join( ' | ' ) } );
        }
        return options;
    },

  },


  mounted: function(){
     EventBus.$emit( 'selected-for-archivization', { calculation_id : this.calculation_id } );
     EventBus.$on( 'reset-ui', this.reset_ui );
     EventBus.$on( 'save-calculation-done', this.save_calculation_done );

     if ( this.options.length === 0 ) {
        this.$parent.show_ui = false;
     }

     this.valid = true;
  },

 watch:{ 
    
    calculation_id: function( calculation_id ){
      EventBus.$emit( 'selected-for-archivization', { calculation_id : calculation_id } );
     this.valid = true;
    }

  },

  methods: {
    /**
     * Returs string of product type depending on product slug.
     * Eg.: For book it will depend on cover type 
     * 
     * @param  {[type]} product_slug [description]
     * @return {string}              [description]
     */
    get_product_type_string: function( calculation ){
      var product_slug = calculation.output.a.product_slug;
      var product_type_string;

      switch ( product_slug ) {
        case 'book' :
          var cover_type = calculation.output.a.pa_cover_type;
          product_type_string = this.$root.__tr( cover_type );        
        break;
        
        default : 
          product_type_string = this.$root.__tr( 'Unknown product' );
        break;

      }

      return product_type_string;
    },

    save_calculation_done: function( data ){
      this.$store.dispatch( 'deleteCalculation', data );
    },

    reset_ui:function(){
      this.valid = false;
      this.calculation_id = '';
      
    }
  }
});