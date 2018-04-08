var c_calculation_product_selector___gcalcui = Vue.component('c-calculation-product-selector', {
  template: '#template-gcalcui-c-calculation-product-selector',
    data: function() {
    return {      
      products : this.$store.getters.productsList,
      productType : this.$store.getters.productType,
      
    }
  },

  computed: {
    options: function( products ){
      var options = [];
      for( var i in this.products ){
        options.push( { value: i, text: this.$root.__tr( i ) } );
      }
      return options;
    },

  },

  watch:{ 
    
    productType: function( productType ){
      
      this.$store.commit( 'setProductType', productType );
      var component = this.$store.getters.productsList[ productType.replace( '-', '_' ) ]
      if( typeof component !== "undefined" && component.component  ){
        this.$store.commit( 'setCalculationInputForm', { component: component.component, root: this.$root } );
      } else {        
        this.$store.commit( 'setCalculationInputForm', { component: window.c_input_form_default___gcalcui, root: this.$root } );        
      }      

      EventBus.$emit('product-reset');
    }

  },

  methods: {    
    __tr: function( string ) {    
      return typeof this.$store.getters.tr[ string ] !== "undefined" ? this.$store.getters.tr[ string ] : string;
    }
  }
});