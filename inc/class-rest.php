<?php 
namespace gcalcui;


class rest{

	public static function get_gcalc_ui_model( )	{
		$r = array( );
		$product_constructor_data = array();
		$products = \get_posts( array( 'post_type' => 'product', 'post_status' => 'publish', 'posts_per_page' => -1 ) );
		if ( !empty( $products ) ) {
			$max = count( $products );

			for ( $i=0; $i < $max ; $i++ ) { 
				$product = $products[ $i ];				
				$product_data[ $product->post_name ] = array(
					'ID' => $product->ID,					
					'title' => $product->post_title,
					'slug' => $product->post_name
				);

				$product_constructor_data[ $product->post_name ] = \gcalc\db\product\product::rest_data( $product->post_name );
				
			}
		}
		$r['product_data'] =  $product_data;
		$r['product_constructor_data'] =  $product_constructor_data;
		return $r;
	}

	public static function app_model( $data = NULL ){
		$r = array( 
			'plugin_name' => "gcalcui",
			'handler' => "app_model",
			'status' => 200,
			'user' => \gcalcui\rest::get_looged_in_user_credentials(),
			'gcalc_ui_model' => \gcalcui\rest::get_gcalc_ui_model()
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
