

var f_archives_actions_aplet___gcalcui = Vue.component('f-archives-actions-aplet', {
  
  template: '#template-gcalcui-f-archives-actions-aplet',
  
  props: [],
  
  data: function() {
    return {      
      show_ui : false,
      load_cid : null,
      calculation : null,
       calculation_row:{}
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
	close_panel:function(){
		this.show_ui = false;
		debugger
		EventBus.$emit( 'archives-actions-aplet-closed' );
	},

  	show_acalculation_actions:function( data ){
  		this.calculation_row = data.item;
  		this.load_cid = data.item.cid;
  		this.show_ui = true;
  	}
  }
  
});