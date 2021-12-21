<?php

require_once("utils.php");

/**
 * Add script type module on loading js script
 */
function add_type_attribute($tag, $handle, $src)
{
	if ('app_scripts' !== $handle) {
		return $tag;
	}
	$tag = '<script type="module" src="' . esc_url($src) . '"></script>';
	return $tag;
}

/**
 * Get wordpress object for spa
 */
function get_wordpress_object($request = null)
{
	global $post;

	// Load dummy wordpress script
	wp_enqueue_script(
		'app_scripts',
		get_template_directory_uri() . '/wordpress.js',
		null,
		1.0
	);

	$category = get_category(get_query_var('cat'));
	$templates = wp_get_theme()->get_page_templates();
	$categories = get_terms('category', array(
		//'exclude' => '1', // Exclude default category
		'hide_empty' => false,
	));
	if (!$post && $request && $request->get_param('uri')) {
		if ($request->get_param('uri') === "/") {
			$frontPageId = get_option('page_on_front');
			if (!$frontPageId) $frontPageId = get_option('page_for_posts');
			$post = !$frontPageId ? get_posts() : get_post(get_option('page_on_front'))[0];
		} else {
			$post = get_post(url_to_postid($request->get_param('uri')));
		}
	}
	if (!$post && !$category) {
		$category = get_category_by_url($request->get_param('uri'));
	}

	$post_object = $post ? $post : null;
	if ($post && (!is_front_page() && is_home() || is_archive())) {
		$blog_page_id = get_option('page_for_posts');
		if (get_permalink($blog_page_id) == home_url($_SERVER['REQUEST_URI'])) {
			$post_object = get_page($blog_page_id);
		} else if (is_archive()) {
			$post_object = null;
		}
	}
	$template_slug = $post_object ? get_page_template_slug($post_object->ID) : null;
	$template = $template_slug ? $templates[$template_slug] : ($category->errors ? null : $category->slug);


	// Get and parse all pages
	$pages = get_pages(array('nopaging' => true, 'post_status ' => ["publish", "future", "draft", "pending", "private"]));
	// Get and parse all posts
	$posts = get_posts(array('nopaging' => true, 'post_status' => ["publish", "future", "draft", "pending", "private"]));
	// Get and parse all faq post types
	$faqs = get_posts(array('post_type' => 'faq', 'nopaging' => true, 'post_status' => ["publish", "future", "draft", "pending", "private"]));
	// Get and parse all menu positons and their menus
	$menus = get_nav_menu_locations();


	return array(
		'entry' => $category->errors ? $post : $category,
		'pages' => $pages,
		'posts' => $posts,
		'faqs' => $faqs,
		'categories' => $categories,
		'menus' => $menus
	);
}

function populate_wordpress_object()
{
	// Populate dummy wordpress script
	wp_localize_script(
		'app_scripts',
		'wordpress',
		get_wordpress_object()
	);
}

/**
 * Register faq post type
 */
function register_faq()
{
	$labels = [
		"name" => __("Faq's", "mammut"),
		"singular_name" => __("Faq", "mammut"),
	];

	$args = [
		"label" => __("Faq's", "mammut"),
		"labels" => $labels,
		"description" => "",
		"public" => true,
		"publicly_queryable" => true,
		"show_ui" => true,
		"show_in_rest" => true,
		"rest_base" => "",
		"rest_controller_class" => "WP_REST_Posts_Controller",
		"has_archive" => false,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"delete_with_user" => false,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"rewrite" => ["slug" => "faq", "with_front" => true],
		"query_var" => true,
		"supports" => ["title", "editor", "thumbnail", "excerpt", "revisions"],
		"taxonomies" => ["category"],
		"show_in_graphql" => true,
		'graphql_single_name' => 'faq',
		'graphql_plural_name' => 'faqs',
	];

	register_post_type("faq", $args);
}

function my_admin_bar_menu()
{
	global $wp_admin_bar;
	if (!is_super_admin() || !is_admin_bar_showing())
		return;

	foreach ($wp_admin_bar->get_nodes() as $obj) {
		$obj->meta = array('target' => '_self');
		$wp_admin_bar->add_node($obj);
	}
	$new_post_node = $wp_admin_bar->get_node('new-content');
	if ($new_post_node)
		$new_post_node->meta = array('target' => '_self');
	$wp_admin_bar->add_node($new_post_node);
	$new_post_node2 = $wp_admin_bar->get_node('edit');
	if ($new_post_node2)
		$new_post_node2->meta = array('target' => '_self');
	$wp_admin_bar->add_node($new_post_node2);
	$new_post_node3 = $wp_admin_bar->get_node('wp-logo');
	if ($new_post_node3)
		$new_post_node3->meta = array('target' => '_self');
	$wp_admin_bar->add_node($new_post_node3);
}

/**
 * For development environment and static build
 * open up api endpoint to retreive wordpress object 
 */
add_action(
	'rest_api_init',
	function () {
		register_rest_route('mammut', '/wordpress.js', array(
			'methods' => 'GET',
			'callback' => 'get_wordpress_object',
		));
	}
);

/**
 * Prefer page over query that match a category slug.
 * 
 * @param   WP  $wp
 */
function wpse_177014_category_to_page($wp)
{
	if (!empty($wp->query_vars['category_name']) && get_page_by_path($slug = $wp->query_vars['category_name'])) {
		if (!empty($wp->query_vars['paged']))
			$page = $wp->query_vars['paged'];
		else
			$page = '';

		$wp->matched_query = "pagename=$slug&page=$page";
		$wp->query_vars    = array(
			'pagename' => $slug,
			'page'     => $page,
		);
	}
}

add_action('parse_request', 'wpse_177014_category_to_page');

/* 
   Add title field to header
*/

function theme_slug_setup()
{
	add_theme_support('title-tag');
}

// TODO: fix unresolved issue with preview function
// see https://support.advancedcustomfields.com/forums/topic/wordpress-preview-not-working-with-acf/

add_action('after_setup_theme', 'theme_slug_setup');
//add_action( 'wp_before_admin_bar_render', 'remove_admin_bar_links' );
add_action('admin_bar_menu', 'my_admin_bar_menu');
add_action('init', 'register_faq');
add_filter('script_loader_tag', 'add_type_attribute', 10, 3);
add_action('wp_enqueue_scripts', 'populate_wordpress_object');
