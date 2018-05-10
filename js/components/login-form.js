var login_form___gcalcui = Vue.component('login-form', {
  
  template: '#template-gcalcui-login-form',
  
  data: function() {
    return {
      l : '',
      p : '',
      error : false,
      bussy : false
    }
  },

  methods: {

    reset_errors:function( ){
      this.error = false;
    },

    set_error:function( value ){
      this.error = value;
    },

     set_bussy:function( value ){
      this.bussy = value;
    },

    /**
    * Handles submitting the form
    */
    submit: function( event ) {
      this.set_bussy(true);
      event.preventDefault();
      var el = event.currentTarget;

      jQuery.ajax({
          type: "GET",
          url: "http://calc.c-p.com.pl/wp-json/gcalc/v1/auth",         
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
       this.set_bussy(false);
      if ( data.credentials === null) {
        this.set_error( true );
      } else {
        this.set_error( false );
        this.$store.commit( 'recieveCredentials', data );
      }
       
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


