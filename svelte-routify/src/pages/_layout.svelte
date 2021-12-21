<!-- routify:options preload="proximity" -->
<script>
  import { url } from "@roxi/routify"
</script>

<svelte:head>
  <title>{wordpress.entry?.post_title || "Home"}</title>
</svelte:head>
{WORDPRESS_URI}{$url()}
<ul>
  <li>{wordpress.pages.length} pages</li>
  <ul>
    {#each wordpress.pages as item}
       <li>{item.post_title} {item.ID}</li>
    {/each}
  </ul>
  <li>{wordpress.posts.length} posts</li>
    <ul>
    {#each wordpress.posts as item}
       <li>{item.post_title} {item.ID}</li>
    {/each}
  </ul>
  <li>{wordpress.faqs.length} faqs</li>
    <ul>
    {#each wordpress.faqs as item}
       <li>{item.post_title} {item.ID}</li>
    {/each}
  </ul>
  <li>{wordpress.categories.length} categories</li>
    <ul>
    {#each wordpress.categories as item}
       <li>{item.name} {item.term_id}</li>
    {/each}
  </ul>
</ul>
