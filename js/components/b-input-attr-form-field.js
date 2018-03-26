

var b_input_attr_form_field___gcalcui = Vue.component('b-input-attr-form-field', {
  
  template: '#template-gcalcui-b-input-attr-form-field',
  
  props: ['name', 'label'],
  
  data: function() {
    var r =  {     
    	ui_component : this.get_dedicated_ui_component(),
    	selected: null,
    	value : null,
    	options :  this.$parent.values[ this.name ],
      	field: this.$parent.fields[ 'pa_' + this.name ],
      	values: this.$parent.values[ this.name ],
      	n: this.name
    }
	r.selected = r.field.default;
	r.field.label = typeof this.label !== "undefined" ? this.label : this.name;
	debugger
    return r;
  },

  watch: {
    
  },

	methods: { 
		/**
		 * chuj wie czy to jest dobrze, moze validacja te sprawy powinna zalatwic
		 * @param  {[type]} value [description]
		 * @param  {[type]} event [description]
		 * @return {[type]}       [description]
		 */
		number_formatter: function( value, event ) {
	      	if ( value.length > 0) {
		      	var var_type = typeof this.field.var !== "undefined" ? this.field.var : 'string' ;
		      	switch( var_type ){
		      		case 'int' :  
		      			value = parseInt( value );
		      		break;
		      		default : break;
		      	} 
		      	
		      	var min = typeof this.field.min !== "undefined" ? this.field.min : -100000000000000000000000000000 ;	
		      	var max = typeof this.field.max !== "undefined" ? this.field.max : 100000000000000000000000000000 ;	

		      	if ( min && max) {
		      			
		      		if ( value >= min && value <= max ) {
		      			return value;
		      		} else {
		      			if ( value < min ) { value = min; }
		      			if ( value > max ) { value = max; }
		      		}

		      		return value;
		      	}	      	
      		}

   		},

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

		   	if ( typeof options === "undefined") {return opt;}

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