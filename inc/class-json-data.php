<?php 
namespace gcalcui;

/*
* 
*/
   
class json_data {
  
  private $json = '{}';
  private $tojson = array();
  
  public function __construct(){
    $this->tojson = $this->get();
    $this->getJson();
    return $this;
  }
  
  function update_json(){
    return $this->json = json_encode( $this->tojson);

  }

  function getJson(){
    return $this->update_json();

  }

  function draw( $return = false ){
/*
    $string = 
      'function __app_model__reciever( app_model ){' . "\n" .
          'if ( typeof app_model.async_model !== "undefined"   ) {' .
          '} else {'. "\n" .
            'return app_model;'.
          '}'. "\n" .
      '}';


    $string .= "\n\n";
*/
    $string = 'var '. basename( constant( 'gcalcui\G_CALC_UI_NAMESPACE' ) ) .'__app_model = '. $this->getJson() .';';
    if ( !$return ) {
      echo $string;
    }
    return $string;
  }
  
/*
ta fn pobiera wszystkie niezbedne aplikacji dane
*/
  function get(){       
    //$json = str_replace(array("\\t", "\\n", "\\r"), array('', '', ''), rest::app_model() );
    $json = rest::app_model();

   // $json = '{"async_model":true}';
    return json_decode( $json, true );
  }
  
  
}



?>