

var g_calculation_save_panel___gcalcui = Vue.component('g-calculation-save-panel', {
  
  template: '#template-gcalcui-g-calculation-save-panel',
  
  props: [],
  
  data: function() {
    return {      
      success_data : false,

      show_ui : true,
      bussy: false,

      calculation_id: '',
      is_validated : false,
      request_attributes: {},
      
      timeoutIndex : null,
      calculation_moved_info: false,
      calculation_moving_error: false,
      delay_before_relod: 5000,
    }
  },

  mounted: function(){
    EventBus.$on( 'calculation-moving-to-archives-error-500', this.moving_to_archives_error_500 );
    EventBus.$on( 'text-archivization-data-valid', this.valid_for_archivization );
    EventBus.$on( 'valid-for-archivization', this.valid_for_archivization );
    EventBus.$on( 'selected-for-archivization', this.set_calculation_id );
    EventBus.$on( 'calculation-moved-to-archives', this.calculation_moved_to_archives);
  },

  created: function(){

    if ( this.$store.getters.current_calculation_id !== "" ) {
      
      this.calculation_id = this.$store.getters.current_calculation_id;
    }
    /**/
   
  },



  watch: {
    success_data: function( val ){
      EventBus.$emit( 'calculation-save-success', val );
    }
  },

  methods: {
     moving_to_archives_error_500: function( data ){
      var cid = data.cid;
      debugger
      this.$store.dispatch( 'deleteCalculationFront', { cid: cid, accepted: true } );
      this.timeoutIndex = setTimeout( this.lazy_reload, this.delay_before_relod, data );
      this.calculation_moving_error = true;
    },

    lazy_reload:function( data ){
      if ( this.calculation_id === data.cid ) {
       /*
        for( var i in this.$refs ){
          var ref = this.$refs[ i ];
          if ( typeof ref.reset_ui !== "undefined" ) {
            ref.reset_ui();
          }
        }
*/
        
      }
      EventBus.$emit( 'reset-ui' );
      clearTimeout( this.timeoutIndex );
      this.timeoutIndex = null;
      this.calculation_moved_info = false;
      this.calculation_moving_error = false;
      this.bussy = false;
    },

    calculation_moved_to_archives: function( data ){
        //this.timeoutIndex = setTimeout( this.lazy_reload, this.delay_before_relod, data );
        this.calculation_moved_info = true;
    },

    collect_data:function(  ){
      var v = true;
      var validate_array = [ this.$refs['calculation-selector'], this.$refs['acalculation-composer'] ]
      for( i in validate_array ){
        if ( typeof validate_array[ i ] !== "undefined" && validate_array[ i ].valid === false ) {
          v = false;
          break;
        }
      }

      if ( v && typeof this.$refs['acalculation-composer'] !== "undefined") {
       this.request_attributes = Object.assign(
          this.$refs['acalculation-composer'].arch_data,
          { cid : this.calculation_id }
          );      
      }
        
    },

    valid_for_archivization: function( valid ){
      this.is_validated = valid;
      
    },

    success:    function( data ){ 

      this.success_data = data;

      var cid = data.headers.cid;

      if (data.token  && data.handler === "put_acalculation" && data.status === 200 ) {
        this.$root.move_calculation_to_archives( data );
      }

      if ( data.status === 500 || data.token === null ) {
        EventBus.$emit( 'calculation-moving-to-archives-error-500', { cid: cid } );
      }

      EventBus.$emit( 'save-calculation-done', { cid: cid } );
      this.bussy = false;
    },

    beforeSend: function( xhr ){
      var data = JSON.parse( JSON.stringify( this.request_attributes ) );
      data.token = this.$store.getters.calculations_by_cid[ this.calculation_id ].output.token;

      for( var i in data){
        xhr.setRequestHeader( i, data[i] );
      }
      
      this.show_ui = false;  
    },

   request_acalculation:function(){
      var data = this.collect_data();

      this.bussy = true;

      jQuery.ajax({         
          type: "PUT",
          url: "http://localhost/gaadcalcapi/wp-json/gcalc/v1/ac",           
          data: {},
          success: this.success,          
          beforeSend: this.beforeSend,
          dataType: 'json'
        });

    },

   is_valid:function( ){
    
      return this.is_validated = !this.$v.$error && this.calculation_id.length > 0;
    },

   set_calculation_id: function( data ){
    var calculation_id = data.calculation_id;
    this.calculation_id = calculation_id;
    this.busy = false;
   }
  }
  
});