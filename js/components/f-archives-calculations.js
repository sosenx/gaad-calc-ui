var f_archives_calculations___gcalcui = Vue.component('f-archives-calculations', {
  
  template: '#template-gcalcui-f-archives-calculations',
  
  props: ['calculation_id'],
  
  data: function() {
    return {      
      calculations: this.$store.getters.calculations
    }
  },

  watch: {
    calculation_id: function( val ){
      this.calculations = this.$store.getters.calculations;
    }
  },

  methods: {
   
  }
  
});