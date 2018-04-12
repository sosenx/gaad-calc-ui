

var g_archives_view___gcalcui = Vue.component('g-archives-view', {
  
  template: '#template-gcalcui-g-archives-view',
  
  
  
  data: function() {
    return {      
      request_attributes: this.get_request_attributes()
    }
  },

  created: function(){
  	
  	

  	jQuery.ajax({         
          type: "GET",
          url: "http://localhost/gaadcalcapi/wp-json/gcalc/v1/ac",           
          data: {},
          success: this.success,          
          beforeSend: this.beforeSend,
          dataType: 'json'
        }); 	
  },

  watch: {
   
  },

  methods: {
   get_request_attributes:function( data ){
     return {};

    },
    success:function( data ){
     debugger

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