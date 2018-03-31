

var a_infobox_item___gcalcui = Vue.component('a-infobox-item', {
  
  template: '#template-gcalcui-a-infobox-item',
  
  props: [ 'type', 'msg' ],
  
  data: function() {
    return {      
    	icon: {
    		name : this.get_icon_name()
    	}			  
    }
  },

  watch: {
    
    
    
  },

  methods: {
   
   get_icon_name: function(){
	 	var icons = {
	 		info: 'info-circle',
	 		warning: 'exclamation-triangle',
	 		error: 'stop-circle',
	 		default: 'info-circle'
	 	};	
	 	return icons[ this.type ];	
	}



  }
  
});