
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, a as applyHmr, b as adapter, B as validate_each_argument, f as validate_store, g as component_subscribe, v as validate_slots, C as url, z as element, t as text, D as space, A as add_location, c as insert_dev, E as append_dev, n as noop, e as detach_dev, _ as _slicedToArray, F as set_data_dev, G as destroy_each } from './main.js';

const file = "src/pages/_layout.svelte";

function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  return child_ctx;
}

function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  return child_ctx;
}

function get_each_context_2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  return child_ctx;
}

function get_each_context_3(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  return child_ctx;
} // (13:4) {#each wordpress.pages as item}


function create_each_block_3(ctx) {
  let li;
  let t0_value =
  /*item*/
  ctx[1].post_title + "";
  let t0;
  let t1;
  let t2_value =
  /*item*/
  ctx[1].ID + "";
  let t2;
  const block = {
    c: function create() {
      li = element("li");
      t0 = text(t0_value);
      t1 = space();
      t2 = text(t2_value);
      add_location(li, file, 13, 7, 310);
    },
    m: function mount(target, anchor) {
      insert_dev(target, li, anchor);
      append_dev(li, t0);
      append_dev(li, t1);
      append_dev(li, t2);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(li);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block_3.name,
    type: "each",
    source: "(13:4) {#each wordpress.pages as item}",
    ctx
  });
  return block;
} // (19:4) {#each wordpress.posts as item}


function create_each_block_2(ctx) {
  let li;
  let t0_value =
  /*item*/
  ctx[1].post_title + "";
  let t0;
  let t1;
  let t2_value =
  /*item*/
  ctx[1].ID + "";
  let t2;
  const block = {
    c: function create() {
      li = element("li");
      t0 = text(t0_value);
      t1 = space();
      t2 = text(t2_value);
      add_location(li, file, 19, 7, 461);
    },
    m: function mount(target, anchor) {
      insert_dev(target, li, anchor);
      append_dev(li, t0);
      append_dev(li, t1);
      append_dev(li, t2);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(li);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block_2.name,
    type: "each",
    source: "(19:4) {#each wordpress.posts as item}",
    ctx
  });
  return block;
} // (25:4) {#each wordpress.faqs as item}


function create_each_block_1(ctx) {
  let li;
  let t0_value =
  /*item*/
  ctx[1].post_title + "";
  let t0;
  let t1;
  let t2_value =
  /*item*/
  ctx[1].ID + "";
  let t2;
  const block = {
    c: function create() {
      li = element("li");
      t0 = text(t0_value);
      t1 = space();
      t2 = text(t2_value);
      add_location(li, file, 25, 7, 609);
    },
    m: function mount(target, anchor) {
      insert_dev(target, li, anchor);
      append_dev(li, t0);
      append_dev(li, t1);
      append_dev(li, t2);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(li);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block_1.name,
    type: "each",
    source: "(25:4) {#each wordpress.faqs as item}",
    ctx
  });
  return block;
} // (31:4) {#each wordpress.categories as item}


