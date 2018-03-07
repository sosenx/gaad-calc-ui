<?php 
namespace gcalcui;


class rest{

	public static function app_model( $data = NULL ){
		$r = array( 
			'plugin_name' => "gcalcui",
			'handler' => "app_model",
			'status' => 200,
			'user' => \gcalcui\rest::get_looged_in_user_credentials()
		);
		return json_encode( $r );
	}


	public static function get_looged_in_user_credentials(){
		$user = \wp_get_current_user();
		if ( $user->exists) {
			$a=1;
		}
		return false;

	}


	public static function rest_test_callback( $data = NULL ){
		$r = array( 'plugin_name' => "gcalcui\\rest::rest_test_callback" );
		return json_encode( $r );
	}
	
}

?>
