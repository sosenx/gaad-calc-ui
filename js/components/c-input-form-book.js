var c_input_form_book___gcalcui = Vue.component('c-input-form-book', {

  

  template: '#template-gcalcui-c-input-form-book',
    data: function() {
    var r = {   
      defaults:{},  
      fields : this.$root.get_attr_input_form_fields(),
      values : this.$root.get_attr_input_form_fields_values()
    };


    var matrix = gcalcui__app_model.gcalc_ui_model.product_constructor_data.book.rest_data.form_validation.matrix;
    if ( matrix ) {
      for( var i in matrix ){               
        r[i] = typeof r.fields[i].default !== "undefined" ? r.fields[i].default : '';
        r.defaults[ i ] = r[i]; 
      }

    } else {
      console.error('no validation matrix, validation imposibble')
    }

    var attr_bw_lists = gcalcui__app_model.gcalc_ui_model.product_constructor_data.book.rest_data.attr_bw_lists;
    for( var rule in attr_bw_lists){
      var attr = attr_bw_lists[rule];
      var name = attr.name;
      var current_value = r[name];
      var procedures = attr.data[current_value];
        if ( procedures ) {
            for( var procedure in procedures){
                if ( typeof r[procedure] !== "undefined") {
                  r.values[procedure.replace(/^pa_/,'')] = procedures[procedure].values;              
                }            
            }        
        }
    }
    
    return r;
  },

  validations: {
    text: {
      required: window.validators['required'],
      minLength: window.validators['minLength'](5)
    }
  },


  watch:{

  },

  validations: gcalcui__app_model.gcalc_ui_model.product_constructor_data.book.rest_data.form_validation.matrix,

  methods: {

    
  }


});