

var c_total_archives_basic___gcalcui = Vue.component('c-total-archives-basic', {
  
  template: '#template-gcalcui-c-total-archives-basic',
  
  props: ['calculation_row'],
  
  data: function() {
    return { 
    	items : [],
    	fields:[ 
        {
          key: 'id',
          label : this.$root.__tr( 'id' ),
        },

         {
          key: 'cid',
          label : this.$root.__tr( 'cid' ),
        },
        
        {
          key: 'c-slug',
          label : this.$root.__tr( 'c-slug' ),
        },

        {
          key: 'product_slug',
          label : this.$root.__tr( 'product_slug' ),
        },

        {
          key: 'contractor_nip',
          label : this.$root.__tr( 'contractor_nip' ),
        },  

        {
          key: 'contractor_email',
          label : this.$root.__tr( 'contractor_email' ),
        },

        {
          key: 'total_price',
          label : this.$root.__tr( 'total_price' ),          
        },
        
        {
          key: 'piece_price',
          label : this.$root.__tr( 'piece_price' ),          
        },
        
        {
          key: 'prod_cost',
          label : this.$root.__tr( 'prod_cost' ),          
        }, 

        {
          key: 'quantity',
          label : this.$root.__tr( 'quantity' ),          
        },
        
        {
          key: 'av_markup',
          label : this.$root.__tr( 'av_markup' ),          
        },
        
        {
          key: 'added',
          label : this.$root.__tr( 'added' ),          
        },  

        {
          key: 'notes',
          label : this.$root.__tr( 'notes' ),          
        }
      ],
    }
  },
/*
  mounted: function(){

  	EventBus.$on( 'archives-row-dblclicked', this.show_acalculation_row );

  },
*/
   created: function(){
     this.items.push( this.calculation_row );



  },

  watch: {
    calculation_row: function( val ){
    }
  },

  methods: {/*
   show_acalculation_row:function( data ){
   	console.log(data);
   	this.items.push( data.item );
   	Vue.set( this.item, data.item );
   }*/
  }
  
});