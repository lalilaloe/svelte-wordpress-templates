<!-- routify:options query-params-is-page -->
<script>
import { params, goto, ready } from "@roxi/routify";

// $: if ($params.page_id) {
//   $goto(`/${wordpress.current.status}`, $params, { static: true });
// }

// const homepageQuery = getHomepageById(wordpress.current.id); //, !!$params?.preview);

// $: if ($homepageQuery.data) {
//   page = $homepageQuery.data.page;
//   $ready();
// } else if ($homepageQuery.error) {
//   console.error("(homepageQuery)", $homepageQuery.error);
// }
</script>
index
<pre>
  {JSON.stringify(wordpress.entry)}
</pre>

<style>
</style>