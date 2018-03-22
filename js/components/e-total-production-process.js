var e_total_production_process___gcalcui = Vue.component('e-total-production-process', {
  
  template: '#template-gcalcui-e-total-production-process',
  
  props: ['process'],
  
  data: function() {
    return {      
      	name: this.process.total.name,
		markup: this.process.total.markup,
		markup_value: this.process.total.markup_value,
		name: this.process.total.name,
		production_cost: this.process.total.production_cost,
		total_price: this.process.total.total_price
    }
  },
  
  methods: {
   
  }
  
});






