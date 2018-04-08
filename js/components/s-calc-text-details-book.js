

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
 
  created: function(){  	
  	this.set_val( this.calculation_details );
  },

  methods: {
   set_val:function( val ){

   	if ( typeof val.request_attributes === "undefined" ) {
   		return;
   	}

   	var request_attributes 		= val.request_attributes;
   	var current_product_slug 	= this.$store.getters.current_product_slug;

   	var matrix = {
		book_info : [ 'title', 'book_number', 'comments' ],
   		basics : [ 'quantity', 'orientation', 'format' ],
   		cover : [ 'cover_type', 'cover_paper', 'cover_print', 'cover_finish', 'cover_spot_uv' ],

   		book_block_bw : ['bw_pages', 'bw_paper', 'bw_print'],
   		book_block_color : ['color_pages', 'color_paper', 'color_print', 'color_stack', 'color_pages_numbers' ]
   	}

   	var _T = {
   		basics : {
   			v : [],
   			title : this.$root.__tr( 'Basics' )
   		},

   		book_info : {
   			v : [],
   			title : this.$root.__tr( 'Book info' )
   		},

   		cover : {
   			v : [],
   			title : this.$root.__tr( 'Cover' )
   		},

   		book_block_bw : {
   			v : [],
   			title : this.$root.__tr( 'B&W block' )
   		},

		book_block_color : {
			v : [],
			title : this.$root.__tr( 'Color block' )
		},
   	};






   	for( var i in matrix ){
   		var __T = {}
   		for(var j in matrix[i]){
   			var attr_name = 'pa_' + matrix[ i ][ j ];
   			var attr_value = request_attributes[ attr_name ];
   			__T[ attr_name ] = this.$root.__tr( attr_value );
			//_T[ i ].v[ attr_name ] = attr_value;
			//
   		}

   		_T[ i ].v.push( __T );
   	}

   	this.T = _T;
   	return _T;
   }
  }
  
});