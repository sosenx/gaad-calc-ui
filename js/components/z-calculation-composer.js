

var z_calculation_composer___gcalcui = Vue.component('z-calculation-composer', {
  
  template: '#template-gcalcui-z-calculation-composer',
  
  props: [],
  
  data: function() {
    var r = {  
      input : {}
    }

    return r;
  },

  watch: {
    
    
    
  },



  mounted: function() {
    this.$store.commit( 'setCalculationComposer', this );
   
  },

  methods: {
    aquire_data: function(){
      debugger

    }
  }
  
});