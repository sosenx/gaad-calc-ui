var login_form___gcalcui = Vue.component('login-form', {
  
  template: '#template-gcalcui-login-form',
  
  data: function() {
    return {
      l : '',
      p : ''
    }
  },

  methods: {
    /**
    * Handles submitting the form
    */
    submit: function( event ) {
      event.preventDefault();
      var el = event.currentTarget;

      jQuery.ajax({
          type: "GET",
          url: "http://localhost/gaadcalcapi/wp-json/gcalc/v1/auth",         
          data: {},
          success: this.onLoginProcessed,          
          beforeSend: this.beforeSend,
          dataType: 'json'
        });

    },

    /**
    *
    */
    onLoginProcessed: function( data ){
      this.$store.commit( 'recieveCredentials', data );
    },

    /**
    *
    */
    beforeSend: function( xhr ){    
        Cookies.set( 'GCUIA', 'Basic ' + Base64.encode( this.l + ':' + this.p ) );
        xhr.setRequestHeader( 'Authorization', 'Basic ' + Base64.encode( this.l + ':' + this.p ) );
        xhr.setRequestHeader( 'Apikey', Base64.encode( this.$store.getters.usrData.apikey ) );
        xhr.setRequestHeader( 'Apisecret', Base64.encode( this.$store.getters.usrData.apisecret ) );
    },

    /**
    * 
    */
    checkForm: function(){
      return this.l.length > 0 && this.p.length > 0;
    }



  }
});


