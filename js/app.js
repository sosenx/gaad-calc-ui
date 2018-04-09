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

	
	var router = new VueRouter({
	  routes : [
		  { 
		  	path: '/',
		  	name : 'Dashboard',
		  	component: c_dasboard___gcalcui
		  },

		  { 
		  	path: '/calculation', 	
		  	name: 'calculation',
		  	component: c_calculation___gcalcui,
		  	children:[
		  		
		  		{
		  			path: 'new',
		  			name: 'new_calculation',
		  			component: g_calculation_new_panel___gcalcui,
		  			ref: 'calculation'
		  		},
		  		{
		  			path: 'save',
		  			name: 'save_calculation',
		  			component: g_calculation_save_panel___gcalcui
		  		}

		  	]

		  },





		  { path: '/archives', 			component: c_archives___gcalcui }
		]
	});
debugger
	
	var app = new Vue({
	  store: window.store,

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
				
				
				window.usedTranslations = typeof window.usedTranslations === "object" ? window.usedTranslations : {};
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
      
        this.$store.commit( 'setCalculationInputForm', { component: component.component, root: this } );



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