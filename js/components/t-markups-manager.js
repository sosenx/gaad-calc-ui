

var t_markups_manager___gcalcui = Vue.component('t-markups-manager', {
  
  template: '#template-gcalcui-t-markups-manager',
  
  props: ['calculation_id', 'tech_markups', 'recalculate'],
  
  data: function() {
    return {
      $markups: null,
      items_diff:null,
      tech: {},
      change: {},
      changer_input : {},
      mode: 'table',      
      processes : null,
      calculation: this.$root.get_calculation_data(),
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
    calculation:function(val){      
      this.processes = val.output.d; 
     // console.log( 'calculation calculation' ); 

      var $markups = this.$localStorage.get('calculations')[this.calculation_id].$markups
        this.$markups = $markups;
      
      this.$store.commit( 'setRecalculate', true ); 
    },

    recalculate:function( val ){
      
      if ( !val ) { return; }
     
        var items_diff = [];
        var items = this.items;
        var tech = this.$markups !== null ? this.$markups : this.tech;

        for( var i in items){
          for( var j in tech){
              if ( tech[j].index === parseInt(i) ) {
                var diff = tech[j].diff === 0 && parseInt(items[i].diff) > 0 ? parseInt(items[i].diff) : tech[j].diff;
              
                items_diff[i] = JSON.parse(JSON.stringify( items[i] )); //needs to a copy, not reference
               
                items_diff[i].markup = items[i].markup + diff / 100;
                items_diff[i].diff = diff; 
                items_diff[i].total_price = items_diff[i].production_cost * items_diff[i].markup;
                items_diff[i].profit = items_diff[i].total_price - items_diff[i].production_cost;
                

              }
          }
        }
        this.items_diff = items_diff;
      this.$store.commit( 'setRecalculate', false );
      
    },


    calculation_id: function( val ){
      this.calculation = this.$root.get_calculation_data();
      //this.get_items();
    },

    change: function( val ){
      if ( this.items_diff === null ) {


        var items_diff = [];
        var items = this.items;
        var tech = this.tech;

        for( var i in items){
         items_diff[i] = JSON.parse(JSON.stringify( items[i] )); //needs to a copy, not reference
              
          
        }
        this.items_diff = items_diff;

      } 

      this.items_diff[val[0]].diff = val[1];
     
      tech = this.tech;
      for( var i in tech){
          tech[i].diff = parseInt(this.items_diff[ tech[i].index ].diff);  
          console.log( this.items_diff[ tech[i].index ].diff );      
      }
      
      this.$store.commit( 'changeCalculationMarkups', {tech : tech, calculation_id : this.$parent.calculation_id, root: this } );
    }
  },


  computed:{

      

      totals: function ( ) {
        if ( typeof this.process_data_avg === "undefined" ) { return []; }
        var totals = [];

        var zakup = this.process_data_avg.production_cost ;
        var cena = this.process_data_avg.total_price;
        var kwotowa =  cena - zakup;
        var od_sta = kwotowa / zakup;

        totals.push({
            avg_markup : this.$root.round( od_sta + 1 ) + ' (' + this.$root.round( od_sta * 100 ) + '%)' ,
            profit : this.$root.round( this.process_data_avg.profit ),
            production_cost : this.$root.round( this.process_data_avg.production_cost ),
            total_price : this.$root.round( this.process_data_avg.total_price )
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
                      //diff_markup : this.get_diff_markup(name, p.total.markup),
                      diff : this.get_diff( name ),
                      profit : this.$root.round( p.total.markup_value ),
                      production_cost : this.$root.round( p.total.production_cost ),
                      total_price : this.$root.round( p.total.total_price )
                    }

                   this.tech[name] = {
                      name : this.$root.__tr( name ),
                      markup : p.total.markup,
                      profit : this.$root.round( p.total.markup_value ),
                      production_cost : this.$root.round( p.total.production_cost ),
                      total_price : this.$root.round( p.total.total_price ),
                      index : items.length,
                      diff: 0
                    };
                    
                     

                      

                    items.push( process_data );
              }
          }
        //  console.log('computed items', process_data_avg );
      

      //totals row      
      //this.process_data_avg = process_data_avg;


      if ( this.items_diff === null  ) {

        var items_diff = [];       
        var tech = this.tech;

        for( var i in items){
          for( var j in tech){
              if ( tech[j].index === parseInt(i) ) {
                var diff = tech[j].diff === 0 && parseInt(items[i].diff) > 0 ? parseInt(items[i].diff) : tech[j].diff;
              
                items_diff[i] = JSON.parse(JSON.stringify( items[i] )); //needs to a copy, not reference
               
                items_diff[i].markup = this.$root.round( items[i].markup + diff / 100 );
                items_diff[i].diff = diff; 
                items_diff[i].total_price = this.$root.round( items_diff[i].production_cost * items_diff[i].markup );
                items_diff[i].profit = this.$root.round( items_diff[i].total_price - items_diff[i].production_cost );
                
              }
          }
        }

        this.items_diff = items_diff;


      } else {
        this.items_diff = null;
      }

     // debugger
      //this.$store.commit( 'setCurrentTotals', { items :items,  processes : this.processes} );

        //
      return items;
      }
  },

  created: function(){
     var processes = this.$root.get_calculation_data( this.calculation_id );
     this.processes = typeof processes !== "undefined" ? processes.output.d : [] ;  

  },


 mounted: function(){
     
  },



  methods: {

    //typeof items_diff == 'object' && items_diff === null ? items : items_diff
    get_items:function(){
      var r = this.items_diff != null && typeof this.items_diff !== "undefined" ? this.items_diff : this.items;      
      var ret =  r.length === 0 ? this.items : r;

      for( var i in ret ){
        for( var j in ret[i] ){
          if ( typeof ret[i][j] === "number" ) {
            ret[i][j] = this.$root.round( ret[i][j] );
          }
        }
      }
      
      this.$store.commit( 'setCurrentTotals', { items : ret,  processes : this.processes, root: this.$root } );
      return ret;
    },

    get_diff_markup: function( index, default_val ){
      var diff = this.get_diff(index);
      
      return default_val + parseInt(diff) / 100;
    },



    get_diff:function( index ){
      var calculation = this.$store.getters.current_calculation;
      if ( typeof calculation.$markups !== "undefined" && typeof calculation.$markups[index] === "object") {
         return calculation.$markups[index].diff;
        
      }
      return 0;
    },
    apply_diff_changes: function ( diff ) {
      var index = this.changer_input.index;
      
      this.change=[ index , diff ];      
      this.mode = 'table';
    },


    cancel_diff_change: function () {
      this.mode = 'table';
    },

   change_diff: function ( item, index, event ) {
    this.changer_input = {
      item  : item,
      index : index,
      event : event,
    } 

     this.mode = 'changer';
   }
  }
  
});