

var b_input_attr_form_field___gcalcui = Vue.component('b-input-attr-form-field', {
  
  template: '#template-gcalcui-b-input-attr-form-field',
  
  props: [ 'name', 'label', 'sufix', 'infobox' ],
  
  data: function() {
    var r =  {   
    	disabled : false,
    	error : false,  
    	warning : false,  
    	ui_component : this.get_dedicated_ui_component(),
    	selected: this.$parent[ 'pa_' + this.name ],
    	value : this.get_value( this.name ),
    	options :  this.$parent.values[ this.name ],
      	field: this.$parent.fields[ 'pa_' + this.name ],
      	values: this.$parent.values[ this.name ],
      	n: this.name
    }
	//r.selected = r.field.default;
	r.field.label = typeof this.label !== "undefined" ? this.label : this.name;
	
    return r;
  },

  watch: {
    
  },

	methods: { 
		get_value: function( name){
			var r = this.$parent[ 'pa_' + name ];
			return r;
		},

		disable_ui: function(){
			this.disabled = true;
		},

		enable_ui: function(){
			this.disabled = false;
		},

		set_error: function(){
			this.error = true;
		},

		unset_error: function(){
			this.error = false;
		},

		set_warning: function(){
			this.warning = true;
		},

		unset_warning: function(){
			this.warning = false;
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

		get_attr_value_label:function( value ){
			if (typeof this.$parent.values_names[ this.name ] === "object" && typeof this.$parent.values_names[ this.name ][value] !== "undefined") {
				return this.$parent.values_names[ this.name ][value];
			}
		return value;
		},

	   parse_options: function( options ){
		   	var opt = [];
		   	if ( typeof options === "undefined") {return opt;}

		   	for (var i = 0; i < options.length; i++) {
		   		var text = this.$root.__tr( this.get_attr_value_label(options[i]) );
		   		var value = options[i];
				opt.push({ text : text, value : value });
				
		   	}
		   	this.selected = options[0];
		   
		   	return opt;
	   	}
	}
  
});