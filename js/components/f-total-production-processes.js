

var f_total_production_processes___gcalcui = Vue.component('f-total-production-processes', {
  
  template: '#template-gcalcui-f-total-production-processes',
  
  props: ['calculation_id'],
  
  data: function() {
    return {            
      processes : null,
      process_data_avg : {
        name : '',
        markup : [],
        markup_value : 0.0,
        production_cost : 0.0,
        total_price : 0.0
      }
    }
  },

  watch: {
    calculation_id: function( val ){      
      this.get_processes();
    },

  },

  computed:{

      

      totals: function ( ) {
        if ( typeof this.process_data_avg === "undefined" ) { return []; }
        var totals = [];

        var zakup = this.process_data_avg.production_cost ;
        var cena = this.process_data_avg.total_price;
        var kwotowa =  cena - zakup;
        var od_sta = kwotowa / zakup + 1;

        totals.push({
            avg_markup : od_sta + 1 ,
            profit : this.process_data_avg.profit,
            production_cost : this.process_data_avg.production_cost,
            total_price : this.process_data_avg.total_price
        });
        return totals;
      },

      items: function(){
        var items = [];
         
          if ( this.processes !== null && this.processes.length > 0 ) {
              var calc_data = this.$store.getters.calc_data;
              if ( typeof calc_data.equasion === "undefined") { return items; }
              var equasion = calc_data.equasion.split('+');
                  for( var i in equasion ){ equasion[ i ] = equasion[ i ].replace(/\s/g, ''); }
              // pieces for calculating totals, averages etc.
              var process_data_avg = {
                name : '',
                markup : [],
                profit : 0.0,
                production_cost : 0.0,
                total_price : 0.0
              }

              for( var i = 0; i < this.processes.length; i++ ){
                  var p = this.processes[ i ];
                  var name = p.total.name;
                  if ( equasion.indexOf( name ) == -1 || p.total.production_cost == 0 ) { continue; }
                    var process_data = {
                      name : this.$root.__tr( name ),
                      markup : p.total.markup,
                      profit : p.total.markup_value,
                      production_cost : p.total.production_cost,
                      total_price : p.total.total_price
                    }

                        for( var _name in process_data){
                          if ( typeof process_data_avg[ _name ] !== "undefined" ) {
                            //Object array
                            if ( typeof process_data_avg[ _name ] === "object" && typeof process_data_avg[ _name ].length !== "undefined" ) {
                                process_data_avg[ _name ].push( process_data[ _name ] );
                            }
                            //number
                            if ( typeof process_data_avg[ _name ] === "number" ) {
                              process_data_avg[ _name ] += process_data[ _name ];
                            }
                              
                          }
                        }


                    items.push( process_data );
              }
          }

      //totals row      
      this.process_data_avg = process_data_avg;

      return items;
      }
  },

  created: function(){
     var processes = this.$root.get_calculation_data( this.calculation_id );
     this.processes = typeof processes !== "undefined" ? processes.output.d : [] ;      
  },

  methods: {
   
  calc_average_markup: function ( data ) {
        var sum = 0;
        var devider = 0;    

        for( var i in data ){
          if ( typeof data[ i ] === "number" && data[i] > 1 ) {
                sum += data[i];
                devider += 1;
            }          
        }
        devider = devider === 0 ? 1 : devider;
        return sum / devider;
    },

   get_processes: function(){
    var processes = this.$root.get_calculation_data( this.calculation_id );      
    return this.processes = typeof processes !== 'undefined' ? processes.output.d : null;
   }
  }
  
});