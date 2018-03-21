var c_calculation_product_selector___gcalcui = Vue.component('c-calculation-product-selector', {
  template: '#template-gcalcui-c-calculation-product-selector',
    data: function() {
    return {      
      products : this.$store.getters.productsList,
      productType : this.$store.getters.productType

    }
  },

  watch:{

    productType: function( productType ){
      
      this.$store.commit( 'setProductType', productType );
      var component = this.$store.getters.productsList[ productType.replace( '-', '_' ) ]
      if( typeof component !== "undefined" && component.component  ){
        this.$store.commit( 'setCalculationInputForm', component.component );
      } else {        
        this.$store.commit( 'setCalculationInputForm', window.c_input_form_default___gcalcui );        
      }      
    }

  },

  methods: {    
    __tr: function( string ) {    
      return typeof this.$store.getters.tr[ string ] !== "undefined" ? this.$store.getters.tr[ string ] : string;
    }
  }
});