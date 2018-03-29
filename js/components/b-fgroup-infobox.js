

var b_fgroup_infobox___gcalcui = Vue.component('b-fgroup-infobox', {
  
  template: '#template-gcalcui-b-fgroup-infobox',
  
  props: [ 'name' ],
  
  data: function() {
    return {      
      db : {
        info:[],
        warning:[],
        error:[]
      }
    }
  },

  watch: {
    
  },

  created: function() {
    this.register();
  },

  methods: {
   
    register: function() {      
      this.$store.commit( 'registerInfoBox', { component: this, name: this.name } );
    },


    addError: function( data ) {      
      this.add( data, 'error' );
    },

    addWarning: function( data ) {      
      this.add( data, 'warning' );
    },

    addInfo: function( data ) {      
      this.add( data, 'info' );
    },

    add: function( data, type ) {      
      var index = this.find( type, data.attr_name );
      if ( index !== false ) {
        this.db[ type ][ index ] = data;
      } else {
        this.db[ type ].push( data ); 
      }
    },

    find: function( type, attr_name ) {
      if ( typeof this.db[ type ] !== "undefined" ) {
        for( var i in this.db[ type ] ){
          var item = this.db[ type ][ i ];
          if ( item.attr_name === attr_name) {
            return parseInt( i );
          }  
        }
      }      
        

      return false; 
    },


  }
  
});