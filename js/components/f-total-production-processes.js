

var f_total_production_processes___gcalcui = Vue.component('f-total-production-processes', {
  
  template: '#template-gcalcui-f-total-production-processes',
  
  props: [],
  
  data: function() {
    return {      
     calculation_id : '',

      proc : []
    }
  },

  mounted(){
    EventBus.$on( 'change-calculation', this.calculation_changed );      
  },

  methods: {
    calculation_changed: function( data ){
      this.calculation_id = data.calculation_id;
      this.get_processess();
    },

    get_processess: function( data ){
      debugger
    }
  }

});