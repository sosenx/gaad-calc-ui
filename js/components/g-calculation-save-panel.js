

var g_calculation_save_panel___gcalcui = Vue.component('g-calculation-save-panel', {
  
  template: '#template-gcalcui-g-calculation-save-panel',
  
  props: [],
  
  data: function() {
    return {      
      calculation_id: ''
    }
  },

  mounted: function(){

    EventBus.$on( 'selected-for-archivization', this.set_calculation_id );
  },

  created: function(){
/*
    if ( this.$store.getters.current_calculation_id === "" ) {
      this.$router.push({ name: 'new_calculation' });
    }
    */
  },

  watch: {
    
  },

  methods: {
   set_calculation_id: function( data ){
    var calculation_id = data.calculation_id;
    this.calculation_id = calculation_id;
   }
  }
  
});