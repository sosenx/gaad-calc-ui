<?php 
namespace gcalcui;


class shortcodes {
	/*
	* This function appedns application to page from shortcode
	*/
	public static function gcalcui( $atts, $content = "" ) {
		$defaults = array( 
			'id' => uniqid( '' )
		);
		$main_app_file = G_CALC_UI_APP_TEMPLATES_DIR . '/router.html';

		$output = array();
		if ( is_file( $main_app_file ) ) {
			$output[] = file_get_contents( $main_app_file );
		}
		

		$r = implode( "\n", $output );
		return $r;
	}

	public static function no_main_shortcode_error(){		
		$output = array();
 		$shortcode = basename( constant( 'gcalcui\G_CALC_UI_SHORTCODE' ) );
    
    	$output[] = '<br><br>BRAK FUNKCJI: shortcodes::'.$shortcode . '<br><br>';
		$r = implode( "\n", $output );
		return $r;

	}

}


?>