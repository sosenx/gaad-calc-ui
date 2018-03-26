var pa_format_form_attr___gcalcui = Vue.component('pa-format-form-attr', {
  
  template: '#template-gcalcui-pa-format-form-attr',
  
  props: ['name', 'label' ],
  
  data: function() {
    var r =  {         	
    	selected: this.$parent.$parent[ 'pa_' + this.name ],
    	value : null,
    	options :  this.$parent.$parent.values[ this.name ],
      	field: this.$parent.$parent.fields[ 'pa_' + this.name ],
      	values: this.$parent.$parent.values[ this.name ],
      	n: this.name,
cw :0,
ch :0

    }

	r.field.label = typeof this.label !== "undefined" ? this.label : this.name;

	//custom value selected detection 
	var patt = new RegExp(/custom/);
	r.custom_value = patt.test(r.selected);
	
    return r;
  },


  computed:{

  	custom_value_data: function( comp ){
  		return this.cw + 'x' + this.ch;
  	}
  },

  watch: {
    selected: function( val ) {
    	var patt = new RegExp(/custom/);
		this.custom_value = patt.test(val);
    }
  },

  methods: {
   	changeSelected: function( val ){
   		this.selected = val;
   	}
  }
  
});