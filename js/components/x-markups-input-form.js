var x_markups_input_form___gcalcui = Vue.component('x-markups-input-form', {
  
  template: '#template-gcalcui-x-markups-input-form',
  
  props: [ ],
  
  data: function() {
    return {      
     	markups_changes: {},
     	markups_ : {}
    }
  },

  watch: {
   
  },

  mounted: function() {
   EventBus.$on('product-reset', this.product_reset );
   EventBus.$on('product-changed', this.reload_data );
    this.$root.$emit( 'markups-change', this.markups_ );
  },

	created: function() {
		this.reload_data();
	},

  methods: {

    reload_data: function(){ 
      var markups_changes = this.$store.getters.markups_changes;
        if ( typeof markups_changes !== "undefiend" ) {
          this.markups_changes = markups_changes;
        }  

        for( markup in this.markups_changes ){
          var val = this.markups_changes[ markup ];
          this.markups_[ markup ] = val.default;
          
        } 
    },

    product_reset: function( ){
      this.markups_changes = {};
      this.markups_ = {};
    },

   markups_changed:function(){
		this.$root.$emit( 'markups-change', this.markups_ );
   }
  }
  
});