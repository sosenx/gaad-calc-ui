

var z_calculation_composer___gcalcui = Vue.component('z-calculation-composer', {
  
  template: '#template-gcalcui-z-calculation-composer',
  
  props: [],
  
  data: function() {
    var $r = {  
      input : {},
      calculation_attributes: {}
    }

    return $r;
  },

  watch: {
    
    input: function( val ){
      this.calculation_attributes = this.get_input_attr();
    },
    
  },

  computed:{

   

  },

  mounted: function() {
    this.$store.commit( 'setCalculationComposer', this );
   
  },

  methods: {
    

  get_input_attr : function(){
      var raw = this.input.out;
      var custom = this.input.custom;

      
      return Object.assign(raw, custom);
    }


  }
  
});