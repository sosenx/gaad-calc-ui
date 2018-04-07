/*! CHANGE_THIS - v1.0.0 - 2018-04-07 */

var a_infobox_item___gcalcui = Vue.component('a-infobox-item', {
  
  template: '#template-gcalcui-a-infobox-item',
  
  props: [ 'type', 'msg' ],
  
  data: function() {
    return {      
    	icon: {
    		name : this.get_icon_name()
    	}			  
    }
  },

  watch: {
    
    
    
  },

  methods: {
   
   get_icon_name: function(){
	 	var icons = {
	 		info: 'info-circle',
	 		warning: 'exclamation-triangle',
	 		error: 'stop-circle',
	 		default: 'info-circle'
	 	};	
	 	return icons[ this.type ];	
	}



  }
  
});


var b_fgroup_infobox___gcalcui = Vue.component('b-fgroup-infobox', {
  
  template: '#template-gcalcui-b-fgroup-infobox',
  
  props: [ 'name', 'not' ],
  
  data: function() {
    return {      
      db : {
        info: [],
        warning: [],
        error: [] 
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
    not: function( val ){

      this.db = {
        info: [],
        warning: [],
        error: [] 
      }

      for( var i in val ){
        if ( val[ i ].infobox === this.name ) {
          
          if ( val[ i ].type === "error" )    { this.db.error.push( val[ i ] ); }
          if ( val[ i ].type === "warning" )  { this.db.warning.push( val[ i ] ); }
          if ( val[ i ].type === "info" )     { this.db.info.push( val[ i ] ); }

        }
      }  
    }
  },

  created: function() {
    this.register();
  },

  methods: {
    

    /**
     * deprecated
     
     */
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


var b_input_attr_form_field___gcalcui = Vue.component('b-input-attr-form-field', {
  
  template: '#template-gcalcui-b-input-attr-form-field',
  
  props: [ 'name', 'label', 'sufix', 'infobox' ],
  
  data: function() {
    var r =  {   
    	disabled : false,
    	error : false,  
    	warning : false,  
    	ui_component : this.get_dedicated_ui_component(),
    	selected: this.$parent[ 'pa_' + this.name ],
    	value : this.get_value( this.name ),
    	options :  this.$parent.values[ this.name ],
      	field: this.$parent.fields[ 'pa_' + this.name ],
      	values: this.$parent.values[ this.name ],
      	n: this.name
    }
	//r.selected = r.field.default;
	r.field.label = typeof this.label !== "undefined" ? this.label : this.name;
	
    return r;
  },

  watch: {
    
  },

	methods: { 
		get_value: function( name){
			var r = this.$parent[ 'pa_' + name ];
			return r;
		},

		disable_ui: function(){
			this.disabled = true;
		},

		enable_ui: function(){
			this.disabled = false;
		},

		set_error: function(){
			this.error = true;
		},

		unset_error: function(){
			this.error = false;
		},

		set_warning: function(){
			this.warning = true;
		},

		unset_warning: function(){
			this.warning = false;
		},

		/**
		 * Checks if dedicated attribute form component exists and returns it if true.
		 *  
		 * @return {boolean|vueComponent} 
		 */
		get_dedicated_ui_component: function(){
			var component = window['pa_' + this.name + '_form_attr___gcalcui'];
			return typeof component !== "undefined" ? component : false;			
		},

		get_attr_value_label:function( value ){
			if (typeof this.$parent.values_names[ this.name ] === "object" && typeof this.$parent.values_names[ this.name ][value] !== "undefined") {
				return this.$parent.values_names[ this.name ][value];
			}
		return value;
		},

	   parse_options: function( options ){
		   	var opt = [];
		   	if ( typeof options === "undefined") {return opt;}

		   	for (var i = 0; i < options.length; i++) {
		   		var text = this.$root.__tr( this.get_attr_value_label(options[i]) );
		   		var value = options[i];
				opt.push({ text : text, value : value });
				
		   	}
		   	this.selected = options[0];
		   
		   	return opt;
	   	}
	}
  
});
var c_total_basic___gcalcui = Vue.component('c-total-basic', {
  
  template: '#template-gcalcui-b-total-basic',
  
  props: ['calculation_id' ],
  
  data: function() {

    return {      
      calculation: this.$root.get_calculation_data(),
      $totals: {},
      totals: {},
      avg_totals : {},
      T : null
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

  },
   
    mounted(){
      //this.$root.$on( 'change-calculation-markups', this.new_totals );
      //this.$root.$on( 'change-calculation',  );
      EventBus.$on( 'change-calculation', this.calculation_changed );
       EventBus.$on( 'change-calculation-markups', this.calculation_markups_changed );
    },

  methods: {


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
      var $markups = this.$store.getters.current_calculation.$markups;
      var markups = JSON.parse( JSON.stringify( $markups ) );
      this.set_val( markups );
      console.log(markups );
      
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



var c_archives___gcalcui = Vue.component( 'c-archives', {
  
  template: '#template-gcalcui-c-archives',

  data: function() {
    return {      
    }
  },

  methods: {
    some_method: function() {
      // code here
    }
  }

});
var c_calculation_attr_input_form___gcalcui = Vue.component('c-calculation-attr-input-form', {

  

  template: '#template-gcalcui-c-calculation-attr-input-form',
    data: function() {
    return {      
      
      uiComponent : this.$store.getters.ui.inputForm,
    }
  },




  methods: {

   



    calc: function(){    	
    	this.$root.calculate();      
    }
  }


});
var c_calculation_product_selector___gcalcui = Vue.component('c-calculation-product-selector', {
  template: '#template-gcalcui-c-calculation-product-selector',
    data: function() {
    return {      
      products : this.$store.getters.productsList,
      productType : this.$store.getters.productType,
      
    }
  },

  computed: {
    options: function( products ){
      var options = [];
      for( var i in this.products ){
        options.push( { value: i, text: this.$root.__tr( i ) } );
      }
      return options;
    },

  },

  watch:{ 
    
    productType: function( productType ){
      
      this.$store.commit( 'setProductType', productType );
      var component = this.$store.getters.productsList[ productType.replace( '-', '_' ) ]
      if( typeof component !== "undefined" && component.component  ){
        this.$store.commit( 'setCalculationInputForm', component.component );
      } else {        
        this.$store.commit( 'setCalculationInputForm', window.c_input_form_default___gcalcui );        
      }      
    }

  },

  methods: {    
    __tr: function( string ) {    
      return typeof this.$store.getters.tr[ string ] !== "undefined" ? this.$store.getters.tr[ string ] : string;
    }
  }
});
var c_calculation___gcalcui = Vue.component('c-calculation', {

  
  
  template: '#template-gcalcui-c-calculation',
    data: function() {
    return {      
    }
  },
  methods: {
    some_method: function() {
      // code here
    }
  }
});
var c_dasboard___gcalcui = Vue.component('c-dashboard', {
  template: '#template-gcalcui-c-dashboard',
  data: function() {
    return {      
    }
  },
  methods: {
    some_method: function() {
      // code here
    }
  }
});
var c_input_form_book___gcalcui = Vue.component('c-input-form-book', {

  

  template: '#template-gcalcui-c-input-form-book',
    data: function() {
      var r = {   
        defaults:{},  
        custom: {},
        opt_attr:{}, //acctally used, model for checkbo9xes
        optional_attributes_groups: {         
          dust_jacket : true,
          ribbon : true,
          holes : true
        }, 
        fields : this.$root.get_attr_input_form_fields(),
        values : this.$root.get_attr_input_form_fields_values(),
        values_names : this.$root.get_attr_input_form_fields_values_names()
      };


      var matrix = gcalcui__app_model.gcalc_ui_model.product_constructor_data.book.rest_data.form_validation.matrix;
      if ( matrix ) {
        for( var i in matrix ){               
          r[i] = typeof r.fields[i].default !== "undefined" ? r.fields[i].default : '';
          r.defaults[ i ] = r[i]; 
        }

      } else {
        console.error('no validation matrix, validation imposibble')
      }

      var attr_bw_lists = gcalcui__app_model.gcalc_ui_model.product_constructor_data.book.rest_data.attr_bw_lists;
      for( var rule in attr_bw_lists){
        var attr = attr_bw_lists[rule];
        var name = attr.name;
        var current_value = r[name];
        var procedures = attr.data[current_value];
          if ( procedures ) {
              for( var procedure in procedures){
                  if ( typeof r[procedure] !== "undefined") {
                    r.values[procedure.replace(/^pa_/,'')] = procedures[procedure].values;              
                  }            
              }        
          }
      }
    return r;
  },

  computed:{

    /**
     * Gathers all calculation not used attributes to send away for further validations
     * @return {[type]} [description]
     */
    $not_used: function(){
      return this.not_used;
    },

    /**
     * Gathers all calculation custom attributes to send away for further validations
     * @return {[type]} [description]
     */
    $custom: function(){
      return this.custom;
    },

    /**
     * Gathers all calculation attributes to send away for further validations
     * @return {[type]} [description]
     */
    $out: function(){
      /**
       * Raw list of attributes before applying any validations filters
       */
      var raw = {};
      for (var i in this.values_names) {        
        raw[ i ] = typeof this[ 'pa_' + i ] !== "undefined" ? this[ 'pa_' + i ] : "";        
      }

      return raw;
    },

  },

  updated: function() {
   // this.$root.commit( 'setCalculationInputForm', this );

  },

  beforeUpdate: function() {
   // this.$root.commit( 'setCalculationInputForm', this );

  },

  watch:{

  

    $out : function( val ){
      this.$store.commit( 'setCurrentOut', val );
      this.$store.dispatch( 'sendCalculationDataToComposer' );
    },
    
    $custom : function( val ){            
      this.$store.commit( 'setCurrentCustom', val );
      this.$store.dispatch( 'sendCalculationDataToComposer' );
    },
    
  },

  created: function( ){
    this.$store.commit( 'setCurrentOut', this.$out );
    this.$store.commit( 'setCurrentCustom', this.$custom );
    this.$store.commit( 'setOptionalAttributesGroups', this.optional_attributes_groups );

    this.$store.dispatch( 'sendCalculationDataToComposer' );
  },

  validations: gcalcui__app_model.gcalc_ui_model.product_constructor_data.book.rest_data.form_validation.matrix,

  methods: {

    use_optional_attribute_group_callback: function( group_name ){
      
      this.$store.commit( 'setOptionalAttributes', [group_name, this.opt_attr[group_name] == 'true' ? true : false] );
      this.$store.dispatch( 'sendCalculationDataToComposer' );
    },

    enable_attr: function( attributes ){
      if ( typeof attributes === "object" ) {
        for(var i in attributes){
          if ( typeof this.$refs[ attributes[ i ] ] !== " undefined" ) {
            this.$refs[ attributes[ i ] ].enable_ui();
          }
        }
      }
    },

    disable_attr: function( attributes ){
      if ( typeof attributes === "object" ) {
        for(var i in attributes){
          if ( typeof this.$refs[ attributes[ i ] ] !== " undefined" ) {

            if ( typeof this.$refs[ attributes[ i ] ] !== "undefined" ) {
              this.$refs[ attributes[ i ] ].disable_ui();  
            }

          }
        }
      }
    },

    get_infobox_name_by_attr: function( attr_name ){
      
      debugger
    },

    valid: function( not_code ){
      var not = this.$store.getters.notifications;
      for( var i in not){
      
        if ( not[ i ].code === not_code ) {
          this.$refs[ not[ i ].attr_name ].unset_error();
          this.$refs[ not[ i ].attr_name ].unset_warning();
          delete not[ i ];
        }
      }
      var _not = [];
      var c = 0;
      for( var i in not){   _not[ c ] = not[ i ];   c++; }

      this.$store.commit( 'rewriteNotifications', _not );      
    },

    unvalid: function( attr_data ){
      
      if ( typeof attr_data.msg !== "undefined" && typeof attr_data.infobox !== "undefined" ) {
        this.$store.commit('addNotificaton', {
          attr_name : typeof attr_data.attr_name !== "undefined" ? attr_data.attr_name : false,
          msg : typeof attr_data.msg !== "undefined" ? attr_data.msg : "Unknown error",
          type  : typeof attr_data.type !== "undefined" ? attr_data.type : "error",
          code  : typeof attr_data.code !== "undefined" ? attr_data.code : "404",
          infobox : typeof attr_data.infobox !== "undefined" ? attr_data.infobox : 
              ( attr_name ? this.get_infobox_name_by_attr() : 'other' )
        } );

        //set option ui 
        if ( attr_data.type  === "error" ) {
          this.$refs[ attr_data.attr_name ].set_error();
        }

         //set option ui 
        if ( attr_data.type  === "warning" ) {
          this.$refs[ attr_data.attr_name ].set_warning();
        }

      }

      if ( typeof attr_data.set_value !== "undefined" ) {
        this.set_attribute( attr_data.attr_name, attr_data.set_value );
      }

    },

    set_attribute: function( name, value ){
      var patt = new RegExp(/^pa_/);
      var pa_test = patt.test( name );
      var index = pa_test ? name : 'pa_' + name;
      this[index] = value;
    }
    
  }


});
var c_input_form_default___gcalcui = Vue.component('c-input-form-default', {

  

  template: '#template-gcalcui-c-input-form-default',
    data: function() {
    return {            
    }
  },

  watch:{

  },

  methods: {

    method: function() {
      return false;      
    }
  }


});


var e_total_calculation___gcalcui = Vue.component('e-total-calculation', {
  
  template: '#template-gcalcui-e-total-calculation',
  
  props: ['calculation'],
  
  data: function() {
    return {      
      calculation_id : this.calculation.calculation_id
    }
  },

  watch: {

  },

  methods: {

  	is_current: function(){
  		return this.calculation.calculation_id === this.$store.getters.current_calculation_id;  		
  	},

   	set_as_current:function( event ){
   		this.$store.commit('setCurrentCalculation', {calculation_id: this.calculation_id, root: this.$root } );   
      

   	}

  }
  
});
var e_total_production_process___gcalcui = Vue.component('e-total-production-process', {
  
  template: '#template-gcalcui-e-total-production-process',
  
  props: ['process'],
  
  data: function() {
    return {      
      	name: typeof this.process != 'undefined' ? this.process.total.name : '',
    		markup: typeof this.process != 'undefined' ? this.process.total.markup : '',
    		markup_value: typeof this.process != 'undefined' ? this.process.total.markup_value : '',
    		name: typeof this.process != 'undefined' ? this.process.total.name : '',
    		production_cost: typeof this.process != 'undefined' ? this.process.total.production_cost : '',
    		total_price: typeof this.process != 'undefined' ? this.process.total.total_price : ''
    }
  },
  
  watch: {
    process: function( val ){
        this.name = this.process.total.name;
        this.markup = this.process.total.markup;
        this.markup_value = this.process.total.markup_value;
        this.name = this.process.total.name;
        this.production_cost = this.process.total.production_cost;
        this.total_price = this.process.total.total_price;        
    }

  },

  methods: {
   
  }
  
});







var f_archives_calculations___gcalcui = Vue.component('f-archives-calculations', {
  
  template: '#template-gcalcui-f-archives-calculations',
  
  props: ['calculation_id'],
  
  data: function() {
    return {      
      calculations: this.$store.getters.calculations
    }
  },

  watch: {
    calculation_id: function( val ){
      this.calculations = this.$store.getters.calculations;
    }
  },

  methods: {
   del_all: function(){
    this.$root.$localStorage.set('calculations', {});
    this.calculations = {}
   }
  }
  
});


var f_total_production_processes___gcalcui = Vue.component('f-total-production-processes', {
  
  template: '#template-gcalcui-f-total-production-processes',
  
  props: [],
  
  data: function() {
    return {      
     calculation_id : '',

      proc : []
    }
  },

  mounted(){
    EventBus.$on( 'change-calculation', this.calculation_changed );      
  },

  methods: {
    calculation_changed: function( data ){
      this.calculation_id = data.calculation_id;
      this.get_processess();
    },

    get_processess: function( data ){
      debugger
    }
  }

});
var login_form___gcalcui = Vue.component('login-form', {
  
  template: '#template-gcalcui-login-form',
  
  data: function() {
    return {
      l : '',
      p : ''
    }
  },

  methods: {
    /**
    * Handles submitting the form
    */
    submit: function( event ) {
      event.preventDefault();
      var el = event.currentTarget;

      jQuery.ajax({
          type: "GET",
          url: "http://localhost/gaadcalcapi/wp-json/gcalc/v1/auth",         
          data: {},
          success: this.onLoginProcessed,          
          beforeSend: this.beforeSend,
          dataType: 'json'
        });

    },

    /**
    *
    */
    onLoginProcessed: function( data ){
      this.$store.commit( 'recieveCredentials', data );
    },

    /**
    *
    */
    beforeSend: function( xhr ){    
        Cookies.set( 'GCUIA', 'Basic ' + Base64.encode( this.l + ':' + this.p ) );
        xhr.setRequestHeader( 'Authorization', 'Basic ' + Base64.encode( this.l + ':' + this.p ) );
        xhr.setRequestHeader( 'Apikey', Base64.encode( this.$store.getters.usrData.apikey ) );
        xhr.setRequestHeader( 'Apisecret', Base64.encode( this.$store.getters.usrData.apisecret ) );
    },

    /**
    * 
    */
    checkForm: function(){
      return this.l.length > 0 && this.p.length > 0;
    }



  }
});



var x_markups_input_form___gcalcui = Vue.component('x-markups-input-form', {
  
  template: '#template-gcalcui-x-markups-input-form',
  
  props: [ ],
  
  data: function() {
    return {      
     	markups_changes: {},
     	markups_ : {},
     	validations: this.create_validations
    }
  },

  watch: {
   
  },

  mounted: function() {
   
  },

	created: function() {
		var markups_changes = this.$store.getters.markups_changes;
		if ( typeof markups_changes !== "undefiend" ) {
			this.markups_changes = markups_changes;
		}  

		for( markup in this.markups_changes ){
			var val = this.markups_changes[ markup ];
			this.markups_[ markup ] = val.default;
			
		} 
	},

  methods: {

  	create_validations:function(){
debugger

	
  	},

   markups_changed:function(){
		this.$root.$emit( 'markups-change', this.markups_ );
   }
  }
  
});


var z_calculation_composer___gcalcui = Vue.component('z-calculation-composer', {
  
  template: '#template-gcalcui-z-calculation-composer',
  
  props: [],
  
  data: function() {
    var $r = {  
      tooltip_title : '',
      bussy : true,
      input : {},
      calculation_attributes: {},
      markups : {},
      request_attributes : {},
      errors_raport : {},
      valid : false
    }

    return $r;
  },

  watch: {
    
    input: function( val ){
      this.calculation_attributes = this.get_input_attr();
      setTimeout( this.validate_attributes, 100 ); //validation need to be triggered after all rendering events
    }

  },

  computed:{

  },

  mounted: function() {
    this.$root.$on( 'markups-change', this.update_markups );
    this.$root.$on( 'request-calculation', this.request_calculation );

    this.$store.commit( 'setCalculationComposer', this );
    this.bussy = false;  
  },



  methods: {

    update_markups: function( markups ){
        this.markups = markups;
    }, 



    add_prefix: function( obj, prefix ){
      if( typeof obj !== "undefined" ){
        var r = {};
        if ( typeof obj.length !== "undefined" ) {
          for( var i in obj ){
            r[ prefix+obj[i] ] = "";
          }
        } else {
          for( var i in obj ){
            r[ prefix+i ] = obj[i];
          }
        }
        return r;          
      }
      return obj;
    },

    add_additional_request_data: function( request_attributes ){
      if ( typeof request_attributes !== "undefined" ) {
        var _request_data = Object.assign( 
          {
            product_slug : this.$store.getters.productType,
            product_id : this.$store.getters.product_id,
            Authorization : Cookies.get('GCUIA')
          },
          this.$store.getters.usrData,            
          this.add_prefix( this.$store.getters.calculationGroups, 'group_')
          );
          
        return Object.assign( request_attributes, _request_data );        
      }

      return request_attributes;
    },

    beforeSend: function( xhr ){
      var data = JSON.parse( JSON.stringify( this.request_attributes ) );

      var markups = JSON.parse( JSON.stringify( this.markups ) );
      Object.assign( data, markups );

      for( var i in data){
        xhr.setRequestHeader( i, data[i] );
      }
        
    },

    success: function( data ){
      this.bussy = false;
      this.$store.commit( 'recieveCalculation', { calculation: data, root: this.$root });

      var calculation_id = data.calculation_id;
      var calculations = this.$localStorage.get('calculations');  
      calculations[ calculation_id ] = data;
      this.$localStorage.set('calculations', calculations );
    },

    request_calculation: function( ){
      this.bussy = true;

      jQuery.ajax({         
          type: "GET",
          url: "http://localhost/gaadcalcapi/wp-json/gcalc/v1/c",           
          data: {},
          success: this.success,          
          beforeSend: this.beforeSend,
          dataType: 'json'
        });

    },

    get_validation_errors_raport: function( ){
      
      var r = {
        errors : this.$store.getters.notifications__errors.length,
        warnings : this.$store.getters.notifications__warnings.length,
        infos : this.$store.getters.notifications__infos.length
      };

      this.tooltip_title = [
          this.$root.__tr( 'errors' ) + ': ' + this.$store.getters.notifications__errors.length + ', ',
          this.$root.__tr( 'warnings' ) + ': ' + this.$store.getters.notifications__warnings.length + ', ',
          this.$root.__tr( 'infos' ) + ': ' + this.$store.getters.notifications__infos.length
      ].join('');
      return r;
    },

    get_input_attr : function(){
        var raw = this.input.out;
        var custom = this.input.custom;
        var combined = Object.assign(raw, custom);
        var opt_attr = this.$store.getters.opt_attr;
        var opt_attr_grups = this.$store.getters.opt_attr_grups;
        var tmp = {};

        var patt = [];
        for( var i in opt_attr_grups ){
          patt.push( i ); 
        }
        patt = patt.join('|');

        for( var i in combined ){
          var patt = new RegExp( patt );
          var match = patt.test( i );
          if ( match ) {
            //attribute is on list optional attr
            
            if ( opt_attr[ patt.exec( i )[0] ] == 'true' || opt_attr[ patt.exec( i )[0] ] === true ? true : false ) { //use it
              tmp[ 'pa_' + i ] = combined[ i ];
            } 

          } else tmp[ 'pa_' + i ] = combined[ i ];
        }
        
      this.request_attributes = this.add_additional_request_data( tmp );
      this.errors_raport = this.get_validation_errors_raport();
      this.valid = this.errors_raport.errors == 0;
      return combined;
    },

    validate_attributes: function( ){

      var composer_validation_data = this.$store.getters.composer_validation_data;
      var product_input_form = this.$root.$refs['router-view'].$refs[ 'input-form' ].$refs[ 'product-input-form' ];
      
      for( var i in composer_validation_data ){
        delete validator;
        var rule = composer_validation_data[ i ];
        eval( rule.validator );
        
        if ( typeof validator === "function" ) {
          validator( this.calculation_attributes, product_input_form );
        }
      }

      this.errors_raport = this.get_validation_errors_raport();
      this.valid = this.errors_raport.errors == 0;

    }


  }
  
});
EventBus = new Vue();
(function(window, Vue, VueRouter){


	Vue.use( window.vuelidate.default );
	Vue.use(VueLocalStorage);
	Vue.component('icon', VueAwesome);
	Vue.config.devtools = true;
	
/*

	VueAwesome.register({
		  'html5-c': {
		    width: 512,
		    height: 512,
		    raw: '<path fill="#E34F26" d="M71,460 L30,0 481,0 440,460 255,512"/><path fill="#EF652A" d="M256,472 L405,431 440,37 256,37"/><path fill="#EBEBEB" d="M256,208 L181,208 176,150 256,150 256,94 255,94 114,94 115,109 129,265 256,265zM256,355 L255,355 192,338 188,293 158,293 132,293 139,382 255,414 256,414z"/><path fill="#FFF" d="M255,208 L255,265 325,265 318,338 255,355 255,414 371,382 372,372 385,223 387,208 371,208zM255,94 L255,129 255,150 255,150 392,150 392,150 392,150 393,138 396,109 397,94z"/>'
		  }
		});
*/



	//escape if no holder on page
	if ( document.getElementById( 'app-gcalcui' ) === null ) { return; }

	var store = new Vuex.Store({
	  state: {
	    model: window['gcalcui' + '__app_model'],
	    usrData: {
	    	apikey: 'g1a2a3d',
	    	apisecret: 'k1o2o3t'
	    },
	    tr: {

"book"                   :"Ksiażka",
"brochure"               :"Broszura",
"business-card"          :"Wizytówka",
"catalog"                :"Katalog",
"default"                :"Ekspert",
"flyer"                  :"Ulotka",
"folded-business-card"   :"Wizytówka sładana",
"letterhead"             :"Papier firmowy",
"letterhead-blackwhite"  :"Papier firmowy cz-b",
"letterhead-color"       :"Papier firmowy kolor",
"perfect-bound-catalog"  :"Katalog klejony",
"plano"                  :"Arkusze plano",
"plano-blackwhite"       :"Arkusze plano cz-b",
"plano-color"            :"Arkusze plano kolor",
"saddle-stitched-catalog":"Katalog zeszyt",
"spiral-bound-catalog"   :"Katalog spiralowany",
"writing-pad"            :"Notes",



			"Black & White 1-sided"          :"Cz-b jednostronnie",
			"Blank"                          :"Brak",
			"Board 2.0mm"                    :"tektura 2.0mm",
			"Board 2.5mm"                    :"tektura 2.5mm",
			"Board thickness"                :"Grubość tektury",
			"Calculate"                      :"Oblicz cenę",
			"Calculating"                    :"Obliczanie",
			"Cloth covering"                 :"Cloth covering",
			"Coated paper 150g"              :"Coated paper 150g",
			"Coated paper 200g"              :"Coated paper 200g",
			"Dust jacket"                    :"Dust jacket",
			"Endpaper"                       :"Endpaper",
			"Green"                          :"Green",
			"No finish"                      :"No finish",
			"No ribbon"                      :"No ribbon",
			"Orange"                         :"Orange",
			"Red"                            :"Red",
			"Ribbon"                         :"Ribbon",
			"Ribbon color"                   :"Ribbon color",
			"Ribbon width n/a"               :"Ribbon width n/a",
			"Width"                          :"Width",
			"Yellow"                         :"Yellow",
			"eccobook_cream_16-60g"          :"eccobook_cream_16-60g",
			"eccobook_cream_16-70g"          :"eccobook_cream_16-70g",
			"eccobook_cream_16-80g"          :"eccobook_cream_16-80g",
			"eccobook_cream_20-60g"          :"eccobook_cream_20-60g",
			"eccobook_cream_20-70g"          :"eccobook_cream_20-70g",
			"eccobook_cream_20-80g"          :"eccobook_cream_20-80g",
			"errors"                         :"errors",
			"iBook cream vol 2.0 60g"        :"iBook cream vol 2.0 60g",
			"iBook cream vol 2.0 70g"        :"iBook cream vol 2.0 70g",
			"iBook cream vol 2.0 80g"        :"iBook cream vol 2.0 80g",
			"iBook white vol 1.6 60g"        :"iBook white vol 1.6 60g",
			"iBook white vol 1.6 70g"        :"iBook white vol 1.6 70g",
			"infos"                          :"infos",
			"warnings"                       :"ostrzeżenia",
			"pa_bw_sewing"					:"Szycie składek",
			"pa_book_number"                 :"ISBN/ISSN",
			"pa_master_format"                :"Rozmiar",
			"pa_bw_format"                   :"Rozmiar cz-b",
			"pa_bw_pages"                    :"Strony cz-b",
			"pa_bw_paper"                    :"Papier cz-b",
			"pa_bw_print"                    :"Zadruk cz-b",
			"pa_color_format"                :"Rozmiar kolor",
			"pa_color_pages"                 :"Strony kolor",
			"pa_color_pages_numbers"         :"Numery stron kolorowych",
			"pa_color_paper"                 :"Papier kolor",
			"pa_color_print"                 :"Zadruk kolor",
			"pa_color_stack"                 :"Ukłd stron kolorowych",
			"pa_comments"                    :"Uwagi ogólne",
			"pa_cover_board_thickness"       :"Grubość tektury",
			"pa_cover_cloth_covering_finish" :"Uszlachetnienie oklejki",
			"pa_cover_cloth_covering_paper"  :"Papier oklejki",
			"pa_cover_cloth_covering_print"  :"Zadruk oklejki",
			"pa_cover_cloth_covering_spot_uv":"Lakier UV oklejki",
			"pa_cover_dust_jacket_finish"    :"Uszlachetnienie obwoluty",
			"pa_cover_dust_jacket_paper"     :"Papier obwoluty",
			"pa_cover_dust_jacket_print"     :"Zadruk obwoluty",
			"pa_cover_dust_jacket_spot_uv"   :"Lakier UV obwoluty",
			"pa_cover_endpaper_paper"        :"Papier wyklejki",
			"pa_cover_endpaper_print"        :"Zadruk wyklejki",
			"pa_cover_finish"                :"Uszlachetnienie okładki",
			"pa_cover_flaps"                 :"Skrzydełka",
			"pa_cover_format"                :"Rozmiar okładki",
			"pa_cover_left_flap_width"       :"Szerokość lewego skrzydełka",
			"pa_cover_paper"                 :"Papier okładki",
			"pa_cover_print"                 :"Zadruk okładki",
			"pa_cover_ribbon"                :"Tasiemka",
			"pa_cover_ribbon_width"          :"Szerokość tasiemki",
			"pa_cover_right_flap_width"      :"Szerokość prawego skrzydełka",
			"pa_cover_spot_uv"               :"Lakier UV okładki",
			"pa_cover_type"                  :"Rodzaj oprawy",
			"pa_drilling_holes"              :"Wiercenie otworów",
			"pa_finish"                      :"Uszlachetnienie",
			"pa_format"                      :"Rozmiar",
			"pa_groupwrap"                   :"Pakowanie w folię",
			"pa_holes_dia"                   :"Średnica otworów",
			"pa_holes_pos"                   :"Położenie otworów",
			"pa_orientation"                 :"Układ/orientacja",
			"pa_paper"                       :"Papier",
			"pa_pieces_per_carton"           :"Ilość szt. w kartonie",
			"pa_print"                       :"Zadruk",
			"pa_quantity"                    :"Nakład",
			"pa_spot_uv"                     :"Lakier UV",
			"pa_title"                       :"Tytuł",


	"Basics"                     : "Informacje Podstawowe",
	"Quantity"                   : "Ilość",
	"Orientation"                : "Orientcja",
	"Format"                     : "Format",
	"Book info"                  : "Informacje o książce",
	"Book title"                 : "Tytył",
	"Book number"                : "ISBN/ISSN",
	"Add. comments"              : "Dodadkowe info.",
	"Book blocks"                : "Blok książki",
	"Color pages quantity"       : "Iloćś stron kolorowych",
	"pages"                      : "stron",
	"B&W pages quantity"         : "Ilość stron cz-b",
	"Color pages in single block": "Strony kolorowe w bloku",
	"Cover"                      : "Okładka",
	"Cover type"                 : "Rodzaj okładki",
	"Cover paper"                : "Papier okładki",
	"Cover print"                : "Zadruk okładki",
	"Cover finish"               : "Uszlachetnienie okładki",
	"Cover spot uv"              : "Lakier UV okładki",

	"Paper"                      : "Papier",
	"Print"                      : "Zadruk",
	"Finish"                     : "Uszlachetnienie",
	"Spot UV"                    : "Lakier UV",
	"Left flap"                  : "Lewe skrzydełko",
	"Right flap"                 : "Prawe skrzydełko",
	
	"0x0"                        :"Brak",

	"Flaps"                      : "Skrzydełka",
	"Cover flaps"                : "Skrzydełka",
	"Left"                       : "Lewo",
	"mm"                         : "mm",
	"Right"                      : "Prawo",
	"Color block"                : "Blok kolorowy",
	"Color paper"                : "Papier kolor",
	"Color print"                : "Zadruk kolor",
	"B&W block"                  : "Block cz-b",
	"B&W paper"                  : "Papier cz-b",
	"B&W print"                  : "Zadruk cz-b",
	"Drilling holes"             : "Wiercenie otworów",
	"Number of holes"            : "Ilość otworów",
	"Diameter"                   : "Średnica",
	"Position"                   : "Położenie",
	"Packing"                    : "Pakowanie",
	"Foil wrap pieces"           : "Pakowanie w termofolię",
	"Pieces per carton"          : "Ilość sztuk w kartonie",
	
	"Color pages quantitys"      : "Numery stron kolorowych",
	"Perfect binding"            : "Oprawa klejona",
	"Saddle stitch"              : "Oprawa zeszytowa",
	"Spiral binding"             : "Oprawa spiralowana",
	"Section sewn"               : "Oprawa szyto-klejona",
	"Hard cover"                 : "Oprawa twarda",

	"Portrait"                   : "Portret",
	"Album"                      : "Album",
	"No book number"             : "Brak",
	"ISBN"                       : "ISBN",
	"ISSN"                       : "ISSN",
	"Cardboard Arktika 230g"     : "Karton Arktika 230g",
	"Cardboard Arktika 250g"     : "Karton Arktika 250g",
	"Cardboard Alaska 230g"      : "Karton Alaska 230g",
	"Cardboard Alaska 250g"      : "Karton Alaska 250g",
	"Color 1-sided"              : "Kolor jednostronnie",
	"Color 2-sided"              : "Kolor dwustronnie",
	"Gloss 1 side"               : "Błysk jednostronnie",
	"Matt 1 side"                : "Mat jednostronnie",
	"Soft touch 1 side"          : "Soft Touch jednostronnie",
	"Gloss 2 sides"              : "Błysk dwustronnie",
	"Matt 2 sides"               : "Mat dwustronnie",
	"Soft touch 2 sides"         : "Soft Touch dwustronnie",
	"No spot UV"                 : "Bez lakieru UV",
	"Spot UV 1 side"             : "Lakier UV jednostronnie",
	"Spot UV 2 sides"            : "Lakier UV dwustronnie",
	"No flaps"                   : "Bez skrzydełek",
	"Single left flap"           : "1 lewe skrzydełko",
	"Single right flap"          : "1 prawe skrzydełko",
	"Two flaps"                  : "Dwa skrzydełka",
	"Coated paper 70g"           : "Kreda 70g",
	"Coated paper 80g"           : "Kreda 80g",
	"Coated paper 90g"           : "Kreda 90g",
	"Coated paper 115g"          : "Kreda 115g",
	"Coated paper 135g"          : "Kreda 135g",
	"Coated paper 170g"          : "Kreda 170g",
	"Coated paper 250g"          : "Kreda 250g",
	"Coated paper 300g"          : "Kreda 300g",
	"Coated paper 350g"          : "Kreda 350g",
	"Uncoated paper 70g"         : "Offset 70g",
	"Uncoated paper 80g"         : "Offset 80g",
	"Uncoated paper 90g"         : "Offset 90g",
	"Uncoated paper 100g"        : "Offset 100g",
	"Uncoated paper 120g"        : "Offset 120g",
	"Uncoated paper 150g"        : "Offset 150g",
	"Uncoated paper 170g"        : "Offset 170g",
	"Uncoated paper 200g"        : "Offset 200g",
	"Uncoated paper 250g"        : "Offset 250g",
	"iBook white vaol. 1,6 60g"  : "iBook white vol. 1.6 60g",
	"iBook white vaol. 1,6 70g"  : "iBook white vol. 1.6 70g",
	"iBook cream vaol. 2,0 60g"  : "iBook cream vol. 2.0 60g",
	"iBook cream vaol. 2,0 70g"  : "iBook cream vol. 2.0 70g",
	"iBook cream vaol. 2,0 80g"  : "iBook cream vol. 2.0 80g",
	"Munken cream vol. 1.8 80g"  : "Munken cream vol. 1.8 80g",
	"Munken cream vol. 1.8 90g"  : "Munken cream vol. 1.8 90g",
	"Munken cream vol. 1.5 80g"  : "Munken cream vol. 1.5 80g",
	"Munken cream vol. 1.5 90g"  : "Munken cream vol. 1.5 90g",
	"Munken white vol. 1.8 80g"  : "Munken white vol. 1.8 80g",
	"Munken white vol. 1.8 90g"  : "Munken white vol. 1.8 90g",
	"Munken white vol. 1.5 80g"  : "Munken white vol. 1.5 80g",
	"Munken white vol. 1.5 90g"  : "Munken white vol. 1.5 90g",

	"Black 2-sided"              : "Cz-b dwustronnie",
	"Black 1-sided"              : "Cz-b jednostronnie",
	"Custom"                     : "Użytkownika",
	"No holes"                   : "Bez otworów",
	"2 holes"                    : "2 otwory",
	"4 holes"                    : "4 otwory",
	"4mm"                        : "4mm",
	"5mm"                        : "5mm",
	"6mm"                        : "6mm",
	"8mm"                        : "8mm",
	"Long side center"           : "Środek długi bok",
	"Short side center"          : "Środer krótki bok",
	"No wrap"                    : "Bez folii",
	"Single wrap"                : "Pojedyńczo",
	"Doublet wrap"               : "po 2 szt.",
	"Triplet wrap"               : "po 3 szt.",
	"4 pieces wrap"              : "po 4 szt.",
	"5 pieces wrap"              : "po 5 szt.",
	"8 pcs."                     : "8 pcs.",
	"10 pcs."                    : "10 szt.",
	"12 pcs."                    : "12 szt.",
	"14 pcs."                    : "14 szt.",
	"16 pcs."                    : "16 szt.",
	"18 pcs."                    : "18 szt.",
	"20 pcs."                    : "20 szt.",
	"22 pcs."                    : "22 szt.",
	"24 pcs."                    : "24 szt.",
	"26 pcs."                    : "26 szt.",
	"28 pcs."                    : "28 szt.",
	"30 pcs."                    : "30 szt.",
	"36 pcs."                    : "36 szt.",
	"40 pcs."                    : "40 szt.",
	"44 pcs."                    : "44 szt.",
	"48 pcs."                    : "48 szt.",




},
		
		notifications: [],

	    ui : {
	    	inputForm : {}
	    },

	    infobox:{},

	    calculations : [],	    
	    current : {
	    	productType : '',
	    	calculation_id : '',
	    	bvars : {},
	    	$out : {},
	    	$custom: {},
	    	$opt_attr : {},
	    	$totals : {}
	    },
	    credentials : false,
	    user : false,
	    badLogin : false,
	    recalculate: false
	  },




	  actions: {


	  	/**
	  	 * Async tech markups parametrs update. Action is used to assure good reactivity.
	  	 * @param  {[type]} context [description]
	  	 * @param  {[type]} data    [description]
	  	 * @return {[type]}         [description]
	  	 */
	  	changeCalculationMarkups:function( context, data ){
	  		var tech = data.tech;
			var calculation_id = data.calculation_id;
			var root = data.root;

			for( var i in tech){          
	          	console.log(  tech[i].diff );      
	      	}
      	 	tech = JSON.parse( JSON.stringify( tech ) );
			context.commit( 'changeCalculationMarkups', { tech: tech, calculation_id: calculation_id, root: root } );
			EventBus.$emit( 'change-calculation-markups', { tech: tech, calculation_id: calculation_id } );
			//root.$root.$emit('change-calculation-markups', {  tech: tech, calculation_id: calculation_id });
	  	},

	  	sendCalculationDataToComposer:function( context ){
			var $out = context.state.current.$out;
			var $custom = context.state.current.$custom;
			var $opt_attr = context.state.current.$opt_attr;

			context.state.ui.calculationComposer.input = {
				out	: $out,
				custom	: $custom,
				opt_attr : $opt_attr
			}
	  		
	  	},

	  	/**
	  	 * Returns calculation data by given calculation id
	  	 * @param  {[type]} context        [description]
	  	 * @param  {[type]} calculation_id [description]
	  	 * @return {[type]}                [description]
	  	 */
		find_calculation: function( context, calculation_id ) {	  		
	  		if ( calculation_id.length > 0 ) {
	  			var calculations = context.state.calculations;
	  			for (var i = calculations.length - 1; i >= 0; i--) {
	  				var calculation = calculations[i];
	  				if ( calculation.calculation_id === calculation_id ) {
	  					return calculation;
	  				} 							
	  			}
	  		}
	  	},

	  },

	  mutations: {

	  

		setCurrentTotals:function (state, data ){
			var itemsTotals = {}
			var counter = 0;
			var items = data.items;
			var processes = data.processes;
			if ( items.length > 0) {
				for(var i in items ){
					for(var j in processes ){
						if ( state.tr[ processes[j].total.name ] === items[i].name ) {							
							itemsTotals[ processes[j].total.name ] = items[ i ];
							counter ++;	
						}
					}
				}
			} 
			if ( counter > 0 ) {
				state.$totals = itemsTotals;				
				//data.root.$refs.calculation.$refs['total-basic'].set( state.$totals );
			}
	  	},

	  	setRecalculate:function (state, data ){
	  		state.recalculate = data;

	  	},

	  	changeCalculationMarkups: function( state, data ){
	  		var tech = data.tech;
	  		var calculation_id = data.calculation_id;
	  		
	  		for(var i in state.calculations ){
	  			if ( state.calculations[i].calculation_id == calculation_id ) {
	  				state.calculations[i].$markups = tech;

	  				//local storage update
	  				var ls_calculations = data.root.$localStorage.get('calculations');
	  				ls_calculations[calculation_id].$markups = tech;
	  				data.root.$localStorage.set('calculations', ls_calculations );
	  				
	  				this.commit( 'setRecalculate', true);
	  				
	  			}
	  		}
	  	},

	  	setOptionalAttributesGroups: function( state, val ){
	  		state.current.opt_attr_grups = val;
	  	},


	  	setOptionalAttributes: function( state, val ){
	  		var opt_attr = state.current.$opt_attr;
	  		var group_name = val[0];
	  		var val = val[1];

	  		if ( val ) {
	  			opt_attr[ group_name ] = true;	
	  		} else {
	  			delete opt_attr[ group_name ];
	  		} 			
	  		
	  		state.current.opt_attr = opt_attr;
	  	},

	  	rewriteNotifications: function( state, notifications ){
	  		state.notifications = notifications; 
	  	},

	  	addNotificaton: function( state, notification ){
	  		var not = this.getters.notifications;
			var code = notification.code;
			var exists = false;
			for( var i in not ){
				if ( not[ i ].code === code) {
					exists = true;
				}
			}

			if ( !exists ) {
	  			state.notifications.push( notification );				
			}
	  	},

		cleanInfoBoxes: function( state ) {	  		
	  		for( var i in state.infobox){
	  			state.infobox[i].clean();
	  		}	  		
	  	},		 

	  	registerInfoBox: function( state, infoBox ) {	  		
	  		state.infobox[ infoBox.name ] = infoBox.component;	  		
	  	},

	  	setCurrentCustom: function( state, $custom ) {
	  		
	  		state.current.$custom = $custom;
	  		
	  	},



		setCurrentMarkups: function( state, $markups ) {
	  		state.current.$markups = $markups;
	  	},


	  	setCurrentOut: function( state, $out, $form ) {	  			
	  		state.current.$out = $out;
	  	},

	  	

	  	setProductType: function( state, productType ) {	  		
	  		/*state.current = {
		    	productType : '',
		    	calculation_id : '',
		    	bvars : {}
		    };*/
	  		state.current.productType = productType;
	  	},

	  	setCalculationInputForm: function( state, component ) {	  		
	  		state.ui.inputForm = component;
	  	},

	  	setCalculationComposer: function( state, component ) {	  		
	  		state.ui.calculationComposer = component;
	  	},

	  	/**
	  	 * Prcessing calculation JSON
	  	 *
	  	 * Function adds recieved calculation to state.calculations array and sets state.current.calculation_id
	  	 * 
	  	 * @param  {object} state app store
	  	 * @param  {object} calc  Calculation JSON
	  	 * @return {null}       
	  	 */	
	  	recieveCalculation: function( state, data ) {
	  		var calc = data.calculation;
	  		var root = data.root;
			var processes = calc.output.d;
			var tech = {}

	  		if ( processes !== null && processes.length > 0 ) {
	  			var calc_data = state.model.gcalc_ui_model.product_constructor_data[ calc.output.a.product_slug ].rest_data.calc_data;
	  			if ( typeof calc_data.equasion !== "undefined") { 
             		var equasion = calc_data.equasion.split('+');
                  	for( var i in equasion ){ equasion[ i ] = equasion[ i ].replace(/\s/g, ''); }
                  		var counter = 0;
	                for( var i = 0; i < processes.length; i++ ){
	                  	var p = processes[ i ];
	                  	var name = p.total.name;
	                  	if ( equasion.indexOf( name ) == -1 || p.total.production_cost == 0 ) { continue; }
 
						tech[name] = {
	                      name : typeof state.tr[name] !== "undefined" ? state.tr[name] : name,
	                      markup : p.total.markup,
	                      profit : p.total.markup_value ,
	                      production_cost :  p.total.production_cost,
	                      total_price : p.total.total_price,
	                      index : counter,
	                      diff: typeof calc.$markups === "undefined" ? 0: calc.$markups[name].diff
	                    };
	                    counter++;
	            	}	  		
              }

	  		}

	  		calc.$markups = tech;

	  		state.calculations.push( calc );
	  		state.current.calculation_id = calc.calculation_id;
	  		//root.$emit( 'change-calculation', { calculation_id: calc.calculation_id} );
	  		EventBus.$emit( 'change-calculation', { calculation_id: calc.calculation_id} );
	  	},

	  	/*
	  	
	  	Sets current calculation from calculations array
	  	 */
		setCurrentCalculation: function( state, data ) {
			var calculation_id = data.calculation_id;
			var root = data.root;
			//root.$emit( 'change-calculation', { calculation_id : data.calculation_id } );
			EventBus.$emit( 'change-calculation', { calculation_id: data.calculation_id} );
	  		state.current.calculation_id = calculation_id;
	  	},

	  	recieveCredentials: function( state, credentials ) {	  		
	  		state.user = credentials.login;
	  		state.badLogin = !credentials.login;
	  		state.credentials = credentials.credentials;	
	  		  		 
	  		Cookies.set( 'GCUI',  credentials.credentials.login + ':' + credentials.credentials.access_level );
	  	}
	  },

	  getters:{
		markups_changes: function( state ){
	  		var productType = state.current.productType;
	  		return state.model.gcalc_ui_model.product_constructor_data[ productType ].rest_data.markups_changes;
	  	},


		$totals:function( state ){			
			return state.$totals;
		},
 
		recalculate:function( state ){
			return state.recalculate;
		},
 
		calculationGroups: function( state ){
	  		var productType = state.current.productType;
	  		return state.model.gcalc_ui_model.product_constructor_data[ productType ].rest_data.attr_filter.groups;
	  	},
	  	
	  	opt_attr: function( state ){
	  		return state.current.$opt_attr;
	  	},

	  	opt_attr_grups: function( state ){
	  		return state.current.opt_attr_grups;
	  	},
	  	


	  	
	  	notifications: function( state ){
	  		return state.notifications;
	  	},
	  	
	  	notifications__errors: function( state ){
	  		var not = state.notifications;
	  		var r = []
	  		for( var i = 0 in not ){
	  			if ( not[ i ].type === "error" ) {
	  				r.push( not[ i ] );
	  			}
	  		}	  		
	  		return r;
	  	},

	  	notifications__warnings: function( state ){
	  		var not = state.notifications;
	  		var r = []
	  		for( var i = 0 in not ){
	  			if ( not[ i ].type === "warning" ) {
	  				r.push( not[ i ] );
	  			}
	  		}	  		
	  		return r;
	  	},

	  	notifications__infos: function( state ){
	  		var not = state.notifications;
	  		var r = []
	  		for( var i = 0 in not ){
	  			if ( not[ i ].type === "info" ) {
	  				r.push( not[ i ] );
	  			}
	  		}	  		
	  		return r;
	  	},


	  	
	  	infobox: function( state ){
	  		return state.infobox;
	  	},

	  	
	  	$custom: function( state ){	  		
	  		return state.current.$custom;
	  	},


	  	$out: function( state ){
	  		
	  		return state.current.$out;
	  	},


	  	validations: function( state ){
	      	var productType = state.current.productType;
	      	if ( productType.length > 0 ) {
	  			var product_form_validation_data = state.model.gcalc_ui_model.product_constructor_data[ productType].rest_data.form_validation;    		
	  			return typeof product_form_validation_data !== "undefined" ? product_form_validation_data : {};
	      	} else {
				return state.model.gcalc_ui_model.product_constructor_data;
	      	}


	    },


		calc_data: function( state ){
	  		var productType = state.current.productType;
	  		if ( productType === '') { return {}; }
	  		
	  		return state.model.gcalc_ui_model.product_constructor_data[ productType ].rest_data.calc_data;
	  	},


		product_id: function( state ){
	  		var productType = state.current.productType;
	  		return state.model.gcalc_ui_model.product_data[ productType ].ID;
	  	},

	  	composer_validation_data: function( state ){
	  		var productType = state.current.productType;
	  		return state.model.gcalc_ui_model.product_constructor_data[ productType ].rest_data.composer_validation_data;
	  	},

	  	attr_bw_lists: function( state ){
	  		var productType = state.current.productType;
	  		return state.model.gcalc_ui_model.product_constructor_data[ productType ].rest_data.attr_bw_lists;
	  	},

		input_attr_matrix: function( state ){
	  		var productType = state.current.productType;
	  		return state.model.gcalc_ui_model.product_constructor_data[ productType ].rest_data.attr_filter.matrix;
	  	},

	  	input_attr_values: function( state ){
	  		var productType = state.current.productType;
	  		return state.model.gcalc_ui_model.product_constructor_data[ productType ].rest_data.attr_values;
	  	},

	  	input_attr_values_names: function( state ){
	  		var productType = state.current.productType;
	  		return state.model.gcalc_ui_model.product_constructor_data[ productType ].rest_data.attr_values_names;
	  	},
		
		current_calculation: function( state ){
			var calculation_id = state.current.calculation_id;
 			var calculations = state.calculations;
 			for(var i in calculations){
 					if( calculations[i].calculation_id === calculation_id ){
 						return state.calculations[i];
 					}
 			}

			return null;
	  	},


		calculations: function( state ){
	  		return state.calculations;
	  	},

	  	current_calculation_id: function( state ){
	  		return state.current.calculation_id;
	  	},

	  	tech_markups:function( state ){
	  		var calculation_id = state.current.calculation_id;
	  		for(var i in state.calculations ){
	  			if ( state.calculations[i].calculation_id == calculation_id ) {
	  				return state.calculations[i].$markups;
	  			}
	  		}
	  		
	  	},


	  	/**
	  	 * Translations object
	  	 * @param  {object} App store
	  	 * @return {object}       All loaded translations
	  	 */
	  	tr: function( state ){
	  		return state.tr;
	  	},

	  	ui: function( state ){
	  		return state.ui;
	  	},
		
		productsList: function( state ){
			var products = state.model.gcalc_ui_model.product_constructor_data;
			var parsed = {
				'default' : {
					
				}

			};
			for ( var i in products ){
				parsed[ i ] = products[i];
				parsed[ i ].component_name = 'c_input_form_'+ i.replace('-','_') +'___gcalcui';		
				parsed[ i ].component = typeof window[parsed[i].component_name] !== "undefined" ? window[parsed[i].component_name] : false;						
			}
  			  			
  			return parsed;
  		},

  		/**
  		 * [productType description]
  		 * @param  {[type]} state [description]
  		 * @return {[type]}       [description]
  		 */
		productType: function( state ){			
  			var pt = state.current.productType !== '' ? state.current.productType : 'book';
  			state.current.productType = pt;
  			return state.current.productType;

  		},

  		usrData: function( state ){
  			return state.usrData;	
  		},
  		user: function( state ){
  			var cookie = Cookies.get( 'GCUI' );
  			if ( cookie ) {
  				state.user = true;
  			}
  			return state.user;	
  		}

	  }
	});

	var router = new VueRouter({
	  routes : [
		  { path: '/', 					component: c_dasboard___gcalcui },
		  { path: '/calculation', 		component: c_calculation___gcalcui },
		  { path: '/archives', 			component: c_archives___gcalcui }
		]
	});

	
	var app = new Vue({
	  store: store,

	  router: router,
	  
	  localStorage : {
	  	calculations : {
	  		type: Object
	  	},
	  	someObject: {
	      type: Object,
	      default: {
	        hello: 'world'
	      }
	    }

	  },

	  computed:{
	  	user: function(){
	  		return this.$store.getters.user;
	  	},
	  	badLogin: function(){
	  		return this.$store.getters.badLogin;
	  	}

	  },

	  methods:{

	  	

/**
 * Return validation procedure in data array using regexp from passed value
 * @param  {[type]} data  [description]
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 */
		get_validation_procedure: function( data, value){

			for( var i in data ){
				var patt = new RegExp(i);
				if ( patt.test( value ) ) {
					return data[i];
				}
			}
			return false;
		},

	  	/**
	  	 * Parses option before sent it to render 
	  	 * 
	  	 * @param  {[type]} name    Option name
	  	 * @param  {[type]} options value/values
	  	 * @return {[type]}         parsed value/values
	  	 */
		parse_options: function( attr_name, options, form ) {
		    var values = form.values;
		    var attr_bw_lists = gcalcui__app_model.gcalc_ui_model.product_constructor_data.book.rest_data.attr_bw_lists;
 
		      for( var rule in attr_bw_lists){
			      var attr = attr_bw_lists[rule];
			      var name = attr.name;
			      
			      if ( attr_name === name.replace(/^pa_/,'')) {
			      	var current_value = form[name];
					  var procedures = this.get_validation_procedure( attr.data, current_value ); 					  
					    if ( procedures ) {
					        for( var procedure in procedures){
					            if ( typeof form[procedure] !== "undefined") {
					            	values[ procedure.replace(/^pa_/,'') ] = procedures[procedure].values;

									if( values[ procedure.replace(/^pa_/,'') ].indexOf( form[procedure] ) === -1 ) {
										form[procedure] = values[procedure.replace(/^pa_/,'')][0];
									}
					            }            
					        }        
					    }
					}
			    }

		    if (typeof values[attr_name] !=="undefined" ) {
		    	return values[attr_name]
		    } else 
	      return options;      	
	    },

	  	/**
	  	 * Returns
	  	 * @return {[type]} [description]
	  	 */
		get_attr_input_form_fields: function(  ){			
			return this.$store.getters.input_attr_matrix;
		},

		/**
	  	 * Returns
	  	 * @return {[type]} [description]
	  	 */
		get_attr_input_form_fields_values: function(  ){			
			return this.$store.getters.input_attr_values;
		},

		/**
	  	 * Returns
	  	 * @return {[type]} [description]
	  	 */
		get_attr_input_form_fields_values_names: function(  ){			
			return this.$store.getters.input_attr_values_names;
		},

		__tr: function( string ){
			var new_string = typeof this.$store.getters.tr[ string ] === "undefined";
			if ( new_string ) {
				
				
				window.usedTranslations = window.usedTranslations || {}
				window.usedTranslations[string]=string;
				return string;
			} 
			/**/
			return  this.$store.getters.tr[ string ];
		},


		get_calculation_data: function( calculation_id ) {      
		      var calculation_id = typeof calculation_id == "undefined" ? this.$store.getters.current_calculation_id : calculation_id;

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
		    },

		    isInt: function(n){
			    return Number(n) === n && n % 1 === 0;
			},

			isFloat: function(n){
			    return Number(n) === n && n % 1 !== 0;
			},

		    round: function( number ){
		    	if ( !isNaN( number ) && typeof number === "number") {
		    		var parsed  	= parseFloat(Math.round(number * 100) / 100).toFixed(2);
		    		var is_int  	= this.isInt( number );
		    		var is_float	= this.isFloat( number );

		    		if ( is_int ) { return parseInt( parsed ); }
		    		if ( is_float ) { return parseFloat( parsed ); }
		    	}
		    },


	  },

	  mounted: function(){
	  	this.$store.commit( 'setProductType', 'book' );
		
		var productType = 'book';
	  	var component 	= this.$store.getters.productsList[ productType.replace( '-', '_' ) ];
      
        this.$store.commit( 'setCalculationInputForm', component.component );


	  	//this.$store.commit( 'setCalculationInputForm', window.c_input_form_default___gcalcui );
	  },

	created: function(){
		var calculations = this.$localStorage.get('calculations');
	  	calculations = JSON.parse( JSON.stringify( calculations ) );
	  	for( var i in calculations ){	  		
	  		this.$store.commit( 'recieveCalculation', {calculation: calculations[i], root: this } );	  		
	  	}
		},

	beforeCreate: function(){
		var validations = this.$store.getters.validations;
		if ( typeof validations.book == "object" ) {			
			window.get_gcalc_ui_validations =  function(  ){			
				debugger
			};
	}
	  	

	  }

	}).$mount('#app-gcalcui');

})(window, Vue, VueRouter);	