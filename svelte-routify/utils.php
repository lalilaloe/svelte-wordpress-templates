<?php

/**
 * Utility functions used to populate wordpress object for spa
 */

function debug($object)
{
    echo '<pre>';
    var_dump($object);
    echo '</pre>';
}

function get_category_by_url($url)
{
    foreach ((get_the_category()) as $category) {
        if (get_category_link($category->cat_ID) == $url)
            return $category->slug;
    }
    return false;
}

/**
 * SEO functions
 */
