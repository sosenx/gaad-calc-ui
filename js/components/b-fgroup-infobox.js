

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

  computed : {

    visible: function(){
      return this.db.info.length + this.db.warning.length + this.db.error.length !== 0;
    },

    status: function(){
      if( this.db.error.length !== 0 )  return 'error'; 
      if( this.db.warning.length !== 0 )  return 'warning'; 
      if( this.db.info.length !== 0 )  return 'info'; 
      return 'default';      
    }

  },

  watch: {
    
  },

  created: function() {
    this.register();
  },

  methods: {
    
    delete: function( attr_name ){
      
      var error = [];
      for( var i in this.db.error){
        var _name = this.db.error[i].attr_name;
        if ( _name !== attr_name ) {
          error.push( this.db.error[i] );
        }          
      }

      var warning = [];
      for( var i in this.db.warning){
        var _name = this.db.warning[i].attr_name;
        if ( _name !== attr_name ) {
          warning.push( this.db.warning[i] );
        }          
      }

      var info = [];
      for( var i in this.db.info){
        var _name = this.db.info[i].attr_name;
        if ( _name !== attr_name ) {
          info.push( this.db.info[i] );
        }          
      }

      this.db = {
        info : info,
        warning : warning,
        error : error,
      }


    },


    clean: function( attr_name ) {  


      if ( typeof attr_name === "undefined") {

        this.db = {
          info:[],
          warning:[],
          error:[]
        }

      } else {
          for( var i in this.db ){
            for( var j in this.db[i]){
              var item = this.db[ i ][ j ];
              if ( item.attr_name === attr_name ) {
                delete this.db[ i ][ j ];
              }
            }


          }

      }
        

      
    },

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