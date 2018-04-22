

var c_total_archives_basic___gcalcui = Vue.component('c-total-archives-basic', {
  
  template: '#template-gcalcui-c-total-archives-basic',
  
  props: ['calculation_id'],
  
  data: function() {
    return {      
      
    }
  },

  mounted: function(){

  	EventBus.$on( 'archives-row-dblclicked', this.show_acalculation_row );

  },

  watch: {
    calculation_id: function( val ){
     
    }
  },

  methods: {
   show_acalculation_row:function(){
   	debugger
   }
  }
  
});