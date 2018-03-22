var c_total_basic___gcalcui = Vue.component('c-total-basic', {

  props: ['calculation_id'],

  template: '#template-gcalcui-b-total-basic',
    data: function() {
    return {
      //calculation_id : this.$store.getters.current_calculation_id,
      calculation: this.get_calculation_data()
    }
  },

  watch: {

    calculation_id: function( val ){
      this.calculation = this.get_calculation_data();
    }
  },

  methods: {
    get_calculation_data: function() {      
      var calculation_id = this.$store.getters.current_calculation_id;

      if ( calculation_id.length > 0 ) {
        var calculations = this.$store.getters.calculations;

        for (var i = calculations.length - 1; i >= 0; i--) {
          var calculation = calculations[i];
          if ( calculation.calculation_id === calculation_id ) {
            var _calculation = calculation;
            break;
          }               
        }

        if ( typeof _calculation !== "undefined" ) {
          return _calculation;
        }

      }     
    }



  }
});