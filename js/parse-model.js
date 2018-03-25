(function( window, gcalcui__app_model ){
	
	var products_constructor_data = gcalcui__app_model.gcalc_ui_model.product_constructor_data;
    for(var i in products_constructor_data){
      var product_constructor_data = products_constructor_data[i];
      var form_validation = product_constructor_data.rest_data.form_validation;

      if ( form_validation ) {
        var matrix = form_validation.matrix;

          for( attr in matrix ){
		        for( fn in matrix[attr] ){
		            var status = products_constructor_data[i].rest_data.form_validation.matrix[attr][fn];
		            if ( status ) {
		            	if ( status === true ) {		            		
		            		products_constructor_data[i].rest_data.form_validation.matrix[attr][fn] = window.validators[ fn ];
		            	} else if( status ) {
		            		products_constructor_data[i].rest_data.form_validation.matrix[attr][fn] = window.validators[ fn ]( status );
		            	}
		            	
		            }
		        }
          }
      }
    }

})(window, gcalcui__app_model);	

