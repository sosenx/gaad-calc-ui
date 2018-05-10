

var k_pdf_created_notifications___gcalcui = Vue.component('k-pdf-created-notifications', {
  
  template: '#template-gcalcui-k-pdf-created-notifications',
  
  props: ['success_data_prop'],
  
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
  	EventBus.$on( 'calculation-save-success', this.success_data_changed );  	
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

   success_data_changed:function( val ){
   	this.success_data = val;    
   	this.generate_raport();
   },

	send_pdf_to_contractor_success : function( data ){
    if ( data.sent === true) {
     // Vue.set( this.success_icons.account, true  );
     this.success_icons.account = true;
     EventBus.$emit( 'calculation-sent-update-success', { contractor : true } );
     
    
    }
	},


  beforeSend: function( xhr ){
    var data = {
    	token: this.success_data.token
    };
    for( var i in data){
      xhr.setRequestHeader( i, data[i] );
    }

    this.success_icons.account = 'waiting';
  },


	send_pdf_to_contractor: function( e ){
		e.preventDefault();

      jQuery.ajax({         
          type: "POST",
          url: "http://calc.c-p.com.pl/wp-json/gcalc/v1/scnot",           
          data: {},
          success: this.send_pdf_to_contractor_success,          
          beforeSend: this.beforeSend,
          dataType: 'json'
        });
	},

   generate_raport: function(){
   	var data = {
   	   	account    : this.success_data.pdf.account,
   		contractor : this.success_data.pdf.contractor
   	};
   	var raport = {}

   	var labels = {
   		send_button: this.$root.__tr( 'Send calculation via e-mail to contractor.' ),
   		account : this.$root.__tr( 'Account manager calculation raport successfully created.' ),
   		contractor : this.$root.__tr( 'Contractor calculation raport successfully created.' )
   	}

   	for( var i in data ){
   		if ( data[i].error ) {
   			raport[i] = { error: true }
   		} else {
   			raport[i] = {
   				error: false,
   				url : data[i].url,
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