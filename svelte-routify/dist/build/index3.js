
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, a as applyHmr, b as adapter, v as validate_slots, u as params, x as goto, y as ready, t as text, z as element, A as add_location, c as insert_dev, n as noop, e as detach_dev } from './main.js';

const file = "src/pages/index.svelte";

function create_fragment(ctx) {
  let t0;
  let pre;
  const block = {
    c: function create() {
      t0 = text("index\n");
      pre = element("pre");
      pre.textContent = `${JSON.stringify(wordpress.entry)}`;
      add_location(pre, file, 18, 0, 511);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, pre, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(pre);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  let _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots('Pages', slots, []);
  const writable_props = [];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Pages> was created with unknown prop '${key}'`);
  });

  $$self.$capture_state = () => ({
    params,
    goto,
    ready
  });

  return [];
}

class Pages extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Pages",
      options,
      id: create_fragment.name
    });
  }

}

if (import.meta && import.meta.hot) {
  Pages = applyHmr({
    m: import.meta,
    id: "/mnt/c/dev/repo/personal/svelte-wordpress-templates/svelte-routify/src/pages/index.svelte",
    hotOptions: {
      "preserveLocalState": false,
      "noPreserveStateKey": ["@hmr:reset", "@!hmr"],
      "preserveAllLocalStateKey": "@hmr:keep-all",
      "preserveLocalStateKey": "@hmr:keep",
      "noReload": false,
      "optimistic": true,
      "acceptNamedExports": true,
      "acceptAccessors": true,
      "injectCss": false,
      "cssEjectDelay": 100,
      "native": false,
      "importAdapterName": "___SVELTE_HMR_HOT_API_PROXY_ADAPTER",
      "noOverlay": false,
      "allowLiveBinding": false
    },
    Component: Pages,
    ProxyAdapter: adapter,
    acceptable: true,
    preserveLocalState: false,
    emitCss: false
  });
}

var Pages$1 = Pages;

export { Pages$1 as default };
//# sourceMappingURL=index3.js.map
