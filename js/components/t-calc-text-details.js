

var t_calc_text_details___gcalcui = Vue.component('t-calc-text-details', {
  
  template: '#template-gcalcui-t-calc-text-details',
  
  props: [],
  
  data: function() {
    return {      
    	calculation_details:{},
    	product_slug : false,
    	component_name : ''
    }
  },

  watch:{

  	calculation_details:function(){
  		if ( typeof this.calculation_details.product_slug !== "undefined") {
  			this.product_slug = this.calculation_details.product_slug;
  		} else {			 
  			this.product_slug = this.$store.getters.current_product_slug;
  		}
  	},

    product_slug:function( val ){
       if ( val ) {       
        this.component_name = this.get_component_name( val );
       } else {
        this.component_name = false;
       }
     }
  },
  
created: function() {
    this.reload_data();
  },

  mounted: function() {
    EventBus.$on( 'selected-for-archivization', this.get_for_archivization );
    EventBus.$on('calculation-change', this.update_calculation_details );
    EventBus.$on('product-reset', this.product_reset );
    EventBus.$on('product-changed', this.reload_data );
  },

  methods: {



    get_for_archivization: function( val ){
      var calculation = this.$store.getters.calculations_by_cid[ val.calculation_id ];
      if ( typeof calculation !== "undefined" ) {
        this.calculation_details = calculation.output.a;
        
      }
    },

    get_component_name: function( val ){
      var patt = new RegExp( '^t-(.*)$' );
      patt = patt.exec( this.$vnode.componentOptions.tag );
      return 's-' + patt[1] + '-' + val;
    },

  	reload_data: function(){ 
      this.product_slug = this.$store.getters.current_product_slug;
  		this.component_name = this.get_component_name( this.product_slug);
    },

	product_reset: function( val ){		
		console.log('calc text details product_reset');
		this.calculation_details =	{};
		this.product_slug        = 	false;
		this.component_name      = 	'';				
	},


   update_calculation_details:function( attributes ){
		this.calculation_details = attributes;
   	
   }
  }
  
});