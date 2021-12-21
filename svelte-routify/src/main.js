import HMR from "@roxi/routify/hmr";
import App from "./App.svelte";

let app;

// In case of development environment, spank and wordpress is undefined
if (!window.wordpress) {
    console.log("<Fetching wordpress object>")
    // For local developent acces to wordpress data
    fetch(WORDPRESS_URI + "/wp-json/mammut/wordpress.js?uri=" + window.location.pathname).then((response) =>
        response.json().then((json) => {
            window.wordpress = json;
            app = HMR(App, { target: document.body });
        })
    );
} else {
    app = HMR(App, { target: document.body });
}

export default app;
