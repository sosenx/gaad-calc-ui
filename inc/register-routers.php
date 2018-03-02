<?php 
namespace gcalcui;




	add_action( 'rest_api_init', function () {
	  register_rest_route( 'gcalcui/v1', '/model', array(
	    'methods' => 'GET',
	    'callback' => 'gcalcui\rest::app_model',
	  ) );
	} );




	add_action( 'rest_api_init', function () {
	  register_rest_route( 'gcalcui/v1', '/test', array(
	    'methods' => 'GET',
	    'callback' => 'gcalcui\rest::rest_test_callback',
	  ) );
	} );



 ?>