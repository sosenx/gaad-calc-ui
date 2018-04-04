var c_total_basic___gcalcui = Vue.component('c-total-basic', {
  
  template: '#template-gcalcui-b-total-basic',
  
  props: ['calculation_id' ],
  
  data: function() {

    return {      
      calculation: this.$root.get_calculation_data(),
      $totals: {},
      totals: {},
      test : {},
      avg_totals : {
      }
    }
  },


  computed: {

/*
    totals: function ( ) {
       
      },*/
  },

  watch: {
    calculation_id: function( val ){
      this.calculation = this.$root.get_calculation_data();
    },

    avg_totals : function(){
       if ( typeof this.avg_totals === "undefined" || this.avg_totals === null) { return []; }
        var totals = [];

        var zakup = this.avg_totals.production_cost ;
        var cena = this.avg_totals.total_price;
        var kwotowa =  cena - zakup;
        var od_sta = kwotowa / zakup;

        totals.push({
            avg_markup : this.$root.round( od_sta + 1 ) + ' (' + this.$root.round( od_sta * 100 ) + '%)' ,
            profit : this.$root.round( this.avg_totals.profit ),
            production_cost : this.$root.round( this.avg_totals.production_cost ),
            total_price : this.$root.round( this.avg_totals.total_price )
        });
        this.totals = totals;
    },
  },

  methods: {
   set:function( val ){

    this.$totals = val;
    var process_data_avg = {
        name : '',
        markup : [],
        profit : 0.0,
        production_cost : 0.0,
        total_price : 0.0
      };

    

    for( var i in this.$totals){
      var total = this.$totals[i];
      process_data_avg.markup.push( total.markup );
      process_data_avg.production_cost += total.production_cost;
      process_data_avg.profit += total.profit;
      process_data_avg.total_price += total.total_price;
    }

    this.avg_totals = process_data_avg;
   }
  }

});


