var e_total_production_process___gcalcui = Vue.component('e-total-production-process', {
  
  template: '#template-gcalcui-e-total-production-process',
  
  props: ['process'],
  
  data: function() {
    return {      
      	name: typeof this.process != 'undefined' ? this.process.total.name : '',
    		markup: typeof this.process != 'undefined' ? this.process.total.markup : '',
    		markup_value: typeof this.process != 'undefined' ? this.process.total.markup_value : '',
    		name: typeof this.process != 'undefined' ? this.process.total.name : '',
    		production_cost: typeof this.process != 'undefined' ? this.process.total.production_cost : '',
    		total_price: typeof this.process != 'undefined' ? this.process.total.total_price : ''
    }
  },
  
  watch: {
    process: function( val ){
        this.name = this.process.total.name;
        this.markup = this.process.total.markup;
        this.markup_value = this.process.total.markup_value;
        this.name = this.process.total.name;
        this.production_cost = this.process.total.production_cost;
        this.total_price = this.process.total.total_price;        
    }

  },

  methods: {
   
  }
  
});






