var c_calculation_product_selector___gcalcui = Vue.component('c-calculation-product-selector', {
  template: '#template-gcalcui-c-calculation-product-selector',
    data: function() {
    return {      
      products : this.$store.getters.productsList,
      productType : ''

    }
  },

  watch:{

    productType: function( productType ){
      
      this.$store.commit( 'setProductType', productType );
      var component = this.$store.getters.productsList[ productType.replace( '-', '_' ) ]
      if( typeof component !== "undefined" && component.component  ){
        this.$store.commit( 'setCalculationInputForm', component.component );
      } else {
        debugger
        this.$store.commit( 'setCalculationInputForm', window.c_input_form_default___gcalcui );        
      }      
    }

  },

  methods: {
    some_method: function() {
      // code here
    }
  }
});