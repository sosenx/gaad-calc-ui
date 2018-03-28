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
		cw : null, //custom width
		ch : null//custom height

    }

	r.field.label = typeof this.label !== "undefined" ? this.label : 'Format';

	//custom value selected detection 
	var patt = new RegExp(/custom/);
	r.custom_value = patt.test(r.selected);
	
    return r;
  },

/*
  computed:{

  	custom_value_data: function( comp ){
  		var custom_value = this.cw + 'x' + this.ch;
  		this.$parent.$parent.custom[ 'pa_' + this.name ] = custom_value;
  		return custom_value;
  	}
  },
**/
  watch: {
    custom_value: function( val ){
      if ( typeof this.$parent.$parent.custom[ 'pa_' + this.name ] !== "undefined" ) {
      delete this.$parent.$parent.custom[ 'pa_' + this.name ];
    }  		
    },
    cw: function( val ){
      var custom_value = this.cw + 'x' + this.ch;
      this.$parent.$parent.custom[ 'pa_' + this.name ] = custom_value;
      
      this.$store.commit( 'setCurrentCustom', this.$parent.$parent.custom );
    },

    ch: function( val ){
      var custom_value = this.cw + 'x' + this.ch;
      this.$parent.$parent.custom[ 'pa_' + this.name ] = custom_value;
      
      this.$store.commit( 'setCurrentCustom', this.$parent.$parent.custom );
    },
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