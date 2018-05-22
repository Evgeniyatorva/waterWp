<?php 

function load_style_script(){
	wp_enqueue_script( 'jquery' );
	wp_enqueue_script('main-js', get_template_directory_uri() . ' /js/main.js');

}

/* вызов скрипты и стили */
add_action('wp_enqueue_scripts', 'load_style_script');


/* поддержка миниатюр */
add_theme_support('post-thumbnails');

// меню

register_sidebar(array('name' => 'Меню', 'id' => 'menu_header', 'before_widget' => '', 'after_widget' => ''));





?>