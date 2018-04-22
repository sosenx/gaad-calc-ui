

var e_archives_actions___gcalcui = Vue.component('e-archives-actions', {
  
  template: '#template-gcalcui-e-archives-actions',
  
  props: ['calculation_id', 'calculation_row'],
  
  data: function() {
    return {      
      	calculation: this.$root.get_calculation_data( this.calculation_id ),
    	bussy : false,
		show_ui : false,

		request_attributes: {},
		success_data : false,
    }
  },


	created: function(){
		this.request_attributes = {
			cid: this.calculation_id
		}

		this.request_raports();
	},



  watch: {
    calculation_id: function( val ){
      //this.calculation = this.$root.get_calculation_data( val );
    }
  },

  methods: {
      get_basename:function( path ){
      var base = new String(path).substring(path.lastIndexOf('/') + 1); 
      if(base.lastIndexOf(".") != -1)       
          base = base.substring(0, base.lastIndexOf("."));
     return base;
    },
    
success:    function( data ){ 

      this.success_data = data;


      this.bussy = false;
    },

    beforeSend: function( xhr ){
      var data = JSON.parse( JSON.stringify( this.request_attributes ) );
      data['GCUI'] = Cookies.get('GCUI');

      data['post_id'] = this.calculation_row.id;

      for( var i in data){
        xhr.setRequestHeader( i, data[i] );
      }
      
      this.show_ui = false;  
    },

   request_raports:function(){

      this.bussy = true;

      jQuery.ajax({         
          type: "GET",
          url: "http://localhost/gaadcalcapi/wp-json/gcalc/v1/acr",           
          data: {},
          success: this.success,          
          beforeSend: this.beforeSend,
          dataType: 'json'
        });

    },


  }
  
});