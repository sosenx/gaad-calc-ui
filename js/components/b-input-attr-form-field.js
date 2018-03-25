

var b_input_attr_form_field___gcalcui = Vue.component('b-input-attr-form-field', {
  
  template: '#template-gcalcui-b-input-attr-form-field',
  
  props: ['name'],
  
  data: function() {
    return {     
    	ui_component : this.get_dedicated_ui_component(),
    	selected: null,
    	options : this.parse_options( this.$parent.values[ this.name ] ),
      	field: this.$parent.fields[ 'pa_' + this.name ],
      	value: this.$parent.values[ this.name ]
    }
  },

  watch: {
    name: function( val ){
    }
  },

	methods: { 
		/**
		 * Checks if dedicated attribute form component exists and returns it if true.
		 *  
		 * @return {boolean|vueComponent} 
		 */
		get_dedicated_ui_component: function(){
			var component = window['pa_' + this.name + '_form_attr___gcalcui'];
			return typeof component !== "undefined" ? component : false;			
		},

	   parse_options: function( options ){
		   	var opt = [];
		   	for (var i = 0; i < options.length; i++) {
		   		var value = options[i];
		   		var text = this.$root.__tr( options[i] );
				opt.push({ text : text, value : value });
		   	}
		   	this.selected = options[0];
		   	return opt;
	   	}
	}
  
});