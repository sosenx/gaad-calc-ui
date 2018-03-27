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
	"0": "0",
	"1": "1",
	"2": "2",
	"3": "3",
	"4": "4",
	"5": "5",
	"6": "6",
	"8": "8",
	"10": "10",
	"12": "12",
	"14": "14",
	"16": "16",
	"18": "18",
	"20": "20",
	"22": "22",
	"24": "24",
	"26": "26",
	"28": "28",
	"30": "30",
	"36": "36",
	"40": "40",
	"44": "44",
	"48": "48",
	"Basics": "Informacje Podstawowe",
	"Quantity": "Ilość",
	"Orientation": "Orientcja",
	"Format": "Format",
	"Book info": "Informacje o książce",
	"Book title": "Tytył",
	"Book number": "ISBN/ISSN",
	"Add. comments": "Dodadkowe info.",
	"Book blocks": "Blok książki",
	"Color pages number": "Iloćś stron kolorowych",
	"pages": "stron",
	"B&W pages number": "Ilość stron cz-b",
	"Color pages in single block": "Strony kolorowe w bloku",
	"Cover": "Okładka",
	"Cover type": "Rodzaj okładki",
	"Cover paper": "Papier okładki",
	"Cover print": "Zadruk okładki",
	"Cover finish": "Uszlachetnienie okładki",
	"Cover spot uv": "Lakier UV okłądki",
	"Flaps": "Skrzydełka",
	"Cover flaps": "Skrzydełka",
	"Left": "Lewe",
	"mm": "mm",
	"Right": "Prawe",
	"Color block": "Blok kolorowy",
	"Color paper": "Papier kolor",
	"Color print": "Zadruk kolor",
	"B&W block": "Block cz-b",
	"B&W paper": "Papier cz-b",
	"B&W print": "Zadruk cz-b",
	"Drilling holes": "Wiercenie otworów",
	"Number of holes": "Ilość otworów",
	"Diameter": "Średnica",
	"Position": "Położenie",
	"Packing": "Pakowanie",
	"Foil wrap pieces": "Pakowanie w termofolię",
	"Pieces per carton": "Ilość sztuk w kartonie",
	"portrait": "Portret",
	"album": "Album",
	"no-number": "Brak numeru",
	"isbn": "ISBN",
	"issn": "ISSN",
	"perfect_binding": "Oprawa klejona",
	"saddle_stitch": "Oprawa zeszytowa",
	"spiral_binding": "Oprawa spiralowana",
	"section_sewn": "Oprawa szyto-klejona",
	"hard": "Oprawa twarda",
	"coated-300g": "coated-300g",
	"coated-350g": "coated-350g",
	"gc1-230g": "gc1-230g",
	"gc1-250g": "gc1-250g",
	"gc2-230g": "gc2-230g",
	"gc2-250g": "gc2-250g",
	"4x4": "4x4",
	"4x0": "4x0",
	"gloss-1x0": "gloss-1x0",
	"matt-1x0": "matt-1x0",
	"soft-touch-1x0": "soft-touch-1x0",
	"0x0": "0x0",
	"1x0": "1x0",
	"1x1": "1x1",
	"no-flaps": "no-flaps",
	"flap-left": "flap-left",
	"flap-right": "flap-right",
	"flap-both": "flap-both",
	"coated-70g": "coated-70g",
	"coated-80g": "coated-80g",
	"coated-90g": "coated-90g",
	"coated-115g": "coated-115g",
	"coated-135g": "coated-135g",
	"coated-170g": "coated-170g",
	"coated-250g": "coated-250g",
	"uncoated-70g": "uncoated-70g",
	"uncoated-80g": "uncoated-80g",
	"uncoated-90g": "uncoated-90g",
	"uncoated-100g": "uncoated-100g",
	"uncoated-120g": "uncoated-120g",
	"uncoated-150g": "uncoated-150g",
	"eccobook_cream_16-60g": "eccobook_cream_16-60g",
	"eccobook_cream_16-70g": "eccobook_cream_16-70g",
	"eccobook_cream_16-80g": "eccobook_cream_16-80g",
	"eccobook_cream_20-60g": "eccobook_cream_20-60g",
	"eccobook_cream_20-70g": "eccobook_cream_20-70g",
	"eccobook_cream_20-80g": "eccobook_cream_20-80g",
	"ibook_white_16-60g": "ibook_white_16-60g",
	"ibook_white_16-70g": "ibook_white_16-70g",
	"ibook_cream_20-60g": "ibook_cream_20-60g",
	"ibook_cream_20-70g": "ibook_cream_20-70g",
	"ibook_cream_20-80g": "ibook_cream_20-80g",
	"munken_cream_18-80g": "munken_cream_18-80g",
	"munken_cream_18-90g": "munken_cream_18-90g",
	"munken_cream_15-80g": "munken_cream_15-80g",
	"munken_cream_15-90g": "munken_cream_15-90g",
	"munken_white_18-80g": "munken_white_18-80g",
	"munken_white_18-90g": "munken_white_18-90g",
	"munken_white_15-80g": "munken_white_15-80g",
	"munken_white_15-90g": "munken_white_15-90g",
	"custom-value": "custom-value",
	"long-center": "long-center",
	"short-center": "short-center"
},
	    _tr:[],
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

	  	setTranslation: function( state, source, translated ) {	  		
	  		state._tr.push(  {
	  			source: source,
				translated: translated
	  		} );
	  		
	  	},

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

	  	input_attr_values_names: function( state ){
	  		var productType = state.current.productType;
	  		return state.model.gcalc_ui_model.product_constructor_data[ productType ].rest_data.attr_values_names;
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
			return new_string ? string : this.$store.getters.tr[ string ];
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



				"pa_paper" : "coated-350g",
				"pa_print" : "4x4",                 
				"pa_finish" : "gloss-1x1",   
				"pa_spot_uv" : "1x0",
				"pa_folding" : "half-fold",
				"pa_cover_format" : "175x235",
				"pa_cover_paper" : "coated-300g",
				"pa_cover_print" : "4x0",    
				"pa_cover_type" : "hard",    
				"pa_cover_dust_jacket_paper" : "coated-150g",
				"pa_cover_dust_jacket_print" : "4x4",
				"pa_cover_dust_jacket_finish" : "0x0",
				"pa_cover_dust_jacket_spot_uv" : "1x0",
				"pa_cover_cloth_covering_paper" : "uncoated-150g",
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
				"pa_color_paper" : "coated-135g",
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