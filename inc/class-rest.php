<?php 
namespace gcalcui;


class rest{

	public static function app_model( $data = NULL ){
		$r = array( 
			'plugin_name' => "gcalcui",
			'handler' => "app_model",
			'status' => 200,
			'status2' => 20111111
		);
		return json_encode( $r );
	}

	public static function rest_test_callback( $data = NULL ){
		$r = array( 'plugin_name' => "gcalcui\\rest::rest_test_callback" );
		return json_encode( $r );
	}
	
}

?>
