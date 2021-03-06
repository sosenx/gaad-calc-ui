var c_total_basic___gcalcui = Vue.component('c-total-basic', {
  
  template: '#template-gcalcui-b-total-basic',
  
  props: ['calculation_id' ],
  
  data: function() {

    return {      
      calculation: this.$root.get_calculation_data(),
      $totals: {},
      totals: {},
      avg_totals : {},
      T : null,
      recalculate_mode : false
    }
  },


  computed: {

/*
    totals: function ( ) {
       
      },*/
  },

  watch: {
    calculation_id: function( val ){

      var calculation = this.$root.get_calculation_data( val );
      if ( typeof calculation !== "undefined") {
        this.calculation = calculation;
        this.set_val( JSON.parse( JSON.stringify( calculation.$markups ) ) );
      }
      
    },

  },
   
created: function(){
  if ( this.calculation_id !== "") {
      var calculation = this.$root.get_calculation_data( this.calculation_id );
      if ( typeof calculation !== "undefined") {
        this.calculation = calculation;
        this.set_val( JSON.parse( JSON.stringify( calculation.$markups ) ) );
      }
  }

},

    mounted: function(){
      EventBus.$on( 'reset-ui', this.reset_ui );
      EventBus.$on( 'product-reset', this.product_reset );
      EventBus.$on( 'input-attr-changed', this.product_reset );
      this.$root.$on( 'markups-change', this.recalculate_needed );

      EventBus.$on( 'change-calculation', this.calculation_changed );
      EventBus.$on( 'change-calculation', this.recalculate_reset );
      EventBus.$on( 'change-calculation-markups', this.calculation_markups_changed );

      EventBus.$on( 'selected-for-archivization', this.calculation_changed );
    },  

  methods: {

    reset_ui: function(){
      this.$totals    = {};
      this.totals     = {};
      this.avg_totals = {};
      this.T          = null;
    },

    recalculate_needed:function(){ 
      this.recalculate_mode = true; 
    },
    recalculate_reset:function(){ 
      this.recalculate_mode = false; 
    },


    product_reset:function(){
      this.calculation = this.$root.get_calculation_data();
      this.$totals = {};
      this.totals = {};
      this.avg_totals =  {};
      this.T =  null;

    },

    calculation_markups_changed: function( data ){
      
      setTimeout( this.get_new_totals, 1000, data);
      
    },

    calculation_changed: function( data ){
     // console.log( 'calculation_changed::totals basic', data )
      setTimeout( this.get_new_totals, 1000, data );
    },
    /**
     * Triggers when calculation is changed by markup manager
     * @param  {[type]} a [description]
     * @param  {[type]} b [description]
     * @return {[type]}   [description]
     */
    get_new_totals:function( data ){

      if ( this.$route.name === "save_calculation" ) {
        if ( typeof this.$parent.collect_data !== "undefined" ) {

          this.$parent.collect_data();
        }
      }

      if ( this.$route.name === "new_calculation" ) {
        var $markups = this.$store.getters.current_calculation.$markups;
        var markups = JSON.parse( JSON.stringify( $markups ) );
        this.set_val( markups );
      }
      
    },

   set_val:function( val ){

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

    
    

   if ( typeof process_data_avg === "undefined" || process_data_avg === null) { return []; }
    var totals = [];

    var zakup = process_data_avg.production_cost ;
    var cena = process_data_avg.total_price;
    var kwotowa =  cena - zakup;
    var od_sta = kwotowa / zakup;

    totals.push({
        avg_markup : this.$root.round( od_sta + 1 ) + ' (' + this.$root.round( od_sta * 100 ) + '%)' ,
        profit : this.$root.round( process_data_avg.profit ),
        production_cost : this.$root.round( process_data_avg.production_cost ),
        total_price : this.$root.round( process_data_avg.total_price )
    });
   console.log('basic set', totals );
    
this.T = totals;



   }
  }

});


