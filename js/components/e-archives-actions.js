

var e_archives_actions___gcalcui = Vue.component('e-archives-actions', {
  
  template: '#template-gcalcui-e-archives-actions',
  
  props: ['calculation_id'],
  
  data: function() {
    return {      
      calculation: this.$root.get_calculation_data( this.calculation_id )
    }
  },

  watch: {
    calculation_id: function( val ){
      this.calculation = this.$root.get_calculation_data( val );
    }
  },

  methods: {
   
  }
  
});