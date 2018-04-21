

var f_archives_actions_aplet___gcalcui = Vue.component('f-archives-actions-aplet', {
  
  template: '#template-gcalcui-f-archives-actions-aplet',
  
  props: [],
  
  data: function() {
    return {      
      
    }
  },

  mounted: function(){

  	EventBus.$on( 'archives-row-dblclicked', this.show_acalculation_actions );

  },

  watch: {
    
  },

  methods: {
   show_acalculation_actions:function( data ){

   	debugger
   }
  }
  
});