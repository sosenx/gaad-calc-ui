var c_calculation_attr_input_form___gcalcui = Vue.component('c-calculation-attr-input-form', {

  

  template: '#template-gcalcui-c-calculation-attr-input-form',
    data: function() {
    return {      
      
      uiComponent : this.$store.getters.ui.inputForm,
    }
  },


watch:{


},




  methods: {

   



    calc: function(){    	
    	this.$root.calculate();      
    }
  }


});