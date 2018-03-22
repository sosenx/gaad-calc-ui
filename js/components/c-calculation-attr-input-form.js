var c_calculation_attr_input_form___gcalcui = Vue.component('c-calculation-attr-input-form', {

  

  template: '#template-gcalcui-c-calculation-attr-input-form',
    data: function() {
    return {      
      
      uiComponent : this.$store.getters.ui.inputForm,
    }
  },

  methods: {
  	/**
  	 * Translations handling
  	 * @param  {[type]} string [description]
  	 * @return {[type]}        [description]
  	 */
	__tr: function( string ) {    
      return typeof this.$store.getters.tr[ string ] !== "undefined" ? this.$store.getters.tr[ string ] : string;
    },


    calc: function(){    	
    	this.$root.calculate();      
    }
  }


});