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
	    tr: window['gcalcui_tr'],
		
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