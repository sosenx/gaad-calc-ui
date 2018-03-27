

var b_input_attr_form_field___gcalcui = Vue.component('b-input-attr-form-field', {
  
  template: '#template-gcalcui-b-input-attr-form-field',
  
  props: ['name', 'label'],
  
  data: function() {
    var r =  {     
    	ui_component : this.get_dedicated_ui_component(),
    	selected: this.$parent[ 'pa_' + this.name ],
    	value : this.$parent[ 'pa_' + this.name ],
    	options :  this.$parent.values[ this.name ],
      	field: this.$parent.fields[ 'pa_' + this.name ],
      	values: this.$parent.values[ this.name ],
      	n: this.name
    }
	//r.selected = r.field.default;
	r.field.label = typeof this.label !== "undefined" ? this.label : this.name;
	debugger
    return r;
  },

  watch: {
    
  },

	methods: { 
		/**
		 * chuj wie czy to jest dobrze, moze validacja te sprawy powinna zalatwic
		 * @param  {[type]} value [description]
		 * @param  {[type]} event [description]
		 * @return {[type]}       [description]
		 */
		number_formatter: function( value, event ) {
	      	if ( value.length > 0) {
		      	var var_type = typeof this.field.var !== "undefined" ? this.field.var : 'string' ;
		      	switch( var_type ){
		      		case 'int' :  
		      			value = parseInt( value );
		      		break;
		      		default : break;
		      	} 
		      	
		      	var min = typeof this.field.min !== "undefined" ? this.field.min : -100000000000000000000000000000 ;	
		      	var max = typeof this.field.max !== "undefined" ? this.field.max : 100000000000000000000000000000 ;	

		      	if ( min && max) {
		      			
		      		if ( value >= min && value <= max ) {
		      			return value;
		      		} else {
		      			if ( value < min ) { value = min; }
		      			if ( value > max ) { value = max; }
		      		}

		      		return value;
		      	}	      	
      		}

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

	   parse_options: function( options ){
		   	var opt = [];

		   	if ( typeof options === "undefined") {return opt;}

		   	for (var i = 0; i < options.length; i++) {
		   		var value = options[i];
		   		var text = this.$root.__tr( options[i] );
				opt.push({ text : text, value : value });
		   	}
		   	this.selected = options[0];
		   	return opt;
	   	}
	}
  
});
var c_total_basic___gcalcui = Vue.component('c-total-basic', {
  
  template: '#template-gcalcui-b-total-basic',
  
  props: ['calculation_id'],
  
  data: function() {
    return {      
      calculation: this.$root.get_calculation_data()
    }
  },

  watch: {
    calculation_id: function( val ){
      this.calculation = this.$root.get_calculation_data();
    }
  },

  methods: {
   
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
      productType : this.$store.getters.productType

    }
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
      fields : this.$root.get_attr_input_form_fields(),
      values : this.$root.get_attr_input_form_fields_values()
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

  validations: {
    text: {
      required: window.validators['required'],
      minLength: window.validators['minLength'](5)
    }
  },


  watch:{

  },

  validations: gcalcui__app_model.gcalc_ui_model.product_constructor_data.book.rest_data.form_validation.matrix,

  methods: {

    
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
   		this.$store.commit('setCurrentCalculation', this.calculation_id );   	
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
   
  }
  
});


var f_total_production_processes___gcalcui = Vue.component('f-total-production-processes', {
  
  template: '#template-gcalcui-f-total-production-processes',
  
  props: ['calculation_id'],
  
  data: function() {
    return {            
      processes : null
    }
  },

  watch: {
    calculation_id: function( val ){      
      this.get_processes();
    }
  },

  created: function(){
     var processes = this.$root.get_calculation_data( this.calculation_id );
     return typeof processes !== "undefined" ? processes.output.d : [] ;      
  },

  methods: {
   
   get_processes: function(){
    var processes = this.$root.get_calculation_data( this.calculation_id );      
    return this.processes = typeof processes !== 'undefined' ? processes.output.d : null;
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



(function(window, Vue, VueRouter){
	Vue.use( window.vuelidate.default );
	Vue.use(VueLocalStorage);
	Vue.config.devtools = true;
	
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
	    	'dupa' : 'dupa jasiu pierdz satsiu zażółć gęślą jażń',    	
	    	'aaa' : 'dupa jasiu pierdz satsiu zażółć gęślą jażń'	    	
	    },
	    ui : {
	    	inputForm : {}
	    },
	    calculations : [],	    
	    current : {
	    	productType : '',
	    	calculation_id : '',
	    	bvars : {}
	    },
	    credentials : false,
	    user : false,
	    badLogin : false
	  },

	  actions: {

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

	  	

	  	setProductType: function( state, productType ) {	  		
	  		state.current = {
		    	productType : '',
		    	calculation_id : '',
		    	bvars : {}
		    };
	  		state.current.productType = productType;


	  	},

	  	setCalculationInputForm: function( state, component ) {	  		
	  		state.ui.inputForm = component;
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
	  	recieveCalculation: function( state, calc ) {
	  		state.calculations.push( calc );
	  		state.current.calculation_id = calc.calculation_id;	  		
	  	},

	  	/*
	  	
	  	Sets current calculation from calculations array
	  	 */
		setCurrentCalculation: function( state, calculation_id ) {
	  		state.current.calculation_id = calculation_id;
	  	},

	  	recieveCredentials: function( state, credentials ) {	  		
	  		state.user = credentials.login;
	  		state.badLogin = !credentials.login;
	  		state.credentials = credentials.credentials;	
	  		debugger  		
	  		Cookies.set( 'GCUI',  credentials.credentials.login + ':' + credentials.credentials.access_level );
	  	}
	  },

	  getters:{

	  	validations: function( state ){
      	var productType = state.current.productType;
      	if ( productType.length > 0 ) {
  			var product_form_validation_data = state.model.gcalc_ui_model.product_constructor_data[ productType].rest_data.form_validation;    		
  			return typeof product_form_validation_data !== "undefined" ? product_form_validation_data : {};
      	} else {
			return state.model.gcalc_ui_model.product_constructor_data;
      	}


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

		calculations: function( state ){
	  		return state.calculations;
	  	},

	  	current_calculation_id: function( state ){
	  		return state.current.calculation_id;
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
  			return state.current.productType !== '' ? state.current.productType : false;	
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
					              values[procedure.replace(/^pa_/,'')] = procedures[procedure].values;  
					              debugger            
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

		__tr: function( string ){
			return typeof this.$store.getters.tr[ string ] !== "undefined" ? this.$store.getters.tr[ string ] : string;
		},

		calculate : function( ){
			jQuery.ajax({				  
				  type: "GET",
				  url: "http://localhost/gaadcalcapi/wp-json/gcalc/v1/c",				    
				  data: {},
				  success: this.onModelLoaded,				  
				  beforeSend: this.calculateBeforeSend,
				  dataType: 'json'
				});
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

		calculateBeforeSend: function(xhr){
				  	
			var data = {
		  		"product_slug" : "book",
				"multi_quantity" : "10,50,150",
				"pa_format" : "145x260",
				"pa_quantity" : Math.floor( Math.random() * ( 1000 - 100 + 1 ) + 100 )	,    



				"pa_paper" : "couted-350g",
				"pa_print" : "4x4",                 
				"pa_finish" : "gloss-1x1",   
				"pa_spot_uv" : "1x0",
				"pa_folding" : "half-fold",
				"pa_cover_format" : "175x235",
				"pa_cover_paper" : "couted-300g",
				"pa_cover_print" : "4x0",    
				"pa_cover_type" : "hard",    
				"pa_cover_dust_jacket_paper" : "couted-150g",
				"pa_cover_dust_jacket_print" : "4x4",
				"pa_cover_dust_jacket_finish" : "0x0",
				"pa_cover_dust_jacket_spot_uv" : "1x0",
				"pa_cover_cloth_covering_paper" : "offset-150g",
				"pa_cover_cloth_covering_finish" : "gloss-1x0",
				"pa_cover_cloth_covering_print" : "4x4",
				"pa_cover_cloth_covering_spot_uv" : "1x0",
				"pa_cover_ribbon" : true,    
				"pa_cover_finish" : "gloss-1x0",    
				"pa_cover_spot_uv" : "1x1",
				"pa_cover_flaps" : true,
				"pa_cover_left_flap_width" : 100,
				"pa_cover_right_flap_width" : 100,
				"pa_cover_board_thickness" : "2.5mm",
				"pa_bw_pages" : 100,
				"pa_bw_format" : "175x235",
				"pa_bw_paper" : "ekobookw-70g-2.0",
				"pa_bw_print" : "1x1", 
				"pa_color_pages" : 100,
				"pa_color_format" : "210x297",
				"pa_color_paper" : "couted-135g",
				"pa_color_print" : "4x4",
				"pa_color_stack" : "stack", 
				"group_cover" : "",
				"group_bw" : "",
				"group_color" : "", 
				"apikey" : "g1a2a3d",
				"apisecret" : "k1o2o3t",
				"Authorization":"Basic Z2FhZDprb290MTIz	"
		  	}

		  	for( var i in data){
		  		xhr.setRequestHeader( i, data[i] );
		  	}

		},

		onModelLoaded : function( data ){
			this.$store.commit( 'recieveCalculation', data );

			var calculation_id = data.calculation_id;
			var calculations = this.$localStorage.get('calculations');	
			calculations[ calculation_id ] = data;
      		this.$localStorage.set('calculations', calculations );      		
		}

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
	  	for( var i in calculations ){	  		
	  		this.$store.commit( 'recieveCalculation', calculations[i] );	  		
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