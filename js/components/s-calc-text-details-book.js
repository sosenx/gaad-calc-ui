

var s_calc_text_details_book___gcalcui = Vue.component('s-calc-text-details-book', {
  
  template: '#template-gcalcui-s-calc-text-details-book',
  
  props: ['calculation_details'],
  
  data: function() {
  	
    return {      
     T: null
    }
  },

  watch: {
    calculation_details:function( val){
    	this.set_val( val );
    }
  },
  

  mounted: function(){
		EventBus.$on( 'product-changed', this.refresh );
 	EventBus.$emit('product-changed', this.refresh );
  },

  created: function(){  	
  	this.set_val( this.calculation_details );
  },

  methods: {
	refresh:function(a){
		this.set_val( this.calculation_details );

	},

   set_val:function( val ){

   	if ( typeof val.request_attributes === "undefined" ) {
   		return;
   	}

   	var request_attributes 		= val.request_attributes;
   	var current_product_slug 	= this.$store.getters.current_product_slug;

   	var matrix = {
		//book_info : [  ],
		basics          : [ 'quantity', 'orientation', 'format', 'title', 'book_number', 'comments'],
		cover           : [ 'cover_type', 'cover_paper', 'cover_print', 'cover_finish', 'cover_spot_uv' ],
		cover_hard      : [ 'cover_type', 'cover_board_thickness' ],
			
		cover_cloth_covering  	: [ 'cover_cloth_covering_paper', 'cover_cloth_covering_print', 'cover_cloth_covering_finish', 'cover_cloth_covering_spot_uv' ],
		cover_endpaper       	: [ 'cover_endpaper_paper', 'cover_endpaper_print' ],
		cover_dust_jacket		:['cover_dust_jacket_paper', 'cover_dust_jacket_print', 'cover_dust_jacket_finish', 'cover_dust_jacket_spot_uv' ],

		cover_ribbon:[ 'cover_ribbon', 'cover_ribbon_width' ],



		book_block_bw   : ['bw_pages', 'bw_paper', 'bw_print'], 
		book_block_color: ['color_pages', 'color_paper', 'color_print', 'color_stack', 'color_pages_numbers' ],

		holes: [ 'drilling_holes', 'holes_dia', 'holes_pos' ],

		packing: [ 'groupwrap', 'pieces_per_carton' ]
   	}

   	var _T = {
   		basics : {
   			v : [],
   			title : this.$root.__tr( 'Basics' )
   		},

   		cover : {
   			v : [],
   			title : this.$root.__tr( 'Cover' )
   		},

   		cover_hard : {
   			v : [],
   			title : this.$root.__tr( 'Cover' )
   		},
   		
   		cover_cloth_covering : {
   			v : [],
   			title : this.$root.__tr( 'Cloth covering' )
   		},

   		cover_endpaper : {
   			v : [],
   			title : this.$root.__tr( 'Endpaper' )
   		},

   		cover_dust_jacket : {
   			v : [],
   			title : this.$root.__tr( 'Dust jacket' )
   		},

   		cover_ribbon : {
   			v : [],
   			title : this.$root.__tr( 'Ribbon' )
   		},
   		
   		book_block_bw : {
   			v : [],
   			title : this.$root.__tr( 'B&W block' )
   		},

		book_block_color : {
			v : [],
			title : this.$root.__tr( 'Color block' )
		},

		holes : {
			v : [],
			title : this.$root.__tr( 'Holes' )
		},

		packing : {
			v : [],
			title : this.$root.__tr( 'Packing' )
		},
   	};




   	for( var i in matrix ){
   		var __T = {}
   		for(var j in matrix[i]){
   			var attr_name = 'pa_' + matrix[ i ][ j ];
   			var attr_value = request_attributes[ attr_name ];

   			if ( typeof this.$root.__tr( attr_value ) !== "undefined") {
   				__T[ this.$root.__tr( attr_name ) ] = this.$root.__tr( attr_value );
   			}
   		}
   		if ( JSON.stringify(__T) !== "{}" ) {
   			_T[ i ].v.push( __T );
   		} else {
   			//branch is empty, no need to display
   			delete _T[ i ] ;
   		}

   	}

   	/**
   	 * parsing data to shortened attributes table
   	 */
   	//quantity format 
   	_T.basics.v[ 0 ][ this.$root.__tr( 'pa_quantity' ) ] = _T.basics.v[ 0 ][ this.$root.__tr( 'pa_quantity' ) ] + ' ' + this.$root.__tr( 'pcs.' )

   	//join format and orientation
   	var short_pa_format = _T.basics.v[ 0 ][ this.$root.__tr( 'pa_format' ) ] + ' (' + _T.basics.v[ 0 ][ this.$root.__tr( 'pa_orientation' ) ] + ')';
   	delete _T.basics.v[ 0 ][ this.$root.__tr( 'pa_orientation' ) ];
   	_T.basics.v[ 0 ][ this.$root.__tr( 'pa_format' ) ] = short_pa_format;

	var pa_title    = _T.basics.v[ 0 ][ this.$root.__tr( 'pa_title' ) ];
	var book_number = _T.basics.v[ 0 ][ this.$root.__tr( 'pa_book_number' ) ];
	var comments    = _T.basics.v[ 0 ][ this.$root.__tr( 'pa_comments' ) ];

	if ( typeof pa_title === "undefined" || pa_title === "" ) { delete _T.basics.v[ 0 ][ this.$root.__tr( 'pa_title' ) ]; }
	if ( typeof book_number === "undefined" || book_number === "" ) { delete _T.basics.v[ 0 ][ this.$root.__tr( 'pa_book_number' ) ]; }
	if ( typeof comments === "undefined" || comments === "" ) { delete _T.basics.v[ 0 ][ this.$root.__tr( 'pa_comments' ) ]; }


   	//join cloth covering
	var short_cloth_covering_basic = 
		_T.cover_cloth_covering.v[ 0 ][ this.$root.__tr( 'pa_cover_cloth_covering_paper' ) ] 
		+ ' ' + _T.cover_cloth_covering.v[ 0 ][ this.$root.__tr( 'pa_cover_cloth_covering_print' ) ];
	
	var pa_cover_cloth_covering_finish     =_T.cover_cloth_covering.v[ 0 ][ this.$root.__tr( 'pa_cover_cloth_covering_finish' ) ];
	var pa_cover_cloth_covering_spot_uv    =_T.cover_cloth_covering.v[ 0 ][ this.$root.__tr( 'pa_cover_cloth_covering_spot_uv' ) ];
	_T.cover_cloth_covering.v[ 0 ]     = {}
	_T.cover_cloth_covering.v[ 0 ][ this.$root.__tr( 'Paper' ) + ' ' + this.$root.__tr( 'print' ) ] = short_cloth_covering_basic;
	_T.cover_cloth_covering.v[ 0 ][ this.$root.__tr( 'Finish' ) + ' ' + this.$root.__tr( 'Spot UV' ) ] = pa_cover_cloth_covering_finish + ', ' + pa_cover_cloth_covering_spot_uv;

	//join endpaper
	var short_endpaper_basic = 
		_T.cover_endpaper.v[ 0 ][ this.$root.__tr( 'pa_cover_endpaper_paper' ) ] 
		+ ', ' + _T.cover_endpaper.v[ 0 ][ this.$root.__tr( 'pa_cover_endpaper_print' ) ];
	
	_T.cover_endpaper.v[ 0 ]     = {}
	_T.cover_endpaper.v[ 0 ][ this.$root.__tr( 'Paper' ) + ', ' + this.$root.__tr( 'print' ) ] = short_endpaper_basic;



	//join dust jacket
	if ( typeof _T.cover_dust_jacket !== "undefined" ) {
		var short_dust_jacket_basic = 
			_T.cover_dust_jacket.v[ 0 ][ this.$root.__tr( 'pa_cover_dust_jacket_paper' ) ] 
			+ ' ' + _T.cover_dust_jacket.v[ 0 ][ this.$root.__tr( 'pa_cover_dust_jacket_print' ) ];
		
		var pa_cover_dust_jacket_finish     =_T.cover_dust_jacket.v[ 0 ][ this.$root.__tr( 'pa_cover_dust_jacket_finish' ) ];
		var pa_cover_dust_jacket_spot_uv    =_T.cover_dust_jacket.v[ 0 ][ this.$root.__tr( 'pa_cover_dust_jacket_spot_uv' ) ];
		_T.cover_dust_jacket.v[ 0 ]     = {}
		_T.cover_dust_jacket.v[ 0 ][ this.$root.__tr( 'Paper' ) + ' ' + this.$root.__tr( 'print' ) ] = short_dust_jacket_basic;
		_T.cover_dust_jacket.v[ 0 ][ this.$root.__tr( 'Finish' ) + ' ' + this.$root.__tr( 'Spot UV' ) ] = pa_cover_dust_jacket_finish + ', ' + pa_cover_dust_jacket_spot_uv;
	}



	//join cover ribbon
	if ( typeof _T.cover_ribbon !== "undefined" ) {

		var pa_cover_ribbon = _T.cover_ribbon.v[ 0 ][ this.$root.__tr( 'pa_cover_ribbon' ) ];
		var pa_cover_ribbon_width = _T.cover_ribbon.v[ 0 ][ this.$root.__tr( 'pa_cover_ribbon_width' ) ];

		if ( request_attributes.pa_cover_ribbon !== 'ribbon-0' && request_attributes.pa_cover_ribbon_width !== 'ribbon-0' ) {
			var cover_ribbon_basic = pa_cover_ribbon + ', ' + pa_cover_ribbon_width;
			_T.cover_ribbon.v[ 0 ]     = {}
			_T.cover_ribbon.v[ 0 ][ this.$root.__tr( 'Ribbon' ) ]     = cover_ribbon_basic;


		} else {
			delete _T.cover_ribbon;
		}	
	
	}

	//join BW block
	var book_block_bw_basic = 
		_T.book_block_bw.v[ 0 ][ this.$root.__tr( 'pa_bw_paper' ) ] 
		+ ', ' + _T.book_block_bw.v[ 0 ][ this.$root.__tr( 'pa_bw_print' ) ];
	
	var pa_bw_pages = parseInt(_T.book_block_bw.v[ 0 ][ this.$root.__tr( 'pa_bw_pages' ) ]);
	_T.book_block_bw.v[ 0 ]     = {}
	_T.book_block_bw.v[ 0 ][ this.$root.__tr( 'pa_bw_pages' ) ]    = pa_bw_pages + ' ' + this.$root.__tr( 'pages' );
	_T.book_block_bw.v[ 0 ][ this.$root.__tr( 'Paper' ) + ', ' + this.$root.__tr( 'print' ) ]    = book_block_bw_basic;
	

	//join Color block
	var book_block_color_basic = 
		_T.book_block_color.v[ 0 ][ this.$root.__tr( 'pa_color_paper' ) ] 
		+ ', ' + _T.book_block_color.v[ 0 ][ this.$root.__tr( 'pa_color_print' ) ];

	var pa_color_pages = parseInt(_T.book_block_color.v[ 0 ][ this.$root.__tr( 'pa_color_pages' ) ]);
	_T.book_block_color.v[ 0 ]     = {}
	_T.book_block_color.v[ 0 ][ this.$root.__tr( 'pa_color_pages' ) ]    = pa_color_pages + ' ' + this.$root.__tr( 'pages' );
	_T.book_block_color.v[ 0 ][ this.$root.__tr( 'Paper' ) + ', ' + this.$root.__tr( 'print' ) ]    = book_block_color_basic;



	//join drilling holes
	if ( typeof _T.holes !== "undefined" ) {

		//delete drilling holes
	   	if ( parseInt( request_attributes.pa_drilling_holes ) === 0 ) {
	   		delete _T.holes;
	   	} else {
			var holes_basic = 
				_T.holes.v[ 0 ][ this.$root.__tr( 'pa_drilling_holes' ) ] 
				+ ' ' + 
				( request_attributes.pa_drilling_holes === "custom-value" ? "" : this.$root.__tr( 'holes' ) ) 
				+ ', Ø' + _T.holes.v[ 0 ][ this.$root.__tr( 'pa_holes_dia' ) ] + 'mm';
			
			var pa_holes_pos = _T.holes.v[ 0 ][ this.$root.__tr( 'pa_holes_pos' ) ]
			_T.holes.v[ 0 ] = {}
			_T.holes.v[ 0 ][ this.$root.__tr( 'Holes' ) + ', ' + this.$root.__tr( 'Diameter' ) ] = holes_basic;
			_T.holes.v[ 0 ][ this.$root.__tr( 'pa_holes_pos' ) ] = pa_holes_pos;
	   	}
	}


	//join packing
	var groupwrap = parseInt( _T.packing.v[ 0 ][ this.$root.__tr( 'pa_groupwrap' ) ] );
	var packing_basic = ( groupwrap == 0 ? this.$root.__tr( 'no' ) : this.$root.__tr( 'wrap' ) + ' ' + groupwrap + ' ' + this.$root.__tr( 'pcs.' ) )
	_T.packing.v[ 0 ][ this.$root.__tr( 'pa_groupwrap' ) ] = packing_basic;
	_T.packing.v[ 0 ][ this.$root.__tr( 'pa_pieces_per_carton' ) ] = _T.packing.v[ 0 ][ this.$root.__tr( 'pa_pieces_per_carton' ) ] + ' ' + this.$root.__tr( 'pcs.' ) + '/' + this.$root.__tr( 'karton' );




   	//cover type
   	if ( request_attributes.pa_cover_type !== 'hard' ) {	delete _T.cover_hard;  	} else {	delete _T.cover;   	}
   	


   	//delete bw block
   	if ( parseInt( request_attributes.pa_bw_pages ) === 0 ) {
   		delete _T.book_block_bw;
   	}
   	
   	//delete color block
   	if ( parseInt( request_attributes.pa_color_pages ) === 0 ) {
   		delete _T.book_block_color;
   	}

   	





   	this.T = _T;
   	return _T;
   }
  }
  
});