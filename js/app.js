(function(window, Vue, VueRouter){
	
	//escape if no holder on page
	if ( document.getElementById( 'app-gcalcui' ) === null ) { return; }

	var store = new Vuex.Store({
	  state: {
	    model: window['gcalcui' + '__app_model'],
	    usrData: {
	    	apikey: 'g1a2a3d',
	    	apisecret: 'k1o2o3t'
	    },
	    calculations : []
	  },
	  mutations: {

	  	recieveCalculation: function( state, calc ) {
	  		state.calculations.push( calc );
	  	}
	  },

	});

	var router = new VueRouter({
	  routes : [
		  { path: '/', 					component: my_component_1___gcalcui },
		  { path: '/my-component-2', 	component: my_component_2___gcalcui },
		  { path: '/my-component-3', 	component: my_component_3___gcalcui }
		]
	});

	
	var app = new Vue({
	  store: store,
	  router: router,

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
				  		"product_slug":"druk-ksiazek",
						"pa_format":"90x50",
						"pa_quantity":"99",
						"pa_paper":"kreda-350g",
						"pa_print":"4x4",
						"pa_wrap":"gloss-1x1",
						"pa_spot_uv":"1x0",
						"pa_cover_format":"148x210",
						"pa_cover_paper":"kreda-300g",
						"pa_cover_print":"4x0",
						"pa_cover_type":"perfect_binding",
						"pa_cover_dust_jacket_paper":"kreda-150g",
						"pa_cover_dust_jacket_print":"4x4",
						"pa_cover_dust_jacket_wrap":"0x0",
						"pa_cover_dust_jacket_spot_uv":"1x0",
						"pa_cover_cloth_covering_paper":"offset-150g",
						"pa_cover_cloth_covering_wrap":"gloss-1x0",
						"pa_cover_cloth_covering_print":"4x4",
						"pa_cover_cloth_covering_spot_uv":"1x0",
						"pa_cover_ribbon":"true",
						"pa_cover_wrap":"gloss-1x0",
						"pa_cover_spot_uv":"1x1",
						"pa_cover_flaps":"true",
						"pa_cover_left_flap_width":"100",
						"pa_cover_right_flap_width":"100",
						"pa_bw_pages":"100",
						"pa_bw_format":"148x210",
						"pa_bw_paper":"ekobookw-70g-2.0",
						"pa_bw_print":"1x1",
						"pa_color_pages":"120",
						"pa_color_format":"147x210",
						"pa_color_paper":"kreda-135g",
						"pa_color_print":"4x4",
						"pa_color_stack":"stack",
						"group_cover":"true",
						"group_bw":"true",
						"group_color":"true",
						"pa_multi_quantity":"10,250,1000",
						"apikey":"g1a2a3d",
						"apisecret":"k1o2o3t",
						"Authorization":"Basic Z2FhZDprb290MTIz	"
				  	}

				  	for( var i in data){
				  		//console.log(i, data[i]);
				  		xhr.setRequestHeader( i, data[i] );
				  	}

				  },
				  dataType: 'json'
				});


	  },

	  methods:{
		onModelLoaded : function( data ){
			this.$store.commit( 'recieveCalculation', data );
		}

	  }

	}).$mount('#app-gcalcui');

})(window, Vue, VueRouter);	