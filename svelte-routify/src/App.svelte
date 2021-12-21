<script>
import { Router} from "@roxi/routify";
import { routes } from "../.routify/routes";
import { setClient } from "svelte-apollo";
// import { graphqlClient } from "./client";

// setClient(graphqlClient);
</script>

<Router {routes} />

<style global>
body,
html {
  width: 100%;
  height: 100%;
}
</style>
