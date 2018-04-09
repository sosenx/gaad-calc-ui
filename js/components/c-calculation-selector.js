

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
       debugger 
       // options.push( { value: i, text: this.$root.__tr( i ) } );
      }
      return options;
    },

  },

  watch:{ 
    
    calculation_id: function( calculation_id ){
      
     debugger
    }

  },

  methods: {    
    
  }
});