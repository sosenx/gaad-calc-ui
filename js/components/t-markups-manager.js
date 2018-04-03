

var t_markups_manager___gcalcui = Vue.component('t-markups-manager', {
  
  template: '#template-gcalcui-t-markups-manager',
  
  props: ['calculation_id', 'tech_markups', 'recalculate'],
  
  data: function() {
    return {
      items_diff:null,
      tech: {},
      change: {},
      changer_input : {},
      mode: 'table',      
      processes : null,
      calculation: this.$root.get_calculation_data()
    }
  },

  watch: {
    recalculate:function( val ){
      
      if ( !val ) { return; }
     
        var items_diff = [];
        var items = this.items;
        var tech = this.tech;

        for( var i in items){
          for( var j in tech){
              if ( tech[j].index === parseInt(i) ) {
                var diff = tech[j].diff === 0 && parseInt(items[i].diff) > 0 ? parseInt(items[i].diff) : tech[j].diff;
              
                items_diff[i] = JSON.parse(JSON.stringify( items[i] )); //needs to a copy, not reference
               
                items_diff[i].markup = items[i].markup + diff / 100;
                items_diff[i].diff = diff; 

              }
          }
        }
        this.items_diff = items_diff;
      this.$store.commit( 'setRecalculate', false );
      
    },


    calculation_id: function( val ){
      this.calculation = this.$root.get_calculation_data();
      this.get_items();
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
          tech[i].diff = this.items_diff[ tech[i].index ].diff;        
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
console.log('chuj');
        this.items_diff = null;
      return items;
      }
  },

  created: function(){
     var processes = this.$root.get_calculation_data( this.calculation_id );
     this.processes = typeof processes !== "undefined" ? processes.output.d : [] ;  

  },



  methods: {






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