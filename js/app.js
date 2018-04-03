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


			"Black & White 1-sided"          :"Black & White 1-sided",
			"Blank"                          :"Blank",
			"Board 2.0mm"                    :"Board 2.0mm",
			"Board 2.5mm"                    :"Board 2.5mm",
			"Board thickness"                :"Board thickness",
			"Calculate"                      :"Calculate",
			"Calculating"                    :"Calculating",
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
	    	$opt_attr : {}
	    },
	    credentials : false,
	    user : false,
	    badLogin : false,
	    recalculate: false
	  },

	  actions: {

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
	  	recieveCalculation: function( state, calc ) {
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
	                      diff: 0
	                    };
	                    counter++;
	            	}	  		
              }

	  		}

	  		calc.$markups = tech;

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
	  		  		 
	  		Cookies.set( 'GCUI',  credentials.credentials.login + ':' + credentials.credentials.access_level );
	  	}
	  },

	  getters:{
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
/*
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
		*/

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