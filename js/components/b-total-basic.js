var c_total_basic___gcalcui = Vue.component('c-total-basic', {
  
  template: '#template-gcalcui-b-total-basic',
  
  props: ['calculation_id'],
  
  data: function() {
    return {      
      calculation: this.$root.get_calculation_data()
    }
  },

  watch: {
    calculation_id: function( val ){
      this.calculation = this.$root.get_calculation_data();
    }
  },

  methods: {
   
  }

});


