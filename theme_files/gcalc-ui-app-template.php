<?php 
/* Template Name: Gaad Calc UI   */ 


wp_head();

global $post;

echo do_shortcode( $post->post_content);


wp_footer();



?>



