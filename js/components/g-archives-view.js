var g_archives_view___gcalcui = Vue.component('g-archives-view', {
  
  template: '#template-gcalcui-g-archives-view',
  
  
  
  data: function() {
    return {
      items : [],    
      items_ : [],    

      fields:[
        {
          key: 'cid',
          label : this.$root.__tr( 'cid' ),
          sortable: true
        },
        
        {
          key: 'c-slug',
          label : this.$root.__tr( 'c-slug' ),
          sortable: true
        },
        

        {
          key: 'product_slug',
          label : this.$root.__tr( 'product_slug' ),
          sortable: true
        },
        

        {
          key: 'contractor_nip',
          label : this.$root.__tr( 'contractor_nip' ),
          sortable: true
        },
        

        {
          key: 'contractor_email',
          label : this.$root.__tr( 'contractor_email' ),
          sortable: true
        },

        {
          key: 'total_price',
          label : this.$root.__tr( 'total_price' ),
          sortable: true
        },
        
        {
          key: 'piece_price',
          label : this.$root.__tr( 'piece_price' ),
          sortable: true
        },
        
        {
          key: 'prod_cost',
          label : this.$root.__tr( 'prod_cost' ),
          sortable: true
        }, 


        {
          key: 'quantity',
          label : this.$root.__tr( 'quantity' ),
          sortable: true
        },
        
        {
          key: 'av_markup',
          label : this.$root.__tr( 'av_markup' ),
          sortable: true
        },
        
        {
          key: 'added',
          label : this.$root.__tr( 'added' ),
          sortable: true
        },  

        {
          key: 'notes',
          label : this.$root.__tr( 'notes' ),
          sortable: true
        }
      ],

      items_per_page : 20,
      current_page : 1,

      request_attributes: this.get_request_attributes()
    }
  },

  created: function(){
    if ( !this.getFromLocalStorage() ) {
      jQuery.ajax({         
        type: "GET",
        url: "http://localhost/gaadcalcapi/wp-json/gcalc/v1/ac",           
        data: {},
        success: this.success,          
        beforeSend: this.beforeSend,
        dataType: 'json'
      });   
    }
  },

  watch: {
   items: function( val ){
      this.items_ = this.parseitems_( val );
   }
  },

  methods: {
    parseitems_: function( items ){
      var items_ = [];
      var first = ( this.current_page - 1 ) * this.items_per_page;
      var last = ( this.current_page ) * this.items_per_page;
      
      for( var i = first; i <= last; i++ ){
        items_.push({
          'cid' : items[ i ][ 'cid' ],
          'c-slug' : items[ i ][ 'c-slug' ] ,
          'product_slug' :  this.$root.__tr(items[ i ][ 'product_slug' ] ),
          'contractor_nip' : items[ i ][ 'contractor_nip' ],
          'contractor_email' : items[ i ][ 'contractor_email' ],
          'total_price' : items[ i ][ 'total_price' ],
          'piece_price' : items[ i ][ 'piece_price' ],
          'prod_cost' : items[ i ][ 'prod_cost' ],
          'quantity' : items[ i ][ 'quantity' ],
          'av_markup' : items[ i ][ 'av_markup' ],
          'added' : items[ i ][ 'added' ],
          'notes' : items[ i ][ 'notes' ]
        });
      }
      
      return items_;
    },

    getFromLocalStorage:function( data ){
     var acalculations = this.$localStorage.get( 'acalculations' ); 
     this.items =  acalculations;
     return acalculations !== null ? acalculations : false;
    },

   get_request_attributes:function( data ){
     return {};
    },

    success:function( data ){     
     this.$localStorage.set( 'acalculations', data.output );
     this.items = data.output;
    },

    beforeSend: function( xhr ){
      var data = JSON.parse( JSON.stringify( this.request_attributes ) );
		data['GCUI'] = Cookies.get('GCUI');

      for( var i in data){
        xhr.setRequestHeader( i, data[i] );
      }
        
    },

  }
  
});