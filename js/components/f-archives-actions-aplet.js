

var f_archives_actions_aplet___gcalcui = Vue.component('f-archives-actions-aplet', {
  
  template: '#template-gcalcui-f-archives-actions-aplet',
  
  props: [],
  
  data: function() {
    return {      
      show_ui : false,
      load_cid : null,
      calculation : null,
    }
  },

  mounted: function(){
  	EventBus.$on( 'archives-row-dblclicked', this.show_acalculation_actions );
  },

  watch: {
    cid: function(){
    	debugger
    }
  },

  methods: {
  	show_acalculation_actions:function( data ){
  		this.load_cid = data.item.cid;
  		this.show_ui = true;
  	}
  }
  
});