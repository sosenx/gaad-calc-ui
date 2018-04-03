

var r_markups_manager_changer___gcalcui = Vue.component('r-markups-manager-changer', {
  
  template: '#template-gcalcui-r-markups-manager-changer',
  
  props: ['input'],
  
  data: function() {
  	
    return {      
      value: this.input.item.diff
    }
  },

  watch: {
    value: function( val ) {
    	console.log('val');
    }
  },

  methods: {
	apply_changes: function(){
   		this.$parent.apply_diff_changes( this.value, this.input);   	
   },

   cancel: function(){
   	this.$parent.cancel_diff_change();
   	
   }
  }
  
});