var x_markups_input_form___gcalcui = Vue.component('x-markups-input-form', {
  
  template: '#template-gcalcui-x-markups-input-form',
  
  props: [ ],
  
  data: function() {
    return {      
     	markups_changes: {},
     	markups_ : {},
     	validations: this.create_validations
    }
  },

  watch: {
   
  },

  mounted: function() {
   
  },

	created: function() {
		var markups_changes = this.$store.getters.markups_changes;
		if ( typeof markups_changes !== "undefiend" ) {
			this.markups_changes = markups_changes;
		}  

		for( markup in this.markups_changes ){
			var val = this.markups_changes[ markup ];
			this.markups_[ markup ] = val.default;
			
		} 
	},

  methods: {

  	create_validations:function(){
debugger

	
  	},

   markups_changed:function(){
		this.$root.$emit( 'markups-change', this.markups_ );
   }
  }
  
});