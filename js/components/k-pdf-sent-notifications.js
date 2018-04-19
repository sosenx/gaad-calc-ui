

var k_pdf_sent_notifications___gcalcui = Vue.component('k-pdf-sent-notifications', {
  
  template: '#template-gcalcui-k-pdf-sent-notifications',
  
  
  data: function() {
    return {      
      success_data: {},
      raport : false,
      success_icons:{
        account: false
      }
    }
  },


  created: function(){
    EventBus.$on( 'calculation-sent-success', this.success_data_changed );
  	EventBus.$on( 'calculation-sent-update-success', this.success_data_update );
  	
  },

  watch: {
  	
  },

  methods: {
  	get_basename:function( path ){
  		var base = new String(path).substring(path.lastIndexOf('/') + 1); 
	    if(base.lastIndexOf(".") != -1)       
	        base = base.substring(0, base.lastIndexOf("."));
	   return base;
  	},

   success_data_update:function( val ){
  
    for( var i in val ){
      this.success_data.send_notification_email_status[ i ] = val [ i ];
    }
    this.generate_raport();
   },


 success_data_changed:function( val ){
    this.success_data = val;
    this.generate_raport();
   },

	send_pdf_to_contractor_success : function( data ){
    if ( data.sent === true) {
     // Vue.set( this.success_icons.account, true  );
     this.success_icons.account = true;
    
    }
	},

    beforeSend: function( xhr ){
      var data = {
      	token: this.success_data.token
      };
      for( var i in data){
        xhr.setRequestHeader( i, data[i] );
      }        
    },

	send_pdf_to_contractor: function( e ){
		e.preventDefault();

      jQuery.ajax({         
          type: "POST",
          url: "http://localhost/gaadcalcapi/wp-json/gcalc/v1/scnot",           
          data: {},
          success: this.send_pdf_to_contractor_success,          
          beforeSend: this.beforeSend,
          dataType: 'json'
        });
	},

   generate_raport: function(){

   	var data = {
   	   	account    : this.success_data.send_notification_email_status.account,
   		contractor : this.success_data.send_notification_email_status.contractor
   	};
   	var raport = {}

   	var labels = {
   		
   		account : this.$root.__tr( 'Account manager calculation raport sent successfully.' ),
   		contractor : this.$root.__tr( 'Contractor calculation raport sent successfully.' )
   	}

   	for( var i in data ){
   		if ( data[i].error ) {
   			raport[i] = { error: true }
   		} else 
        if( data[i] ) {
     			raport[i] = {
     				error: false,
     				label : labels[i]
   			}
   		}

   		if ( i === 'account') {
   			raport[i].actions = {
   				send : {
            slug : i,
   					icon : 'envelope-o',
   					label : labels['send_button'],
   					fn : this.send_pdf_to_contractor
   				}
   			}
   		}
   	}

   	this.raport = raport;

   }

  }
  
});