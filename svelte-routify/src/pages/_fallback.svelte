<script>
import Faq from "./_templates/faq.svelte";
import Post from "./_templates/post.svelte";
import Page from "./_templates/page.svelte";
import ErrorPage from "./_templates/404.svelte";
import { navigated } from "@pages/_store";
import { onMount} from 'svelte'

let template;

// Force scroll position to top
onMount(() => window.scrollTo(0,0));

$: if ($navigated >= 0) { 
  if (wordpress.current.type === "page") {
    template = Page;
  } else if (wordpress.current.type === "post") {
    template = Post;
  } else if (wordpress.current.type === "faq") {
    template = Faq;
  } else if (!wordpress.current.notfound) {
    template = ErrorPage;
  }
}
</script>
fallback
<svelte:component this={template} />
