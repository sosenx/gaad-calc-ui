var c_input_form_book___gcalcui = Vue.component('c-input-form-book', {

  

  template: '#template-gcalcui-c-input-form-book',
    data: function() {
    return {     
      fields : this.$root.get_attr_input_form_fields(),
      values : this.$root.get_attr_input_form_fields_values()       
    }
  },

  watch:{

  },

  methods: {

    method: function() {
      return false;      
    }
  }


});