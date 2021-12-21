<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="manifest" href="<?php echo get_template_directory_uri(); ?>/dist/manifest.json">
	<link rel="modulepreload" href="<?php echo get_template_directory_uri(); ?>/dist/build/main.js" />
	<script type="module" src="<?php echo get_template_directory_uri(); ?>/dist/build/main.js"></script>
	<?php wp_head(); ?>
</head>