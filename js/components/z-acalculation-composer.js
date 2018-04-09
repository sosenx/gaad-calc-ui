var z_acalculation_composer___gcalcui = Vue.component('z-acalculation-composer', {
  
  template: '#template-gcalcui-z-acalculation-composer',
  
  props: [],
  
  data: function() {
    return {      
      arch_data: {
        'calculation-name':"Kalkulacja Gaada",
        'contractor-email':"bsosnowski@c-p.com.pl",
        'contractor-nip':"1231234567",
        'shipment-country':"poland-pl",
        'shipment-date':"2018-04-04"
      },
      valid : false,
      bussy:false,
      calculation_id : false,
      is_validated: false

    }
  },

  validations:{
    'calculation-name':{
      required: window.validators.required,
      minLength: window.validators.minLength(8),
    },

    'contractor-nip':{
      required: window.validators.required,
      minLength: window.validators.minLength(10),
    },

    'contractor-email':{
      required: window.validators.required,
      minLength: window.validators.minLength(6),
    },

    

    'shipment-date':{
      required: window.validators.required
    },

    'shipment-country':{
      required: window.validators.required
    },

  },

  mounted: function(){
    EventBus.$on( 'selected-for-archivization', this.calculation_change );
  },

  watch: {
    arch_data:function( val ){
      this.is_validated = this.is_valid();
    },

    calculation_id:function(){
      this.is_validated = this.is_valid();
    }
  },

  methods: {


    is_valid:function( ){
      return this.is_validated = !this.$v.$error && this.calculation_id.length > 0;
    },

    calculation_change:function( calculation ){
      this.calculation_id = calculation.calculation_id;
    },

   request_acalculation:function(){
      debugger
    }
   
  }
  
});