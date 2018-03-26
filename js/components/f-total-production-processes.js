

var f_total_production_processes___gcalcui = Vue.component('f-total-production-processes', {
  
  template: '#template-gcalcui-f-total-production-processes',
  
  props: ['calculation_id'],
  
  data: function() {
    return {            
      processes : null
    }
  },

  watch: {
    calculation_id: function( val ){      
      this.get_processes();
    }
  },

  created: function(){
     var processes = this.$root.get_calculation_data( this.calculation_id );
     return typeof processes !== "undefined" ? processes.output.d : [] ;      
  },

  methods: {
   
   get_processes: function(){
    var processes = this.$root.get_calculation_data( this.calculation_id );      
    return this.processes = typeof processes !== 'undefined' ? processes.output.d : null;
   }
  }
  
});