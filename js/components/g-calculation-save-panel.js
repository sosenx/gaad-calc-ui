

var g_calculation_save_panel___gcalcui = Vue.component('g-calculation-save-panel', {
  
  template: '#template-gcalcui-g-calculation-save-panel',
  
  props: ['calculation_id'],
  
  data: function() {
    return {      
      
    }
  },

  created: function(){

    if ( this.$store.getters.current_calculation_id === "" ) {
      this.$router.push({ name: 'new_calculation' });
    }
  },

  watch: {
    
  },

  methods: {
   
  }
  
});