function create_each_block(ctx) {
  let li;
  let t0_value =
  /*item*/
  ctx[1].name + "";
  let t0;
  let t1;
  let t2_value =
  /*item*/
  ctx[1].term_id + "";
  let t2;
  const block = {
    c: function create() {
      li = element("li");
      t0 = text(t0_value);
      t1 = space();
      t2 = text(t2_value);
      add_location(li, file, 31, 7, 775);
    },
    m: function mount(target, anchor) {
      insert_dev(target, li, anchor);
      append_dev(li, t0);
      append_dev(li, t1);
      append_dev(li, t2);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(li);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(31:4) {#each wordpress.categories as item}",
    ctx
  });
  return block;
}

function create_fragment(ctx) {
  var _wordpress$entry;

  let title_value;
  let t0;
  let t1;
  let t2_value =
  /*$url*/
  ctx[0]() + "";
  let t2;
  let t3;
  let ul4;
  let li0;
  let t6;
  let ul0;
  let t7;
  let li1;
  let t10;
  let ul1;
  let t11;
  let li2;
  let t14;
  let ul2;
  let t15;
  let li3;
  let t18;
  let ul3;
  document.title = title_value = ((_wordpress$entry = wordpress.entry) === null || _wordpress$entry === void 0 ? void 0 : _wordpress$entry.post_title) || "Home";
  let each_value_3 = wordpress.pages;
  validate_each_argument(each_value_3);
  let each_blocks_3 = [];

  for (let i = 0; i < each_value_3.length; i += 1) {
    each_blocks_3[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
  }

  let each_value_2 = wordpress.posts;
  validate_each_argument(each_value_2);
  let each_blocks_2 = [];

  for (let i = 0; i < each_value_2.length; i += 1) {
    each_blocks_2[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
  }

  let each_value_1 = wordpress.faqs;
  validate_each_argument(each_value_1);
  let each_blocks_1 = [];

  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }

  let each_value = wordpress.categories;
  validate_each_argument(each_value);
  let each_blocks = [];

  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  const block = {
    c: function create() {
      t0 = space();
      t1 = text("http://svelte-templates.test");
      t2 = text(t2_value);
      t3 = space();
      ul4 = element("ul");
      li0 = element("li");
      li0.textContent = `${wordpress.pages.length} pages`;
      t6 = space();
      ul0 = element("ul");

      for (let i = 0; i < each_blocks_3.length; i += 1) {
        each_blocks_3[i].c();
      }

      t7 = space();
      li1 = element("li");
      li1.textContent = `${wordpress.posts.length} posts`;
      t10 = space();
      ul1 = element("ul");

      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].c();
      }

      t11 = space();
      li2 = element("li");
      li2.textContent = `${wordpress.faqs.length} faqs`;
      t14 = space();
      ul2 = element("ul");

      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }

      t15 = space();
      li3 = element("li");
      li3.textContent = `${wordpress.categories.length} categories`;
      t18 = space();
      ul3 = element("ul");

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      add_location(li0, file, 10, 2, 220);
      add_location(ul0, file, 11, 2, 262);
      add_location(li1, file, 16, 2, 369);
      add_location(ul1, file, 17, 4, 413);
      add_location(li2, file, 22, 2, 520);
      add_location(ul2, file, 23, 4, 562);
      add_location(li3, file, 28, 2, 668);
      add_location(ul3, file, 29, 4, 722);
      add_location(ul4, file, 9, 0, 213);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, t1, anchor);
      insert_dev(target, t2, anchor);
      insert_dev(target, t3, anchor);
      insert_dev(target, ul4, anchor);
      append_dev(ul4, li0);
      append_dev(ul4, t6);
      append_dev(ul4, ul0);

      for (let i = 0; i < each_blocks_3.length; i += 1) {
        each_blocks_3[i].m(ul0, null);
      }

      append_dev(ul4, t7);
      append_dev(ul4, li1);
      append_dev(ul4, t10);
      append_dev(ul4, ul1);

      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].m(ul1, null);
      }

      append_dev(ul4, t11);
      append_dev(ul4, li2);
      append_dev(ul4, t14);
      append_dev(ul4, ul2);

      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].m(ul2, null);
      }

      append_dev(ul4, t15);
      append_dev(ul4, li3);
      append_dev(ul4, t18);
      append_dev(ul4, ul3);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul3, null);
      }
    },
    p: function update(ctx, _ref) {
      var _wordpress$entry2;

      let _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*wordpress*/
      0 && title_value !== (title_value = ((_wordpress$entry2 = wordpress.entry) === null || _wordpress$entry2 === void 0 ? void 0 : _wordpress$entry2.post_title) || "Home")) {
        document.title = title_value;
      }

      if (dirty &
      /*$url*/
      1 && t2_value !== (t2_value =
      /*$url*/
      ctx[0]() + "")) set_data_dev(t2, t2_value);

      if (dirty &
      /*wordpress*/
      0) {
        each_value_3 = wordpress.pages;
        validate_each_argument(each_value_3);
        let i;

        for (i = 0; i < each_value_3.length; i += 1) {
          const child_ctx = get_each_context_3(ctx, each_value_3, i);

          if (each_blocks_3[i]) {
            each_blocks_3[i].p(child_ctx, dirty);
          } else {
            each_blocks_3[i] = create_each_block_3(child_ctx);
            each_blocks_3[i].c();
            each_blocks_3[i].m(ul0, null);
          }
        }

        for (; i < each_blocks_3.length; i += 1) {
          each_blocks_3[i].d(1);
        }

        each_blocks_3.length = each_value_3.length;
      }

      if (dirty &
      /*wordpress*/
      0) {
        each_value_2 = wordpress.posts;
        validate_each_argument(each_value_2);
        let i;

        for (i = 0; i < each_value_2.length; i += 1) {
          const child_ctx = get_each_context_2(ctx, each_value_2, i);

          if (each_blocks_2[i]) {
            each_blocks_2[i].p(child_ctx, dirty);
          } else {
            each_blocks_2[i] = create_each_block_2(child_ctx);
            each_blocks_2[i].c();
            each_blocks_2[i].m(ul1, null);
          }
        }

        for (; i < each_blocks_2.length; i += 1) {
          each_blocks_2[i].d(1);
        }

        each_blocks_2.length = each_value_2.length;
      }

      if (dirty &
      /*wordpress*/
      0) {
        each_value_1 = wordpress.faqs;
        validate_each_argument(each_value_1);
        let i;

        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx, each_value_1, i);

          if (each_blocks_1[i]) {
            each_blocks_1[i].p(child_ctx, dirty);
          } else {
            each_blocks_1[i] = create_each_block_1(child_ctx);
            each_blocks_1[i].c();
            each_blocks_1[i].m(ul2, null);
          }
        }

        for (; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].d(1);
        }

        each_blocks_1.length = each_value_1.length;
      }

      if (dirty &
      /*wordpress*/
      0) {
        each_value = wordpress.categories;
        validate_each_argument(each_value);
        let i;

        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx, each_value, i);

          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(ul3, null);
          }
        }

        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(t1);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(t3);
      if (detaching) detach_dev(ul4);
      destroy_each(each_blocks_3, detaching);
      destroy_each(each_blocks_2, detaching);
      destroy_each(each_blocks_1, detaching);
      destroy_each(each_blocks, detaching);
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
  let $url;
  validate_store(url, 'url');
  component_subscribe($$self, url, $$value => $$invalidate(0, $url = $$value));
  let _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots('Layout', slots, []);
  const writable_props = [];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Layout> was created with unknown prop '${key}'`);
  });

  $$self.$capture_state = () => ({
    url,
    $url
  });

  return [$url];
}

class Layout extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Layout",
      options,
      id: create_fragment.name
    });
  }

}

if (import.meta && import.meta.hot) {
  Layout = applyHmr({
    m: import.meta,
    id: "/mnt/c/dev/repo/personal/svelte-wordpress-templates/svelte-routify/src/pages/_layout.svelte",
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
    Component: Layout,
    ProxyAdapter: adapter,
    acceptable: true,
    preserveLocalState: false,
    emitCss: false
  });
}

var Layout$1 = Layout;

export { Layout$1 as default };
//# sourceMappingURL=_layout.js.map
