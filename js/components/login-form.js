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
      debugger
    },

    /**
    *
    */
    beforeSend: function( xhr ){
      xhr.setRequestHeader( 'auth', this.l + ':' + this.p );
    },

    /**
    * 
    */
    checkForm: function(){
      return this.l.length > 0 && this.p.length > 0;
    }





  }
});


