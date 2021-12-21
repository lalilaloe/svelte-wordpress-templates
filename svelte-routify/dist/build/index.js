
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, a as applyHmr, b as adapter, v as validate_slots, h as create_component, j as empty, m as mount_component, c as insert_dev, _ as _slicedToArray, k as transition_out, l as check_outros, p as transition_in, e as detach_dev, q as destroy_component, r as group_outros } from './main.js';
import Fallback from './_fallback.js';

function create_fragment(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = Fallback;

  function switch_props(ctx) {
    return {
      $$inline: true
    };
  }

  if (switch_value) {
    switch_instance = new switch_value(switch_props());
  }

  const block = {
    c: function create() {
      if (switch_instance) create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }

      insert_dev(target, switch_instance_anchor, anchor);
      current = true;
    },
    p: function update(ctx, _ref) {
      let _ref2 = _slicedToArray(_ref, 1);
          _ref2[0];

      if (switch_value !== (switch_value = Fallback)) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }

        if (switch_value) {
          switch_instance = new switch_value(switch_props());
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      if (switch_instance) transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      if (switch_instance) transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(switch_instance_anchor);
      if (switch_instance) destroy_component(switch_instance, detaching);
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
  validate_slots('U5Bsubpageu5D', slots, []);
  const writable_props = [];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<U5Bsubpageu5D> was created with unknown prop '${key}'`);
  });

  $$self.$capture_state = () => ({
    Fallback
  });

  return [];
}

class U5Bsubpageu5D extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "U5Bsubpageu5D",
      options,
      id: create_fragment.name
    });
  }

}

if (import.meta && import.meta.hot) {
  U5Bsubpageu5D = applyHmr({
    m: import.meta,
    id: "/mnt/c/dev/repo/personal/svelte-wordpress-templates/svelte-routify/src/pages/[category]/[subpage]/index.svelte",
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
    Component: U5Bsubpageu5D,
    ProxyAdapter: adapter,
    acceptable: true,
    preserveLocalState: false,
    emitCss: false
  });
}

var U5Bsubpageu5D$1 = U5Bsubpageu5D;

export { U5Bsubpageu5D$1 as default };
//# sourceMappingURL=index.js.map
