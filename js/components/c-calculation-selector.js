

var c_calculation_selector___gcalcui = Vue.component('c-calculation-selector', {
  
  template: '#template-gcalcui-c-calculation-selector',
      data: function() {
    return {      
      calculations : this.$store.getters.calculations,
      calculation_id : "",
      
    }
  },

  computed: {
    options: function( calculations ){
        var options = [];
        for( var i in this.calculations ){
          var calculation = this.calculations[ i ];
      		var calculation_id = calculation.output.cid;	
      		      
      var product_slug  = this.$root.__tr( calculation.output.a.product_slug );
      var pa_quantity = calculation.output.a.pa_quantity + this.$root.__tr( 'pcs.' );
      var average_markup  = '(' + this.$root.round( calculation.output.t.average_markup ) + ')';
      var calculation_name = [ calculation_id + ' - ', product_slug, pa_quantity, average_markup ].join( ' ' )
         // debugger 

      		options.push( { value: calculation_id, text: calculation_name } );
        }
        return options;
    },

  },

  watch:{ 
    
    calculation_id: function( calculation_id ){
      EventBus.$emit( 'selected-for-archivization', { calculation_id : calculation_id } );
     
    }

  },

  methods: {    
    
  }
});