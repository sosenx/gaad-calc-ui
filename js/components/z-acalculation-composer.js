var z_acalculation_composer___gcalcui = Vue.component('z-acalculation-composer', {
  
  template: '#template-gcalcui-z-acalculation-composer',
  
  props: [],
  
  data: function() {
    return {      
      arch_data: {
        'c-slug':"Kalkulacja Gaada" ,
        'contractor-email':"bsosnowski@c-p.com.pl",
        'contractor-nip':"1231234567",
        'archives-notes' : "notepad to write stuff"
        //'shipment-country':"poland-pl",
        //'shipment-date':"2018-04-04"
      },
      valid : false,
      bussy:false,
      calculation_id : false,
      is_validated: false

    }
  },

  validations:{
    'c-slug':{
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
    EventBus.$on( 'reset-ui', this.reset_ui );
    EventBus.$on( 'selected-for-archivization', this.calculation_change );
    this.is_valid();
  
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
reset_ui: function(){


     
      this.arch_data = {
        'c-slug':"Kalkulacja Gaada" ,
        'contractor-email':"bsosnowski@c-p.com.pl",
        'contractor-nip':"1231234567",
        'archives-notes' : "notepad to write stuff"
        //'shipment-country':"poland-pl",
        //'shipment-date':"2018-04-04"
      };
      this.valid  =  false;
      this.bussy = false;
      this.calculation_id  =  false;
     this.is_validated =  false;

    

      //debugger
    },


    is_valid:function( a ){   
      this.valid = !this.$v.$error;
       EventBus.$emit( 'text-archivization-data-valid', this.valid );
      return  this.valid; 
    },

    calculation_change:function( calculation ){
      this.calculation_id = calculation.calculation_id;
    }
   
  }
  
});