<?php 
namespace gcalcui;
/*
 * Plugin Name: Gaad Calc UI
 * Text Domain: gcalcui
 * Version: 1.0
 * Plugin URI: 
 * Description: 
 * Author: Bartek Sosnowski 
 * Requires at least: 3.5
 * Tested up to: 4.8
 *
 * @package WordPress
 * @author Bartek Sosnowski
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) exit;
	ini_set( 'max_execution_time', 60 * 10 ); //10 minutes

define( 'gcalcui\G_CALC_UI_NAMESPACE', 'gcalcui\\' );


if ( !defined( G_CALC_UI_NAMESPACE . 'G_CALC_UI_CORE_SCRIPTS_CDN_USE'))
	define( 
		G_CALC_UI_NAMESPACE . 'G_CALC_UI_CORE_SCRIPTS_CDN_USE', true );

if ( !defined( 'WPLANG'))
	define( 'WPLANG', 'pl_PL' );

if ( !defined( G_CALC_UI_NAMESPACE . 'G_CALC_UI_ENV'))
	define( G_CALC_UI_NAMESPACE . 'G_CALC_UI_ENV', 'DEV' );

if ( !defined( G_CALC_UI_NAMESPACE . 'G_CALC_UI_SHORTCODE'))
	/*
	* Application lauching shorcode name
	* @default namespace name
	*/
	define( G_CALC_UI_NAMESPACE . 'G_CALC_UI_SHORTCODE', 'gcalcui' );

if ( !defined( G_CALC_UI_NAMESPACE . 'G_CALC_UI_NAME'))            
	define( G_CALC_UI_NAMESPACE . 'G_CALC_UI_NAME', trim(dirname(plugin_basename(__FILE__)), '/') );

if ( !defined( G_CALC_UI_NAMESPACE . 'G_CALC_UI_COMPONENTS_CSS_DIR'))            
	define( G_CALC_UI_NAMESPACE . 'G_CALC_UI_COMPONENTS_CSS_DIR', 'css/components' );

if ( !defined( G_CALC_UI_NAMESPACE . 'G_CALC_UI_DIR' ) )
	define( G_CALC_UI_NAMESPACE . 'G_CALC_UI_DIR', plugin_dir_path( __FILE__) );

if ( !defined( G_CALC_UI_NAMESPACE . 'G_CALC_UI_VENDOR_DIR' ) )
	define( G_CALC_UI_NAMESPACE . 'G_CALC_UI_VENDOR_DIR', G_CALC_UI_NAMESPACE . G_CALC_UI_DIR .'/vendor' );

if ( !defined( G_CALC_UI_NAMESPACE . 'G_CALC_UI_AUTOLOAD' ) )
	define( G_CALC_UI_NAMESPACE . 'G_CALC_UI_AUTOLOAD', G_CALC_UI_NAMESPACE . G_CALC_UI_VENDOR_DIR . '/autoload.php');

if ( !defined( G_CALC_UI_NAMESPACE . 'G_CALC_UI_THEME_FILES_DIR' ) ) 
	define( G_CALC_UI_NAMESPACE . 'G_CALC_UI_THEME_FILES_DIR', G_CALC_UI_DIR . 'theme_files' );

if ( !defined( G_CALC_UI_NAMESPACE . 'G_CALC_UI_APP_TEMPLATES_DIR' ) )
	define( G_CALC_UI_NAMESPACE . 'G_CALC_UI_APP_TEMPLATES_DIR', G_CALC_UI_DIR . 'templates' );

if ( !defined( G_CALC_UI_NAMESPACE . 'G_CALC_UI_APP_LANGUAGES_DIR' ) )
	define( G_CALC_UI_NAMESPACE . 'G_CALC_UI_APP_LANGUAGES_DIR', G_CALC_UI_DIR . 'languages' );

if ( !defined( G_CALC_UI_NAMESPACE . 'G_CALC_UI_APP_COMPONENTS_DIR' ) )
	define( G_CALC_UI_NAMESPACE . 'G_CALC_UI_APP_COMPONENTS_DIR', G_CALC_UI_DIR . 'js/components' );

if ( !defined( G_CALC_UI_NAMESPACE . 'G_CALC_UI_DIR') ) 
	define( G_CALC_UI_NAMESPACE . 'G_CALC_UI_DIR', G_CALC_UI_DIR . '/' . G_CALC_UI_NAME );

if ( !defined( G_CALC_UI_NAMESPACE . 'G_CALC_UI_URL') )
	define( G_CALC_UI_NAMESPACE . 'G_CALC_UI_URL', str_replace( '127.0.0.1', 'localhost', WP_PLUGIN_URL . '/' . G_CALC_UI_NAME ) );

if ( !defined( G_CALC_UI_NAMESPACE . 'G_CALC_UI_FORCE_FILES_UPDATED') )
	define( G_CALC_UI_NAMESPACE . 'G_CALC_UI_FORCE_FILES_UPDATED', true );

	is_file( G_CALC_UI_AUTOLOAD ) ?  require_once( G_CALC_UI_AUTOLOAD ) : false;
	
	
	require_once( 'inc/class-json-data.php' );
	require_once( 'inc/class-rest.php' );	
	require_once( 'inc/register-routers.php' );
	require_once( 'class/class-hooks-mng.php' );
	require_once( 'class/class-shortcodes.php' );
	require_once( 'inc/class-filters.php' );
	require_once( 'inc/class-actions.php' );
	require_once( 'inc/class-admin-actions.php' );
	require_once( 'inc/plugin-hooks.php' );

	
?>