

var e_total_calculation___gcalcui = Vue.component('e-total-calculation', {
  
  template: '#template-gcalcui-e-total-calculation',
  
  props: ['calculation'],
  
  data: function() {
    return {      
      calculation_id : this.calculation.calculation_id
    }
  },

  watch: {

  },

  methods: {

  	is_current: function(){
  		return this.calculation.calculation_id === this.$store.getters.current_calculation_id;  		
  	},

   	set_as_current:function( event ){
   		this.$store.commit('setCurrentCalculation', {calculation_id: this.calculation_id, root: this.$root } );   
      

   	}

  }
  
});