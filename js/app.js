(function(window, Vue, VueRouter){
	Vue.use( window.vuelidate.default );
	Vue.use(VueLocalStorage);

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
	    	'dupa' : 'dupa jasiu pierdz satsiu zażółć gęślą jażń'	    	
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
	  		state.current.productType = productType;
	  		state.current = {
		    	productType : '',
		    	calculation_id : '',
		    	bvars : {}
		    };

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
 /*
	  mounted : function(){
	
				jQuery.ajax({
				  //type: "POST",
				  type: "GET",
				  url: "http://localhost/gaadcalcapi/wp-json/gcalc/v1/c",
				  //url: "http://printbiketeam.pl/wp-json/gcalc/v1/c",
				  
				  data: {},
				  success: this.onModelLoaded,
				  
				  beforeSend: function(xhr){
				  	



					var data = {
				  		"product_slug" : "book",
						"multi_quantity" : "10,50,150",
						"pa_format" : "260x357",
						"pa_quantity" : 1500,    
						"pa_paper" : "kreda-350g",
						"pa_print" : "4x4",                 
						"pa_finish" : "gloss-1x1",   
						"pa_spot_uv" : "1x0",
						"pa_folding" : "half-fold",
						"pa_cover_format" : "175x235",
						"pa_cover_paper" : "kreda-300g",
						"pa_cover_print" : "4x0",    
						"pa_cover_type" : "perfect_binding",    
						"pa_cover_dust_jacket_paper" : "kreda-150g",
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
						"pa_color_paper" : "kreda-135g",
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
				  		//console.log(i, data[i]);
				  		xhr.setRequestHeader( i, data[i] );
				  	}

				  },
				  dataType: 'json'
				});

	  },*/


	  methods:{
		__tr: function( string ){
			return string;
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
debugger
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
				"pa_format" : "260x357",
				"pa_quantity" : Math.floor( Math.random() * ( 1000 - 100 + 1 ) + 100 )	,    



				"pa_paper" : "kreda-350g",
				"pa_print" : "4x4",                 
				"pa_finish" : "gloss-1x1",   
				"pa_spot_uv" : "1x0",
				"pa_folding" : "half-fold",
				"pa_cover_format" : "175x235",
				"pa_cover_paper" : "kreda-300g",
				"pa_cover_print" : "4x0",    
				"pa_cover_type" : "perfect_binding",    
				"pa_cover_dust_jacket_paper" : "kreda-150g",
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
				"pa_color_paper" : "kreda-135g",
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
	  	this.$store.commit( 'setCalculationInputForm', window.c_input_form_default___gcalcui );
	  },

	  created: function(){

	  	var calculations = this.$localStorage.get('calculations');
	  	for( var i in calculations ){	  		
	  		this.$store.commit( 'recieveCalculation', calculations[i] );	  		
	  	}
		
	  }

	}).$mount('#app-gcalcui');

})(window, Vue, VueRouter);	