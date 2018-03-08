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
          //type: "POST",
          type: "GET",
          //url: "http://localhost/gaadcalcapi/wp-json/gcalc/v1/c",
          //url: "http://printbiketeam.pl/wp-json/gcalc/v1/c",
          
          data: {},
          success: this.onModelLoaded,
          
          beforeSend: function(xhr){
            for( var i in data){
              //console.log(i, data[i]);
              xhr.setRequestHeader( i, data[i] );
            } 

          },
          dataType: 'json'
        });

      debugger

    },

    checkForm: function(){
      return this.l.length > 0 && this.p.length > 0;
    }

  }
});