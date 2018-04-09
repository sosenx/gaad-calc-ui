

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
		var calculation_name = calculation_id;
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