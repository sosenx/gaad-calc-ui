

var f_total_production_processes___gcalcui = Vue.component('f-total-production-processes', {
  
  template: '#template-gcalcui-f-total-production-processes',
  
  props: ['calculation_id'],
  
  data: function() {
    return {      
      calculation: this.$root.get_calculation_data(),
      processes : null
    }
  },

  watch: {
    calculation_id: function( val ){
      this.calculation = this.$root.get_calculation_data();
      this.processes = this.calculation.output.d;
    }
  },

  methods: {
   
  }
  
});