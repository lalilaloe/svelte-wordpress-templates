(() => {
  var __defProp = Object.defineProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __export = (target, all2) => {
    for (var name in all2)
      __defProp(target, name, {get: all2[name], enumerable: true});
  };

  // dist/build/_fallback.js
  var require_fallback = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => Fallback$1
    });
    var import_meta2 = {};
    (function(l, r) {
      if (!l || l.getElementById("livereloadscript"))
        return;
      r = l.createElement("script");
      r.async = 1;
      r.src = "//" + (self.location.host || "localhost").split(":")[0] + ":35729/livereload.js?snipver=1";
      r.id = "livereloadscript";
      l.getElementsByTagName("head")[0].appendChild(r);
    })(self.document);
    function create_fragment$42(ctx) {
      let t;
      const block = {
        c: function create3() {
          t = text("faq");
        },
        l: function claim(nodes) {
          throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
        },
        m: function mount(target, anchor) {
          insert_dev(target, t, anchor);
        },
        p: noop,
        i: noop,
        o: noop,
        d: function destroy(detaching) {
          if (detaching)
            detach_dev(t);
        }
      };
      dispatch_dev("SvelteRegisterBlock", {
        block,
        id: create_fragment$42.name,
        type: "component",
        source: "",
        ctx
      });
      return block;
    }
    function instance$42($$self, $$props) {
      let _$$props$$$slots = $$props.$$slots, slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
      validate_slots("Faq", slots, []);
      const writable_props = [];
      Object.keys($$props).forEach((key) => {
        if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
          console.warn(`<Faq> was created with unknown prop '${key}'`);
      });
      return [];
    }
    var Faq = class extends SvelteComponentDev {
      constructor(options) {
        super(options);
        init$1(this, options, instance$42, create_fragment$42, safe_not_equal, {});
        dispatch_dev("SvelteRegisterComponent", {
          component: this,
          tagName: "Faq",
          options,
          id: create_fragment$42.name
        });
      }
    };
    if (import_meta2 && import_meta2.hot) {
      Faq = applyHmr({
        m: import_meta2,
        id: "/mnt/c/dev/repo/personal/svelte-wordpress-templates/svelte-routify/src/pages/_templates/faq.svelte",
        hotOptions: {
          preserveLocalState: false,
          noPreserveStateKey: ["@hmr:reset", "@!hmr"],
          preserveAllLocalStateKey: "@hmr:keep-all",
          preserveLocalStateKey: "@hmr:keep",
          noReload: false,
          optimistic: true,
          acceptNamedExports: true,
          acceptAccessors: true,
          injectCss: false,
          cssEjectDelay: 100,
          native: false,
          importAdapterName: "___SVELTE_HMR_HOT_API_PROXY_ADAPTER",
          noOverlay: false,
          allowLiveBinding: false
        },
        Component: Faq,
        ProxyAdapter: adapter,
        acceptable: true,
        preserveLocalState: false,
        emitCss: false
      });
    }
    var Faq$1 = Faq;
    function create_fragment$32(ctx) {
      let t;
      const block = {
        c: function create3() {
          t = text("post");
        },
        l: function claim(nodes) {
          throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
        },
        m: function mount(target, anchor) {
          insert_dev(target, t, anchor);
        },
        p: noop,
        i: noop,
        o: noop,
        d: function destroy(detaching) {
          if (detaching)
            detach_dev(t);
        }
      };
      dispatch_dev("SvelteRegisterBlock", {
        block,
        id: create_fragment$32.name,
        type: "component",
        source: "",
        ctx
      });
      return block;
    }
    function instance$32($$self, $$props) {
      let _$$props$$$slots = $$props.$$slots, slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
      validate_slots("Post", slots, []);
      const writable_props = [];
      Object.keys($$props).forEach((key) => {
        if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
          console.warn(`<Post> was created with unknown prop '${key}'`);
      });
      return [];
    }
    var Post = class extends SvelteComponentDev {
      constructor(options) {
        super(options);
        init$1(this, options, instance$32, create_fragment$32, safe_not_equal, {});
        dispatch_dev("SvelteRegisterComponent", {
          component: this,
          tagName: "Post",
          options,
          id: create_fragment$32.name
        });
      }
    };
    if (import_meta2 && import_meta2.hot) {
      Post = applyHmr({
        m: import_meta2,
        id: "/mnt/c/dev/repo/personal/svelte-wordpress-templates/svelte-routify/src/pages/_templates/post.svelte",
        hotOptions: {
          preserveLocalState: false,
          noPreserveStateKey: ["@hmr:reset", "@!hmr"],
          preserveAllLocalStateKey: "@hmr:keep-all",
          preserveLocalStateKey: "@hmr:keep",
          noReload: false,
          optimistic: true,
          acceptNamedExports: true,
          acceptAccessors: true,
          injectCss: false,
          cssEjectDelay: 100,
          native: false,
          importAdapterName: "___SVELTE_HMR_HOT_API_PROXY_ADAPTER",
          noOverlay: false,
          allowLiveBinding: false
        },
        Component: Post,
        ProxyAdapter: adapter,
        acceptable: true,
        preserveLocalState: false,
        emitCss: false
      });
    }
    var Post$1 = Post;
    function create_fragment$22(ctx) {
      let t;
      const block = {
        c: function create3() {
          t = text("page");
        },
        l: function claim(nodes) {
          throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
        },
        m: function mount(target, anchor) {
          insert_dev(target, t, anchor);
        },
        p: noop,
        i: noop,
        o: noop,
        d: function destroy(detaching) {
          if (detaching)
            detach_dev(t);
        }
      };
      dispatch_dev("SvelteRegisterBlock", {
        block,
        id: create_fragment$22.name,
        type: "component",
        source: "",
        ctx
      });
      return block;
    }
    function instance$22($$self, $$props) {
      let _$$props$$$slots = $$props.$$slots, slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
      validate_slots("Page", slots, []);
      const writable_props = [];
      Object.keys($$props).forEach((key) => {
        if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
          console.warn(`<Page> was created with unknown prop '${key}'`);
      });
      return [];
    }
    var Page = class extends SvelteComponentDev {
      constructor(options) {
        super(options);
        init$1(this, options, instance$22, create_fragment$22, safe_not_equal, {});
        dispatch_dev("SvelteRegisterComponent", {
          component: this,
          tagName: "Page",
          options,
          id: create_fragment$22.name
        });
      }
    };
    if (import_meta2 && import_meta2.hot) {
      Page = applyHmr({
        m: import_meta2,
        id: "/mnt/c/dev/repo/personal/svelte-wordpress-templates/svelte-routify/src/pages/_templates/page.svelte",
        hotOptions: {
          preserveLocalState: false,
          noPreserveStateKey: ["@hmr:reset", "@!hmr"],
          preserveAllLocalStateKey: "@hmr:keep-all",
          preserveLocalStateKey: "@hmr:keep",
          noReload: false,
          optimistic: true,
          acceptNamedExports: true,
          acceptAccessors: true,
          injectCss: false,
          cssEjectDelay: 100,
          native: false,
          importAdapterName: "___SVELTE_HMR_HOT_API_PROXY_ADAPTER",
          noOverlay: false,
          allowLiveBinding: false
        },
        Component: Page,
        ProxyAdapter: adapter,
        acceptable: true,
        preserveLocalState: false,
        emitCss: false
      });
    }
    var Page$1 = Page;
    function create_fragment$12(ctx) {
      let t;
      const block = {
        c: function create3() {
          t = text("404");
        },
        l: function claim(nodes) {
          throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
        },
        m: function mount(target, anchor) {
          insert_dev(target, t, anchor);
        },
        p: noop,
        i: noop,
        o: noop,
        d: function destroy(detaching) {
          if (detaching)
            detach_dev(t);
        }
      };
      dispatch_dev("SvelteRegisterBlock", {
        block,
        id: create_fragment$12.name,
        type: "component",
        source: "",
        ctx
      });
      return block;
    }
    function instance$12($$self, $$props) {
      let _$$props$$$slots = $$props.$$slots, slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
      validate_slots("_404", slots, []);
      const writable_props = [];
      Object.keys($$props).forEach((key) => {
        if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
          console.warn(`<_404> was created with unknown prop '${key}'`);
      });
      return [];
    }
    var _404 = class extends SvelteComponentDev {
      constructor(options) {
        super(options);
        init$1(this, options, instance$12, create_fragment$12, safe_not_equal, {});
        dispatch_dev("SvelteRegisterComponent", {
          component: this,
          tagName: "_404",
          options,
          id: create_fragment$12.name
        });
      }
    };
    if (import_meta2 && import_meta2.hot) {
      _404 = applyHmr({
        m: import_meta2,
        id: "/mnt/c/dev/repo/personal/svelte-wordpress-templates/svelte-routify/src/pages/_templates/404.svelte",
        hotOptions: {
          preserveLocalState: false,
          noPreserveStateKey: ["@hmr:reset", "@!hmr"],
          preserveAllLocalStateKey: "@hmr:keep-all",
          preserveLocalStateKey: "@hmr:keep",
          noReload: false,
          optimistic: true,
          acceptNamedExports: true,
          acceptAccessors: true,
          injectCss: false,
          cssEjectDelay: 100,
          native: false,
          importAdapterName: "___SVELTE_HMR_HOT_API_PROXY_ADAPTER",
          noOverlay: false,
          allowLiveBinding: false
        },
        Component: _404,
        ProxyAdapter: adapter,
        acceptable: true,
        preserveLocalState: false,
        emitCss: false
      });
    }
    var ErrorPage = _404;
    var navigated = writable(0);
    function create_fragment2(ctx) {
      let t;
      let switch_instance;
      let switch_instance_anchor;
      let current;
      var switch_value = ctx[0];
      function switch_props(ctx2) {
        return {
          $$inline: true
        };
      }
      if (switch_value) {
        switch_instance = new switch_value(switch_props());
      }
      const block = {
        c: function create3() {
          t = text("fallback\n");
          if (switch_instance)
            create_component(switch_instance.$$.fragment);
          switch_instance_anchor = empty();
        },
        l: function claim(nodes) {
          throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
        },
        m: function mount(target, anchor) {
          insert_dev(target, t, anchor);
          if (switch_instance) {
            mount_component(switch_instance, target, anchor);
          }
          insert_dev(target, switch_instance_anchor, anchor);
          current = true;
        },
        p: function update2(ctx2, _ref) {
          let _ref2 = _slicedToArray(_ref, 1);
          _ref2[0];
          if (switch_value !== (switch_value = ctx2[0])) {
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
          if (current)
            return;
          if (switch_instance)
            transition_in(switch_instance.$$.fragment, local);
          current = true;
        },
        o: function outro(local) {
          if (switch_instance)
            transition_out(switch_instance.$$.fragment, local);
          current = false;
        },
        d: function destroy(detaching) {
          if (detaching)
            detach_dev(t);
          if (detaching)
            detach_dev(switch_instance_anchor);
          if (switch_instance)
            destroy_component(switch_instance, detaching);
        }
      };
      dispatch_dev("SvelteRegisterBlock", {
        block,
        id: create_fragment2.name,
        type: "component",
        source: "",
        ctx
      });
      return block;
    }
    function instance2($$self, $$props, $$invalidate) {
      let $navigated;
      validate_store(navigated, "navigated");
      component_subscribe($$self, navigated, ($$value) => $$invalidate(1, $navigated = $$value));
      let _$$props$$$slots = $$props.$$slots, slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
      validate_slots("Fallback", slots, []);
      let template;
      onMount(() => window.scrollTo(0, 0));
      const writable_props = [];
      Object.keys($$props).forEach((key) => {
        if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
          console.warn(`<Fallback> was created with unknown prop '${key}'`);
      });
      $$self.$capture_state = () => ({
        Faq: Faq$1,
        Post: Post$1,
        Page: Page$1,
        ErrorPage,
        navigated,
        onMount,
        template,
        $navigated
      });
      $$self.$inject_state = ($$props2) => {
        if ("template" in $$props2)
          $$invalidate(0, template = $$props2.template);
      };
      if ($$props && "$$inject" in $$props) {
        $$self.$inject_state($$props.$$inject);
      }
      $$self.$$.update = () => {
        if ($$self.$$.dirty & 2) {
          if ($navigated >= 0) {
            if (wordpress.current.type === "page") {
              $$invalidate(0, template = Page$1);
            } else if (wordpress.current.type === "post") {
              $$invalidate(0, template = Post$1);
            } else if (wordpress.current.type === "faq") {
              $$invalidate(0, template = Faq$1);
            } else if (!wordpress.current.notfound) {
              $$invalidate(0, template = ErrorPage);
            }
          }
        }
      };
      return [template, $navigated];
    }
    var Fallback = class extends SvelteComponentDev {
      constructor(options) {
        super(options);
        init$1(this, options, instance2, create_fragment2, safe_not_equal, {});
        dispatch_dev("SvelteRegisterComponent", {
          component: this,
          tagName: "Fallback",
          options,
          id: create_fragment2.name
        });
      }
    };
    if (import_meta2 && import_meta2.hot) {
      Fallback = applyHmr({
        m: import_meta2,
        id: "/mnt/c/dev/repo/personal/svelte-wordpress-templates/svelte-routify/src/pages/_fallback.svelte",
        hotOptions: {
          preserveLocalState: false,
          noPreserveStateKey: ["@hmr:reset", "@!hmr"],
          preserveAllLocalStateKey: "@hmr:keep-all",
          preserveLocalStateKey: "@hmr:keep",
          noReload: false,
          optimistic: true,
          acceptNamedExports: true,
          acceptAccessors: true,
          injectCss: false,
          cssEjectDelay: 100,
          native: false,
          importAdapterName: "___SVELTE_HMR_HOT_API_PROXY_ADAPTER",
          noOverlay: false,
          allowLiveBinding: false
        },
        Component: Fallback,
        ProxyAdapter: adapter,
        acceptable: true,
        preserveLocalState: false,
        emitCss: false
      });
    }
    var Fallback$1 = Fallback;
  });

  // dist/build/index.js
  var require_build = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => U5Bsubpageu5D$1
    });
    var import_fallback = require_fallback();
    var import_meta2 = {};
    (function(l, r) {
      if (!l || l.getElementById("livereloadscript"))
        return;
      r = l.createElement("script");
      r.async = 1;
      r.src = "//" + (self.location.host || "localhost").split(":")[0] + ":35729/livereload.js?snipver=1";
      r.id = "livereloadscript";
      l.getElementsByTagName("head")[0].appendChild(r);
    })(self.document);
    function create_fragment2(ctx) {
      let switch_instance;
      let switch_instance_anchor;
      let current;
      var switch_value = import_fallback.default;
      function switch_props(ctx2) {
        return {
          $$inline: true
        };
      }
      if (switch_value) {
        switch_instance = new switch_value(switch_props());
      }
      const block = {
        c: function create3() {
          if (switch_instance)
            create_component(switch_instance.$$.fragment);
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
        p: function update2(ctx2, _ref) {
          let _ref2 = _slicedToArray(_ref, 1);
          _ref2[0];
          if (switch_value !== (switch_value = import_fallback.default)) {
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
          if (current)
            return;
          if (switch_instance)
            transition_in(switch_instance.$$.fragment, local);
          current = true;
        },
        o: function outro(local) {
          if (switch_instance)
            transition_out(switch_instance.$$.fragment, local);
          current = false;
        },
        d: function destroy(detaching) {
          if (detaching)
            detach_dev(switch_instance_anchor);
          if (switch_instance)
            destroy_component(switch_instance, detaching);
        }
      };
      dispatch_dev("SvelteRegisterBlock", {
        block,
        id: create_fragment2.name,
        type: "component",
        source: "",
        ctx
      });
      return block;
    }
    function instance2($$self, $$props, $$invalidate) {
      let _$$props$$$slots = $$props.$$slots, slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
      validate_slots("U5Bsubpageu5D", slots, []);
      const writable_props = [];
      Object.keys($$props).forEach((key) => {
        if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
          console.warn(`<U5Bsubpageu5D> was created with unknown prop '${key}'`);
      });
      $$self.$capture_state = () => ({
        Fallback: import_fallback.default
      });
      return [];
    }
    var U5Bsubpageu5D = class extends SvelteComponentDev {
      constructor(options) {
        super(options);
        init$1(this, options, instance2, create_fragment2, safe_not_equal, {});
        dispatch_dev("SvelteRegisterComponent", {
          component: this,
          tagName: "U5Bsubpageu5D",
          options,
          id: create_fragment2.name
        });
      }
    };
    if (import_meta2 && import_meta2.hot) {
      U5Bsubpageu5D = applyHmr({
        m: import_meta2,
        id: "/mnt/c/dev/repo/personal/svelte-wordpress-templates/svelte-routify/src/pages/[category]/[subpage]/index.svelte",
        hotOptions: {
          preserveLocalState: false,
          noPreserveStateKey: ["@hmr:reset", "@!hmr"],
          preserveAllLocalStateKey: "@hmr:keep-all",
          preserveLocalStateKey: "@hmr:keep",
          noReload: false,
          optimistic: true,
          acceptNamedExports: true,
          acceptAccessors: true,
          injectCss: false,
          cssEjectDelay: 100,
          native: false,
          importAdapterName: "___SVELTE_HMR_HOT_API_PROXY_ADAPTER",
          noOverlay: false,
          allowLiveBinding: false
        },
        Component: U5Bsubpageu5D,
        ProxyAdapter: adapter,
        acceptable: true,
        preserveLocalState: false,
        emitCss: false
      });
    }
    var U5Bsubpageu5D$1 = U5Bsubpageu5D;
  });

  // dist/build/index2.js
  var require_index2 = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => U5Bcategoryu5D$1
    });
    var import_fallback = require_fallback();
    var import_meta2 = {};
    (function(l, r) {
      if (!l || l.getElementById("livereloadscript"))
        return;
      r = l.createElement("script");
      r.async = 1;
      r.src = "//" + (self.location.host || "localhost").split(":")[0] + ":35729/livereload.js?snipver=1";
      r.id = "livereloadscript";
      l.getElementsByTagName("head")[0].appendChild(r);
    })(self.document);
    function create_fragment2(ctx) {
      let switch_instance;
      let switch_instance_anchor;
      let current;
      var switch_value = import_fallback.default;
      function switch_props(ctx2) {
        return {
          $$inline: true
        };
      }
      if (switch_value) {
        switch_instance = new switch_value(switch_props());
      }
      const block = {
        c: function create3() {
          if (switch_instance)
            create_component(switch_instance.$$.fragment);
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
        p: function update2(ctx2, _ref) {
          let _ref2 = _slicedToArray(_ref, 1);
          _ref2[0];
          if (switch_value !== (switch_value = import_fallback.default)) {
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
          if (current)
            return;
          if (switch_instance)
            transition_in(switch_instance.$$.fragment, local);
          current = true;
        },
        o: function outro(local) {
          if (switch_instance)
            transition_out(switch_instance.$$.fragment, local);
          current = false;
        },
        d: function destroy(detaching) {
          if (detaching)
            detach_dev(switch_instance_anchor);
          if (switch_instance)
            destroy_component(switch_instance, detaching);
        }
      };
      dispatch_dev("SvelteRegisterBlock", {
        block,
        id: create_fragment2.name,
        type: "component",
        source: "",
        ctx
      });
      return block;
    }
    function instance2($$self, $$props, $$invalidate) {
      let _$$props$$$slots = $$props.$$slots, slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
      validate_slots("U5Bcategoryu5D", slots, []);
      const writable_props = [];
      Object.keys($$props).forEach((key) => {
        if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
          console.warn(`<U5Bcategoryu5D> was created with unknown prop '${key}'`);
      });
      $$self.$capture_state = () => ({
        Fallback: import_fallback.default
      });
      return [];
    }
    var U5Bcategoryu5D = class extends SvelteComponentDev {
      constructor(options) {
        super(options);
        init$1(this, options, instance2, create_fragment2, safe_not_equal, {});
        dispatch_dev("SvelteRegisterComponent", {
          component: this,
          tagName: "U5Bcategoryu5D",
          options,
          id: create_fragment2.name
        });
      }
    };
    if (import_meta2 && import_meta2.hot) {
      U5Bcategoryu5D = applyHmr({
        m: import_meta2,
        id: "/mnt/c/dev/repo/personal/svelte-wordpress-templates/svelte-routify/src/pages/[category]/index.svelte",
        hotOptions: {
          preserveLocalState: false,
          noPreserveStateKey: ["@hmr:reset", "@!hmr"],
          preserveAllLocalStateKey: "@hmr:keep-all",
          preserveLocalStateKey: "@hmr:keep",
          noReload: false,
          optimistic: true,
          acceptNamedExports: true,
          acceptAccessors: true,
          injectCss: false,
          cssEjectDelay: 100,
          native: false,
          importAdapterName: "___SVELTE_HMR_HOT_API_PROXY_ADAPTER",
          noOverlay: false,
          allowLiveBinding: false
        },
        Component: U5Bcategoryu5D,
        ProxyAdapter: adapter,
        acceptable: true,
        preserveLocalState: false,
        emitCss: false
      });
    }
    var U5Bcategoryu5D$1 = U5Bcategoryu5D;
  });

  // dist/build/index3.js
  var require_index3 = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => Pages$1
    });
    var import_meta2 = {};
    (function(l, r) {
      if (!l || l.getElementById("livereloadscript"))
        return;
      r = l.createElement("script");
      r.async = 1;
      r.src = "//" + (self.location.host || "localhost").split(":")[0] + ":35729/livereload.js?snipver=1";
      r.id = "livereloadscript";
      l.getElementsByTagName("head")[0].appendChild(r);
    })(self.document);
    var file2 = "src/pages/index.svelte";
    function create_fragment2(ctx) {
      let t0;
      let pre;
      const block = {
        c: function create3() {
          t0 = text("index\n");
          pre = element("pre");
          pre.textContent = `${JSON.stringify(wordpress.entry)}`;
          add_location(pre, file2, 18, 0, 511);
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
          if (detaching)
            detach_dev(t0);
          if (detaching)
            detach_dev(pre);
        }
      };
      dispatch_dev("SvelteRegisterBlock", {
        block,
        id: create_fragment2.name,
        type: "component",
        source: "",
        ctx
      });
      return block;
    }
    function instance2($$self, $$props, $$invalidate) {
      let _$$props$$$slots = $$props.$$slots, slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
      validate_slots("Pages", slots, []);
      const writable_props = [];
      Object.keys($$props).forEach((key) => {
        if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
          console.warn(`<Pages> was created with unknown prop '${key}'`);
      });
      $$self.$capture_state = () => ({
        params,
        goto,
        ready
      });
      return [];
    }
    var Pages = class extends SvelteComponentDev {
      constructor(options) {
        super(options);
        init$1(this, options, instance2, create_fragment2, safe_not_equal, {});
        dispatch_dev("SvelteRegisterComponent", {
          component: this,
          tagName: "Pages",
          options,
          id: create_fragment2.name
        });
      }
    };
    if (import_meta2 && import_meta2.hot) {
      Pages = applyHmr({
        m: import_meta2,
        id: "/mnt/c/dev/repo/personal/svelte-wordpress-templates/svelte-routify/src/pages/index.svelte",
        hotOptions: {
          preserveLocalState: false,
          noPreserveStateKey: ["@hmr:reset", "@!hmr"],
          preserveAllLocalStateKey: "@hmr:keep-all",
          preserveLocalStateKey: "@hmr:keep",
          noReload: false,
          optimistic: true,
          acceptNamedExports: true,
          acceptAccessors: true,
          injectCss: false,
          cssEjectDelay: 100,
          native: false,
          importAdapterName: "___SVELTE_HMR_HOT_API_PROXY_ADAPTER",
          noOverlay: false,
          allowLiveBinding: false
        },
        Component: Pages,
        ProxyAdapter: adapter,
        acceptable: true,
        preserveLocalState: false,
        emitCss: false
      });
    }
    var Pages$1 = Pages;
  });

  // dist/build/_layout.js
  var require_layout = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      default: () => Layout$1
    });
    var import_meta2 = {};
    (function(l, r) {
      if (!l || l.getElementById("livereloadscript"))
        return;
      r = l.createElement("script");
      r.async = 1;
      r.src = "//" + (self.location.host || "localhost").split(":")[0] + ":35729/livereload.js?snipver=1";
      r.id = "livereloadscript";
      l.getElementsByTagName("head")[0].appendChild(r);
    })(self.document);
    var file2 = "src/pages/_layout.svelte";
    function get_each_context2(ctx, list, i) {
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
    }
    function create_each_block_3(ctx) {
      let li;
      let t0_value = ctx[1].post_title + "";
      let t0;
      let t1;
      let t2_value = ctx[1].ID + "";
      let t2;
      const block = {
        c: function create3() {
          li = element("li");
          t0 = text(t0_value);
          t1 = space();
          t2 = text(t2_value);
          add_location(li, file2, 13, 7, 310);
        },
        m: function mount(target, anchor) {
          insert_dev(target, li, anchor);
          append_dev(li, t0);
          append_dev(li, t1);
          append_dev(li, t2);
        },
        p: noop,
        d: function destroy(detaching) {
          if (detaching)
            detach_dev(li);
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
    }
    function create_each_block_2(ctx) {
      let li;
      let t0_value = ctx[1].post_title + "";
      let t0;
      let t1;
      let t2_value = ctx[1].ID + "";
      let t2;
      const block = {
        c: function create3() {
          li = element("li");
          t0 = text(t0_value);
          t1 = space();
          t2 = text(t2_value);
          add_location(li, file2, 19, 7, 461);
        },
        m: function mount(target, anchor) {
          insert_dev(target, li, anchor);
          append_dev(li, t0);
          append_dev(li, t1);
          append_dev(li, t2);
        },
        p: noop,
        d: function destroy(detaching) {
          if (detaching)
            detach_dev(li);
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
    }
    function create_each_block_1(ctx) {
      let li;
      let t0_value = ctx[1].post_title + "";
      let t0;
      let t1;
      let t2_value = ctx[1].ID + "";
      let t2;
      const block = {
        c: function create3() {
          li = element("li");
          t0 = text(t0_value);
          t1 = space();
          t2 = text(t2_value);
          add_location(li, file2, 25, 7, 609);
        },
        m: function mount(target, anchor) {
          insert_dev(target, li, anchor);
          append_dev(li, t0);
          append_dev(li, t1);
          append_dev(li, t2);
        },
        p: noop,
        d: function destroy(detaching) {
          if (detaching)
            detach_dev(li);
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
    }
    function create_each_block2(ctx) {
      let li;
      let t0_value = ctx[1].name + "";
      let t0;
      let t1;
      let t2_value = ctx[1].term_id + "";
      let t2;
      const block = {
        c: function create3() {
          li = element("li");
          t0 = text(t0_value);
          t1 = space();
          t2 = text(t2_value);
          add_location(li, file2, 31, 7, 775);
        },
        m: function mount(target, anchor) {
          insert_dev(target, li, anchor);
          append_dev(li, t0);
          append_dev(li, t1);
          append_dev(li, t2);
        },
        p: noop,
        d: function destroy(detaching) {
          if (detaching)
            detach_dev(li);
        }
      };
      dispatch_dev("SvelteRegisterBlock", {
        block,
        id: create_each_block2.name,
        type: "each",
        source: "(31:4) {#each wordpress.categories as item}",
        ctx
      });
      return block;
    }
    function create_fragment2(ctx) {
      var _wordpress$entry;
      let title_value;
      let t0;
      let t1;
      let t2_value = ctx[0]() + "";
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
        each_blocks[i] = create_each_block2(get_each_context2(ctx, each_value, i));
      }
      const block = {
        c: function create3() {
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
          add_location(li0, file2, 10, 2, 220);
          add_location(ul0, file2, 11, 2, 262);
          add_location(li1, file2, 16, 2, 369);
          add_location(ul1, file2, 17, 4, 413);
          add_location(li2, file2, 22, 2, 520);
          add_location(ul2, file2, 23, 4, 562);
          add_location(li3, file2, 28, 2, 668);
          add_location(ul3, file2, 29, 4, 722);
          add_location(ul4, file2, 9, 0, 213);
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
        p: function update2(ctx2, _ref) {
          var _wordpress$entry2;
          let _ref2 = _slicedToArray(_ref, 1), dirty = _ref2[0];
          if (dirty & 0 && title_value !== (title_value = ((_wordpress$entry2 = wordpress.entry) === null || _wordpress$entry2 === void 0 ? void 0 : _wordpress$entry2.post_title) || "Home")) {
            document.title = title_value;
          }
          if (dirty & 1 && t2_value !== (t2_value = ctx2[0]() + ""))
            set_data_dev(t2, t2_value);
          if (dirty & 0) {
            each_value_3 = wordpress.pages;
            validate_each_argument(each_value_3);
            let i;
            for (i = 0; i < each_value_3.length; i += 1) {
              const child_ctx = get_each_context_3(ctx2, each_value_3, i);
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
          if (dirty & 0) {
            each_value_2 = wordpress.posts;
            validate_each_argument(each_value_2);
            let i;
            for (i = 0; i < each_value_2.length; i += 1) {
              const child_ctx = get_each_context_2(ctx2, each_value_2, i);
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
          if (dirty & 0) {
            each_value_1 = wordpress.faqs;
            validate_each_argument(each_value_1);
            let i;
            for (i = 0; i < each_value_1.length; i += 1) {
              const child_ctx = get_each_context_1(ctx2, each_value_1, i);
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
          if (dirty & 0) {
            each_value = wordpress.categories;
            validate_each_argument(each_value);
            let i;
            for (i = 0; i < each_value.length; i += 1) {
              const child_ctx = get_each_context2(ctx2, each_value, i);
              if (each_blocks[i]) {
                each_blocks[i].p(child_ctx, dirty);
              } else {
                each_blocks[i] = create_each_block2(child_ctx);
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
          if (detaching)
            detach_dev(t0);
          if (detaching)
            detach_dev(t1);
          if (detaching)
            detach_dev(t2);
          if (detaching)
            detach_dev(t3);
          if (detaching)
            detach_dev(ul4);
          destroy_each(each_blocks_3, detaching);
          destroy_each(each_blocks_2, detaching);
          destroy_each(each_blocks_1, detaching);
          destroy_each(each_blocks, detaching);
        }
      };
      dispatch_dev("SvelteRegisterBlock", {
        block,
        id: create_fragment2.name,
        type: "component",
        source: "",
        ctx
      });
      return block;
    }
    function instance2($$self, $$props, $$invalidate) {
      let $url;
      validate_store(url, "url");
      component_subscribe($$self, url, ($$value) => $$invalidate(0, $url = $$value));
      let _$$props$$$slots = $$props.$$slots, slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
      validate_slots("Layout", slots, []);
      const writable_props = [];
      Object.keys($$props).forEach((key) => {
        if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
          console.warn(`<Layout> was created with unknown prop '${key}'`);
      });
      $$self.$capture_state = () => ({
        url,
        $url
      });
      return [$url];
    }
    var Layout = class extends SvelteComponentDev {
      constructor(options) {
        super(options);
        init$1(this, options, instance2, create_fragment2, safe_not_equal, {});
        dispatch_dev("SvelteRegisterComponent", {
          component: this,
          tagName: "Layout",
          options,
          id: create_fragment2.name
        });
      }
    };
    if (import_meta2 && import_meta2.hot) {
      Layout = applyHmr({
        m: import_meta2,
        id: "/mnt/c/dev/repo/personal/svelte-wordpress-templates/svelte-routify/src/pages/_layout.svelte",
        hotOptions: {
          preserveLocalState: false,
          noPreserveStateKey: ["@hmr:reset", "@!hmr"],
          preserveAllLocalStateKey: "@hmr:keep-all",
          preserveLocalStateKey: "@hmr:keep",
          noReload: false,
          optimistic: true,
          acceptNamedExports: true,
          acceptAccessors: true,
          injectCss: false,
          cssEjectDelay: 100,
          native: false,
          importAdapterName: "___SVELTE_HMR_HOT_API_PROXY_ADAPTER",
          noOverlay: false,
          allowLiveBinding: false
        },
        Component: Layout,
        ProxyAdapter: adapter,
        acceptable: true,
        preserveLocalState: false,
        emitCss: false
      });
    }
    var Layout$1 = Layout;
  });

  // dist/build/main.js
  var import_meta = {};
  (function(l, r) {
    if (!l || l.getElementById("livereloadscript"))
      return;
    r = l.createElement("script");
    r.async = 1;
    r.src = "//" + (self.location.host || "localhost").split(":")[0] + ":35729/livereload.js?snipver=1";
    r.id = "livereloadscript";
    l.getElementsByTagName("head")[0].appendChild(r);
  })(self.document);
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  var check = function(it) {
    return it && it.Math == Math && it;
  };
  var global$V = check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof commonjsGlobal == "object" && commonjsGlobal) || function() {
    return this;
  }() || Function("return this")();
  var objectGetOwnPropertyDescriptor = {};
  var fails$n = function(exec2) {
    try {
      return !!exec2();
    } catch (error) {
      return true;
    }
  };
  var fails$m = fails$n;
  var descriptors = !fails$m(function() {
    return Object.defineProperty({}, 1, {get: function() {
      return 7;
    }})[1] != 7;
  });
  var call$g = Function.prototype.call;
  var functionCall = call$g.bind ? call$g.bind(call$g) : function() {
    return call$g.apply(call$g, arguments);
  };
  var objectPropertyIsEnumerable = {};
  var $propertyIsEnumerable = {}.propertyIsEnumerable;
  var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;
  var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable.call({1: 2}, 1);
  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$2(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable;
  var createPropertyDescriptor$5 = function(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value
    };
  };
  var FunctionPrototype$2 = Function.prototype;
  var bind$a = FunctionPrototype$2.bind;
  var call$f = FunctionPrototype$2.call;
  var callBind = bind$a && bind$a.bind(call$f);
  var functionUncurryThis = bind$a ? function(fn) {
    return fn && callBind(call$f, fn);
  } : function(fn) {
    return fn && function() {
      return call$f.apply(fn, arguments);
    };
  };
  var uncurryThis$p = functionUncurryThis;
  var toString$7 = uncurryThis$p({}.toString);
  var stringSlice$5 = uncurryThis$p("".slice);
  var classofRaw$1 = function(it) {
    return stringSlice$5(toString$7(it), 8, -1);
  };
  var global$U = global$V;
  var uncurryThis$o = functionUncurryThis;
  var fails$l = fails$n;
  var classof$b = classofRaw$1;
  var Object$5 = global$U.Object;
  var split = uncurryThis$o("".split);
  var indexedObject = fails$l(function() {
    return !Object$5("z").propertyIsEnumerable(0);
  }) ? function(it) {
    return classof$b(it) == "String" ? split(it, "") : Object$5(it);
  } : Object$5;
  var global$T = global$V;
  var TypeError$f = global$T.TypeError;
  var requireObjectCoercible$5 = function(it) {
    if (it == void 0)
      throw TypeError$f("Can't call method on " + it);
    return it;
  };
  var IndexedObject$1 = indexedObject;
  var requireObjectCoercible$4 = requireObjectCoercible$5;
  var toIndexedObject$6 = function(it) {
    return IndexedObject$1(requireObjectCoercible$4(it));
  };
  var isCallable$n = function(argument) {
    return typeof argument == "function";
  };
  var isCallable$m = isCallable$n;
  var isObject$f = function(it) {
    return typeof it == "object" ? it !== null : isCallable$m(it);
  };
  var global$S = global$V;
  var isCallable$l = isCallable$n;
  var aFunction = function(argument) {
    return isCallable$l(argument) ? argument : void 0;
  };
  var getBuiltIn$8 = function(namespace, method) {
    return arguments.length < 2 ? aFunction(global$S[namespace]) : global$S[namespace] && global$S[namespace][method];
  };
  var uncurryThis$n = functionUncurryThis;
  var objectIsPrototypeOf = uncurryThis$n({}.isPrototypeOf);
  var getBuiltIn$7 = getBuiltIn$8;
  var engineUserAgent = getBuiltIn$7("navigator", "userAgent") || "";
  var global$R = global$V;
  var userAgent$5 = engineUserAgent;
  var process$3 = global$R.process;
  var Deno = global$R.Deno;
  var versions = process$3 && process$3.versions || Deno && Deno.version;
  var v8 = versions && versions.v8;
  var match;
  var version;
  if (v8) {
    match = v8.split(".");
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
  }
  if (!version && userAgent$5) {
    match = userAgent$5.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = userAgent$5.match(/Chrome\/(\d+)/);
      if (match)
        version = +match[1];
    }
  }
  var engineV8Version = version;
  var V8_VERSION$1 = engineV8Version;
  var fails$k = fails$n;
  var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$k(function() {
    var symbol = Symbol();
    return !String(symbol) || !(Object(symbol) instanceof Symbol) || !Symbol.sham && V8_VERSION$1 && V8_VERSION$1 < 41;
  });
  var NATIVE_SYMBOL$2 = nativeSymbol;
  var useSymbolAsUid = NATIVE_SYMBOL$2 && !Symbol.sham && typeof Symbol.iterator == "symbol";
  var global$Q = global$V;
  var getBuiltIn$6 = getBuiltIn$8;
  var isCallable$k = isCallable$n;
  var isPrototypeOf$5 = objectIsPrototypeOf;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
  var Object$4 = global$Q.Object;
  var isSymbol$3 = USE_SYMBOL_AS_UID$1 ? function(it) {
    return typeof it == "symbol";
  } : function(it) {
    var $Symbol = getBuiltIn$6("Symbol");
    return isCallable$k($Symbol) && isPrototypeOf$5($Symbol.prototype, Object$4(it));
  };
  var global$P = global$V;
  var String$5 = global$P.String;
  var tryToString$5 = function(argument) {
    try {
      return String$5(argument);
    } catch (error) {
      return "Object";
    }
  };
  var global$O = global$V;
  var isCallable$j = isCallable$n;
  var tryToString$4 = tryToString$5;
  var TypeError$e = global$O.TypeError;
  var aCallable$6 = function(argument) {
    if (isCallable$j(argument))
      return argument;
    throw TypeError$e(tryToString$4(argument) + " is not a function");
  };
  var aCallable$5 = aCallable$6;
  var getMethod$4 = function(V, P) {
    var func = V[P];
    return func == null ? void 0 : aCallable$5(func);
  };
  var global$N = global$V;
  var call$e = functionCall;
  var isCallable$i = isCallable$n;
  var isObject$e = isObject$f;
  var TypeError$d = global$N.TypeError;
  var ordinaryToPrimitive$1 = function(input, pref) {
    var fn, val;
    if (pref === "string" && isCallable$i(fn = input.toString) && !isObject$e(val = call$e(fn, input)))
      return val;
    if (isCallable$i(fn = input.valueOf) && !isObject$e(val = call$e(fn, input)))
      return val;
    if (pref !== "string" && isCallable$i(fn = input.toString) && !isObject$e(val = call$e(fn, input)))
      return val;
    throw TypeError$d("Can't convert object to primitive value");
  };
  var shared$4 = {exports: {}};
  var global$M = global$V;
  var defineProperty$7 = Object.defineProperty;
  var setGlobal$3 = function(key, value) {
    try {
      defineProperty$7(global$M, key, {value, configurable: true, writable: true});
    } catch (error) {
      global$M[key] = value;
    }
    return value;
  };
  var global$L = global$V;
  var setGlobal$2 = setGlobal$3;
  var SHARED = "__core-js_shared__";
  var store$3 = global$L[SHARED] || setGlobal$2(SHARED, {});
  var sharedStore = store$3;
  var store$2 = sharedStore;
  (shared$4.exports = function(key, value) {
    return store$2[key] || (store$2[key] = value !== void 0 ? value : {});
  })("versions", []).push({
    version: "3.20.0",
    mode: "global",
    copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
  });
  var global$K = global$V;
  var requireObjectCoercible$3 = requireObjectCoercible$5;
  var Object$3 = global$K.Object;
  var toObject$7 = function(argument) {
    return Object$3(requireObjectCoercible$3(argument));
  };
  var uncurryThis$m = functionUncurryThis;
  var toObject$6 = toObject$7;
  var hasOwnProperty = uncurryThis$m({}.hasOwnProperty);
  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject$6(it), key);
  };
  var uncurryThis$l = functionUncurryThis;
  var id$1 = 0;
  var postfix = Math.random();
  var toString$6 = uncurryThis$l(1 .toString);
  var uid$4 = function(key) {
    return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString$6(++id$1 + postfix, 36);
  };
  var global$J = global$V;
  var shared$3 = shared$4.exports;
  var hasOwn$d = hasOwnProperty_1;
  var uid$3 = uid$4;
  var NATIVE_SYMBOL$1 = nativeSymbol;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;
  var WellKnownSymbolsStore = shared$3("wks");
  var Symbol$1 = global$J.Symbol;
  var symbolFor = Symbol$1 && Symbol$1["for"];
  var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$3;
  var wellKnownSymbol$i = function(name) {
    if (!hasOwn$d(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL$1 || typeof WellKnownSymbolsStore[name] == "string")) {
      var description = "Symbol." + name;
      if (NATIVE_SYMBOL$1 && hasOwn$d(Symbol$1, name)) {
        WellKnownSymbolsStore[name] = Symbol$1[name];
      } else if (USE_SYMBOL_AS_UID && symbolFor) {
        WellKnownSymbolsStore[name] = symbolFor(description);
      } else {
        WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
      }
    }
    return WellKnownSymbolsStore[name];
  };
  var global$I = global$V;
  var call$d = functionCall;
  var isObject$d = isObject$f;
  var isSymbol$2 = isSymbol$3;
  var getMethod$3 = getMethod$4;
  var ordinaryToPrimitive = ordinaryToPrimitive$1;
  var wellKnownSymbol$h = wellKnownSymbol$i;
  var TypeError$c = global$I.TypeError;
  var TO_PRIMITIVE = wellKnownSymbol$h("toPrimitive");
  var toPrimitive$1 = function(input, pref) {
    if (!isObject$d(input) || isSymbol$2(input))
      return input;
    var exoticToPrim = getMethod$3(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === void 0)
        pref = "default";
      result = call$d(exoticToPrim, input, pref);
      if (!isObject$d(result) || isSymbol$2(result))
        return result;
      throw TypeError$c("Can't convert object to primitive value");
    }
    if (pref === void 0)
      pref = "number";
    return ordinaryToPrimitive(input, pref);
  };
  var toPrimitive = toPrimitive$1;
  var isSymbol$1 = isSymbol$3;
  var toPropertyKey$4 = function(argument) {
    var key = toPrimitive(argument, "string");
    return isSymbol$1(key) ? key : key + "";
  };
  var global$H = global$V;
  var isObject$c = isObject$f;
  var document$3 = global$H.document;
  var EXISTS$1 = isObject$c(document$3) && isObject$c(document$3.createElement);
  var documentCreateElement$2 = function(it) {
    return EXISTS$1 ? document$3.createElement(it) : {};
  };
  var DESCRIPTORS$c = descriptors;
  var fails$j = fails$n;
  var createElement$1 = documentCreateElement$2;
  var ie8DomDefine = !DESCRIPTORS$c && !fails$j(function() {
    return Object.defineProperty(createElement$1("div"), "a", {
      get: function() {
        return 7;
      }
    }).a != 7;
  });
  var DESCRIPTORS$b = descriptors;
  var call$c = functionCall;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var createPropertyDescriptor$4 = createPropertyDescriptor$5;
  var toIndexedObject$5 = toIndexedObject$6;
  var toPropertyKey$3 = toPropertyKey$4;
  var hasOwn$c = hasOwnProperty_1;
  var IE8_DOM_DEFINE$1 = ie8DomDefine;
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$b ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$5(O);
    P = toPropertyKey$3(P);
    if (IE8_DOM_DEFINE$1)
      try {
        return $getOwnPropertyDescriptor(O, P);
      } catch (error) {
      }
    if (hasOwn$c(O, P))
      return createPropertyDescriptor$4(!call$c(propertyIsEnumerableModule.f, O, P), O[P]);
  };
  var objectDefineProperty = {};
  var global$G = global$V;
  var isObject$b = isObject$f;
  var String$4 = global$G.String;
  var TypeError$b = global$G.TypeError;
  var anObject$e = function(argument) {
    if (isObject$b(argument))
      return argument;
    throw TypeError$b(String$4(argument) + " is not an object");
  };
  var global$F = global$V;
  var DESCRIPTORS$a = descriptors;
  var IE8_DOM_DEFINE = ie8DomDefine;
  var anObject$d = anObject$e;
  var toPropertyKey$2 = toPropertyKey$4;
  var TypeError$a = global$F.TypeError;
  var $defineProperty = Object.defineProperty;
  objectDefineProperty.f = DESCRIPTORS$a ? $defineProperty : function defineProperty(O, P, Attributes) {
    anObject$d(O);
    P = toPropertyKey$2(P);
    anObject$d(Attributes);
    if (IE8_DOM_DEFINE)
      try {
        return $defineProperty(O, P, Attributes);
      } catch (error) {
      }
    if ("get" in Attributes || "set" in Attributes)
      throw TypeError$a("Accessors not supported");
    if ("value" in Attributes)
      O[P] = Attributes.value;
    return O;
  };
  var DESCRIPTORS$9 = descriptors;
  var definePropertyModule$6 = objectDefineProperty;
  var createPropertyDescriptor$3 = createPropertyDescriptor$5;
  var createNonEnumerableProperty$9 = DESCRIPTORS$9 ? function(object, key, value) {
    return definePropertyModule$6.f(object, key, createPropertyDescriptor$3(1, value));
  } : function(object, key, value) {
    object[key] = value;
    return object;
  };
  var redefine$8 = {exports: {}};
  var uncurryThis$k = functionUncurryThis;
  var isCallable$h = isCallable$n;
  var store$1 = sharedStore;
  var functionToString = uncurryThis$k(Function.toString);
  if (!isCallable$h(store$1.inspectSource)) {
    store$1.inspectSource = function(it) {
      return functionToString(it);
    };
  }
  var inspectSource$4 = store$1.inspectSource;
  var global$E = global$V;
  var isCallable$g = isCallable$n;
  var inspectSource$3 = inspectSource$4;
  var WeakMap$1 = global$E.WeakMap;
  var nativeWeakMap = isCallable$g(WeakMap$1) && /native code/.test(inspectSource$3(WeakMap$1));
  var shared$2 = shared$4.exports;
  var uid$2 = uid$4;
  var keys$1 = shared$2("keys");
  var sharedKey$3 = function(key) {
    return keys$1[key] || (keys$1[key] = uid$2(key));
  };
  var hiddenKeys$5 = {};
  var NATIVE_WEAK_MAP = nativeWeakMap;
  var global$D = global$V;
  var uncurryThis$j = functionUncurryThis;
  var isObject$a = isObject$f;
  var createNonEnumerableProperty$8 = createNonEnumerableProperty$9;
  var hasOwn$b = hasOwnProperty_1;
  var shared$1 = sharedStore;
  var sharedKey$2 = sharedKey$3;
  var hiddenKeys$4 = hiddenKeys$5;
  var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
  var TypeError$9 = global$D.TypeError;
  var WeakMap = global$D.WeakMap;
  var set$2;
  var get$1;
  var has;
  var enforce = function(it) {
    return has(it) ? get$1(it) : set$2(it, {});
  };
  var getterFor = function(TYPE) {
    return function(it) {
      var state;
      if (!isObject$a(it) || (state = get$1(it)).type !== TYPE) {
        throw TypeError$9("Incompatible receiver, " + TYPE + " required");
      }
      return state;
    };
  };
  if (NATIVE_WEAK_MAP || shared$1.state) {
    store = shared$1.state || (shared$1.state = new WeakMap());
    wmget = uncurryThis$j(store.get);
    wmhas = uncurryThis$j(store.has);
    wmset = uncurryThis$j(store.set);
    set$2 = function(it, metadata) {
      if (wmhas(store, it))
        throw new TypeError$9(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      wmset(store, it, metadata);
      return metadata;
    };
    get$1 = function(it) {
      return wmget(store, it) || {};
    };
    has = function(it) {
      return wmhas(store, it);
    };
  } else {
    STATE = sharedKey$2("state");
    hiddenKeys$4[STATE] = true;
    set$2 = function(it, metadata) {
      if (hasOwn$b(it, STATE))
        throw new TypeError$9(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty$8(it, STATE, metadata);
      return metadata;
    };
    get$1 = function(it) {
      return hasOwn$b(it, STATE) ? it[STATE] : {};
    };
    has = function(it) {
      return hasOwn$b(it, STATE);
    };
  }
  var store;
  var wmget;
  var wmhas;
  var wmset;
  var STATE;
  var internalState = {
    set: set$2,
    get: get$1,
    has,
    enforce,
    getterFor
  };
  var DESCRIPTORS$8 = descriptors;
  var hasOwn$a = hasOwnProperty_1;
  var FunctionPrototype$1 = Function.prototype;
  var getDescriptor = DESCRIPTORS$8 && Object.getOwnPropertyDescriptor;
  var EXISTS = hasOwn$a(FunctionPrototype$1, "name");
  var PROPER = EXISTS && function something() {
  }.name === "something";
  var CONFIGURABLE = EXISTS && (!DESCRIPTORS$8 || DESCRIPTORS$8 && getDescriptor(FunctionPrototype$1, "name").configurable);
  var functionName = {
    EXISTS,
    PROPER,
    CONFIGURABLE
  };
  var global$C = global$V;
  var isCallable$f = isCallable$n;
  var hasOwn$9 = hasOwnProperty_1;
  var createNonEnumerableProperty$7 = createNonEnumerableProperty$9;
  var setGlobal$1 = setGlobal$3;
  var inspectSource$2 = inspectSource$4;
  var InternalStateModule$5 = internalState;
  var CONFIGURABLE_FUNCTION_NAME$2 = functionName.CONFIGURABLE;
  var getInternalState$5 = InternalStateModule$5.get;
  var enforceInternalState = InternalStateModule$5.enforce;
  var TEMPLATE = String(String).split("String");
  (redefine$8.exports = function(O, key, value, options) {
    var unsafe = options ? !!options.unsafe : false;
    var simple = options ? !!options.enumerable : false;
    var noTargetGet = options ? !!options.noTargetGet : false;
    var name = options && options.name !== void 0 ? options.name : key;
    var state;
    if (isCallable$f(value)) {
      if (String(name).slice(0, 7) === "Symbol(") {
        name = "[" + String(name).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
      }
      if (!hasOwn$9(value, "name") || CONFIGURABLE_FUNCTION_NAME$2 && value.name !== name) {
        createNonEnumerableProperty$7(value, "name", name);
      }
      state = enforceInternalState(value);
      if (!state.source) {
        state.source = TEMPLATE.join(typeof name == "string" ? name : "");
      }
    }
    if (O === global$C) {
      if (simple)
        O[key] = value;
      else
        setGlobal$1(key, value);
      return;
    } else if (!unsafe) {
      delete O[key];
    } else if (!noTargetGet && O[key]) {
      simple = true;
    }
    if (simple)
      O[key] = value;
    else
      createNonEnumerableProperty$7(O, key, value);
  })(Function.prototype, "toString", function toString() {
    return isCallable$f(this) && getInternalState$5(this).source || inspectSource$2(this);
  });
  var objectGetOwnPropertyNames = {};
  var ceil = Math.ceil;
  var floor$4 = Math.floor;
  var toIntegerOrInfinity$7 = function(argument) {
    var number = +argument;
    return number !== number || number === 0 ? 0 : (number > 0 ? floor$4 : ceil)(number);
  };
  var toIntegerOrInfinity$6 = toIntegerOrInfinity$7;
  var max$2 = Math.max;
  var min$2 = Math.min;
  var toAbsoluteIndex$3 = function(index, length) {
    var integer = toIntegerOrInfinity$6(index);
    return integer < 0 ? max$2(integer + length, 0) : min$2(integer, length);
  };
  var toIntegerOrInfinity$5 = toIntegerOrInfinity$7;
  var min$1 = Math.min;
  var toLength$5 = function(argument) {
    return argument > 0 ? min$1(toIntegerOrInfinity$5(argument), 9007199254740991) : 0;
  };
  var toLength$4 = toLength$5;
  var lengthOfArrayLike$7 = function(obj) {
    return toLength$4(obj.length);
  };
  var toIndexedObject$4 = toIndexedObject$6;
  var toAbsoluteIndex$2 = toAbsoluteIndex$3;
  var lengthOfArrayLike$6 = lengthOfArrayLike$7;
  var createMethod$3 = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
      var O = toIndexedObject$4($this);
      var length = lengthOfArrayLike$6(O);
      var index = toAbsoluteIndex$2(fromIndex, length);
      var value;
      if (IS_INCLUDES && el != el)
        while (length > index) {
          value = O[index++];
          if (value != value)
            return true;
        }
      else
        for (; length > index; index++) {
          if ((IS_INCLUDES || index in O) && O[index] === el)
            return IS_INCLUDES || index || 0;
        }
      return !IS_INCLUDES && -1;
    };
  };
  var arrayIncludes = {
    includes: createMethod$3(true),
    indexOf: createMethod$3(false)
  };
  var uncurryThis$i = functionUncurryThis;
  var hasOwn$8 = hasOwnProperty_1;
  var toIndexedObject$3 = toIndexedObject$6;
  var indexOf$1 = arrayIncludes.indexOf;
  var hiddenKeys$3 = hiddenKeys$5;
  var push$2 = uncurryThis$i([].push);
  var objectKeysInternal = function(object, names) {
    var O = toIndexedObject$3(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O)
      !hasOwn$8(hiddenKeys$3, key) && hasOwn$8(O, key) && push$2(result, key);
    while (names.length > i)
      if (hasOwn$8(O, key = names[i++])) {
        ~indexOf$1(result, key) || push$2(result, key);
      }
    return result;
  };
  var enumBugKeys$3 = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
  ];
  var internalObjectKeys$1 = objectKeysInternal;
  var enumBugKeys$2 = enumBugKeys$3;
  var hiddenKeys$2 = enumBugKeys$2.concat("length", "prototype");
  objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys$1(O, hiddenKeys$2);
  };
  var objectGetOwnPropertySymbols = {};
  objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;
  var getBuiltIn$5 = getBuiltIn$8;
  var uncurryThis$h = functionUncurryThis;
  var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
  var anObject$c = anObject$e;
  var concat$1 = uncurryThis$h([].concat);
  var ownKeys$1 = getBuiltIn$5("Reflect", "ownKeys") || function ownKeys(it) {
    var keys2 = getOwnPropertyNamesModule$1.f(anObject$c(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat$1(keys2, getOwnPropertySymbols(it)) : keys2;
  };
  var hasOwn$7 = hasOwnProperty_1;
  var ownKeys2 = ownKeys$1;
  var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
  var definePropertyModule$5 = objectDefineProperty;
  var copyConstructorProperties$2 = function(target, source, exceptions) {
    var keys2 = ownKeys2(source);
    var defineProperty4 = definePropertyModule$5.f;
    var getOwnPropertyDescriptor4 = getOwnPropertyDescriptorModule$1.f;
    for (var i = 0; i < keys2.length; i++) {
      var key = keys2[i];
      if (!hasOwn$7(target, key) && !(exceptions && hasOwn$7(exceptions, key))) {
        defineProperty4(target, key, getOwnPropertyDescriptor4(source, key));
      }
    }
  };
  var fails$i = fails$n;
  var isCallable$e = isCallable$n;
  var replacement = /#|\.prototype\./;
  var isForced$3 = function(feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : isCallable$e(detection) ? fails$i(detection) : !!detection;
  };
  var normalize = isForced$3.normalize = function(string) {
    return String(string).replace(replacement, ".").toLowerCase();
  };
  var data = isForced$3.data = {};
  var NATIVE = isForced$3.NATIVE = "N";
  var POLYFILL = isForced$3.POLYFILL = "P";
  var isForced_1 = isForced$3;
  var global$B = global$V;
  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
  var createNonEnumerableProperty$6 = createNonEnumerableProperty$9;
  var redefine$7 = redefine$8.exports;
  var setGlobal = setGlobal$3;
  var copyConstructorProperties$1 = copyConstructorProperties$2;
  var isForced$2 = isForced_1;
  var _export = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED2, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = global$B;
    } else if (STATIC) {
      target = global$B[TARGET] || setGlobal(TARGET, {});
    } else {
      target = (global$B[TARGET] || {}).prototype;
    }
    if (target)
      for (key in source) {
        sourceProperty = source[key];
        if (options.noTargetGet) {
          descriptor = getOwnPropertyDescriptor$1(target, key);
          targetProperty = descriptor && descriptor.value;
        } else
          targetProperty = target[key];
        FORCED2 = isForced$2(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        if (!FORCED2 && targetProperty !== void 0) {
          if (typeof sourceProperty == typeof targetProperty)
            continue;
          copyConstructorProperties$1(sourceProperty, targetProperty);
        }
        if (options.sham || targetProperty && targetProperty.sham) {
          createNonEnumerableProperty$6(sourceProperty, "sham", true);
        }
        redefine$7(target, key, sourceProperty, options);
      }
  };
  var global$A = global$V;
  var nativePromiseConstructor = global$A.Promise;
  var redefine$6 = redefine$8.exports;
  var redefineAll$3 = function(target, src, options) {
    for (var key in src)
      redefine$6(target, key, src[key], options);
    return target;
  };
  var global$z = global$V;
  var isCallable$d = isCallable$n;
  var String$3 = global$z.String;
  var TypeError$8 = global$z.TypeError;
  var aPossiblePrototype$1 = function(argument) {
    if (typeof argument == "object" || isCallable$d(argument))
      return argument;
    throw TypeError$8("Can't set " + String$3(argument) + " as a prototype");
  };
  var uncurryThis$g = functionUncurryThis;
  var anObject$b = anObject$e;
  var aPossiblePrototype = aPossiblePrototype$1;
  var objectSetPrototypeOf = Object.setPrototypeOf || ("__proto__" in {} ? function() {
    var CORRECT_SETTER = false;
    var test2 = {};
    var setter;
    try {
      setter = uncurryThis$g(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set);
      setter(test2, []);
      CORRECT_SETTER = test2 instanceof Array;
    } catch (error) {
    }
    return function setPrototypeOf2(O, proto) {
      anObject$b(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER)
        setter(O, proto);
      else
        O.__proto__ = proto;
      return O;
    };
  }() : void 0);
  var defineProperty$6 = objectDefineProperty.f;
  var hasOwn$6 = hasOwnProperty_1;
  var wellKnownSymbol$g = wellKnownSymbol$i;
  var TO_STRING_TAG$4 = wellKnownSymbol$g("toStringTag");
  var setToStringTag$5 = function(target, TAG, STATIC) {
    if (target && !STATIC)
      target = target.prototype;
    if (target && !hasOwn$6(target, TO_STRING_TAG$4)) {
      defineProperty$6(target, TO_STRING_TAG$4, {configurable: true, value: TAG});
    }
  };
  var getBuiltIn$4 = getBuiltIn$8;
  var definePropertyModule$4 = objectDefineProperty;
  var wellKnownSymbol$f = wellKnownSymbol$i;
  var DESCRIPTORS$7 = descriptors;
  var SPECIES$4 = wellKnownSymbol$f("species");
  var setSpecies$3 = function(CONSTRUCTOR_NAME) {
    var Constructor2 = getBuiltIn$4(CONSTRUCTOR_NAME);
    var defineProperty4 = definePropertyModule$4.f;
    if (DESCRIPTORS$7 && Constructor2 && !Constructor2[SPECIES$4]) {
      defineProperty4(Constructor2, SPECIES$4, {
        configurable: true,
        get: function() {
          return this;
        }
      });
    }
  };
  var global$y = global$V;
  var isPrototypeOf$4 = objectIsPrototypeOf;
  var TypeError$7 = global$y.TypeError;
  var anInstance$5 = function(it, Prototype2) {
    if (isPrototypeOf$4(Prototype2, it))
      return it;
    throw TypeError$7("Incorrect invocation");
  };
  var uncurryThis$f = functionUncurryThis;
  var aCallable$4 = aCallable$6;
  var bind$9 = uncurryThis$f(uncurryThis$f.bind);
  var functionBindContext = function(fn, that) {
    aCallable$4(fn);
    return that === void 0 ? fn : bind$9 ? bind$9(fn, that) : function() {
      return fn.apply(that, arguments);
    };
  };
  var iterators = {};
  var wellKnownSymbol$e = wellKnownSymbol$i;
  var Iterators$4 = iterators;
  var ITERATOR$5 = wellKnownSymbol$e("iterator");
  var ArrayPrototype$1 = Array.prototype;
  var isArrayIteratorMethod$3 = function(it) {
    return it !== void 0 && (Iterators$4.Array === it || ArrayPrototype$1[ITERATOR$5] === it);
  };
  var wellKnownSymbol$d = wellKnownSymbol$i;
  var TO_STRING_TAG$3 = wellKnownSymbol$d("toStringTag");
  var test = {};
  test[TO_STRING_TAG$3] = "z";
  var toStringTagSupport = String(test) === "[object z]";
  var global$x = global$V;
  var TO_STRING_TAG_SUPPORT = toStringTagSupport;
  var isCallable$c = isCallable$n;
  var classofRaw = classofRaw$1;
  var wellKnownSymbol$c = wellKnownSymbol$i;
  var TO_STRING_TAG$2 = wellKnownSymbol$c("toStringTag");
  var Object$2 = global$x.Object;
  var CORRECT_ARGUMENTS = classofRaw(function() {
    return arguments;
  }()) == "Arguments";
  var tryGet = function(it, key) {
    try {
      return it[key];
    } catch (error) {
    }
  };
  var classof$a = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
    var O, tag, result;
    return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = Object$2(it), TO_STRING_TAG$2)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == "Object" && isCallable$c(O.callee) ? "Arguments" : result;
  };
  var classof$9 = classof$a;
  var getMethod$2 = getMethod$4;
  var Iterators$3 = iterators;
  var wellKnownSymbol$b = wellKnownSymbol$i;
  var ITERATOR$4 = wellKnownSymbol$b("iterator");
  var getIteratorMethod$4 = function(it) {
    if (it != void 0)
      return getMethod$2(it, ITERATOR$4) || getMethod$2(it, "@@iterator") || Iterators$3[classof$9(it)];
  };
  var global$w = global$V;
  var call$b = functionCall;
  var aCallable$3 = aCallable$6;
  var anObject$a = anObject$e;
  var tryToString$3 = tryToString$5;
  var getIteratorMethod$3 = getIteratorMethod$4;
  var TypeError$6 = global$w.TypeError;
  var getIterator$3 = function(argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? getIteratorMethod$3(argument) : usingIterator;
    if (aCallable$3(iteratorMethod))
      return anObject$a(call$b(iteratorMethod, argument));
    throw TypeError$6(tryToString$3(argument) + " is not iterable");
  };
  var call$a = functionCall;
  var anObject$9 = anObject$e;
  var getMethod$1 = getMethod$4;
  var iteratorClose$2 = function(iterator, kind, value) {
    var innerResult, innerError;
    anObject$9(iterator);
    try {
      innerResult = getMethod$1(iterator, "return");
      if (!innerResult) {
        if (kind === "throw")
          throw value;
        return value;
      }
      innerResult = call$a(innerResult, iterator);
    } catch (error) {
      innerError = true;
      innerResult = error;
    }
    if (kind === "throw")
      throw value;
    if (innerError)
      throw innerResult;
    anObject$9(innerResult);
    return value;
  };
  var global$v = global$V;
  var bind$8 = functionBindContext;
  var call$9 = functionCall;
  var anObject$8 = anObject$e;
  var tryToString$2 = tryToString$5;
  var isArrayIteratorMethod$2 = isArrayIteratorMethod$3;
  var lengthOfArrayLike$5 = lengthOfArrayLike$7;
  var isPrototypeOf$3 = objectIsPrototypeOf;
  var getIterator$2 = getIterator$3;
  var getIteratorMethod$2 = getIteratorMethod$4;
  var iteratorClose$1 = iteratorClose$2;
  var TypeError$5 = global$v.TypeError;
  var Result = function(stopped, result) {
    this.stopped = stopped;
    this.result = result;
  };
  var ResultPrototype = Result.prototype;
  var iterate$3 = function(iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = bind$8(unboundFunction, that);
    var iterator, iterFn, index, length, result, next, step;
    var stop = function(condition) {
      if (iterator)
        iteratorClose$1(iterator, "normal", condition);
      return new Result(true, condition);
    };
    var callFn = function(value) {
      if (AS_ENTRIES) {
        anObject$8(value);
        return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
      }
      return INTERRUPTED ? fn(value, stop) : fn(value);
    };
    if (IS_ITERATOR) {
      iterator = iterable;
    } else {
      iterFn = getIteratorMethod$2(iterable);
      if (!iterFn)
        throw TypeError$5(tryToString$2(iterable) + " is not iterable");
      if (isArrayIteratorMethod$2(iterFn)) {
        for (index = 0, length = lengthOfArrayLike$5(iterable); length > index; index++) {
          result = callFn(iterable[index]);
          if (result && isPrototypeOf$3(ResultPrototype, result))
            return result;
        }
        return new Result(false);
      }
      iterator = getIterator$2(iterable, iterFn);
    }
    next = iterator.next;
    while (!(step = call$9(next, iterator)).done) {
      try {
        result = callFn(step.value);
      } catch (error) {
        iteratorClose$1(iterator, "throw", error);
      }
      if (typeof result == "object" && result && isPrototypeOf$3(ResultPrototype, result))
        return result;
    }
    return new Result(false);
  };
  var wellKnownSymbol$a = wellKnownSymbol$i;
  var ITERATOR$3 = wellKnownSymbol$a("iterator");
  var SAFE_CLOSING = false;
  try {
    called = 0;
    iteratorWithReturn = {
      next: function() {
        return {done: !!called++};
      },
      return: function() {
        SAFE_CLOSING = true;
      }
    };
    iteratorWithReturn[ITERATOR$3] = function() {
      return this;
    };
    Array.from(iteratorWithReturn, function() {
      throw 2;
    });
  } catch (error) {
  }
  var called;
  var iteratorWithReturn;
  var checkCorrectnessOfIteration$4 = function(exec2, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING)
      return false;
    var ITERATION_SUPPORT = false;
    try {
      var object = {};
      object[ITERATOR$3] = function() {
        return {
          next: function() {
            return {done: ITERATION_SUPPORT = true};
          }
        };
      };
      exec2(object);
    } catch (error) {
    }
    return ITERATION_SUPPORT;
  };
  var uncurryThis$e = functionUncurryThis;
  var fails$h = fails$n;
  var isCallable$b = isCallable$n;
  var classof$8 = classof$a;
  var getBuiltIn$3 = getBuiltIn$8;
  var inspectSource$1 = inspectSource$4;
  var noop$1 = function() {
  };
  var empty$1 = [];
  var construct = getBuiltIn$3("Reflect", "construct");
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec$2 = uncurryThis$e(constructorRegExp.exec);
  var INCORRECT_TO_STRING = !constructorRegExp.exec(noop$1);
  var isConstructorModern = function isConstructor(argument) {
    if (!isCallable$b(argument))
      return false;
    try {
      construct(noop$1, empty$1, argument);
      return true;
    } catch (error) {
      return false;
    }
  };
  var isConstructorLegacy = function isConstructor2(argument) {
    if (!isCallable$b(argument))
      return false;
    switch (classof$8(argument)) {
      case "AsyncFunction":
      case "GeneratorFunction":
      case "AsyncGeneratorFunction":
        return false;
    }
    try {
      return INCORRECT_TO_STRING || !!exec$2(constructorRegExp, inspectSource$1(argument));
    } catch (error) {
      return true;
    }
  };
  isConstructorLegacy.sham = true;
  var isConstructor$3 = !construct || fails$h(function() {
    var called;
    return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
      called = true;
    }) || called;
  }) ? isConstructorLegacy : isConstructorModern;
  var global$u = global$V;
  var isConstructor$2 = isConstructor$3;
  var tryToString$1 = tryToString$5;
  var TypeError$4 = global$u.TypeError;
  var aConstructor$2 = function(argument) {
    if (isConstructor$2(argument))
      return argument;
    throw TypeError$4(tryToString$1(argument) + " is not a constructor");
  };
  var anObject$7 = anObject$e;
  var aConstructor$1 = aConstructor$2;
  var wellKnownSymbol$9 = wellKnownSymbol$i;
  var SPECIES$3 = wellKnownSymbol$9("species");
  var speciesConstructor$1 = function(O, defaultConstructor) {
    var C = anObject$7(O).constructor;
    var S;
    return C === void 0 || (S = anObject$7(C)[SPECIES$3]) == void 0 ? defaultConstructor : aConstructor$1(S);
  };
  var FunctionPrototype = Function.prototype;
  var apply$3 = FunctionPrototype.apply;
  var bind$7 = FunctionPrototype.bind;
  var call$8 = FunctionPrototype.call;
  var functionApply = typeof Reflect == "object" && Reflect.apply || (bind$7 ? call$8.bind(apply$3) : function() {
    return call$8.apply(apply$3, arguments);
  });
  var getBuiltIn$2 = getBuiltIn$8;
  var html$2 = getBuiltIn$2("document", "documentElement");
  var uncurryThis$d = functionUncurryThis;
  var arraySlice$4 = uncurryThis$d([].slice);
  var userAgent$4 = engineUserAgent;
  var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$4);
  var classof$7 = classofRaw$1;
  var global$t = global$V;
  var engineIsNode = classof$7(global$t.process) == "process";
  var global$s = global$V;
  var apply$2 = functionApply;
  var bind$6 = functionBindContext;
  var isCallable$a = isCallable$n;
  var hasOwn$5 = hasOwnProperty_1;
  var fails$g = fails$n;
  var html$1 = html$2;
  var arraySlice$3 = arraySlice$4;
  var createElement = documentCreateElement$2;
  var IS_IOS$1 = engineIsIos;
  var IS_NODE$2 = engineIsNode;
  var set$1 = global$s.setImmediate;
  var clear = global$s.clearImmediate;
  var process$2 = global$s.process;
  var Dispatch = global$s.Dispatch;
  var Function$1 = global$s.Function;
  var MessageChannel = global$s.MessageChannel;
  var String$2 = global$s.String;
  var counter = 0;
  var queue$1 = {};
  var ONREADYSTATECHANGE = "onreadystatechange";
  var location$1;
  var defer;
  var channel;
  var port;
  try {
    location$1 = global$s.location;
  } catch (error) {
  }
  var run$1 = function(id2) {
    if (hasOwn$5(queue$1, id2)) {
      var fn = queue$1[id2];
      delete queue$1[id2];
      fn();
    }
  };
  var runner = function(id2) {
    return function() {
      run$1(id2);
    };
  };
  var listener = function(event) {
    run$1(event.data);
  };
  var post = function(id2) {
    global$s.postMessage(String$2(id2), location$1.protocol + "//" + location$1.host);
  };
  if (!set$1 || !clear) {
    set$1 = function setImmediate(fn) {
      var args = arraySlice$3(arguments, 1);
      queue$1[++counter] = function() {
        apply$2(isCallable$a(fn) ? fn : Function$1(fn), void 0, args);
      };
      defer(counter);
      return counter;
    };
    clear = function clearImmediate(id2) {
      delete queue$1[id2];
    };
    if (IS_NODE$2) {
      defer = function(id2) {
        process$2.nextTick(runner(id2));
      };
    } else if (Dispatch && Dispatch.now) {
      defer = function(id2) {
        Dispatch.now(runner(id2));
      };
    } else if (MessageChannel && !IS_IOS$1) {
      channel = new MessageChannel();
      port = channel.port2;
      channel.port1.onmessage = listener;
      defer = bind$6(port.postMessage, port);
    } else if (global$s.addEventListener && isCallable$a(global$s.postMessage) && !global$s.importScripts && location$1 && location$1.protocol !== "file:" && !fails$g(post)) {
      defer = post;
      global$s.addEventListener("message", listener, false);
    } else if (ONREADYSTATECHANGE in createElement("script")) {
      defer = function(id2) {
        html$1.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
          html$1.removeChild(this);
          run$1(id2);
        };
      };
    } else {
      defer = function(id2) {
        setTimeout(runner(id2), 0);
      };
    }
  }
  var task$1 = {
    set: set$1,
    clear
  };
  var userAgent$3 = engineUserAgent;
  var global$r = global$V;
  var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$3) && global$r.Pebble !== void 0;
  var userAgent$2 = engineUserAgent;
  var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent$2);
  var global$q = global$V;
  var bind$5 = functionBindContext;
  var getOwnPropertyDescriptor2 = objectGetOwnPropertyDescriptor.f;
  var macrotask = task$1.set;
  var IS_IOS = engineIsIos;
  var IS_IOS_PEBBLE = engineIsIosPebble;
  var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
  var IS_NODE$1 = engineIsNode;
  var MutationObserver = global$q.MutationObserver || global$q.WebKitMutationObserver;
  var document$2 = global$q.document;
  var process$1 = global$q.process;
  var Promise$1 = global$q.Promise;
  var queueMicrotaskDescriptor = getOwnPropertyDescriptor2(global$q, "queueMicrotask");
  var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
  var flush$1;
  var head;
  var last;
  var notify$1;
  var toggle;
  var node;
  var promise;
  var then;
  if (!queueMicrotask) {
    flush$1 = function() {
      var parent2, fn;
      if (IS_NODE$1 && (parent2 = process$1.domain))
        parent2.exit();
      while (head) {
        fn = head.fn;
        head = head.next;
        try {
          fn();
        } catch (error) {
          if (head)
            notify$1();
          else
            last = void 0;
          throw error;
        }
      }
      last = void 0;
      if (parent2)
        parent2.enter();
    };
    if (!IS_IOS && !IS_NODE$1 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
      toggle = true;
      node = document$2.createTextNode("");
      new MutationObserver(flush$1).observe(node, {characterData: true});
      notify$1 = function() {
        node.data = toggle = !toggle;
      };
    } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
      promise = Promise$1.resolve(void 0);
      promise.constructor = Promise$1;
      then = bind$5(promise.then, promise);
      notify$1 = function() {
        then(flush$1);
      };
    } else if (IS_NODE$1) {
      notify$1 = function() {
        process$1.nextTick(flush$1);
      };
    } else {
      macrotask = bind$5(macrotask, global$q);
      notify$1 = function() {
        macrotask(flush$1);
      };
    }
  }
  var microtask$1 = queueMicrotask || function(fn) {
    var task2 = {fn, next: void 0};
    if (last)
      last.next = task2;
    if (!head) {
      head = task2;
      notify$1();
    }
    last = task2;
  };
  var newPromiseCapability$2 = {};
  var aCallable$2 = aCallable$6;
  var PromiseCapability = function(C) {
    var resolve2, reject2;
    this.promise = new C(function($$resolve, $$reject) {
      if (resolve2 !== void 0 || reject2 !== void 0)
        throw TypeError("Bad Promise constructor");
      resolve2 = $$resolve;
      reject2 = $$reject;
    });
    this.resolve = aCallable$2(resolve2);
    this.reject = aCallable$2(reject2);
  };
  newPromiseCapability$2.f = function(C) {
    return new PromiseCapability(C);
  };
  var anObject$6 = anObject$e;
  var isObject$9 = isObject$f;
  var newPromiseCapability$1 = newPromiseCapability$2;
  var promiseResolve$1 = function(C, x) {
    anObject$6(C);
    if (isObject$9(x) && x.constructor === C)
      return x;
    var promiseCapability = newPromiseCapability$1.f(C);
    var resolve2 = promiseCapability.resolve;
    resolve2(x);
    return promiseCapability.promise;
  };
  var global$p = global$V;
  var hostReportErrors$1 = function(a, b) {
    var console2 = global$p.console;
    if (console2 && console2.error) {
      arguments.length == 1 ? console2.error(a) : console2.error(a, b);
    }
  };
  var perform$1 = function(exec2) {
    try {
      return {error: false, value: exec2()};
    } catch (error) {
      return {error: true, value: error};
    }
  };
  var engineIsBrowser = typeof window == "object";
  var $$a = _export;
  var global$o = global$V;
  var getBuiltIn$1 = getBuiltIn$8;
  var call$7 = functionCall;
  var NativePromise = nativePromiseConstructor;
  var redefine$5 = redefine$8.exports;
  var redefineAll$2 = redefineAll$3;
  var setPrototypeOf$5 = objectSetPrototypeOf;
  var setToStringTag$4 = setToStringTag$5;
  var setSpecies$2 = setSpecies$3;
  var aCallable$1 = aCallable$6;
  var isCallable$9 = isCallable$n;
  var isObject$8 = isObject$f;
  var anInstance$4 = anInstance$5;
  var inspectSource = inspectSource$4;
  var iterate$2 = iterate$3;
  var checkCorrectnessOfIteration$3 = checkCorrectnessOfIteration$4;
  var speciesConstructor = speciesConstructor$1;
  var task = task$1.set;
  var microtask = microtask$1;
  var promiseResolve = promiseResolve$1;
  var hostReportErrors = hostReportErrors$1;
  var newPromiseCapabilityModule = newPromiseCapability$2;
  var perform = perform$1;
  var InternalStateModule$4 = internalState;
  var isForced$1 = isForced_1;
  var wellKnownSymbol$8 = wellKnownSymbol$i;
  var IS_BROWSER = engineIsBrowser;
  var IS_NODE = engineIsNode;
  var V8_VERSION = engineV8Version;
  var SPECIES$2 = wellKnownSymbol$8("species");
  var PROMISE = "Promise";
  var getInternalState$4 = InternalStateModule$4.getterFor(PROMISE);
  var setInternalState$4 = InternalStateModule$4.set;
  var getInternalPromiseState = InternalStateModule$4.getterFor(PROMISE);
  var NativePromisePrototype = NativePromise && NativePromise.prototype;
  var PromiseConstructor = NativePromise;
  var PromisePrototype = NativePromisePrototype;
  var TypeError$3 = global$o.TypeError;
  var document$1 = global$o.document;
  var process = global$o.process;
  var newPromiseCapability = newPromiseCapabilityModule.f;
  var newGenericPromiseCapability = newPromiseCapability;
  var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$o.dispatchEvent);
  var NATIVE_REJECTION_EVENT = isCallable$9(global$o.PromiseRejectionEvent);
  var UNHANDLED_REJECTION = "unhandledrejection";
  var REJECTION_HANDLED = "rejectionhandled";
  var PENDING = 0;
  var FULFILLED = 1;
  var REJECTED = 2;
  var HANDLED = 1;
  var UNHANDLED = 2;
  var SUBCLASSING = false;
  var Internal;
  var OwnPromiseCapability;
  var PromiseWrapper;
  var nativeThen;
  var FORCED$1 = isForced$1(PROMISE, function() {
    var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor);
    var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor);
    if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66)
      return true;
    if (V8_VERSION >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE))
      return false;
    var promise2 = new PromiseConstructor(function(resolve2) {
      resolve2(1);
    });
    var FakePromise = function(exec2) {
      exec2(function() {
      }, function() {
      });
    };
    var constructor = promise2.constructor = {};
    constructor[SPECIES$2] = FakePromise;
    SUBCLASSING = promise2.then(function() {
    }) instanceof FakePromise;
    if (!SUBCLASSING)
      return true;
    return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT;
  });
  var INCORRECT_ITERATION$1 = FORCED$1 || !checkCorrectnessOfIteration$3(function(iterable) {
    PromiseConstructor.all(iterable)["catch"](function() {
    });
  });
  var isThenable = function(it) {
    var then2;
    return isObject$8(it) && isCallable$9(then2 = it.then) ? then2 : false;
  };
  var notify = function(state, isReject) {
    if (state.notified)
      return;
    state.notified = true;
    var chain = state.reactions;
    microtask(function() {
      var value = state.value;
      var ok = state.state == FULFILLED;
      var index = 0;
      while (chain.length > index) {
        var reaction = chain[index++];
        var handler = ok ? reaction.ok : reaction.fail;
        var resolve2 = reaction.resolve;
        var reject2 = reaction.reject;
        var domain = reaction.domain;
        var result, then2, exited;
        try {
          if (handler) {
            if (!ok) {
              if (state.rejection === UNHANDLED)
                onHandleUnhandled(state);
              state.rejection = HANDLED;
            }
            if (handler === true)
              result = value;
            else {
              if (domain)
                domain.enter();
              result = handler(value);
              if (domain) {
                domain.exit();
                exited = true;
              }
            }
            if (result === reaction.promise) {
              reject2(TypeError$3("Promise-chain cycle"));
            } else if (then2 = isThenable(result)) {
              call$7(then2, result, resolve2, reject2);
            } else
              resolve2(result);
          } else
            reject2(value);
        } catch (error) {
          if (domain && !exited)
            domain.exit();
          reject2(error);
        }
      }
      state.reactions = [];
      state.notified = false;
      if (isReject && !state.rejection)
        onUnhandled(state);
    });
  };
  var dispatchEvent$1 = function(name, promise2, reason) {
    var event, handler;
    if (DISPATCH_EVENT) {
      event = document$1.createEvent("Event");
      event.promise = promise2;
      event.reason = reason;
      event.initEvent(name, false, true);
      global$o.dispatchEvent(event);
    } else
      event = {promise: promise2, reason};
    if (!NATIVE_REJECTION_EVENT && (handler = global$o["on" + name]))
      handler(event);
    else if (name === UNHANDLED_REJECTION)
      hostReportErrors("Unhandled promise rejection", reason);
  };
  var onUnhandled = function(state) {
    call$7(task, global$o, function() {
      var promise2 = state.facade;
      var value = state.value;
      var IS_UNHANDLED = isUnhandled(state);
      var result;
      if (IS_UNHANDLED) {
        result = perform(function() {
          if (IS_NODE) {
            process.emit("unhandledRejection", value, promise2);
          } else
            dispatchEvent$1(UNHANDLED_REJECTION, promise2, value);
        });
        state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
        if (result.error)
          throw result.value;
      }
    });
  };
  var isUnhandled = function(state) {
    return state.rejection !== HANDLED && !state.parent;
  };
  var onHandleUnhandled = function(state) {
    call$7(task, global$o, function() {
      var promise2 = state.facade;
      if (IS_NODE) {
        process.emit("rejectionHandled", promise2);
      } else
        dispatchEvent$1(REJECTION_HANDLED, promise2, state.value);
    });
  };
  var bind$4 = function(fn, state, unwrap) {
    return function(value) {
      fn(state, value, unwrap);
    };
  };
  var internalReject = function(state, value, unwrap) {
    if (state.done)
      return;
    state.done = true;
    if (unwrap)
      state = unwrap;
    state.value = value;
    state.state = REJECTED;
    notify(state, true);
  };
  var internalResolve = function(state, value, unwrap) {
    if (state.done)
      return;
    state.done = true;
    if (unwrap)
      state = unwrap;
    try {
      if (state.facade === value)
        throw TypeError$3("Promise can't be resolved itself");
      var then2 = isThenable(value);
      if (then2) {
        microtask(function() {
          var wrapper = {done: false};
          try {
            call$7(then2, value, bind$4(internalResolve, wrapper, state), bind$4(internalReject, wrapper, state));
          } catch (error) {
            internalReject(wrapper, error, state);
          }
        });
      } else {
        state.value = value;
        state.state = FULFILLED;
        notify(state, false);
      }
    } catch (error) {
      internalReject({done: false}, error, state);
    }
  };
  if (FORCED$1) {
    PromiseConstructor = function Promise2(executor) {
      anInstance$4(this, PromisePrototype);
      aCallable$1(executor);
      call$7(Internal, this);
      var state = getInternalState$4(this);
      try {
        executor(bind$4(internalResolve, state), bind$4(internalReject, state));
      } catch (error) {
        internalReject(state, error);
      }
    };
    PromisePrototype = PromiseConstructor.prototype;
    Internal = function Promise2(executor) {
      setInternalState$4(this, {
        type: PROMISE,
        done: false,
        notified: false,
        parent: false,
        reactions: [],
        rejection: false,
        state: PENDING,
        value: void 0
      });
    };
    Internal.prototype = redefineAll$2(PromisePrototype, {
      then: function then2(onFulfilled, onRejected) {
        var state = getInternalPromiseState(this);
        var reactions = state.reactions;
        var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
        reaction.ok = isCallable$9(onFulfilled) ? onFulfilled : true;
        reaction.fail = isCallable$9(onRejected) && onRejected;
        reaction.domain = IS_NODE ? process.domain : void 0;
        state.parent = true;
        reactions[reactions.length] = reaction;
        if (state.state != PENDING)
          notify(state, false);
        return reaction.promise;
      },
      catch: function(onRejected) {
        return this.then(void 0, onRejected);
      }
    });
    OwnPromiseCapability = function() {
      var promise2 = new Internal();
      var state = getInternalState$4(promise2);
      this.promise = promise2;
      this.resolve = bind$4(internalResolve, state);
      this.reject = bind$4(internalReject, state);
    };
    newPromiseCapabilityModule.f = newPromiseCapability = function(C) {
      return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
    };
    if (isCallable$9(NativePromise) && NativePromisePrototype !== Object.prototype) {
      nativeThen = NativePromisePrototype.then;
      if (!SUBCLASSING) {
        redefine$5(NativePromisePrototype, "then", function then2(onFulfilled, onRejected) {
          var that = this;
          return new PromiseConstructor(function(resolve2, reject2) {
            call$7(nativeThen, that, resolve2, reject2);
          }).then(onFulfilled, onRejected);
        }, {unsafe: true});
        redefine$5(NativePromisePrototype, "catch", PromisePrototype["catch"], {unsafe: true});
      }
      try {
        delete NativePromisePrototype.constructor;
      } catch (error) {
      }
      if (setPrototypeOf$5) {
        setPrototypeOf$5(NativePromisePrototype, PromisePrototype);
      }
    }
  }
  $$a({global: true, wrap: true, forced: FORCED$1}, {
    Promise: PromiseConstructor
  });
  setToStringTag$4(PromiseConstructor, PROMISE, false);
  setSpecies$2(PROMISE);
  PromiseWrapper = getBuiltIn$1(PROMISE);
  $$a({target: PROMISE, stat: true, forced: FORCED$1}, {
    reject: function reject(r) {
      var capability = newPromiseCapability(this);
      call$7(capability.reject, void 0, r);
      return capability.promise;
    }
  });
  $$a({target: PROMISE, stat: true, forced: FORCED$1}, {
    resolve: function resolve(x) {
      return promiseResolve(this, x);
    }
  });
  $$a({target: PROMISE, stat: true, forced: INCORRECT_ITERATION$1}, {
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var resolve2 = capability.resolve;
      var reject2 = capability.reject;
      var result = perform(function() {
        var $promiseResolve = aCallable$1(C.resolve);
        var values2 = [];
        var counter2 = 0;
        var remaining = 1;
        iterate$2(iterable, function(promise2) {
          var index = counter2++;
          var alreadyCalled = false;
          remaining++;
          call$7($promiseResolve, C, promise2).then(function(value) {
            if (alreadyCalled)
              return;
            alreadyCalled = true;
            values2[index] = value;
            --remaining || resolve2(values2);
          }, reject2);
        });
        --remaining || resolve2(values2);
      });
      if (result.error)
        reject2(result.value);
      return capability.promise;
    },
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var reject2 = capability.reject;
      var result = perform(function() {
        var $promiseResolve = aCallable$1(C.resolve);
        iterate$2(iterable, function(promise2) {
          call$7($promiseResolve, C, promise2).then(capability.resolve, reject2);
        });
      });
      if (result.error)
        reject2(result.value);
      return capability.promise;
    }
  });
  function HMR(Component, options = {target: document.body}, id2 = "hmr", eventName = "app-loaded") {
    const prerenderedHtmlElement = document.getElementById(id2);
    const target = document.createElement("div");
    target.style.visibility = "hidden";
    options.target.appendChild(target);
    if (!prerenderedHtmlElement)
      showApp();
    else
      addEventListener(eventName, showApp);
    function showApp() {
      removeEventListener(eventName, showApp);
      if (prerenderedHtmlElement)
        prerenderedHtmlElement.remove();
      target.style.visibility = null;
      target.setAttribute("id", id2);
    }
    return new Component({...options, target});
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null)
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++)
      arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it)
          o = it;
        var i = 0;
        var F = function() {
        };
        return {
          s: F,
          n: function() {
            if (i >= o.length)
              return {
                done: true
              };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function(e) {
            throw e;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
      s: function() {
        it = it.call(o);
      },
      n: function() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function(e) {
        didErr = true;
        err = e;
      },
      f: function() {
        try {
          if (!normalCompletion && it.return != null)
            it.return();
        } finally {
          if (didErr)
            throw err;
        }
      }
    };
  }
  var internalObjectKeys = objectKeysInternal;
  var enumBugKeys$1 = enumBugKeys$3;
  var objectKeys$1 = Object.keys || function keys(O) {
    return internalObjectKeys(O, enumBugKeys$1);
  };
  var DESCRIPTORS$6 = descriptors;
  var definePropertyModule$3 = objectDefineProperty;
  var anObject$5 = anObject$e;
  var toIndexedObject$2 = toIndexedObject$6;
  var objectKeys = objectKeys$1;
  var objectDefineProperties = DESCRIPTORS$6 ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$5(O);
    var props = toIndexedObject$2(Properties);
    var keys2 = objectKeys(Properties);
    var length = keys2.length;
    var index = 0;
    var key;
    while (length > index)
      definePropertyModule$3.f(O, key = keys2[index++], props[key]);
    return O;
  };
  var anObject$4 = anObject$e;
  var defineProperties2 = objectDefineProperties;
  var enumBugKeys = enumBugKeys$3;
  var hiddenKeys$1 = hiddenKeys$5;
  var html = html$2;
  var documentCreateElement$1 = documentCreateElement$2;
  var sharedKey$1 = sharedKey$3;
  var GT = ">";
  var LT = "<";
  var PROTOTYPE$1 = "prototype";
  var SCRIPT = "script";
  var IE_PROTO$1 = sharedKey$1("IE_PROTO");
  var EmptyConstructor = function() {
  };
  var scriptTag = function(content) {
    return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
  };
  var NullProtoObjectViaActiveX = function(activeXDocument2) {
    activeXDocument2.write(scriptTag(""));
    activeXDocument2.close();
    var temp = activeXDocument2.parentWindow.Object;
    activeXDocument2 = null;
    return temp;
  };
  var NullProtoObjectViaIFrame = function() {
    var iframe = documentCreateElement$1("iframe");
    var JS = "java" + SCRIPT + ":";
    var iframeDocument;
    iframe.style.display = "none";
    html.appendChild(iframe);
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag("document.F=Object"));
    iframeDocument.close();
    return iframeDocument.F;
  };
  var activeXDocument;
  var NullProtoObject = function() {
    try {
      activeXDocument = new ActiveXObject("htmlfile");
    } catch (error) {
    }
    NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
    var length = enumBugKeys.length;
    while (length--)
      delete NullProtoObject[PROTOTYPE$1][enumBugKeys[length]];
    return NullProtoObject();
  };
  hiddenKeys$1[IE_PROTO$1] = true;
  var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE$1] = anObject$4(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE$1] = null;
      result[IE_PROTO$1] = O;
    } else
      result = NullProtoObject();
    return Properties === void 0 ? result : defineProperties2(result, Properties);
  };
  var wellKnownSymbol$7 = wellKnownSymbol$i;
  var create$4 = objectCreate;
  var definePropertyModule$2 = objectDefineProperty;
  var UNSCOPABLES = wellKnownSymbol$7("unscopables");
  var ArrayPrototype = Array.prototype;
  if (ArrayPrototype[UNSCOPABLES] == void 0) {
    definePropertyModule$2.f(ArrayPrototype, UNSCOPABLES, {
      configurable: true,
      value: create$4(null)
    });
  }
  var addToUnscopables$1 = function(key) {
    ArrayPrototype[UNSCOPABLES][key] = true;
  };
  var fails$f = fails$n;
  var correctPrototypeGetter = !fails$f(function() {
    function F() {
    }
    F.prototype.constructor = null;
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });
  var global$n = global$V;
  var hasOwn$4 = hasOwnProperty_1;
  var isCallable$8 = isCallable$n;
  var toObject$5 = toObject$7;
  var sharedKey = sharedKey$3;
  var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;
  var IE_PROTO = sharedKey("IE_PROTO");
  var Object$1 = global$n.Object;
  var ObjectPrototype$2 = Object$1.prototype;
  var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? Object$1.getPrototypeOf : function(O) {
    var object = toObject$5(O);
    if (hasOwn$4(object, IE_PROTO))
      return object[IE_PROTO];
    var constructor = object.constructor;
    if (isCallable$8(constructor) && object instanceof constructor) {
      return constructor.prototype;
    }
    return object instanceof Object$1 ? ObjectPrototype$2 : null;
  };
  var fails$e = fails$n;
  var isCallable$7 = isCallable$n;
  var getPrototypeOf$3 = objectGetPrototypeOf;
  var redefine$4 = redefine$8.exports;
  var wellKnownSymbol$6 = wellKnownSymbol$i;
  var ITERATOR$2 = wellKnownSymbol$6("iterator");
  var BUGGY_SAFARI_ITERATORS$1 = false;
  var IteratorPrototype$2;
  var PrototypeOfArrayIteratorPrototype;
  var arrayIterator;
  if ([].keys) {
    arrayIterator = [].keys();
    if (!("next" in arrayIterator))
      BUGGY_SAFARI_ITERATORS$1 = true;
    else {
      PrototypeOfArrayIteratorPrototype = getPrototypeOf$3(getPrototypeOf$3(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
        IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
    }
  }
  var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$2 == void 0 || fails$e(function() {
    var test2 = {};
    return IteratorPrototype$2[ITERATOR$2].call(test2) !== test2;
  });
  if (NEW_ITERATOR_PROTOTYPE)
    IteratorPrototype$2 = {};
  if (!isCallable$7(IteratorPrototype$2[ITERATOR$2])) {
    redefine$4(IteratorPrototype$2, ITERATOR$2, function() {
      return this;
    });
  }
  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype$2,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
  };
  var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
  var create$3 = objectCreate;
  var createPropertyDescriptor$2 = createPropertyDescriptor$5;
  var setToStringTag$3 = setToStringTag$5;
  var Iterators$2 = iterators;
  var returnThis$1 = function() {
    return this;
  };
  var createIteratorConstructor$1 = function(IteratorConstructor, NAME2, next, ENUMERABLE_NEXT) {
    var TO_STRING_TAG2 = NAME2 + " Iterator";
    IteratorConstructor.prototype = create$3(IteratorPrototype$1, {next: createPropertyDescriptor$2(+!ENUMERABLE_NEXT, next)});
    setToStringTag$3(IteratorConstructor, TO_STRING_TAG2, false);
    Iterators$2[TO_STRING_TAG2] = returnThis$1;
    return IteratorConstructor;
  };
  var $$9 = _export;
  var call$6 = functionCall;
  var FunctionName$1 = functionName;
  var isCallable$6 = isCallable$n;
  var createIteratorConstructor = createIteratorConstructor$1;
  var getPrototypeOf$2 = objectGetPrototypeOf;
  var setPrototypeOf$4 = objectSetPrototypeOf;
  var setToStringTag$2 = setToStringTag$5;
  var createNonEnumerableProperty$5 = createNonEnumerableProperty$9;
  var redefine$3 = redefine$8.exports;
  var wellKnownSymbol$5 = wellKnownSymbol$i;
  var Iterators$1 = iterators;
  var IteratorsCore = iteratorsCore;
  var PROPER_FUNCTION_NAME$2 = FunctionName$1.PROPER;
  var CONFIGURABLE_FUNCTION_NAME$1 = FunctionName$1.CONFIGURABLE;
  var IteratorPrototype = IteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$1 = wellKnownSymbol$5("iterator");
  var KEYS = "keys";
  var VALUES = "values";
  var ENTRIES = "entries";
  var returnThis = function() {
    return this;
  };
  var defineIterator$2 = function(Iterable, NAME2, IteratorConstructor, next, DEFAULT, IS_SET, FORCED2) {
    createIteratorConstructor(IteratorConstructor, NAME2, next);
    var getIterationMethod = function(KIND) {
      if (KIND === DEFAULT && defaultIterator)
        return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype)
        return IterablePrototype[KIND];
      switch (KIND) {
        case KEYS:
          return function keys2() {
            return new IteratorConstructor(this, KIND);
          };
        case VALUES:
          return function values2() {
            return new IteratorConstructor(this, KIND);
          };
        case ENTRIES:
          return function entries() {
            return new IteratorConstructor(this, KIND);
          };
      }
      return function() {
        return new IteratorConstructor(this);
      };
    };
    var TO_STRING_TAG2 = NAME2 + " Iterator";
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR$1] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME2 == "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;
    if (anyNativeIterator) {
      CurrentIteratorPrototype = getPrototypeOf$2(anyNativeIterator.call(new Iterable()));
      if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
        if (getPrototypeOf$2(CurrentIteratorPrototype) !== IteratorPrototype) {
          if (setPrototypeOf$4) {
            setPrototypeOf$4(CurrentIteratorPrototype, IteratorPrototype);
          } else if (!isCallable$6(CurrentIteratorPrototype[ITERATOR$1])) {
            redefine$3(CurrentIteratorPrototype, ITERATOR$1, returnThis);
          }
        }
        setToStringTag$2(CurrentIteratorPrototype, TO_STRING_TAG2, true);
      }
    }
    if (PROPER_FUNCTION_NAME$2 && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      if (CONFIGURABLE_FUNCTION_NAME$1) {
        createNonEnumerableProperty$5(IterablePrototype, "name", VALUES);
      } else {
        INCORRECT_VALUES_NAME = true;
        defaultIterator = function values2() {
          return call$6(nativeIterator, this);
        };
      }
    }
    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES)
      };
      if (FORCED2)
        for (KEY in methods) {
          if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
            redefine$3(IterablePrototype, KEY, methods[KEY]);
          }
        }
      else
        $$9({target: NAME2, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME}, methods);
    }
    if (IterablePrototype[ITERATOR$1] !== defaultIterator) {
      redefine$3(IterablePrototype, ITERATOR$1, defaultIterator, {name: DEFAULT});
    }
    Iterators$1[NAME2] = defaultIterator;
    return methods;
  };
  var toIndexedObject$1 = toIndexedObject$6;
  var addToUnscopables = addToUnscopables$1;
  var Iterators = iterators;
  var InternalStateModule$3 = internalState;
  var defineProperty$5 = objectDefineProperty.f;
  var defineIterator$1 = defineIterator$2;
  var DESCRIPTORS$5 = descriptors;
  var ARRAY_ITERATOR = "Array Iterator";
  var setInternalState$3 = InternalStateModule$3.set;
  var getInternalState$3 = InternalStateModule$3.getterFor(ARRAY_ITERATOR);
  var es_array_iterator = defineIterator$1(Array, "Array", function(iterated, kind) {
    setInternalState$3(this, {
      type: ARRAY_ITERATOR,
      target: toIndexedObject$1(iterated),
      index: 0,
      kind
    });
  }, function() {
    var state = getInternalState$3(this);
    var target = state.target;
    var kind = state.kind;
    var index = state.index++;
    if (!target || index >= target.length) {
      state.target = void 0;
      return {value: void 0, done: true};
    }
    if (kind == "keys")
      return {value: index, done: false};
    if (kind == "values")
      return {value: target[index], done: false};
    return {value: [index, target[index]], done: false};
  }, "values");
  var values = Iterators.Arguments = Iterators.Array;
  addToUnscopables("keys");
  addToUnscopables("values");
  addToUnscopables("entries");
  if (DESCRIPTORS$5 && values.name !== "values")
    try {
      defineProperty$5(values, "name", {value: "values"});
    } catch (error) {
    }
  var domIterables = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };
  var documentCreateElement = documentCreateElement$2;
  var classList = documentCreateElement("span").classList;
  var DOMTokenListPrototype$1 = classList && classList.constructor && classList.constructor.prototype;
  var domTokenListPrototype = DOMTokenListPrototype$1 === Object.prototype ? void 0 : DOMTokenListPrototype$1;
  var global$m = global$V;
  var DOMIterables = domIterables;
  var DOMTokenListPrototype = domTokenListPrototype;
  var ArrayIteratorMethods = es_array_iterator;
  var createNonEnumerableProperty$4 = createNonEnumerableProperty$9;
  var wellKnownSymbol$4 = wellKnownSymbol$i;
  var ITERATOR = wellKnownSymbol$4("iterator");
  var TO_STRING_TAG$1 = wellKnownSymbol$4("toStringTag");
  var ArrayValues = ArrayIteratorMethods.values;
  var handlePrototype = function(CollectionPrototype, COLLECTION_NAME) {
    if (CollectionPrototype) {
      if (CollectionPrototype[ITERATOR] !== ArrayValues)
        try {
          createNonEnumerableProperty$4(CollectionPrototype, ITERATOR, ArrayValues);
        } catch (error) {
          CollectionPrototype[ITERATOR] = ArrayValues;
        }
      if (!CollectionPrototype[TO_STRING_TAG$1]) {
        createNonEnumerableProperty$4(CollectionPrototype, TO_STRING_TAG$1, COLLECTION_NAME);
      }
      if (DOMIterables[COLLECTION_NAME])
        for (var METHOD_NAME in ArrayIteratorMethods) {
          if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME])
            try {
              createNonEnumerableProperty$4(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
            } catch (error) {
              CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
            }
        }
    }
  };
  for (var COLLECTION_NAME in DOMIterables) {
    handlePrototype(global$m[COLLECTION_NAME] && global$m[COLLECTION_NAME].prototype, COLLECTION_NAME);
  }
  handlePrototype(DOMTokenListPrototype, "DOMTokenList");
  var internalMetadata = {exports: {}};
  var objectGetOwnPropertyNamesExternal = {};
  var toPropertyKey$1 = toPropertyKey$4;
  var definePropertyModule$1 = objectDefineProperty;
  var createPropertyDescriptor$1 = createPropertyDescriptor$5;
  var createProperty$2 = function(object, key, value) {
    var propertyKey = toPropertyKey$1(key);
    if (propertyKey in object)
      definePropertyModule$1.f(object, propertyKey, createPropertyDescriptor$1(0, value));
    else
      object[propertyKey] = value;
  };
  var global$l = global$V;
  var toAbsoluteIndex$1 = toAbsoluteIndex$3;
  var lengthOfArrayLike$4 = lengthOfArrayLike$7;
  var createProperty$1 = createProperty$2;
  var Array$7 = global$l.Array;
  var max$1 = Math.max;
  var arraySliceSimple = function(O, start, end) {
    var length = lengthOfArrayLike$4(O);
    var k = toAbsoluteIndex$1(start, length);
    var fin = toAbsoluteIndex$1(end === void 0 ? length : end, length);
    var result = Array$7(max$1(fin - k, 0));
    for (var n = 0; k < fin; k++, n++)
      createProperty$1(result, n, O[k]);
    result.length = n;
    return result;
  };
  var classof$6 = classofRaw$1;
  var toIndexedObject = toIndexedObject$6;
  var $getOwnPropertyNames = objectGetOwnPropertyNames.f;
  var arraySlice$2 = arraySliceSimple;
  var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
  var getWindowNames = function(it) {
    try {
      return $getOwnPropertyNames(it);
    } catch (error) {
      return arraySlice$2(windowNames);
    }
  };
  objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames2(it) {
    return windowNames && classof$6(it) == "Window" ? getWindowNames(it) : $getOwnPropertyNames(toIndexedObject(it));
  };
  var fails$d = fails$n;
  var arrayBufferNonExtensible = fails$d(function() {
    if (typeof ArrayBuffer == "function") {
      var buffer = new ArrayBuffer(8);
      if (Object.isExtensible(buffer))
        Object.defineProperty(buffer, "a", {value: 8});
    }
  });
  var fails$c = fails$n;
  var isObject$7 = isObject$f;
  var classof$5 = classofRaw$1;
  var ARRAY_BUFFER_NON_EXTENSIBLE = arrayBufferNonExtensible;
  var $isExtensible = Object.isExtensible;
  var FAILS_ON_PRIMITIVES = fails$c(function() {
    $isExtensible(1);
  });
  var objectIsExtensible = FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE ? function isExtensible(it) {
    if (!isObject$7(it))
      return false;
    if (ARRAY_BUFFER_NON_EXTENSIBLE && classof$5(it) == "ArrayBuffer")
      return false;
    return $isExtensible ? $isExtensible(it) : true;
  } : $isExtensible;
  var fails$b = fails$n;
  var freezing = !fails$b(function() {
    return Object.isExtensible(Object.preventExtensions({}));
  });
  var $$8 = _export;
  var uncurryThis$c = functionUncurryThis;
  var hiddenKeys = hiddenKeys$5;
  var isObject$6 = isObject$f;
  var hasOwn$3 = hasOwnProperty_1;
  var defineProperty$4 = objectDefineProperty.f;
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
  var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal;
  var isExtensible2 = objectIsExtensible;
  var uid$1 = uid$4;
  var FREEZING = freezing;
  var REQUIRED = false;
  var METADATA = uid$1("meta");
  var id = 0;
  var setMetadata = function(it) {
    defineProperty$4(it, METADATA, {value: {
      objectID: "O" + id++,
      weakData: {}
    }});
  };
  var fastKey$1 = function(it, create3) {
    if (!isObject$6(it))
      return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
    if (!hasOwn$3(it, METADATA)) {
      if (!isExtensible2(it))
        return "F";
      if (!create3)
        return "E";
      setMetadata(it);
    }
    return it[METADATA].objectID;
  };
  var getWeakData = function(it, create3) {
    if (!hasOwn$3(it, METADATA)) {
      if (!isExtensible2(it))
        return true;
      if (!create3)
        return false;
      setMetadata(it);
    }
    return it[METADATA].weakData;
  };
  var onFreeze = function(it) {
    if (FREEZING && REQUIRED && isExtensible2(it) && !hasOwn$3(it, METADATA))
      setMetadata(it);
    return it;
  };
  var enable = function() {
    meta.enable = function() {
    };
    REQUIRED = true;
    var getOwnPropertyNames4 = getOwnPropertyNamesModule.f;
    var splice = uncurryThis$c([].splice);
    var test2 = {};
    test2[METADATA] = 1;
    if (getOwnPropertyNames4(test2).length) {
      getOwnPropertyNamesModule.f = function(it) {
        var result = getOwnPropertyNames4(it);
        for (var i = 0, length = result.length; i < length; i++) {
          if (result[i] === METADATA) {
            splice(result, i, 1);
            break;
          }
        }
        return result;
      };
      $$8({target: "Object", stat: true, forced: true}, {
        getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
      });
    }
  };
  var meta = internalMetadata.exports = {
    enable,
    fastKey: fastKey$1,
    getWeakData,
    onFreeze
  };
  hiddenKeys[METADATA] = true;
  var isCallable$5 = isCallable$n;
  var isObject$5 = isObject$f;
  var setPrototypeOf$3 = objectSetPrototypeOf;
  var inheritIfRequired$2 = function($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if (setPrototypeOf$3 && isCallable$5(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject$5(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype)
      setPrototypeOf$3($this, NewTargetPrototype);
    return $this;
  };
  var $$7 = _export;
  var global$k = global$V;
  var uncurryThis$b = functionUncurryThis;
  var isForced = isForced_1;
  var redefine$2 = redefine$8.exports;
  var InternalMetadataModule = internalMetadata.exports;
  var iterate$1 = iterate$3;
  var anInstance$3 = anInstance$5;
  var isCallable$4 = isCallable$n;
  var isObject$4 = isObject$f;
  var fails$a = fails$n;
  var checkCorrectnessOfIteration$2 = checkCorrectnessOfIteration$4;
  var setToStringTag$1 = setToStringTag$5;
  var inheritIfRequired$1 = inheritIfRequired$2;
  var collection$2 = function(CONSTRUCTOR_NAME, wrapper, common) {
    var IS_MAP = CONSTRUCTOR_NAME.indexOf("Map") !== -1;
    var IS_WEAK = CONSTRUCTOR_NAME.indexOf("Weak") !== -1;
    var ADDER = IS_MAP ? "set" : "add";
    var NativeConstructor = global$k[CONSTRUCTOR_NAME];
    var NativePrototype = NativeConstructor && NativeConstructor.prototype;
    var Constructor2 = NativeConstructor;
    var exported = {};
    var fixMethod = function(KEY) {
      var uncurriedNativeMethod = uncurryThis$b(NativePrototype[KEY]);
      redefine$2(NativePrototype, KEY, KEY == "add" ? function add(value) {
        uncurriedNativeMethod(this, value === 0 ? 0 : value);
        return this;
      } : KEY == "delete" ? function(key) {
        return IS_WEAK && !isObject$4(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY == "get" ? function get2(key) {
        return IS_WEAK && !isObject$4(key) ? void 0 : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY == "has" ? function has2(key) {
        return IS_WEAK && !isObject$4(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : function set2(key, value) {
        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
        return this;
      });
    };
    var REPLACE2 = isForced(CONSTRUCTOR_NAME, !isCallable$4(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails$a(function() {
      new NativeConstructor().entries().next();
    })));
    if (REPLACE2) {
      Constructor2 = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
      InternalMetadataModule.enable();
    } else if (isForced(CONSTRUCTOR_NAME, true)) {
      var instance2 = new Constructor2();
      var HASNT_CHAINING = instance2[ADDER](IS_WEAK ? {} : -0, 1) != instance2;
      var THROWS_ON_PRIMITIVES = fails$a(function() {
        instance2.has(1);
      });
      var ACCEPT_ITERABLES = checkCorrectnessOfIteration$2(function(iterable) {
        new NativeConstructor(iterable);
      });
      var BUGGY_ZERO = !IS_WEAK && fails$a(function() {
        var $instance = new NativeConstructor();
        var index = 5;
        while (index--)
          $instance[ADDER](index, index);
        return !$instance.has(-0);
      });
      if (!ACCEPT_ITERABLES) {
        Constructor2 = wrapper(function(dummy, iterable) {
          anInstance$3(dummy, NativePrototype);
          var that = inheritIfRequired$1(new NativeConstructor(), dummy, Constructor2);
          if (iterable != void 0)
            iterate$1(iterable, that[ADDER], {that, AS_ENTRIES: IS_MAP});
          return that;
        });
        Constructor2.prototype = NativePrototype;
        NativePrototype.constructor = Constructor2;
      }
      if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
        fixMethod("delete");
        fixMethod("has");
        IS_MAP && fixMethod("get");
      }
      if (BUGGY_ZERO || HASNT_CHAINING)
        fixMethod(ADDER);
      if (IS_WEAK && NativePrototype.clear)
        delete NativePrototype.clear;
    }
    exported[CONSTRUCTOR_NAME] = Constructor2;
    $$7({global: true, forced: Constructor2 != NativeConstructor}, exported);
    setToStringTag$1(Constructor2, CONSTRUCTOR_NAME);
    if (!IS_WEAK)
      common.setStrong(Constructor2, CONSTRUCTOR_NAME, IS_MAP);
    return Constructor2;
  };
  var defineProperty$3 = objectDefineProperty.f;
  var create$2 = objectCreate;
  var redefineAll$1 = redefineAll$3;
  var bind$3 = functionBindContext;
  var anInstance$2 = anInstance$5;
  var iterate = iterate$3;
  var defineIterator = defineIterator$2;
  var setSpecies$1 = setSpecies$3;
  var DESCRIPTORS$4 = descriptors;
  var fastKey = internalMetadata.exports.fastKey;
  var InternalStateModule$2 = internalState;
  var setInternalState$2 = InternalStateModule$2.set;
  var internalStateGetterFor = InternalStateModule$2.getterFor;
  var collectionStrong$2 = {
    getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
      var Constructor2 = wrapper(function(that, iterable) {
        anInstance$2(that, Prototype2);
        setInternalState$2(that, {
          type: CONSTRUCTOR_NAME,
          index: create$2(null),
          first: void 0,
          last: void 0,
          size: 0
        });
        if (!DESCRIPTORS$4)
          that.size = 0;
        if (iterable != void 0)
          iterate(iterable, that[ADDER], {that, AS_ENTRIES: IS_MAP});
      });
      var Prototype2 = Constructor2.prototype;
      var getInternalState2 = internalStateGetterFor(CONSTRUCTOR_NAME);
      var define = function(that, key, value) {
        var state = getInternalState2(that);
        var entry = getEntry(that, key);
        var previous, index;
        if (entry) {
          entry.value = value;
        } else {
          state.last = entry = {
            index: index = fastKey(key, true),
            key,
            value,
            previous: previous = state.last,
            next: void 0,
            removed: false
          };
          if (!state.first)
            state.first = entry;
          if (previous)
            previous.next = entry;
          if (DESCRIPTORS$4)
            state.size++;
          else
            that.size++;
          if (index !== "F")
            state.index[index] = entry;
        }
        return that;
      };
      var getEntry = function(that, key) {
        var state = getInternalState2(that);
        var index = fastKey(key);
        var entry;
        if (index !== "F")
          return state.index[index];
        for (entry = state.first; entry; entry = entry.next) {
          if (entry.key == key)
            return entry;
        }
      };
      redefineAll$1(Prototype2, {
        clear: function clear2() {
          var that = this;
          var state = getInternalState2(that);
          var data2 = state.index;
          var entry = state.first;
          while (entry) {
            entry.removed = true;
            if (entry.previous)
              entry.previous = entry.previous.next = void 0;
            delete data2[entry.index];
            entry = entry.next;
          }
          state.first = state.last = void 0;
          if (DESCRIPTORS$4)
            state.size = 0;
          else
            that.size = 0;
        },
        delete: function(key) {
          var that = this;
          var state = getInternalState2(that);
          var entry = getEntry(that, key);
          if (entry) {
            var next = entry.next;
            var prev = entry.previous;
            delete state.index[entry.index];
            entry.removed = true;
            if (prev)
              prev.next = next;
            if (next)
              next.previous = prev;
            if (state.first == entry)
              state.first = next;
            if (state.last == entry)
              state.last = prev;
            if (DESCRIPTORS$4)
              state.size--;
            else
              that.size--;
          }
          return !!entry;
        },
        forEach: function forEach2(callbackfn) {
          var state = getInternalState2(this);
          var boundFunction = bind$3(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          var entry;
          while (entry = entry ? entry.next : state.first) {
            boundFunction(entry.value, entry.key, this);
            while (entry && entry.removed)
              entry = entry.previous;
          }
        },
        has: function has2(key) {
          return !!getEntry(this, key);
        }
      });
      redefineAll$1(Prototype2, IS_MAP ? {
        get: function get2(key) {
          var entry = getEntry(this, key);
          return entry && entry.value;
        },
        set: function set2(key, value) {
          return define(this, key === 0 ? 0 : key, value);
        }
      } : {
        add: function add(value) {
          return define(this, value = value === 0 ? 0 : value, value);
        }
      });
      if (DESCRIPTORS$4)
        defineProperty$3(Prototype2, "size", {
          get: function() {
            return getInternalState2(this).size;
          }
        });
      return Constructor2;
    },
    setStrong: function(Constructor2, CONSTRUCTOR_NAME, IS_MAP) {
      var ITERATOR_NAME = CONSTRUCTOR_NAME + " Iterator";
      var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
      var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
      defineIterator(Constructor2, CONSTRUCTOR_NAME, function(iterated, kind) {
        setInternalState$2(this, {
          type: ITERATOR_NAME,
          target: iterated,
          state: getInternalCollectionState(iterated),
          kind,
          last: void 0
        });
      }, function() {
        var state = getInternalIteratorState(this);
        var kind = state.kind;
        var entry = state.last;
        while (entry && entry.removed)
          entry = entry.previous;
        if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
          state.target = void 0;
          return {value: void 0, done: true};
        }
        if (kind == "keys")
          return {value: entry.key, done: false};
        if (kind == "values")
          return {value: entry.value, done: false};
        return {value: [entry.key, entry.value], done: false};
      }, IS_MAP ? "entries" : "values", !IS_MAP, true);
      setSpecies$1(CONSTRUCTOR_NAME);
    }
  };
  var collection$1 = collection$2;
  var collectionStrong$1 = collectionStrong$2;
  collection$1("Set", function(init2) {
    return function Set2() {
      return init2(this, arguments.length ? arguments[0] : void 0);
    };
  }, collectionStrong$1);
  var typedArrayConstructor = {exports: {}};
  var arrayBufferNative = typeof ArrayBuffer != "undefined" && typeof DataView != "undefined";
  var NATIVE_ARRAY_BUFFER$1 = arrayBufferNative;
  var DESCRIPTORS$3 = descriptors;
  var global$j = global$V;
  var isCallable$3 = isCallable$n;
  var isObject$3 = isObject$f;
  var hasOwn$2 = hasOwnProperty_1;
  var classof$4 = classof$a;
  var tryToString = tryToString$5;
  var createNonEnumerableProperty$3 = createNonEnumerableProperty$9;
  var redefine$1 = redefine$8.exports;
  var defineProperty$2 = objectDefineProperty.f;
  var isPrototypeOf$2 = objectIsPrototypeOf;
  var getPrototypeOf$1 = objectGetPrototypeOf;
  var setPrototypeOf$2 = objectSetPrototypeOf;
  var wellKnownSymbol$3 = wellKnownSymbol$i;
  var uid = uid$4;
  var Int8Array$1 = global$j.Int8Array;
  var Int8ArrayPrototype = Int8Array$1 && Int8Array$1.prototype;
  var Uint8ClampedArray = global$j.Uint8ClampedArray;
  var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
  var TypedArray$1 = Int8Array$1 && getPrototypeOf$1(Int8Array$1);
  var TypedArrayPrototype$1 = Int8ArrayPrototype && getPrototypeOf$1(Int8ArrayPrototype);
  var ObjectPrototype$1 = Object.prototype;
  var TypeError$2 = global$j.TypeError;
  var TO_STRING_TAG = wellKnownSymbol$3("toStringTag");
  var TYPED_ARRAY_TAG$1 = uid("TYPED_ARRAY_TAG");
  var TYPED_ARRAY_CONSTRUCTOR$1 = uid("TYPED_ARRAY_CONSTRUCTOR");
  var NATIVE_ARRAY_BUFFER_VIEWS$2 = NATIVE_ARRAY_BUFFER$1 && !!setPrototypeOf$2 && classof$4(global$j.opera) !== "Opera";
  var TYPED_ARRAY_TAG_REQIRED = false;
  var NAME;
  var Constructor;
  var Prototype;
  var TypedArrayConstructorsList = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8
  };
  var BigIntArrayConstructorsList = {
    BigInt64Array: 8,
    BigUint64Array: 8
  };
  var isView = function isView2(it) {
    if (!isObject$3(it))
      return false;
    var klass = classof$4(it);
    return klass === "DataView" || hasOwn$2(TypedArrayConstructorsList, klass) || hasOwn$2(BigIntArrayConstructorsList, klass);
  };
  var isTypedArray$1 = function(it) {
    if (!isObject$3(it))
      return false;
    var klass = classof$4(it);
    return hasOwn$2(TypedArrayConstructorsList, klass) || hasOwn$2(BigIntArrayConstructorsList, klass);
  };
  var aTypedArray$1 = function(it) {
    if (isTypedArray$1(it))
      return it;
    throw TypeError$2("Target is not a typed array");
  };
  var aTypedArrayConstructor$2 = function(C) {
    if (isCallable$3(C) && (!setPrototypeOf$2 || isPrototypeOf$2(TypedArray$1, C)))
      return C;
    throw TypeError$2(tryToString(C) + " is not a typed array constructor");
  };
  var exportTypedArrayMethod$1 = function(KEY, property, forced, options) {
    if (!DESCRIPTORS$3)
      return;
    if (forced)
      for (var ARRAY in TypedArrayConstructorsList) {
        var TypedArrayConstructor = global$j[ARRAY];
        if (TypedArrayConstructor && hasOwn$2(TypedArrayConstructor.prototype, KEY))
          try {
            delete TypedArrayConstructor.prototype[KEY];
          } catch (error) {
          }
      }
    if (!TypedArrayPrototype$1[KEY] || forced) {
      redefine$1(TypedArrayPrototype$1, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS$2 && Int8ArrayPrototype[KEY] || property, options);
    }
  };
  var exportTypedArrayStaticMethod = function(KEY, property, forced) {
    var ARRAY, TypedArrayConstructor;
    if (!DESCRIPTORS$3)
      return;
    if (setPrototypeOf$2) {
      if (forced)
        for (ARRAY in TypedArrayConstructorsList) {
          TypedArrayConstructor = global$j[ARRAY];
          if (TypedArrayConstructor && hasOwn$2(TypedArrayConstructor, KEY))
            try {
              delete TypedArrayConstructor[KEY];
            } catch (error) {
            }
        }
      if (!TypedArray$1[KEY] || forced) {
        try {
          return redefine$1(TypedArray$1, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS$2 && TypedArray$1[KEY] || property);
        } catch (error) {
        }
      } else
        return;
    }
    for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global$j[ARRAY];
      if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
        redefine$1(TypedArrayConstructor, KEY, property);
      }
    }
  };
  for (NAME in TypedArrayConstructorsList) {
    Constructor = global$j[NAME];
    Prototype = Constructor && Constructor.prototype;
    if (Prototype)
      createNonEnumerableProperty$3(Prototype, TYPED_ARRAY_CONSTRUCTOR$1, Constructor);
    else
      NATIVE_ARRAY_BUFFER_VIEWS$2 = false;
  }
  for (NAME in BigIntArrayConstructorsList) {
    Constructor = global$j[NAME];
    Prototype = Constructor && Constructor.prototype;
    if (Prototype)
      createNonEnumerableProperty$3(Prototype, TYPED_ARRAY_CONSTRUCTOR$1, Constructor);
  }
  if (!NATIVE_ARRAY_BUFFER_VIEWS$2 || !isCallable$3(TypedArray$1) || TypedArray$1 === Function.prototype) {
    TypedArray$1 = function TypedArray2() {
      throw TypeError$2("Incorrect invocation");
    };
    if (NATIVE_ARRAY_BUFFER_VIEWS$2)
      for (NAME in TypedArrayConstructorsList) {
        if (global$j[NAME])
          setPrototypeOf$2(global$j[NAME], TypedArray$1);
      }
  }
  if (!NATIVE_ARRAY_BUFFER_VIEWS$2 || !TypedArrayPrototype$1 || TypedArrayPrototype$1 === ObjectPrototype$1) {
    TypedArrayPrototype$1 = TypedArray$1.prototype;
    if (NATIVE_ARRAY_BUFFER_VIEWS$2)
      for (NAME in TypedArrayConstructorsList) {
        if (global$j[NAME])
          setPrototypeOf$2(global$j[NAME].prototype, TypedArrayPrototype$1);
      }
  }
  if (NATIVE_ARRAY_BUFFER_VIEWS$2 && getPrototypeOf$1(Uint8ClampedArrayPrototype) !== TypedArrayPrototype$1) {
    setPrototypeOf$2(Uint8ClampedArrayPrototype, TypedArrayPrototype$1);
  }
  if (DESCRIPTORS$3 && !hasOwn$2(TypedArrayPrototype$1, TO_STRING_TAG)) {
    TYPED_ARRAY_TAG_REQIRED = true;
    defineProperty$2(TypedArrayPrototype$1, TO_STRING_TAG, {get: function() {
      return isObject$3(this) ? this[TYPED_ARRAY_TAG$1] : void 0;
    }});
    for (NAME in TypedArrayConstructorsList)
      if (global$j[NAME]) {
        createNonEnumerableProperty$3(global$j[NAME], TYPED_ARRAY_TAG$1, NAME);
      }
  }
  var arrayBufferViewCore = {
    NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS$2,
    TYPED_ARRAY_CONSTRUCTOR: TYPED_ARRAY_CONSTRUCTOR$1,
    TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG$1,
    aTypedArray: aTypedArray$1,
    aTypedArrayConstructor: aTypedArrayConstructor$2,
    exportTypedArrayMethod: exportTypedArrayMethod$1,
    exportTypedArrayStaticMethod,
    isView,
    isTypedArray: isTypedArray$1,
    TypedArray: TypedArray$1,
    TypedArrayPrototype: TypedArrayPrototype$1
  };
  var global$i = global$V;
  var fails$9 = fails$n;
  var checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$4;
  var NATIVE_ARRAY_BUFFER_VIEWS$1 = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
  var ArrayBuffer$2 = global$i.ArrayBuffer;
  var Int8Array = global$i.Int8Array;
  var typedArrayConstructorsRequireWrappers = !NATIVE_ARRAY_BUFFER_VIEWS$1 || !fails$9(function() {
    Int8Array(1);
  }) || !fails$9(function() {
    new Int8Array(-1);
  }) || !checkCorrectnessOfIteration$1(function(iterable) {
    new Int8Array();
    new Int8Array(null);
    new Int8Array(1.5);
    new Int8Array(iterable);
  }, true) || fails$9(function() {
    return new Int8Array(new ArrayBuffer$2(2), 1, void 0).length !== 1;
  });
  var global$h = global$V;
  var toIntegerOrInfinity$4 = toIntegerOrInfinity$7;
  var toLength$3 = toLength$5;
  var RangeError$4 = global$h.RangeError;
  var toIndex$2 = function(it) {
    if (it === void 0)
      return 0;
    var number = toIntegerOrInfinity$4(it);
    var length = toLength$3(number);
    if (number !== length)
      throw RangeError$4("Wrong length or index");
    return length;
  };
  var global$g = global$V;
  var Array$6 = global$g.Array;
  var abs = Math.abs;
  var pow = Math.pow;
  var floor$3 = Math.floor;
  var log$1 = Math.log;
  var LN2 = Math.LN2;
  var pack = function(number, mantissaLength, bytes) {
    var buffer = Array$6(bytes);
    var exponentLength = bytes * 8 - mantissaLength - 1;
    var eMax = (1 << exponentLength) - 1;
    var eBias = eMax >> 1;
    var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
    var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
    var index = 0;
    var exponent, mantissa, c;
    number = abs(number);
    if (number != number || number === Infinity) {
      mantissa = number != number ? 1 : 0;
      exponent = eMax;
    } else {
      exponent = floor$3(log$1(number) / LN2);
      c = pow(2, -exponent);
      if (number * c < 1) {
        exponent--;
        c *= 2;
      }
      if (exponent + eBias >= 1) {
        number += rt / c;
      } else {
        number += rt * pow(2, 1 - eBias);
      }
      if (number * c >= 2) {
        exponent++;
        c /= 2;
      }
      if (exponent + eBias >= eMax) {
        mantissa = 0;
        exponent = eMax;
      } else if (exponent + eBias >= 1) {
        mantissa = (number * c - 1) * pow(2, mantissaLength);
        exponent = exponent + eBias;
      } else {
        mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
        exponent = 0;
      }
    }
    while (mantissaLength >= 8) {
      buffer[index++] = mantissa & 255;
      mantissa /= 256;
      mantissaLength -= 8;
    }
    exponent = exponent << mantissaLength | mantissa;
    exponentLength += mantissaLength;
    while (exponentLength > 0) {
      buffer[index++] = exponent & 255;
      exponent /= 256;
      exponentLength -= 8;
    }
    buffer[--index] |= sign * 128;
    return buffer;
  };
  var unpack = function(buffer, mantissaLength) {
    var bytes = buffer.length;
    var exponentLength = bytes * 8 - mantissaLength - 1;
    var eMax = (1 << exponentLength) - 1;
    var eBias = eMax >> 1;
    var nBits = exponentLength - 7;
    var index = bytes - 1;
    var sign = buffer[index--];
    var exponent = sign & 127;
    var mantissa;
    sign >>= 7;
    while (nBits > 0) {
      exponent = exponent * 256 + buffer[index--];
      nBits -= 8;
    }
    mantissa = exponent & (1 << -nBits) - 1;
    exponent >>= -nBits;
    nBits += mantissaLength;
    while (nBits > 0) {
      mantissa = mantissa * 256 + buffer[index--];
      nBits -= 8;
    }
    if (exponent === 0) {
      exponent = 1 - eBias;
    } else if (exponent === eMax) {
      return mantissa ? NaN : sign ? -Infinity : Infinity;
    } else {
      mantissa = mantissa + pow(2, mantissaLength);
      exponent = exponent - eBias;
    }
    return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
  };
  var ieee754 = {
    pack,
    unpack
  };
  var toObject$4 = toObject$7;
  var toAbsoluteIndex = toAbsoluteIndex$3;
  var lengthOfArrayLike$3 = lengthOfArrayLike$7;
  var arrayFill$1 = function fill(value) {
    var O = toObject$4(this);
    var length = lengthOfArrayLike$3(O);
    var argumentsLength = arguments.length;
    var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : void 0, length);
    var end = argumentsLength > 2 ? arguments[2] : void 0;
    var endPos = end === void 0 ? length : toAbsoluteIndex(end, length);
    while (endPos > index)
      O[index++] = value;
    return O;
  };
  var global$f = global$V;
  var uncurryThis$a = functionUncurryThis;
  var DESCRIPTORS$2 = descriptors;
  var NATIVE_ARRAY_BUFFER = arrayBufferNative;
  var FunctionName = functionName;
  var createNonEnumerableProperty$2 = createNonEnumerableProperty$9;
  var redefineAll = redefineAll$3;
  var fails$8 = fails$n;
  var anInstance$1 = anInstance$5;
  var toIntegerOrInfinity$3 = toIntegerOrInfinity$7;
  var toLength$2 = toLength$5;
  var toIndex$1 = toIndex$2;
  var IEEE754 = ieee754;
  var getPrototypeOf = objectGetPrototypeOf;
  var setPrototypeOf$1 = objectSetPrototypeOf;
  var getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
  var defineProperty$1 = objectDefineProperty.f;
  var arrayFill = arrayFill$1;
  var arraySlice$1 = arraySliceSimple;
  var setToStringTag = setToStringTag$5;
  var InternalStateModule$1 = internalState;
  var PROPER_FUNCTION_NAME$1 = FunctionName.PROPER;
  var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
  var getInternalState$2 = InternalStateModule$1.get;
  var setInternalState$1 = InternalStateModule$1.set;
  var ARRAY_BUFFER = "ArrayBuffer";
  var DATA_VIEW = "DataView";
  var PROTOTYPE = "prototype";
  var WRONG_LENGTH$1 = "Wrong length";
  var WRONG_INDEX = "Wrong index";
  var NativeArrayBuffer = global$f[ARRAY_BUFFER];
  var $ArrayBuffer = NativeArrayBuffer;
  var ArrayBufferPrototype$1 = $ArrayBuffer && $ArrayBuffer[PROTOTYPE];
  var $DataView = global$f[DATA_VIEW];
  var DataViewPrototype = $DataView && $DataView[PROTOTYPE];
  var ObjectPrototype = Object.prototype;
  var Array$5 = global$f.Array;
  var RangeError$3 = global$f.RangeError;
  var fill2 = uncurryThis$a(arrayFill);
  var reverse = uncurryThis$a([].reverse);
  var packIEEE754 = IEEE754.pack;
  var unpackIEEE754 = IEEE754.unpack;
  var packInt8 = function(number) {
    return [number & 255];
  };
  var packInt16 = function(number) {
    return [number & 255, number >> 8 & 255];
  };
  var packInt32 = function(number) {
    return [number & 255, number >> 8 & 255, number >> 16 & 255, number >> 24 & 255];
  };
  var unpackInt32 = function(buffer) {
    return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
  };
  var packFloat32 = function(number) {
    return packIEEE754(number, 23, 4);
  };
  var packFloat64 = function(number) {
    return packIEEE754(number, 52, 8);
  };
  var addGetter$1 = function(Constructor2, key) {
    defineProperty$1(Constructor2[PROTOTYPE], key, {get: function() {
      return getInternalState$2(this)[key];
    }});
  };
  var get = function(view, count, index, isLittleEndian) {
    var intIndex = toIndex$1(index);
    var store = getInternalState$2(view);
    if (intIndex + count > store.byteLength)
      throw RangeError$3(WRONG_INDEX);
    var bytes = getInternalState$2(store.buffer).bytes;
    var start = intIndex + store.byteOffset;
    var pack2 = arraySlice$1(bytes, start, start + count);
    return isLittleEndian ? pack2 : reverse(pack2);
  };
  var set = function(view, count, index, conversion, value, isLittleEndian) {
    var intIndex = toIndex$1(index);
    var store = getInternalState$2(view);
    if (intIndex + count > store.byteLength)
      throw RangeError$3(WRONG_INDEX);
    var bytes = getInternalState$2(store.buffer).bytes;
    var start = intIndex + store.byteOffset;
    var pack2 = conversion(+value);
    for (var i = 0; i < count; i++)
      bytes[start + i] = pack2[isLittleEndian ? i : count - i - 1];
  };
  if (!NATIVE_ARRAY_BUFFER) {
    $ArrayBuffer = function ArrayBuffer2(length) {
      anInstance$1(this, ArrayBufferPrototype$1);
      var byteLength = toIndex$1(length);
      setInternalState$1(this, {
        bytes: fill2(Array$5(byteLength), 0),
        byteLength
      });
      if (!DESCRIPTORS$2)
        this.byteLength = byteLength;
    };
    ArrayBufferPrototype$1 = $ArrayBuffer[PROTOTYPE];
    $DataView = function DataView2(buffer, byteOffset, byteLength) {
      anInstance$1(this, DataViewPrototype);
      anInstance$1(buffer, ArrayBufferPrototype$1);
      var bufferLength = getInternalState$2(buffer).byteLength;
      var offset = toIntegerOrInfinity$3(byteOffset);
      if (offset < 0 || offset > bufferLength)
        throw RangeError$3("Wrong offset");
      byteLength = byteLength === void 0 ? bufferLength - offset : toLength$2(byteLength);
      if (offset + byteLength > bufferLength)
        throw RangeError$3(WRONG_LENGTH$1);
      setInternalState$1(this, {
        buffer,
        byteLength,
        byteOffset: offset
      });
      if (!DESCRIPTORS$2) {
        this.buffer = buffer;
        this.byteLength = byteLength;
        this.byteOffset = offset;
      }
    };
    DataViewPrototype = $DataView[PROTOTYPE];
    if (DESCRIPTORS$2) {
      addGetter$1($ArrayBuffer, "byteLength");
      addGetter$1($DataView, "buffer");
      addGetter$1($DataView, "byteLength");
      addGetter$1($DataView, "byteOffset");
    }
    redefineAll(DataViewPrototype, {
      getInt8: function getInt8(byteOffset) {
        return get(this, 1, byteOffset)[0] << 24 >> 24;
      },
      getUint8: function getUint8(byteOffset) {
        return get(this, 1, byteOffset)[0];
      },
      getInt16: function getInt16(byteOffset) {
        var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : void 0);
        return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
      },
      getUint16: function getUint16(byteOffset) {
        var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : void 0);
        return bytes[1] << 8 | bytes[0];
      },
      getInt32: function getInt32(byteOffset) {
        return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : void 0));
      },
      getUint32: function getUint32(byteOffset) {
        return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : void 0)) >>> 0;
      },
      getFloat32: function getFloat32(byteOffset) {
        return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : void 0), 23);
      },
      getFloat64: function getFloat64(byteOffset) {
        return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : void 0), 52);
      },
      setInt8: function setInt8(byteOffset, value) {
        set(this, 1, byteOffset, packInt8, value);
      },
      setUint8: function setUint8(byteOffset, value) {
        set(this, 1, byteOffset, packInt8, value);
      },
      setInt16: function setInt16(byteOffset, value) {
        set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : void 0);
      },
      setUint16: function setUint16(byteOffset, value) {
        set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : void 0);
      },
      setInt32: function setInt32(byteOffset, value) {
        set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : void 0);
      },
      setUint32: function setUint32(byteOffset, value) {
        set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : void 0);
      },
      setFloat32: function setFloat32(byteOffset, value) {
        set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : void 0);
      },
      setFloat64: function setFloat64(byteOffset, value) {
        set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : void 0);
      }
    });
  } else {
    INCORRECT_ARRAY_BUFFER_NAME = PROPER_FUNCTION_NAME$1 && NativeArrayBuffer.name !== ARRAY_BUFFER;
    if (!fails$8(function() {
      NativeArrayBuffer(1);
    }) || !fails$8(function() {
      new NativeArrayBuffer(-1);
    }) || fails$8(function() {
      new NativeArrayBuffer();
      new NativeArrayBuffer(1.5);
      new NativeArrayBuffer(NaN);
      return INCORRECT_ARRAY_BUFFER_NAME && !CONFIGURABLE_FUNCTION_NAME;
    })) {
      $ArrayBuffer = function ArrayBuffer2(length) {
        anInstance$1(this, ArrayBufferPrototype$1);
        return new NativeArrayBuffer(toIndex$1(length));
      };
      $ArrayBuffer[PROTOTYPE] = ArrayBufferPrototype$1;
      for (keys2 = getOwnPropertyNames$1(NativeArrayBuffer), j = 0; keys2.length > j; ) {
        if (!((key = keys2[j++]) in $ArrayBuffer)) {
          createNonEnumerableProperty$2($ArrayBuffer, key, NativeArrayBuffer[key]);
        }
      }
      ArrayBufferPrototype$1.constructor = $ArrayBuffer;
    } else if (INCORRECT_ARRAY_BUFFER_NAME && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty$2(NativeArrayBuffer, "name", ARRAY_BUFFER);
    }
    if (setPrototypeOf$1 && getPrototypeOf(DataViewPrototype) !== ObjectPrototype) {
      setPrototypeOf$1(DataViewPrototype, ObjectPrototype);
    }
    testView = new $DataView(new $ArrayBuffer(2));
    $setInt8 = uncurryThis$a(DataViewPrototype.setInt8);
    testView.setInt8(0, 2147483648);
    testView.setInt8(1, 2147483649);
    if (testView.getInt8(0) || !testView.getInt8(1))
      redefineAll(DataViewPrototype, {
        setInt8: function setInt8(byteOffset, value) {
          $setInt8(this, byteOffset, value << 24 >> 24);
        },
        setUint8: function setUint8(byteOffset, value) {
          $setInt8(this, byteOffset, value << 24 >> 24);
        }
      }, {unsafe: true});
  }
  var INCORRECT_ARRAY_BUFFER_NAME;
  var keys2;
  var j;
  var key;
  var testView;
  var $setInt8;
  setToStringTag($ArrayBuffer, ARRAY_BUFFER);
  setToStringTag($DataView, DATA_VIEW);
  var arrayBuffer = {
    ArrayBuffer: $ArrayBuffer,
    DataView: $DataView
  };
  var isObject$2 = isObject$f;
  var floor$2 = Math.floor;
  var isIntegralNumber$1 = Number.isInteger || function isInteger(it) {
    return !isObject$2(it) && isFinite(it) && floor$2(it) === it;
  };
  var global$e = global$V;
  var toIntegerOrInfinity$2 = toIntegerOrInfinity$7;
  var RangeError$2 = global$e.RangeError;
  var toPositiveInteger$1 = function(it) {
    var result = toIntegerOrInfinity$2(it);
    if (result < 0)
      throw RangeError$2("The argument can't be less than 0");
    return result;
  };
  var global$d = global$V;
  var toPositiveInteger = toPositiveInteger$1;
  var RangeError$1 = global$d.RangeError;
  var toOffset$1 = function(it, BYTES) {
    var offset = toPositiveInteger(it);
    if (offset % BYTES)
      throw RangeError$1("Wrong offset");
    return offset;
  };
  var bind$2 = functionBindContext;
  var call$5 = functionCall;
  var aConstructor = aConstructor$2;
  var toObject$3 = toObject$7;
  var lengthOfArrayLike$2 = lengthOfArrayLike$7;
  var getIterator$1 = getIterator$3;
  var getIteratorMethod$1 = getIteratorMethod$4;
  var isArrayIteratorMethod$1 = isArrayIteratorMethod$3;
  var aTypedArrayConstructor$1 = arrayBufferViewCore.aTypedArrayConstructor;
  var typedArrayFrom$1 = function from(source) {
    var C = aConstructor(this);
    var O = toObject$3(source);
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
    var mapping = mapfn !== void 0;
    var iteratorMethod = getIteratorMethod$1(O);
    var i, length, result, step, iterator, next;
    if (iteratorMethod && !isArrayIteratorMethod$1(iteratorMethod)) {
      iterator = getIterator$1(O, iteratorMethod);
      next = iterator.next;
      O = [];
      while (!(step = call$5(next, iterator)).done) {
        O.push(step.value);
      }
    }
    if (mapping && argumentsLength > 2) {
      mapfn = bind$2(mapfn, arguments[2]);
    }
    length = lengthOfArrayLike$2(O);
    result = new (aTypedArrayConstructor$1(C))(length);
    for (i = 0; length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };
  var classof$3 = classofRaw$1;
  var isArray$1 = Array.isArray || function isArray(argument) {
    return classof$3(argument) == "Array";
  };
  var global$c = global$V;
  var isArray2 = isArray$1;
  var isConstructor$1 = isConstructor$3;
  var isObject$1 = isObject$f;
  var wellKnownSymbol$2 = wellKnownSymbol$i;
  var SPECIES$1 = wellKnownSymbol$2("species");
  var Array$4 = global$c.Array;
  var arraySpeciesConstructor$1 = function(originalArray) {
    var C;
    if (isArray2(originalArray)) {
      C = originalArray.constructor;
      if (isConstructor$1(C) && (C === Array$4 || isArray2(C.prototype)))
        C = void 0;
      else if (isObject$1(C)) {
        C = C[SPECIES$1];
        if (C === null)
          C = void 0;
      }
    }
    return C === void 0 ? Array$4 : C;
  };
  var arraySpeciesConstructor = arraySpeciesConstructor$1;
  var arraySpeciesCreate$1 = function(originalArray, length) {
    return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
  };
  var bind$1 = functionBindContext;
  var uncurryThis$9 = functionUncurryThis;
  var IndexedObject = indexedObject;
  var toObject$2 = toObject$7;
  var lengthOfArrayLike$1 = lengthOfArrayLike$7;
  var arraySpeciesCreate = arraySpeciesCreate$1;
  var push$1 = uncurryThis$9([].push);
  var createMethod$2 = function(TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var IS_FILTER_REJECT = TYPE == 7;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function($this, callbackfn, that, specificCreate) {
      var O = toObject$2($this);
      var self2 = IndexedObject(O);
      var boundFunction = bind$1(callbackfn, that);
      var length = lengthOfArrayLike$1(self2);
      var index = 0;
      var create3 = specificCreate || arraySpeciesCreate;
      var target = IS_MAP ? create3($this, length) : IS_FILTER || IS_FILTER_REJECT ? create3($this, 0) : void 0;
      var value, result;
      for (; length > index; index++)
        if (NO_HOLES || index in self2) {
          value = self2[index];
          result = boundFunction(value, index, O);
          if (TYPE) {
            if (IS_MAP)
              target[index] = result;
            else if (result)
              switch (TYPE) {
                case 3:
                  return true;
                case 5:
                  return value;
                case 6:
                  return index;
                case 2:
                  push$1(target, value);
              }
            else
              switch (TYPE) {
                case 4:
                  return false;
                case 7:
                  push$1(target, value);
              }
          }
        }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };
  var arrayIteration = {
    forEach: createMethod$2(0),
    map: createMethod$2(1),
    filter: createMethod$2(2),
    some: createMethod$2(3),
    every: createMethod$2(4),
    find: createMethod$2(5),
    findIndex: createMethod$2(6),
    filterReject: createMethod$2(7)
  };
  var $$6 = _export;
  var global$b = global$V;
  var call$4 = functionCall;
  var DESCRIPTORS$1 = descriptors;
  var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = typedArrayConstructorsRequireWrappers;
  var ArrayBufferViewCore$1 = arrayBufferViewCore;
  var ArrayBufferModule = arrayBuffer;
  var anInstance = anInstance$5;
  var createPropertyDescriptor = createPropertyDescriptor$5;
  var createNonEnumerableProperty$1 = createNonEnumerableProperty$9;
  var isIntegralNumber = isIntegralNumber$1;
  var toLength$1 = toLength$5;
  var toIndex = toIndex$2;
  var toOffset = toOffset$1;
  var toPropertyKey = toPropertyKey$4;
  var hasOwn$1 = hasOwnProperty_1;
  var classof$2 = classof$a;
  var isObject = isObject$f;
  var isSymbol = isSymbol$3;
  var create$1 = objectCreate;
  var isPrototypeOf$1 = objectIsPrototypeOf;
  var setPrototypeOf = objectSetPrototypeOf;
  var getOwnPropertyNames3 = objectGetOwnPropertyNames.f;
  var typedArrayFrom = typedArrayFrom$1;
  var forEach = arrayIteration.forEach;
  var setSpecies = setSpecies$3;
  var definePropertyModule = objectDefineProperty;
  var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
  var InternalStateModule = internalState;
  var inheritIfRequired = inheritIfRequired$2;
  var getInternalState$1 = InternalStateModule.get;
  var setInternalState = InternalStateModule.set;
  var nativeDefineProperty = definePropertyModule.f;
  var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  var round = Math.round;
  var RangeError = global$b.RangeError;
  var ArrayBuffer$1 = ArrayBufferModule.ArrayBuffer;
  var ArrayBufferPrototype = ArrayBuffer$1.prototype;
  var DataView$1 = ArrayBufferModule.DataView;
  var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore$1.NATIVE_ARRAY_BUFFER_VIEWS;
  var TYPED_ARRAY_CONSTRUCTOR = ArrayBufferViewCore$1.TYPED_ARRAY_CONSTRUCTOR;
  var TYPED_ARRAY_TAG = ArrayBufferViewCore$1.TYPED_ARRAY_TAG;
  var TypedArray = ArrayBufferViewCore$1.TypedArray;
  var TypedArrayPrototype = ArrayBufferViewCore$1.TypedArrayPrototype;
  var aTypedArrayConstructor = ArrayBufferViewCore$1.aTypedArrayConstructor;
  var isTypedArray = ArrayBufferViewCore$1.isTypedArray;
  var BYTES_PER_ELEMENT = "BYTES_PER_ELEMENT";
  var WRONG_LENGTH = "Wrong length";
  var fromList = function(C, list) {
    aTypedArrayConstructor(C);
    var index = 0;
    var length = list.length;
    var result = new C(length);
    while (length > index)
      result[index] = list[index++];
    return result;
  };
  var addGetter = function(it, key) {
    nativeDefineProperty(it, key, {get: function() {
      return getInternalState$1(this)[key];
    }});
  };
  var isArrayBuffer = function(it) {
    var klass;
    return isPrototypeOf$1(ArrayBufferPrototype, it) || (klass = classof$2(it)) == "ArrayBuffer" || klass == "SharedArrayBuffer";
  };
  var isTypedArrayIndex = function(target, key) {
    return isTypedArray(target) && !isSymbol(key) && key in target && isIntegralNumber(+key) && key >= 0;
  };
  var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor3(target, key) {
    key = toPropertyKey(key);
    return isTypedArrayIndex(target, key) ? createPropertyDescriptor(2, target[key]) : nativeGetOwnPropertyDescriptor(target, key);
  };
  var wrappedDefineProperty = function defineProperty2(target, key, descriptor) {
    key = toPropertyKey(key);
    if (isTypedArrayIndex(target, key) && isObject(descriptor) && hasOwn$1(descriptor, "value") && !hasOwn$1(descriptor, "get") && !hasOwn$1(descriptor, "set") && !descriptor.configurable && (!hasOwn$1(descriptor, "writable") || descriptor.writable) && (!hasOwn$1(descriptor, "enumerable") || descriptor.enumerable)) {
      target[key] = descriptor.value;
      return target;
    }
    return nativeDefineProperty(target, key, descriptor);
  };
  if (DESCRIPTORS$1) {
    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
      getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
      definePropertyModule.f = wrappedDefineProperty;
      addGetter(TypedArrayPrototype, "buffer");
      addGetter(TypedArrayPrototype, "byteOffset");
      addGetter(TypedArrayPrototype, "byteLength");
      addGetter(TypedArrayPrototype, "length");
    }
    $$6({target: "Object", stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS}, {
      getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
      defineProperty: wrappedDefineProperty
    });
    typedArrayConstructor.exports = function(TYPE, wrapper, CLAMPED) {
      var BYTES = TYPE.match(/\d+$/)[0] / 8;
      var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? "Clamped" : "") + "Array";
      var GETTER = "get" + TYPE;
      var SETTER = "set" + TYPE;
      var NativeTypedArrayConstructor = global$b[CONSTRUCTOR_NAME];
      var TypedArrayConstructor = NativeTypedArrayConstructor;
      var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
      var exported = {};
      var getter = function(that, index) {
        var data2 = getInternalState$1(that);
        return data2.view[GETTER](index * BYTES + data2.byteOffset, true);
      };
      var setter = function(that, index, value) {
        var data2 = getInternalState$1(that);
        if (CLAMPED)
          value = (value = round(value)) < 0 ? 0 : value > 255 ? 255 : value & 255;
        data2.view[SETTER](index * BYTES + data2.byteOffset, value, true);
      };
      var addElement = function(that, index) {
        nativeDefineProperty(that, index, {
          get: function() {
            return getter(this, index);
          },
          set: function(value) {
            return setter(this, index, value);
          },
          enumerable: true
        });
      };
      if (!NATIVE_ARRAY_BUFFER_VIEWS) {
        TypedArrayConstructor = wrapper(function(that, data2, offset, $length) {
          anInstance(that, TypedArrayConstructorPrototype);
          var index = 0;
          var byteOffset = 0;
          var buffer, byteLength, length;
          if (!isObject(data2)) {
            length = toIndex(data2);
            byteLength = length * BYTES;
            buffer = new ArrayBuffer$1(byteLength);
          } else if (isArrayBuffer(data2)) {
            buffer = data2;
            byteOffset = toOffset(offset, BYTES);
            var $len = data2.byteLength;
            if ($length === void 0) {
              if ($len % BYTES)
                throw RangeError(WRONG_LENGTH);
              byteLength = $len - byteOffset;
              if (byteLength < 0)
                throw RangeError(WRONG_LENGTH);
            } else {
              byteLength = toLength$1($length) * BYTES;
              if (byteLength + byteOffset > $len)
                throw RangeError(WRONG_LENGTH);
            }
            length = byteLength / BYTES;
          } else if (isTypedArray(data2)) {
            return fromList(TypedArrayConstructor, data2);
          } else {
            return call$4(typedArrayFrom, TypedArrayConstructor, data2);
          }
          setInternalState(that, {
            buffer,
            byteOffset,
            byteLength,
            length,
            view: new DataView$1(buffer)
          });
          while (index < length)
            addElement(that, index++);
        });
        if (setPrototypeOf)
          setPrototypeOf(TypedArrayConstructor, TypedArray);
        TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create$1(TypedArrayPrototype);
      } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
        TypedArrayConstructor = wrapper(function(dummy, data2, typedArrayOffset, $length) {
          anInstance(dummy, TypedArrayConstructorPrototype);
          return inheritIfRequired(function() {
            if (!isObject(data2))
              return new NativeTypedArrayConstructor(toIndex(data2));
            if (isArrayBuffer(data2))
              return $length !== void 0 ? new NativeTypedArrayConstructor(data2, toOffset(typedArrayOffset, BYTES), $length) : typedArrayOffset !== void 0 ? new NativeTypedArrayConstructor(data2, toOffset(typedArrayOffset, BYTES)) : new NativeTypedArrayConstructor(data2);
            if (isTypedArray(data2))
              return fromList(TypedArrayConstructor, data2);
            return call$4(typedArrayFrom, TypedArrayConstructor, data2);
          }(), dummy, TypedArrayConstructor);
        });
        if (setPrototypeOf)
          setPrototypeOf(TypedArrayConstructor, TypedArray);
        forEach(getOwnPropertyNames3(NativeTypedArrayConstructor), function(key) {
          if (!(key in TypedArrayConstructor)) {
            createNonEnumerableProperty$1(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
          }
        });
        TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
      }
      if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
        createNonEnumerableProperty$1(TypedArrayConstructorPrototype, "constructor", TypedArrayConstructor);
      }
      createNonEnumerableProperty$1(TypedArrayConstructorPrototype, TYPED_ARRAY_CONSTRUCTOR, TypedArrayConstructor);
      if (TYPED_ARRAY_TAG) {
        createNonEnumerableProperty$1(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
      }
      exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;
      $$6({
        global: true,
        forced: TypedArrayConstructor != NativeTypedArrayConstructor,
        sham: !NATIVE_ARRAY_BUFFER_VIEWS
      }, exported);
      if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
        createNonEnumerableProperty$1(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
      }
      if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
        createNonEnumerableProperty$1(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
      }
      setSpecies(CONSTRUCTOR_NAME);
    };
  } else
    typedArrayConstructor.exports = function() {
    };
  var createTypedArrayConstructor = typedArrayConstructor.exports;
  createTypedArrayConstructor("Int32", function(init2) {
    return function Int32Array2(data2, byteOffset, length) {
      return init2(this, data2, byteOffset, length);
    };
  });
  var arraySlice = arraySliceSimple;
  var floor$1 = Math.floor;
  var mergeSort = function(array, comparefn) {
    var length = array.length;
    var middle = floor$1(length / 2);
    return length < 8 ? insertionSort(array, comparefn) : merge(array, mergeSort(arraySlice(array, 0, middle), comparefn), mergeSort(arraySlice(array, middle), comparefn), comparefn);
  };
  var insertionSort = function(array, comparefn) {
    var length = array.length;
    var i = 1;
    var element2, j;
    while (i < length) {
      j = i;
      element2 = array[i];
      while (j && comparefn(array[j - 1], element2) > 0) {
        array[j] = array[--j];
      }
      if (j !== i++)
        array[j] = element2;
    }
    return array;
  };
  var merge = function(array, left, right, comparefn) {
    var llength = left.length;
    var rlength = right.length;
    var lindex = 0;
    var rindex = 0;
    while (lindex < llength || rindex < rlength) {
      array[lindex + rindex] = lindex < llength && rindex < rlength ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++] : lindex < llength ? left[lindex++] : right[rindex++];
    }
    return array;
  };
  var arraySort = mergeSort;
  var userAgent$1 = engineUserAgent;
  var firefox = userAgent$1.match(/firefox\/(\d+)/i);
  var engineFfVersion = !!firefox && +firefox[1];
  var UA = engineUserAgent;
  var engineIsIeOrEdge = /MSIE|Trident/.test(UA);
  var userAgent = engineUserAgent;
  var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);
  var engineWebkitVersion = !!webkit && +webkit[1];
  var global$a = global$V;
  var uncurryThis$8 = functionUncurryThis;
  var fails$7 = fails$n;
  var aCallable = aCallable$6;
  var internalSort = arraySort;
  var ArrayBufferViewCore = arrayBufferViewCore;
  var FF = engineFfVersion;
  var IE_OR_EDGE = engineIsIeOrEdge;
  var V8 = engineV8Version;
  var WEBKIT = engineWebkitVersion;
  var Array$3 = global$a.Array;
  var aTypedArray = ArrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
  var Uint16Array = global$a.Uint16Array;
  var un$Sort = Uint16Array && uncurryThis$8(Uint16Array.prototype.sort);
  var ACCEPT_INCORRECT_ARGUMENTS = !!un$Sort && !(fails$7(function() {
    un$Sort(new Uint16Array(2), null);
  }) && fails$7(function() {
    un$Sort(new Uint16Array(2), {});
  }));
  var STABLE_SORT = !!un$Sort && !fails$7(function() {
    if (V8)
      return V8 < 74;
    if (FF)
      return FF < 67;
    if (IE_OR_EDGE)
      return true;
    if (WEBKIT)
      return WEBKIT < 602;
    var array = new Uint16Array(516);
    var expected = Array$3(516);
    var index, mod;
    for (index = 0; index < 516; index++) {
      mod = index % 4;
      array[index] = 515 - index;
      expected[index] = index - 2 * mod + 3;
    }
    un$Sort(array, function(a, b) {
      return (a / 4 | 0) - (b / 4 | 0);
    });
    for (index = 0; index < 516; index++) {
      if (array[index] !== expected[index])
        return true;
    }
  });
  var getSortCompare = function(comparefn) {
    return function(x, y) {
      if (comparefn !== void 0)
        return +comparefn(x, y) || 0;
      if (y !== y)
        return -1;
      if (x !== x)
        return 1;
      if (x === 0 && y === 0)
        return 1 / x > 0 && 1 / y < 0 ? 1 : -1;
      return x > y;
    };
  };
  exportTypedArrayMethod("sort", function sort(comparefn) {
    if (comparefn !== void 0)
      aCallable(comparefn);
    if (STABLE_SORT)
      return un$Sort(this, comparefn);
    return internalSort(aTypedArray(this), getSortCompare(comparefn));
  }, !STABLE_SORT || ACCEPT_INCORRECT_ARGUMENTS);
  var anObject$3 = anObject$e;
  var iteratorClose = iteratorClose$2;
  var callWithSafeIterationClosing$1 = function(iterator, fn, value, ENTRIES2) {
    try {
      return ENTRIES2 ? fn(anObject$3(value)[0], value[1]) : fn(value);
    } catch (error) {
      iteratorClose(iterator, "throw", error);
    }
  };
  var global$9 = global$V;
  var bind = functionBindContext;
  var call$3 = functionCall;
  var toObject$1 = toObject$7;
  var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
  var isArrayIteratorMethod = isArrayIteratorMethod$3;
  var isConstructor3 = isConstructor$3;
  var lengthOfArrayLike = lengthOfArrayLike$7;
  var createProperty = createProperty$2;
  var getIterator = getIterator$3;
  var getIteratorMethod = getIteratorMethod$4;
  var Array$2 = global$9.Array;
  var arrayFrom = function from2(arrayLike) {
    var O = toObject$1(arrayLike);
    var IS_CONSTRUCTOR = isConstructor3(this);
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
    var mapping = mapfn !== void 0;
    if (mapping)
      mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : void 0);
    var iteratorMethod = getIteratorMethod(O);
    var index = 0;
    var length, result, step, iterator, next, value;
    if (iteratorMethod && !(this == Array$2 && isArrayIteratorMethod(iteratorMethod))) {
      iterator = getIterator(O, iteratorMethod);
      next = iterator.next;
      result = IS_CONSTRUCTOR ? new this() : [];
      for (; !(step = call$3(next, iterator)).done; index++) {
        value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
        createProperty(result, index, value);
      }
    } else {
      length = lengthOfArrayLike(O);
      result = IS_CONSTRUCTOR ? new this(length) : Array$2(length);
      for (; length > index; index++) {
        value = mapping ? mapfn(O[index], index) : O[index];
        createProperty(result, index, value);
      }
    }
    result.length = index;
    return result;
  };
  var $$5 = _export;
  var from3 = arrayFrom;
  var checkCorrectnessOfIteration = checkCorrectnessOfIteration$4;
  var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
    Array.from(iterable);
  });
  $$5({target: "Array", stat: true, forced: INCORRECT_ITERATION}, {
    from: from3
  });
  var global$8 = global$V;
  var classof$1 = classof$a;
  var String$1 = global$8.String;
  var toString$5 = function(argument) {
    if (classof$1(argument) === "Symbol")
      throw TypeError("Cannot convert a Symbol value to a string");
    return String$1(argument);
  };
  var whitespaces$2 = "	\n\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
  var uncurryThis$7 = functionUncurryThis;
  var requireObjectCoercible$2 = requireObjectCoercible$5;
  var toString$4 = toString$5;
  var whitespaces$1 = whitespaces$2;
  var replace$4 = uncurryThis$7("".replace);
  var whitespace = "[" + whitespaces$1 + "]";
  var ltrim = RegExp("^" + whitespace + whitespace + "*");
  var rtrim = RegExp(whitespace + whitespace + "*$");
  var createMethod$1 = function(TYPE) {
    return function($this) {
      var string = toString$4(requireObjectCoercible$2($this));
      if (TYPE & 1)
        string = replace$4(string, ltrim, "");
      if (TYPE & 2)
        string = replace$4(string, rtrim, "");
      return string;
    };
  };
  var stringTrim = {
    start: createMethod$1(1),
    end: createMethod$1(2),
    trim: createMethod$1(3)
  };
  var PROPER_FUNCTION_NAME = functionName.PROPER;
  var fails$6 = fails$n;
  var whitespaces = whitespaces$2;
  var non = "\u200B\x85\u180E";
  var stringTrimForced = function(METHOD_NAME) {
    return fails$6(function() {
      return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() !== non || PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME;
    });
  };
  var $$4 = _export;
  var $trim = stringTrim.trim;
  var forcedStringTrimMethod = stringTrimForced;
  $$4({target: "String", proto: true, forced: forcedStringTrimMethod("trim")}, {
    trim: function trim() {
      return $trim(this);
    }
  });
  var anObject$2 = anObject$e;
  var regexpFlags$1 = function() {
    var that = anObject$2(this);
    var result = "";
    if (that.global)
      result += "g";
    if (that.ignoreCase)
      result += "i";
    if (that.multiline)
      result += "m";
    if (that.dotAll)
      result += "s";
    if (that.unicode)
      result += "u";
    if (that.sticky)
      result += "y";
    return result;
  };
  var fails$5 = fails$n;
  var global$7 = global$V;
  var $RegExp$2 = global$7.RegExp;
  var UNSUPPORTED_Y$1 = fails$5(function() {
    var re = $RegExp$2("a", "y");
    re.lastIndex = 2;
    return re.exec("abcd") != null;
  });
  var MISSED_STICKY = UNSUPPORTED_Y$1 || fails$5(function() {
    return !$RegExp$2("a", "y").sticky;
  });
  var BROKEN_CARET = UNSUPPORTED_Y$1 || fails$5(function() {
    var re = $RegExp$2("^r", "gy");
    re.lastIndex = 2;
    return re.exec("str") != null;
  });
  var regexpStickyHelpers = {
    BROKEN_CARET,
    MISSED_STICKY,
    UNSUPPORTED_Y: UNSUPPORTED_Y$1
  };
  var fails$4 = fails$n;
  var global$6 = global$V;
  var $RegExp$1 = global$6.RegExp;
  var regexpUnsupportedDotAll = fails$4(function() {
    var re = $RegExp$1(".", "s");
    return !(re.dotAll && re.exec("\n") && re.flags === "s");
  });
  var fails$3 = fails$n;
  var global$5 = global$V;
  var $RegExp = global$5.RegExp;
  var regexpUnsupportedNcg = fails$3(function() {
    var re = $RegExp("(?<a>b)", "g");
    return re.exec("b").groups.a !== "b" || "b".replace(re, "$<a>c") !== "bc";
  });
  var call$2 = functionCall;
  var uncurryThis$6 = functionUncurryThis;
  var toString$3 = toString$5;
  var regexpFlags = regexpFlags$1;
  var stickyHelpers = regexpStickyHelpers;
  var shared = shared$4.exports;
  var create2 = objectCreate;
  var getInternalState = internalState.get;
  var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
  var UNSUPPORTED_NCG = regexpUnsupportedNcg;
  var nativeReplace = shared("native-string-replace", String.prototype.replace);
  var nativeExec = RegExp.prototype.exec;
  var patchedExec = nativeExec;
  var charAt$4 = uncurryThis$6("".charAt);
  var indexOf = uncurryThis$6("".indexOf);
  var replace$3 = uncurryThis$6("".replace);
  var stringSlice$4 = uncurryThis$6("".slice);
  var UPDATES_LAST_INDEX_WRONG = function() {
    var re1 = /a/;
    var re2 = /b*/g;
    call$2(nativeExec, re1, "a");
    call$2(nativeExec, re2, "a");
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  }();
  var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;
  var NPCG_INCLUDED = /()??/.exec("")[1] !== void 0;
  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;
  if (PATCH) {
    patchedExec = function exec2(string) {
      var re = this;
      var state = getInternalState(re);
      var str = toString$3(string);
      var raw = state.raw;
      var result, reCopy, lastIndex, match2, i, object, group;
      if (raw) {
        raw.lastIndex = re.lastIndex;
        result = call$2(patchedExec, raw, str);
        re.lastIndex = raw.lastIndex;
        return result;
      }
      var groups = state.groups;
      var sticky = UNSUPPORTED_Y && re.sticky;
      var flags = call$2(regexpFlags, re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;
      if (sticky) {
        flags = replace$3(flags, "y", "");
        if (indexOf(flags, "g") === -1) {
          flags += "g";
        }
        strCopy = stringSlice$4(str, re.lastIndex);
        if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$4(str, re.lastIndex - 1) !== "\n")) {
          source = "(?: " + source + ")";
          strCopy = " " + strCopy;
          charsAdded++;
        }
        reCopy = new RegExp("^(?:" + source + ")", flags);
      }
      if (NPCG_INCLUDED) {
        reCopy = new RegExp("^" + source + "$(?!\\s)", flags);
      }
      if (UPDATES_LAST_INDEX_WRONG)
        lastIndex = re.lastIndex;
      match2 = call$2(nativeExec, sticky ? reCopy : re, strCopy);
      if (sticky) {
        if (match2) {
          match2.input = stringSlice$4(match2.input, charsAdded);
          match2[0] = stringSlice$4(match2[0], charsAdded);
          match2.index = re.lastIndex;
          re.lastIndex += match2[0].length;
        } else
          re.lastIndex = 0;
      } else if (UPDATES_LAST_INDEX_WRONG && match2) {
        re.lastIndex = re.global ? match2.index + match2[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match2 && match2.length > 1) {
        call$2(nativeReplace, match2[0], reCopy, function() {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === void 0)
              match2[i] = void 0;
          }
        });
      }
      if (match2 && groups) {
        match2.groups = object = create2(null);
        for (i = 0; i < groups.length; i++) {
          group = groups[i];
          object[group[0]] = match2[group[1]];
        }
      }
      return match2;
    };
  }
  var regexpExec$2 = patchedExec;
  var $$3 = _export;
  var exec$1 = regexpExec$2;
  $$3({target: "RegExp", proto: true, forced: /./.exec !== exec$1}, {
    exec: exec$1
  });
  var $$2 = _export;
  var global$4 = global$V;
  $$2({global: true}, {
    globalThis: global$4
  });
  var collection = collection$2;
  var collectionStrong = collectionStrong$2;
  collection("Map", function(init2) {
    return function Map2() {
      return init2(this, arguments.length ? arguments[0] : void 0);
    };
  }, collectionStrong);
  var uncurryThis$5 = functionUncurryThis;
  var redefine = redefine$8.exports;
  var regexpExec$1 = regexpExec$2;
  var fails$2 = fails$n;
  var wellKnownSymbol$1 = wellKnownSymbol$i;
  var createNonEnumerableProperty = createNonEnumerableProperty$9;
  var SPECIES = wellKnownSymbol$1("species");
  var RegExpPrototype = RegExp.prototype;
  var fixRegexpWellKnownSymbolLogic = function(KEY, exec2, FORCED2, SHAM) {
    var SYMBOL = wellKnownSymbol$1(KEY);
    var DELEGATES_TO_SYMBOL = !fails$2(function() {
      var O = {};
      O[SYMBOL] = function() {
        return 7;
      };
      return ""[KEY](O) != 7;
    });
    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$2(function() {
      var execCalled = false;
      var re = /a/;
      if (KEY === "split") {
        re = {};
        re.constructor = {};
        re.constructor[SPECIES] = function() {
          return re;
        };
        re.flags = "";
        re[SYMBOL] = /./[SYMBOL];
      }
      re.exec = function() {
        execCalled = true;
        return null;
      };
      re[SYMBOL]("");
      return !execCalled;
    });
    if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED2) {
      var uncurriedNativeRegExpMethod = uncurryThis$5(/./[SYMBOL]);
      var methods = exec2(SYMBOL, ""[KEY], function(nativeMethod, regexp, str, arg2, forceStringMethod) {
        var uncurriedNativeMethod = uncurryThis$5(nativeMethod);
        var $exec = regexp.exec;
        if ($exec === regexpExec$1 || $exec === RegExpPrototype.exec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            return {done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2)};
          }
          return {done: true, value: uncurriedNativeMethod(str, regexp, arg2)};
        }
        return {done: false};
      });
      redefine(String.prototype, KEY, methods[0]);
      redefine(RegExpPrototype, SYMBOL, methods[1]);
    }
    if (SHAM)
      createNonEnumerableProperty(RegExpPrototype[SYMBOL], "sham", true);
  };
  var uncurryThis$4 = functionUncurryThis;
  var toIntegerOrInfinity$1 = toIntegerOrInfinity$7;
  var toString$2 = toString$5;
  var requireObjectCoercible$1 = requireObjectCoercible$5;
  var charAt$3 = uncurryThis$4("".charAt);
  var charCodeAt$1 = uncurryThis$4("".charCodeAt);
  var stringSlice$3 = uncurryThis$4("".slice);
  var createMethod = function(CONVERT_TO_STRING) {
    return function($this, pos) {
      var S = toString$2(requireObjectCoercible$1($this));
      var position = toIntegerOrInfinity$1(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size)
        return CONVERT_TO_STRING ? "" : void 0;
      first = charCodeAt$1(S, position);
      return first < 55296 || first > 56319 || position + 1 === size || (second = charCodeAt$1(S, position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? charAt$3(S, position) : first : CONVERT_TO_STRING ? stringSlice$3(S, position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
    };
  };
  var stringMultibyte = {
    codeAt: createMethod(false),
    charAt: createMethod(true)
  };
  var charAt$2 = stringMultibyte.charAt;
  var advanceStringIndex$1 = function(S, index, unicode) {
    return index + (unicode ? charAt$2(S, index).length : 1);
  };
  var uncurryThis$3 = functionUncurryThis;
  var toObject = toObject$7;
  var floor = Math.floor;
  var charAt$1 = uncurryThis$3("".charAt);
  var replace$2 = uncurryThis$3("".replace);
  var stringSlice$2 = uncurryThis$3("".slice);
  var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;
  var getSubstitution$1 = function(matched, str, position, captures, namedCaptures, replacement2) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== void 0) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return replace$2(replacement2, symbols, function(match2, ch) {
      var capture;
      switch (charAt$1(ch, 0)) {
        case "$":
          return "$";
        case "&":
          return matched;
        case "`":
          return stringSlice$2(str, 0, position);
        case "'":
          return stringSlice$2(str, tailPos);
        case "<":
          capture = namedCaptures[stringSlice$2(ch, 1, -1)];
          break;
        default:
          var n = +ch;
          if (n === 0)
            return match2;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0)
              return match2;
            if (f <= m)
              return captures[f - 1] === void 0 ? charAt$1(ch, 1) : captures[f - 1] + charAt$1(ch, 1);
            return match2;
          }
          capture = captures[n - 1];
      }
      return capture === void 0 ? "" : capture;
    });
  };
  var global$3 = global$V;
  var call$1 = functionCall;
  var anObject$1 = anObject$e;
  var isCallable$2 = isCallable$n;
  var classof = classofRaw$1;
  var regexpExec = regexpExec$2;
  var TypeError$1 = global$3.TypeError;
  var regexpExecAbstract = function(R, S) {
    var exec2 = R.exec;
    if (isCallable$2(exec2)) {
      var result = call$1(exec2, R, S);
      if (result !== null)
        anObject$1(result);
      return result;
    }
    if (classof(R) === "RegExp")
      return call$1(regexpExec, R, S);
    throw TypeError$1("RegExp#exec called on incompatible receiver");
  };
  var apply$1 = functionApply;
  var call = functionCall;
  var uncurryThis$2 = functionUncurryThis;
  var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
  var fails$1 = fails$n;
  var anObject = anObject$e;
  var isCallable$1 = isCallable$n;
  var toIntegerOrInfinity = toIntegerOrInfinity$7;
  var toLength = toLength$5;
  var toString$1 = toString$5;
  var requireObjectCoercible = requireObjectCoercible$5;
  var advanceStringIndex = advanceStringIndex$1;
  var getMethod = getMethod$4;
  var getSubstitution = getSubstitution$1;
  var regExpExec = regexpExecAbstract;
  var wellKnownSymbol = wellKnownSymbol$i;
  var REPLACE = wellKnownSymbol("replace");
  var max = Math.max;
  var min = Math.min;
  var concat = uncurryThis$2([].concat);
  var push = uncurryThis$2([].push);
  var stringIndexOf = uncurryThis$2("".indexOf);
  var stringSlice$1 = uncurryThis$2("".slice);
  var maybeToString = function(it) {
    return it === void 0 ? it : String(it);
  };
  var REPLACE_KEEPS_$0 = function() {
    return "a".replace(/./, "$0") === "$0";
  }();
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function() {
    if (/./[REPLACE]) {
      return /./[REPLACE]("a", "$0") === "";
    }
    return false;
  }();
  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$1(function() {
    var re = /./;
    re.exec = function() {
      var result = [];
      result.groups = {a: "7"};
      return result;
    };
    return "".replace(re, "$<a>") !== "7";
  });
  fixRegExpWellKnownSymbolLogic("replace", function(_, nativeReplace2, maybeCallNative) {
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? "$" : "$0";
    return [
      function replace(searchValue, replaceValue) {
        var O = requireObjectCoercible(this);
        var replacer = searchValue == void 0 ? void 0 : getMethod(searchValue, REPLACE);
        return replacer ? call(replacer, searchValue, O, replaceValue) : call(nativeReplace2, toString$1(O), searchValue, replaceValue);
      },
      function(string, replaceValue) {
        var rx = anObject(this);
        var S = toString$1(string);
        if (typeof replaceValue == "string" && stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 && stringIndexOf(replaceValue, "$<") === -1) {
          var res = maybeCallNative(nativeReplace2, rx, S, replaceValue);
          if (res.done)
            return res.value;
        }
        var functionalReplace = isCallable$1(replaceValue);
        if (!functionalReplace)
          replaceValue = toString$1(replaceValue);
        var global2 = rx.global;
        if (global2) {
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }
        var results = [];
        while (true) {
          var result = regExpExec(rx, S);
          if (result === null)
            break;
          push(results, result);
          if (!global2)
            break;
          var matchStr = toString$1(result[0]);
          if (matchStr === "")
            rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        }
        var accumulatedResult = "";
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];
          var matched = toString$1(result[0]);
          var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
          var captures = [];
          for (var j = 1; j < result.length; j++)
            push(captures, maybeToString(result[j]));
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = concat([matched], captures, position, S);
            if (namedCaptures !== void 0)
              push(replacerArgs, namedCaptures);
            var replacement2 = toString$1(apply$1(replaceValue, void 0, replacerArgs));
          } else {
            replacement2 = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          }
          if (position >= nextSourcePosition) {
            accumulatedResult += stringSlice$1(S, nextSourcePosition, position) + replacement2;
            nextSourcePosition = position + matched.length;
          }
        }
        return accumulatedResult + stringSlice$1(S, nextSourcePosition);
      }
    ];
  }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);
  var $$1 = _export;
  var global$2 = global$V;
  var getBuiltIn = getBuiltIn$8;
  var apply = functionApply;
  var uncurryThis$1 = functionUncurryThis;
  var fails = fails$n;
  var Array$1 = global$2.Array;
  var $stringify = getBuiltIn("JSON", "stringify");
  var exec = uncurryThis$1(/./.exec);
  var charAt = uncurryThis$1("".charAt);
  var charCodeAt = uncurryThis$1("".charCodeAt);
  var replace$1 = uncurryThis$1("".replace);
  var numberToString = uncurryThis$1(1 .toString);
  var tester = /[\uD800-\uDFFF]/g;
  var low = /^[\uD800-\uDBFF]$/;
  var hi = /^[\uDC00-\uDFFF]$/;
  var fix = function(match2, offset, string) {
    var prev = charAt(string, offset - 1);
    var next = charAt(string, offset + 1);
    if (exec(low, match2) && !exec(hi, next) || exec(hi, match2) && !exec(low, prev)) {
      return "\\u" + numberToString(charCodeAt(match2, 0), 16);
    }
    return match2;
  };
  var FORCED = fails(function() {
    return $stringify("\uDF06\uD834") !== '"\\udf06\\ud834"' || $stringify("\uDEAD") !== '"\\udead"';
  });
  if ($stringify) {
    $$1({target: "JSON", stat: true, forced: FORCED}, {
      stringify: function stringify(it, replacer, space2) {
        for (var i = 0, l = arguments.length, args = Array$1(l); i < l; i++)
          args[i] = arguments[i];
        var result = apply($stringify, null, args);
        return typeof result == "string" ? replace$1(result, tester, fix) : result;
      }
    });
  }
  var $ = _export;
  var DESCRIPTORS = descriptors;
  var global$1 = global$V;
  var uncurryThis = functionUncurryThis;
  var hasOwn2 = hasOwnProperty_1;
  var isCallable = isCallable$n;
  var isPrototypeOf = objectIsPrototypeOf;
  var toString2 = toString$5;
  var defineProperty3 = objectDefineProperty.f;
  var copyConstructorProperties = copyConstructorProperties$2;
  var NativeSymbol = global$1.Symbol;
  var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;
  if (DESCRIPTORS && isCallable(NativeSymbol) && (!("description" in SymbolPrototype) || NativeSymbol().description !== void 0)) {
    EmptyStringDescriptionStore = {};
    SymbolWrapper = function Symbol2() {
      var description = arguments.length < 1 || arguments[0] === void 0 ? void 0 : toString2(arguments[0]);
      var result = isPrototypeOf(SymbolPrototype, this) ? new NativeSymbol(description) : description === void 0 ? NativeSymbol() : NativeSymbol(description);
      if (description === "")
        EmptyStringDescriptionStore[result] = true;
      return result;
    };
    copyConstructorProperties(SymbolWrapper, NativeSymbol);
    SymbolWrapper.prototype = SymbolPrototype;
    SymbolPrototype.constructor = SymbolWrapper;
    NATIVE_SYMBOL = String(NativeSymbol("test")) == "Symbol(test)";
    symbolToString = uncurryThis(SymbolPrototype.toString);
    symbolValueOf = uncurryThis(SymbolPrototype.valueOf);
    regexp = /^Symbol\((.*)\)[^)]+$/;
    replace = uncurryThis("".replace);
    stringSlice = uncurryThis("".slice);
    defineProperty3(SymbolPrototype, "description", {
      configurable: true,
      get: function description() {
        var symbol = symbolValueOf(this);
        var string = symbolToString(symbol);
        if (hasOwn2(EmptyStringDescriptionStore, symbol))
          return "";
        var desc = NATIVE_SYMBOL ? stringSlice(string, 7, -1) : replace(string, regexp, "$1");
        return desc === "" ? void 0 : desc;
      }
    });
    $({global: true, forced: true}, {
      Symbol: SymbolWrapper
    });
  }
  var EmptyStringDescriptionStore;
  var SymbolWrapper;
  var NATIVE_SYMBOL;
  var symbolToString;
  var symbolValueOf;
  var regexp;
  var replace;
  var stringSlice;
  function noop() {
  }
  function assign(tar, src) {
    for (const k in src)
      tar[k] = src[k];
    return tar;
  }
  function add_location(element2, file2, line, column, char) {
    element2.__svelte_meta = {
      loc: {
        file: file2,
        line,
        column,
        char
      }
    };
  }
  function run(fn) {
    return fn();
  }
  function blank_object() {
    return Object.create(null);
  }
  function run_all(fns) {
    fns.forEach(run);
  }
  function is_function(thing) {
    return typeof thing === "function";
  }
  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || a && typeof a === "object" || typeof a === "function";
  }
  var src_url_equal_anchor;
  function src_url_equal(element_src, url2) {
    if (!src_url_equal_anchor) {
      src_url_equal_anchor = document.createElement("a");
    }
    src_url_equal_anchor.href = url2;
    return element_src === src_url_equal_anchor.href;
  }
  function is_empty(obj) {
    return Object.keys(obj).length === 0;
  }
  function validate_store(store, name) {
    if (store != null && typeof store.subscribe !== "function") {
      throw new Error(`'${name}' is not a store with a 'subscribe' method`);
    }
  }
  function subscribe(store) {
    if (store == null) {
      return noop;
    }
    for (var _len = arguments.length, callbacks = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      callbacks[_key - 1] = arguments[_key];
    }
    const unsub = store.subscribe(...callbacks);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
  }
  function get_store_value(store) {
    let value;
    subscribe(store, (_) => value = _)();
    return value;
  }
  function component_subscribe(component, store, callback) {
    component.$$.on_destroy.push(subscribe(store, callback));
  }
  function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
      const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
      return definition[0](slot_ctx);
    }
  }
  function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
  }
  function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
      const lets = definition[2](fn(dirty));
      if ($$scope.dirty === void 0) {
        return lets;
      }
      if (typeof lets === "object") {
        const merged = [];
        const len = Math.max($$scope.dirty.length, lets.length);
        for (let i = 0; i < len; i += 1) {
          merged[i] = $$scope.dirty[i] | lets[i];
        }
        return merged;
      }
      return $$scope.dirty | lets;
    }
    return $$scope.dirty;
  }
  function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
    if (slot_changes) {
      const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
      slot.p(slot_context, slot_changes);
    }
  }
  function get_all_dirty_from_scope($$scope) {
    if ($$scope.ctx.length > 32) {
      const dirty = [];
      const length = $$scope.ctx.length / 32;
      for (let i = 0; i < length; i++) {
        dirty[i] = -1;
      }
      return dirty;
    }
    return -1;
  }
  function set_store_value(store, ret, value) {
    store.set(value);
    return ret;
  }
  function action_destroyer(action_result) {
    return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
  }
  var is_hydrating = false;
  function start_hydrating() {
    is_hydrating = true;
  }
  function end_hydrating() {
    is_hydrating = false;
  }
  function upper_bound(low2, high, key, value) {
    while (low2 < high) {
      const mid = low2 + (high - low2 >> 1);
      if (key(mid) <= value) {
        low2 = mid + 1;
      } else {
        high = mid;
      }
    }
    return low2;
  }
  function init_hydrate(target) {
    if (target.hydrate_init)
      return;
    target.hydrate_init = true;
    let children2 = target.childNodes;
    if (target.nodeName === "HEAD") {
      const myChildren = [];
      for (let i = 0; i < children2.length; i++) {
        const node2 = children2[i];
        if (node2.claim_order !== void 0) {
          myChildren.push(node2);
        }
      }
      children2 = myChildren;
    }
    const m = new Int32Array(children2.length + 1);
    const p = new Int32Array(children2.length);
    m[0] = -1;
    let longest = 0;
    for (let i = 0; i < children2.length; i++) {
      const current = children2[i].claim_order;
      const seqLen = (longest > 0 && children2[m[longest]].claim_order <= current ? longest + 1 : upper_bound(1, longest, (idx) => children2[m[idx]].claim_order, current)) - 1;
      p[i] = m[seqLen] + 1;
      const newLen = seqLen + 1;
      m[newLen] = i;
      longest = Math.max(newLen, longest);
    }
    const lis = [];
    const toMove = [];
    let last2 = children2.length - 1;
    for (let cur = m[longest] + 1; cur != 0; cur = p[cur - 1]) {
      lis.push(children2[cur - 1]);
      for (; last2 >= cur; last2--) {
        toMove.push(children2[last2]);
      }
      last2--;
    }
    for (; last2 >= 0; last2--) {
      toMove.push(children2[last2]);
    }
    lis.reverse();
    toMove.sort((a, b) => a.claim_order - b.claim_order);
    for (let i = 0, j = 0; i < toMove.length; i++) {
      while (j < lis.length && toMove[i].claim_order >= lis[j].claim_order) {
        j++;
      }
      const anchor = j < lis.length ? lis[j] : null;
      target.insertBefore(toMove[i], anchor);
    }
  }
  function append(target, node2) {
    target.appendChild(node2);
  }
  function append_styles(target, style_sheet_id, styles) {
    const append_styles_to = get_root_for_style(target);
    if (!append_styles_to.getElementById(style_sheet_id)) {
      const style = element("style");
      style.id = style_sheet_id;
      style.textContent = styles;
      append_stylesheet(append_styles_to, style);
    }
  }
  function get_root_for_style(node2) {
    if (!node2)
      return document;
    const root = node2.getRootNode ? node2.getRootNode() : node2.ownerDocument;
    if (root && root.host) {
      return root;
    }
    return node2.ownerDocument;
  }
  function append_stylesheet(node2, style) {
    append(node2.head || node2, style);
  }
  function append_hydration(target, node2) {
    if (is_hydrating) {
      init_hydrate(target);
      if (target.actual_end_child === void 0 || target.actual_end_child !== null && target.actual_end_child.parentElement !== target) {
        target.actual_end_child = target.firstChild;
      }
      while (target.actual_end_child !== null && target.actual_end_child.claim_order === void 0) {
        target.actual_end_child = target.actual_end_child.nextSibling;
      }
      if (node2 !== target.actual_end_child) {
        if (node2.claim_order !== void 0 || node2.parentNode !== target) {
          target.insertBefore(node2, target.actual_end_child);
        }
      } else {
        target.actual_end_child = node2.nextSibling;
      }
    } else if (node2.parentNode !== target || node2.nextSibling !== null) {
      target.appendChild(node2);
    }
  }
  function insert(target, node2, anchor) {
    target.insertBefore(node2, anchor || null);
  }
  function insert_hydration(target, node2, anchor) {
    if (is_hydrating && !anchor) {
      append_hydration(target, node2);
    } else if (node2.parentNode !== target || node2.nextSibling != anchor) {
      target.insertBefore(node2, anchor || null);
    }
  }
  function detach(node2) {
    node2.parentNode.removeChild(node2);
  }
  function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
      if (iterations[i])
        iterations[i].d(detaching);
    }
  }
  function element(name) {
    return document.createElement(name);
  }
  function text(data2) {
    return document.createTextNode(data2);
  }
  function space() {
    return text(" ");
  }
  function empty() {
    return text("");
  }
  function attr(node2, attribute, value) {
    if (value == null)
      node2.removeAttribute(attribute);
    else if (node2.getAttribute(attribute) !== value)
      node2.setAttribute(attribute, value);
  }
  function children(element2) {
    return Array.from(element2.childNodes);
  }
  function set_style(node2, key, value, important) {
    node2.style.setProperty(key, value, important ? "important" : "");
  }
  function custom_event(type, detail) {
    let bubbles = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    const e = document.createEvent("CustomEvent");
    e.initCustomEvent(type, bubbles, false, detail);
    return e;
  }
  var current_component;
  function set_current_component(component) {
    current_component = component;
  }
  function get_current_component() {
    if (!current_component)
      throw new Error("Function called outside component initialization");
    return current_component;
  }
  function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
  }
  function onDestroy(fn) {
    get_current_component().$$.on_destroy.push(fn);
  }
  function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
  }
  function getContext(key) {
    return get_current_component().$$.context.get(key);
  }
  var dirty_components = [];
  var binding_callbacks = [];
  var render_callbacks = [];
  var flush_callbacks = [];
  var resolved_promise = Promise.resolve();
  var update_scheduled = false;
  function schedule_update() {
    if (!update_scheduled) {
      update_scheduled = true;
      resolved_promise.then(flush);
    }
  }
  function tick() {
    schedule_update();
    return resolved_promise;
  }
  function add_render_callback(fn) {
    render_callbacks.push(fn);
  }
  var seen_callbacks = new Set();
  var flushidx = 0;
  function flush() {
    const saved_component = current_component;
    do {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
      set_current_component(null);
      dirty_components.length = 0;
      flushidx = 0;
      while (binding_callbacks.length)
        binding_callbacks.pop()();
      for (let i = 0; i < render_callbacks.length; i += 1) {
        const callback = render_callbacks[i];
        if (!seen_callbacks.has(callback)) {
          seen_callbacks.add(callback);
          callback();
        }
      }
      render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
      flush_callbacks.pop()();
    }
    update_scheduled = false;
    seen_callbacks.clear();
    set_current_component(saved_component);
  }
  function update($$) {
    if ($$.fragment !== null) {
      $$.update();
      run_all($$.before_update);
      const dirty = $$.dirty;
      $$.dirty = [-1];
      $$.fragment && $$.fragment.p($$.ctx, dirty);
      $$.after_update.forEach(add_render_callback);
    }
  }
  var outroing = new Set();
  var outros;
  function group_outros() {
    outros = {
      r: 0,
      c: [],
      p: outros
    };
  }
  function check_outros() {
    if (!outros.r) {
      run_all(outros.c);
    }
    outros = outros.p;
  }
  function transition_in(block, local) {
    if (block && block.i) {
      outroing.delete(block);
      block.i(local);
    }
  }
  function transition_out(block, local, detach2, callback) {
    if (block && block.o) {
      if (outroing.has(block))
        return;
      outroing.add(block);
      outros.c.push(() => {
        outroing.delete(block);
        if (callback) {
          if (detach2)
            block.d(1);
          callback();
        }
      });
      block.o(local);
    }
  }
  var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
  function destroy_block(block, lookup) {
    block.d(1);
    lookup.delete(block.key);
  }
  function outro_and_destroy_block(block, lookup) {
    transition_out(block, 1, 1, () => {
      lookup.delete(block.key);
    });
  }
  function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node2, destroy, create_each_block2, next, get_context) {
    let o = old_blocks.length;
    let n = list.length;
    let i = o;
    const old_indexes = {};
    while (i--)
      old_indexes[old_blocks[i].key] = i;
    const new_blocks = [];
    const new_lookup = new Map();
    const deltas = new Map();
    i = n;
    while (i--) {
      const child_ctx = get_context(ctx, list, i);
      const key = get_key(child_ctx);
      let block = lookup.get(key);
      if (!block) {
        block = create_each_block2(key, child_ctx);
        block.c();
      } else if (dynamic) {
        block.p(child_ctx, dirty);
      }
      new_lookup.set(key, new_blocks[i] = block);
      if (key in old_indexes)
        deltas.set(key, Math.abs(i - old_indexes[key]));
    }
    const will_move = new Set();
    const did_move = new Set();
    function insert2(block) {
      transition_in(block, 1);
      block.m(node2, next);
      lookup.set(block.key, block);
      next = block.first;
      n--;
    }
    while (o && n) {
      const new_block = new_blocks[n - 1];
      const old_block = old_blocks[o - 1];
      const new_key = new_block.key;
      const old_key = old_block.key;
      if (new_block === old_block) {
        next = new_block.first;
        o--;
        n--;
      } else if (!new_lookup.has(old_key)) {
        destroy(old_block, lookup);
        o--;
      } else if (!lookup.has(new_key) || will_move.has(new_key)) {
        insert2(new_block);
      } else if (did_move.has(old_key)) {
        o--;
      } else if (deltas.get(new_key) > deltas.get(old_key)) {
        did_move.add(new_key);
        insert2(new_block);
      } else {
        will_move.add(old_key);
        o--;
      }
    }
    while (o--) {
      const old_block = old_blocks[o];
      if (!new_lookup.has(old_block.key))
        destroy(old_block, lookup);
    }
    while (n)
      insert2(new_blocks[n - 1]);
    return new_blocks;
  }
  function validate_each_keys(ctx, list, get_context, get_key) {
    const keys2 = new Set();
    for (let i = 0; i < list.length; i++) {
      const key = get_key(get_context(ctx, list, i));
      if (keys2.has(key)) {
        throw new Error("Cannot have duplicate keys in a keyed each");
      }
      keys2.add(key);
    }
  }
  function get_spread_update(levels, updates) {
    const update2 = {};
    const to_null_out = {};
    const accounted_for = {
      $$scope: 1
    };
    let i = levels.length;
    while (i--) {
      const o = levels[i];
      const n = updates[i];
      if (n) {
        for (const key in o) {
          if (!(key in n))
            to_null_out[key] = 1;
        }
        for (const key in n) {
          if (!accounted_for[key]) {
            update2[key] = n[key];
            accounted_for[key] = 1;
          }
        }
        levels[i] = n;
      } else {
        for (const key in o) {
          accounted_for[key] = 1;
        }
      }
    }
    for (const key in to_null_out) {
      if (!(key in update2))
        update2[key] = void 0;
    }
    return update2;
  }
  function get_spread_object(spread_props) {
    return typeof spread_props === "object" && spread_props !== null ? spread_props : {};
  }
  function create_component(block) {
    block && block.c();
  }
  function mount_component(component, target, anchor, customElement) {
    const _component$$$ = component.$$, fragment = _component$$$.fragment, on_mount = _component$$$.on_mount, on_destroy = _component$$$.on_destroy, after_update = _component$$$.after_update;
    fragment && fragment.m(target, anchor);
    if (!customElement) {
      add_render_callback(() => {
        const new_on_destroy = on_mount.map(run).filter(is_function);
        if (on_destroy) {
          on_destroy.push(...new_on_destroy);
        } else {
          run_all(new_on_destroy);
        }
        component.$$.on_mount = [];
      });
    }
    after_update.forEach(add_render_callback);
  }
  function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
      run_all($$.on_destroy);
      $$.fragment && $$.fragment.d(detaching);
      $$.on_destroy = $$.fragment = null;
      $$.ctx = [];
    }
  }
  function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
      dirty_components.push(component);
      schedule_update();
      component.$$.dirty.fill(0);
    }
    component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
  }
  function init$1(component, options, instance2, create_fragment2, not_equal, props, append_styles2) {
    let dirty = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : [-1];
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
      fragment: null,
      ctx: null,
      props,
      update: noop,
      not_equal,
      bound: blank_object(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
      callbacks: blank_object(),
      dirty,
      skip_bound: false,
      root: options.target || parent_component.$$.root
    };
    append_styles2 && append_styles2($$.root);
    let ready2 = false;
    $$.ctx = instance2 ? instance2(component, options.props || {}, function(i, ret) {
      const value = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? void 0 : arguments[2] : ret;
      if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
        if (!$$.skip_bound && $$.bound[i])
          $$.bound[i](value);
        if (ready2)
          make_dirty(component, i);
      }
      return ret;
    }) : [];
    $$.update();
    ready2 = true;
    run_all($$.before_update);
    $$.fragment = create_fragment2 ? create_fragment2($$.ctx) : false;
    if (options.target) {
      if (options.hydrate) {
        start_hydrating();
        const nodes = children(options.target);
        $$.fragment && $$.fragment.l(nodes);
        nodes.forEach(detach);
      } else {
        $$.fragment && $$.fragment.c();
      }
      if (options.intro)
        transition_in(component.$$.fragment);
      mount_component(component, options.target, options.anchor, options.customElement);
      end_hydrating();
      flush();
    }
    set_current_component(parent_component);
  }
  var SvelteComponent = class {
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
    $on(type, callback) {
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1)
          callbacks.splice(index, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  };
  function dispatch_dev(type, detail) {
    document.dispatchEvent(custom_event(type, Object.assign({
      version: "3.44.3"
    }, detail), true));
  }
  function append_dev(target, node2) {
    dispatch_dev("SvelteDOMInsert", {
      target,
      node: node2
    });
    append(target, node2);
  }
  function insert_dev(target, node2, anchor) {
    dispatch_dev("SvelteDOMInsert", {
      target,
      node: node2,
      anchor
    });
    insert(target, node2, anchor);
  }
  function detach_dev(node2) {
    dispatch_dev("SvelteDOMRemove", {
      node: node2
    });
    detach(node2);
  }
  function attr_dev(node2, attribute, value) {
    attr(node2, attribute, value);
    if (value == null)
      dispatch_dev("SvelteDOMRemoveAttribute", {
        node: node2,
        attribute
      });
    else
      dispatch_dev("SvelteDOMSetAttribute", {
        node: node2,
        attribute,
        value
      });
  }
  function set_data_dev(text2, data2) {
    data2 = "" + data2;
    if (text2.wholeText === data2)
      return;
    dispatch_dev("SvelteDOMSetData", {
      node: text2,
      data: data2
    });
    text2.data = data2;
  }
  function validate_each_argument(arg) {
    if (typeof arg !== "string" && !(arg && typeof arg === "object" && "length" in arg)) {
      let msg = "{#each} only iterates over array-like objects.";
      if (typeof Symbol === "function" && arg && Symbol.iterator in arg) {
        msg += " You can use a spread to convert this iterable into an array.";
      }
      throw new Error(msg);
    }
  }
  function validate_slots(name, slot, keys2) {
    for (var _i = 0, _Object$keys = Object.keys(slot); _i < _Object$keys.length; _i++) {
      const slot_key = _Object$keys[_i];
      if (!~keys2.indexOf(slot_key)) {
        console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
      }
    }
  }
  var SvelteComponentDev = class extends SvelteComponent {
    constructor(options) {
      if (!options || !options.target && !options.$$inline) {
        throw new Error("'target' is a required option");
      }
      super();
    }
    $destroy() {
      super.$destroy();
      this.$destroy = () => {
        console.warn("Component was already destroyed");
      };
    }
    $capture_state() {
    }
    $inject_state() {
    }
  };
  var defaultConfig = {
    queryHandler: {
      parse: (search) => fromEntries(new URLSearchParams(search)),
      stringify: (params2) => "?" + new URLSearchParams(params2).toString()
    },
    urlTransform: {
      apply: (x) => x,
      remove: (x) => x
    },
    useHash: false
  };
  function fromEntries(iterable) {
    return [...iterable].reduce((obj, [key, val]) => {
      obj[key] = val;
      return obj;
    }, {});
  }
  var MATCH_PARAM = RegExp(/\:([^/()]+)/g);
  function handleScroll(element2, scrollToTop) {
    if (navigator.userAgent.includes("jsdom"))
      return false;
    if (scrollToTop)
      scrollAncestorsToTop(element2);
    handleHash();
  }
  function handleHash() {
    if (navigator.userAgent.includes("jsdom"))
      return false;
    const {hash} = window.location;
    if (hash) {
      const validElementIdRegex = /^[A-Za-z]+[\w\-\:\.]*$/;
      if (validElementIdRegex.test(hash.substring(1))) {
        const el = document.querySelector(hash);
        if (el)
          el.scrollIntoView();
      }
    }
  }
  function scrollAncestorsToTop(element2) {
    if (element2 && element2.scrollTo && element2.dataset.routify !== "scroll-lock" && element2.dataset["routify-scroll"] !== "lock") {
      element2.style["scroll-behavior"] = "auto";
      element2.scrollTo({top: 0, behavior: "auto"});
      element2.style["scroll-behavior"] = "";
      scrollAncestorsToTop(element2.parentElement);
    }
  }
  var pathToRegex = (str, recursive) => {
    const suffix = recursive ? "" : "/?$";
    str = str.replace(/\/_fallback?$/, "(/|$)");
    str = str.replace(/\/index$/, "(/index)?");
    str = str.replace(MATCH_PARAM, "([^/]+)") + suffix;
    str = `^${str}`;
    return str;
  };
  var pathToParamKeys = (string) => {
    const paramsKeys = [];
    let matches;
    while (matches = MATCH_PARAM.exec(string))
      paramsKeys.push(matches[1]);
    return paramsKeys;
  };
  var pathToRank = ({path}) => {
    return path.split("/").filter(Boolean).map((str) => str === "_fallback" ? "A" : str.startsWith(":") ? "B" : "C").join("");
  };
  function suppressComponentWarnings(ctx, tick2) {
    suppressComponentWarnings._console = suppressComponentWarnings._console || {log: console.log, warn: console.warn};
    const {_console} = suppressComponentWarnings;
    const name = ctx.componentFile.name.replace(/Proxy<_?(.+)>/, "$1").replace(/^Index$/, ctx.component.shortPath.split("/").pop()).replace(/^./, (s) => s.toUpperCase()).replace(/\:(.+)/, "U5B$1u5D");
    const ignores = [
      `<${name}> received an unexpected slot "default".`,
      `<${name}> was created with unknown prop 'scoped'`,
      `<${name}> was created with unknown prop 'scopedSync'`
    ];
    for (const log2 of ["log", "warn"]) {
      console[log2] = (...args) => {
        if (!ignores.includes(args[0]))
          _console[log2](...args);
      };
      tick2().then(() => {
        console[log2] = _console[log2];
      });
    }
  }
  function currentLocation() {
    let dirtyFullpath = window.location.pathname + window.location.search + window.location.hash;
    const {url: url2, options} = resolvePrefetch(dirtyFullpath);
    const parsedUrl = parseUrl(url2);
    return {...parsedUrl, options};
  }
  function resolvePrefetch(dirtyFullpath) {
    const [url2, _options] = dirtyFullpath.split("__[[routify_url_options]]__");
    const options = JSON.parse(decodeURIComponent(_options || "") || "{}");
    window.routify = window.routify || {};
    window.routify.prefetched = options.prefetch;
    return {url: url2, options};
  }
  function parseUrl(url2) {
    if (defaultConfig.useHash)
      url2 = url2.replace(/.*#(.+)/, "$1");
    const origin = url2.startsWith("/") ? window.location.origin : void 0;
    const _url = new URL(url2, origin);
    const fullpath = _url.pathname + _url.search + _url.hash;
    return {url: _url, fullpath};
  }
  function resolveUrl(path, params2, inheritedParams) {
    const hash = defaultConfig.useHash ? "#" : "";
    let url2;
    url2 = populateUrl(path, params2, inheritedParams);
    url2 = defaultConfig.urlTransform.apply(url2);
    url2 = hash + url2;
    return url2;
  }
  function populateUrl(path, params2, inheritedParams) {
    const allParams = Object.assign({}, inheritedParams, params2);
    const queryString = getQueryString(path, params2);
    for (const [key, value] of Object.entries(allParams))
      path = path.replace(`:${key}`, value);
    return `${path}${queryString}`;
  }
  function getQueryString(path, params2) {
    if (!defaultConfig.queryHandler)
      return "";
    const ignoredKeys = pathToParamKeys(path);
    const queryParams = {};
    if (params2)
      Object.entries(params2).forEach(([key, value]) => {
        if (!ignoredKeys.includes(key))
          queryParams[key] = value;
      });
    return defaultConfig.queryHandler.stringify(queryParams).replace(/\?$/, "");
  }
  var captureState = (cmp) => {
    if (!cmp) {
      throw new Error("Missing component");
    }
    if (!cmp.$$) {
      throw new Error("Invalid component");
    }
    const {
      $$: {callbacks, bound, ctx}
    } = cmp;
    const state = cmp.$capture_state();
    const props = Object.assign({}, cmp.$$.props);
    Object.keys(cmp.$$.props).forEach((prop) => {
      props[prop] = ctx[props[prop]];
    });
    return {ctx, callbacks, bound, state, props};
  };
  var restoreState = (cmp, restore) => {
    if (!restore) {
      return;
    }
    const {callbacks, bound} = restore;
    if (callbacks) {
      cmp.$$.callbacks = callbacks;
    }
    if (bound) {
      cmp.$$.bound = bound;
    }
  };
  var get_current_component_safe = () => {
    try {
      return get_current_component();
    } catch (err) {
      if (err.message === "Function called outside component initialization") {
        return current_component;
      } else {
        throw err;
      }
    }
  };
  var createProxiedComponent = (Component, initialOptions, {allowLiveBinding, onInstance, onMount: onMount2, onDestroy: onDestroy2}) => {
    let cmp;
    let options = initialOptions;
    const isCurrent = (_cmp) => cmp === _cmp;
    const assignOptions = (target, anchor, restore, preserveLocalState) => {
      const props = Object.assign({}, options.props);
      if (options.props && restore.props) {
        for (const prop of Object.keys(options.props)) {
          if (restore.props.hasOwnProperty(prop)) {
            props[prop] = restore.props[prop];
          }
        }
      }
      if (preserveLocalState && restore.state) {
        if (Array.isArray(preserveLocalState)) {
          props.$$inject = {};
          for (const key of preserveLocalState) {
            props.$$inject[key] = restore.state[key];
          }
        } else {
          props.$$inject = restore.state;
        }
      } else {
        delete props.$$inject;
      }
      options = Object.assign({}, initialOptions, {
        target,
        anchor,
        props,
        hydrate: false
      });
    };
    const instrument = (targetCmp) => {
      const createComponent = (Component2, restore, previousCmp) => {
        set_current_component(parentComponent || previousCmp);
        const comp = new Component2(options);
        restoreState(comp, restore);
        instrument(comp);
        return comp;
      };
      targetCmp.$$.on_hmr = [];
      targetCmp.$replace = (Component2, {
        target = options.target,
        anchor = options.anchor,
        preserveLocalState,
        conservative = false
      }) => {
        const restore = captureState(targetCmp);
        assignOptions(target || options.target, anchor, restore, preserveLocalState);
        const callbacks = cmp.$$.on_hmr;
        const afterCallbacks = callbacks.map((fn) => fn(cmp)).filter(Boolean);
        const previous = cmp;
        if (conservative) {
          try {
            const next = createComponent(Component2, restore, previous);
            cmp = null;
            previous.$destroy();
            cmp = next;
          } catch (err) {
            cmp = previous;
            throw err;
          }
        } else {
          cmp = null;
          if (previous) {
            previous.$destroy();
          }
          cmp = createComponent(Component2, restore, cmp);
        }
        cmp.$$.hmr_cmp = cmp;
        for (const fn of afterCallbacks) {
          fn(cmp);
        }
        cmp.$$.on_hmr = callbacks;
        return cmp;
      };
      if (onMount2) {
        const m = targetCmp.$$.fragment.m;
        targetCmp.$$.fragment.m = (...args) => {
          const result = m(...args);
          onMount2(...args);
          return result;
        };
      }
      if (onDestroy2) {
        targetCmp.$$.on_destroy.push(() => {
          if (isCurrent(targetCmp)) {
            onDestroy2();
          }
        });
      }
      if (onInstance) {
        onInstance(targetCmp);
      }
      if (onMount2) {
        const {target, anchor} = options;
        if (target) {
          onMount2(target, anchor);
        }
      }
    };
    const parentComponent = allowLiveBinding ? current_component : get_current_component_safe();
    cmp = new Component(options);
    cmp.$$.hmr_cmp = cmp;
    instrument(cmp);
    return cmp;
  };
  var handledMethods = ["constructor", "$destroy"];
  var forwardedMethods = ["$set", "$on"];
  var logError = (msg, err) => {
    console.error("[HMR][Svelte]", msg);
    if (err) {
      console.error(err);
    }
  };
  var posixify = (file2) => file2.replace(/[/\\]/g, "/");
  var getBaseName = (id2) => id2.split("/").pop().split(".").slice(0, -1).join(".");
  var capitalize = (str) => str[0].toUpperCase() + str.slice(1);
  var getFriendlyName = (id2) => capitalize(getBaseName(posixify(id2)));
  var getDebugName = (id2) => `<${getFriendlyName(id2)}>`;
  var relayCalls = (getTarget, names, dest = {}) => {
    for (const key of names) {
      dest[key] = function(...args) {
        const target = getTarget();
        if (!target) {
          return;
        }
        return target[key] && target[key].call(this, ...args);
      };
    }
    return dest;
  };
  var isInternal = (key) => key !== "$$" && key.substr(0, 2) === "$$";
  var relayInternalMethods = (proxy, cmp) => {
    Object.keys(proxy).filter(isInternal).forEach((key) => {
      delete proxy[key];
    });
    if (!cmp)
      return;
    Object.keys(cmp).filter(isInternal).forEach((key) => {
      Object.defineProperty(proxy, key, {
        configurable: true,
        get() {
          const value = cmp[key];
          if (typeof value !== "function")
            return value;
          return value && function(...args) {
            return value.apply(this, args);
          };
        }
      });
    });
  };
  var copyComponentProperties = (proxy, cmp, previous) => {
    const props = Object.getOwnPropertyNames(Object.getPrototypeOf(cmp));
    if (previous) {
      previous.forEach((prop) => {
        delete proxy[prop];
      });
    }
    return props.filter((prop) => {
      if (!handledMethods.includes(prop) && !forwardedMethods.includes(prop)) {
        Object.defineProperty(proxy, prop, {
          configurable: true,
          get() {
            return cmp[prop];
          },
          set(value) {
            cmp[prop] = value;
          }
        });
        return true;
      }
    });
  };
  var ProxyComponent = class {
    constructor({
      Adapter,
      id: id2,
      debugName,
      current,
      register
    }, options) {
      let cmp;
      let disposed = false;
      let lastError = null;
      const setComponent = (_cmp) => {
        cmp = _cmp;
        relayInternalMethods(this, cmp);
      };
      const getComponent = () => cmp;
      const destroyComponent = () => {
        if (cmp) {
          cmp.$destroy();
          setComponent(null);
        }
      };
      const refreshComponent = (target, anchor, conservativeDestroy) => {
        if (lastError) {
          lastError = null;
          adapter2.rerender();
        } else {
          try {
            const replaceOptions = {
              target,
              anchor,
              preserveLocalState: current.preserveLocalState
            };
            if (conservativeDestroy) {
              replaceOptions.conservativeDestroy = true;
            }
            setComponent(cmp.$replace(current.Component, replaceOptions));
          } catch (err) {
            setError(err);
            if (!current.hotOptions.optimistic || !current.canAccept || err && err.hmrFatal) {
              throw err;
            } else {
              logError(`Error during component init: ${debugName}`, err);
            }
          }
        }
      };
      const setError = (err) => {
        lastError = err;
        adapter2.renderError(err);
      };
      const instance2 = {
        hotOptions: current.hotOptions,
        proxy: this,
        id: id2,
        debugName,
        refreshComponent
      };
      const adapter2 = new Adapter(instance2);
      const {afterMount, rerender} = adapter2;
      const onDestroy2 = () => {
        if (!disposed) {
          disposed = true;
          adapter2.dispose();
          unregister();
        }
      };
      const unregister = register(rerender);
      this.$destroy = () => {
        destroyComponent();
        onDestroy2();
      };
      relayCalls(getComponent, forwardedMethods, this);
      try {
        let lastProperties;
        const _cmp = createProxiedComponent(current.Component, options, {
          allowLiveBinding: current.hotOptions.allowLiveBinding,
          onDestroy: onDestroy2,
          onMount: afterMount,
          onInstance: (comp) => {
            this.$$ = comp.$$;
            lastProperties = copyComponentProperties(this, comp, lastProperties);
          }
        });
        setComponent(_cmp);
      } catch (err) {
        setError(err);
        throw err;
      }
    }
  };
  var syncStatics = (component, proxy, previousKeys) => {
    if (previousKeys) {
      for (const key of previousKeys) {
        delete proxy[key];
      }
    }
    const keys2 = [];
    for (const key in component) {
      keys2.push(key);
      proxy[key] = component[key];
    }
    return keys2;
  };
  var globalListeners = {};
  var onGlobal = (event, fn) => {
    event = event.toLowerCase();
    if (!globalListeners[event])
      globalListeners[event] = [];
    globalListeners[event].push(fn);
  };
  var fireGlobal = (event, ...args) => {
    const listeners = globalListeners[event];
    if (!listeners)
      return;
    for (const fn of listeners) {
      fn(...args);
    }
  };
  var fireBeforeUpdate = () => fireGlobal("beforeupdate");
  var fireAfterUpdate = () => fireGlobal("afterupdate");
  if (typeof window !== "undefined") {
    window.__SVELTE_HMR = {
      on: onGlobal
    };
    window.dispatchEvent(new CustomEvent("svelte-hmr:ready"));
  }
  var fatalError = false;
  var hasFatalError = () => fatalError;
  function createProxy({
    Adapter,
    id: id2,
    Component,
    hotOptions,
    canAccept,
    preserveLocalState
  }) {
    const debugName = getDebugName(id2);
    const instances = [];
    const current = {
      Component,
      hotOptions,
      canAccept,
      preserveLocalState
    };
    const name = `Proxy${debugName}`;
    const proxy = {
      [name]: class extends ProxyComponent {
        constructor(options) {
          try {
            super({
              Adapter,
              id: id2,
              debugName,
              current,
              register: (rerender) => {
                instances.push(rerender);
                const unregister = () => {
                  const i = instances.indexOf(rerender);
                  instances.splice(i, 1);
                };
                return unregister;
              }
            }, options);
          } catch (err) {
            if (!fatalError) {
              fatalError = true;
              logError(`Unrecoverable error in ${debugName}: next update will trigger a full reload`);
            }
            throw err;
          }
        }
      }
    }[name];
    let previousStatics = syncStatics(current.Component, proxy);
    const update2 = (newState) => Object.assign(current, newState);
    const reload = () => {
      fireBeforeUpdate();
      previousStatics = syncStatics(current.Component, proxy, previousStatics);
      const errors = [];
      instances.forEach((rerender) => {
        try {
          rerender();
        } catch (err) {
          logError(`Failed to rerender ${debugName}`, err);
          errors.push(err);
        }
      });
      if (errors.length > 0) {
        return false;
      }
      fireAfterUpdate();
      return true;
    };
    const hasFatalError2 = () => fatalError;
    return {id: id2, proxy, update: update2, reload, hasFatalError: hasFatalError2, current};
  }
  var logPrefix = "[HMR:Svelte]";
  var log = (...args) => console.log(logPrefix, ...args);
  var domReload = () => {
    const win = typeof window !== "undefined" && window;
    if (win && win.location && win.location.reload) {
      log("Reload");
      win.location.reload();
    } else {
      log("Full reload required");
    }
  };
  var replaceCss = (previousId, newId) => {
    if (typeof document === "undefined")
      return false;
    if (!previousId)
      return false;
    if (!newId)
      return false;
    const previousClass = previousId.slice(0, -6);
    const newClass = newId.slice(0, -6);
    document.querySelectorAll("." + previousClass).forEach((el) => {
      el.classList.remove(previousClass);
      el.classList.add(newClass);
    });
    return true;
  };
  var removeStylesheet = (cssId) => {
    if (cssId == null)
      return;
    if (typeof document === "undefined")
      return;
    const el = document.getElementById(cssId);
    if (el)
      el.remove();
    return;
  };
  var defaultArgs = {
    reload: domReload
  };
  var makeApplyHmr = (transformArgs) => (args) => {
    const allArgs = transformArgs({...defaultArgs, ...args});
    return applyHmr$1(allArgs);
  };
  var needsReload = false;
  function applyHmr$1(args) {
    const {
      id: id2,
      cssId,
      nonCssHash,
      reload = domReload,
      hot,
      hotOptions,
      Component,
      acceptable,
      preserveLocalState,
      ProxyAdapter,
      emitCss
    } = args;
    const existing = hot.data && hot.data.record;
    const canAccept = acceptable && (!existing || existing.current.canAccept);
    const r = existing || createProxy({
      Adapter: ProxyAdapter,
      id: id2,
      Component,
      hotOptions,
      canAccept,
      preserveLocalState
    });
    const cssOnly = hotOptions.injectCss && existing && nonCssHash && existing.current.nonCssHash === nonCssHash;
    r.update({
      Component,
      hotOptions,
      canAccept,
      nonCssHash,
      cssId,
      previousCssId: r.current.cssId,
      cssOnly,
      preserveLocalState
    });
    hot.dispose((data2) => {
      if (needsReload || hasFatalError()) {
        if (hotOptions && hotOptions.noReload) {
          log("Full reload required");
        } else {
          reload();
        }
      }
      data2 = data2 || hot.data;
      data2.record = r;
      if (!emitCss && cssId && r.current.cssId !== cssId) {
        if (hotOptions.cssEjectDelay) {
          setTimeout(() => removeStylesheet(cssId), hotOptions.cssEjectDelay);
        } else {
          removeStylesheet(cssId);
        }
      }
    });
    if (canAccept) {
      hot.accept(async (arg) => {
        const {bubbled} = arg || {};
        const {cssId: newCssId, previousCssId} = r.current;
        const cssChanged = newCssId !== previousCssId;
        if (!emitCss && cssChanged)
          removeStylesheet(previousCssId);
        if (bubbled === false && r.current.cssOnly && (!cssChanged || replaceCss(previousCssId, newCssId))) {
          return;
        }
        const success = await r.reload();
        if (hasFatalError() || !success && !hotOptions.optimistic) {
          needsReload = true;
        }
      });
    }
    const proxyOk = r && r.proxy;
    if (!proxyOk) {
      throw new Error(`Failed to create HMR proxy for Svelte component ${id2}`);
    }
    return r.proxy;
  }
  var applyHmr = makeApplyHmr((args) => Object.assign({}, args, {
    hot: args.m.hot
  }));
  var removeElement$1 = (el) => el && el.parentNode && el.parentNode.removeChild(el);
  var ErrorOverlay = () => {
    let errors = [];
    let compileError = null;
    const errorsTitle = "Failed to init component";
    const compileErrorTitle = "Failed to compile";
    const style = {
      section: `
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 32px;
      background: rgba(0, 0, 0, .85);
      font-family: Menlo, Consolas, monospace;
      font-size: large;
      color: rgb(232, 232, 232);
      overflow: auto;
      z-index: 2147483647;
    `,
      h1: `
      margin-top: 0;
      color: #E36049;
      font-size: large;
      font-weight: normal;
    `,
      h2: `
      margin: 32px 0 0;
      font-size: large;
      font-weight: normal;
    `,
      pre: ``
    };
    const createOverlay = () => {
      const h1 = document.createElement("h1");
      h1.style = style.h1;
      const section = document.createElement("section");
      section.appendChild(h1);
      section.style = style.section;
      const body = document.createElement("div");
      section.appendChild(body);
      return {h1, el: section, body};
    };
    const setTitle = (title) => {
      overlay.h1.textContent = title;
    };
    const show = () => {
      const {el} = overlay;
      if (!el.parentNode) {
        const target = document.body;
        target.appendChild(overlay.el);
      }
    };
    const hide = () => {
      const {el} = overlay;
      if (el.parentNode) {
        overlay.el.remove();
      }
    };
    const update2 = () => {
      if (compileError) {
        overlay.body.innerHTML = "";
        setTitle(compileErrorTitle);
        const errorEl = renderError(compileError);
        overlay.body.appendChild(errorEl);
        show();
      } else if (errors.length > 0) {
        overlay.body.innerHTML = "";
        setTitle(errorsTitle);
        errors.forEach(({title, message}) => {
          const errorEl = renderError(message, title);
          overlay.body.appendChild(errorEl);
        });
        show();
      } else {
        hide();
      }
    };
    const renderError = (message, title) => {
      const div = document.createElement("div");
      if (title) {
        const h2 = document.createElement("h2");
        h2.textContent = title;
        h2.style = style.h2;
        div.appendChild(h2);
      }
      const pre = document.createElement("pre");
      pre.textContent = message;
      div.appendChild(pre);
      return div;
    };
    const addError = (error, title) => {
      const message = error && error.stack || error;
      errors.push({title, message});
      update2();
    };
    const clearErrors = () => {
      errors.forEach(({element: element2}) => {
        removeElement$1(element2);
      });
      errors = [];
      update2();
    };
    const setCompileError = (message) => {
      compileError = message;
      update2();
    };
    const overlay = createOverlay();
    return {
      addError,
      clearErrors,
      setCompileError
    };
  };
  var svelteInsert = insert_hydration || insert;
  if (!svelteInsert) {
    throw new Error("failed to find insert_hydration and insert in svelte/internal");
  }
  var removeElement = (el) => el && el.parentNode && el.parentNode.removeChild(el);
  var adapter = class ProxyAdapterDom {
    constructor(instance2) {
      this.instance = instance2;
      this.insertionPoint = null;
      this.afterMount = this.afterMount.bind(this);
      this.rerender = this.rerender.bind(this);
      this._noOverlay = !!instance2.hotOptions.noOverlay;
    }
    static getErrorOverlay(noCreate = false) {
      if (!noCreate && !this.errorOverlay) {
        this.errorOverlay = ErrorOverlay();
      }
      return this.errorOverlay;
    }
    static renderCompileError(message) {
      const noCreate = !message;
      const overlay = this.getErrorOverlay(noCreate);
      if (!overlay)
        return;
      overlay.setCompileError(message);
    }
    dispose() {
      if (this.insertionPoint) {
        removeElement(this.insertionPoint);
        this.insertionPoint = null;
      }
      this.clearError();
    }
    afterMount(target, anchor) {
      const {
        instance: {debugName}
      } = this;
      if (!this.insertionPoint) {
        this.insertionPoint = document.createComment(debugName);
      }
      svelteInsert(target, this.insertionPoint, anchor);
    }
    rerender() {
      this.clearError();
      const {
        instance: {refreshComponent},
        insertionPoint
      } = this;
      if (!insertionPoint) {
        throw new Error("Cannot rerender: missing insertion point");
      }
      refreshComponent(insertionPoint.parentNode, insertionPoint);
    }
    renderError(err) {
      if (this._noOverlay)
        return;
      const {
        instance: {debugName}
      } = this;
      const title = debugName || err.moduleName || "Error";
      this.constructor.getErrorOverlay().addError(err, title);
    }
    clearError() {
      if (this._noOverlay)
        return;
      const overlay = this.constructor.getErrorOverlay(true);
      if (!overlay)
        return;
      overlay.clearErrors();
    }
  };
  if (typeof window !== "undefined") {
    window.__SVELTE_HMR_ADAPTER = adapter;
  }
  function create_fragment$4(ctx) {
    let current;
    const default_slot_template = ctx[2].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[1], null);
    const block = {
      c: function create3() {
        if (default_slot)
          default_slot.c();
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        if (default_slot) {
          default_slot.m(target, anchor);
        }
        current = true;
      },
      p: function update2(ctx2, [dirty]) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & 2)) {
            update_slot_base(default_slot, default_slot_template, ctx2, ctx2[1], !current ? get_all_dirty_from_scope(ctx2[1]) : get_slot_changes(default_slot_template, ctx2[1], dirty, null), null);
          }
        }
      },
      i: function intro(local) {
        if (current)
          return;
        transition_in(default_slot, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (default_slot)
          default_slot.d(detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_fragment$4.name,
      type: "component",
      source: "",
      ctx
    });
    return block;
  }
  function instance$4($$self, $$props, $$invalidate) {
    let {$$slots: slots = {}, $$scope} = $$props;
    validate_slots("Noop", slots, ["default"]);
    let {scoped = {}} = $$props;
    const writable_props = ["scoped"];
    Object.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
        console.warn(`<Noop> was created with unknown prop '${key}'`);
    });
    $$self.$$set = ($$props2) => {
      if ("scoped" in $$props2)
        $$invalidate(0, scoped = $$props2.scoped);
      if ("$$scope" in $$props2)
        $$invalidate(1, $$scope = $$props2.$$scope);
    };
    $$self.$capture_state = () => ({scoped});
    $$self.$inject_state = ($$props2) => {
      if ("scoped" in $$props2)
        $$invalidate(0, scoped = $$props2.scoped);
    };
    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }
    return [scoped, $$scope, slots];
  }
  var Noop = class extends SvelteComponentDev {
    constructor(options) {
      super(options);
      init$1(this, options, instance$4, create_fragment$4, safe_not_equal, {scoped: 0});
      dispatch_dev("SvelteRegisterComponent", {
        component: this,
        tagName: "Noop",
        options,
        id: create_fragment$4.name
      });
    }
    get scoped() {
      throw new Error("<Noop>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    set scoped(value) {
      throw new Error("<Noop>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  };
  if (import_meta && import_meta.hot) {
    Noop = applyHmr({m: import_meta, id: "/mnt/c/dev/repo/personal/svelte-wordpress-templates/svelte-routify/node_modules/@roxi/routify/runtime/decorators/Noop.svelte", hotOptions: {preserveLocalState: false, noPreserveStateKey: ["@hmr:reset", "@!hmr"], preserveAllLocalStateKey: "@hmr:keep-all", preserveLocalStateKey: "@hmr:keep", noReload: false, optimistic: true, acceptNamedExports: true, acceptAccessors: true, injectCss: false, cssEjectDelay: 100, native: false, importAdapterName: "___SVELTE_HMR_HOT_API_PROXY_ADAPTER", noOverlay: false, allowLiveBinding: false}, Component: Noop, ProxyAdapter: adapter, acceptable: true, preserveLocalState: false, emitCss: false});
  }
  var Noop$1 = Noop;
  var subscriber_queue = [];
  function readable(value, start) {
    return {
      subscribe: writable(value, start).subscribe
    };
  }
  function writable(value) {
    let start = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    let stop;
    const subscribers = new Set();
    function set2(new_value) {
      if (safe_not_equal(value, new_value)) {
        value = new_value;
        if (stop) {
          const run_queue = !subscriber_queue.length;
          var _iterator = _createForOfIteratorHelper(subscribers), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              const subscriber = _step.value;
              subscriber[1]();
              subscriber_queue.push(subscriber, value);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          if (run_queue) {
            for (let i = 0; i < subscriber_queue.length; i += 2) {
              subscriber_queue[i][0](subscriber_queue[i + 1]);
            }
            subscriber_queue.length = 0;
          }
        }
      }
    }
    function update2(fn) {
      set2(fn(value));
    }
    function subscribe2(run2) {
      let invalidate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
      const subscriber = [run2, invalidate];
      subscribers.add(subscriber);
      if (subscribers.size === 1) {
        stop = start(set2) || noop;
      }
      run2(value);
      return () => {
        subscribers.delete(subscriber);
        if (subscribers.size === 0) {
          stop();
          stop = null;
        }
      };
    }
    return {
      set: set2,
      update: update2,
      subscribe: subscribe2
    };
  }
  function derived(stores, fn, initial_value) {
    const single = !Array.isArray(stores);
    const stores_array = single ? [stores] : stores;
    const auto = fn.length < 2;
    return readable(initial_value, (set2) => {
      let inited = false;
      const values2 = [];
      let pending = 0;
      let cleanup = noop;
      const sync = () => {
        if (pending) {
          return;
        }
        cleanup();
        const result = fn(single ? values2[0] : values2, set2);
        if (auto) {
          set2(result);
        } else {
          cleanup = is_function(result) ? result : noop;
        }
      };
      const unsubscribers = stores_array.map((store, i) => subscribe(store, (value) => {
        values2[i] = value;
        pending &= ~(1 << i);
        if (inited) {
          sync();
        }
      }, () => {
        pending |= 1 << i;
      }));
      inited = true;
      sync();
      return function stop() {
        run_all(unsubscribers);
        cleanup();
      };
    });
  }
  window.routify = window.routify || {};
  var route = writable(null);
  var routes$1 = writable([]);
  routes$1.subscribe((routes2) => window.routify.routes = routes2);
  var rootContext = writable({component: {params: {}}});
  var urlRoute = writable(null);
  var isChangingPage = writable(true);
  async function onPageLoaded({page, metatags: metatags2, afterPageLoad: afterPageLoad2, parentNode}) {
    const scrollToTop = page.last !== page;
    setTimeout(() => handleScroll(parentNode, scrollToTop));
    const {path} = page;
    const {options} = currentLocation();
    const prefetchId = options.prefetch;
    for (const hook of afterPageLoad2._hooks) {
      if (hook)
        await hook(page.api);
    }
    metatags2.update();
    dispatchEvent(new CustomEvent("app-loaded"));
    parent.postMessage({
      msg: "app-loaded",
      prefetched: window.routify.prefetched,
      path,
      prefetchId
    }, "*");
    window["routify"].appLoaded = true;
    window["routify"].stopAutoReady = false;
  }
  function urlToRoute(url2, clone2 = false) {
    url2 = defaultConfig.urlTransform.remove(url2);
    let {pathname, search} = parseUrl(url2).url;
    const routes2 = get_store_value(routes$1);
    const matchingRoute = routes2.find((route3) => pathname === route3.meta.name) || routes2.find((route3) => pathname.match(route3.regex));
    if (!matchingRoute)
      throw new Error(`Route could not be found for "${pathname}".`);
    const _matchingRoute = clone2 ? Object.create(matchingRoute) : matchingRoute;
    const {route: route2, redirectPath, rewritePath} = resolveRedirects(_matchingRoute, routes2);
    if (rewritePath) {
      ({pathname, search} = parseUrl(resolveUrl(rewritePath, route2.params)).url);
      if (redirectPath)
        route2.redirectTo = resolveUrl(redirectPath, route2.params || {});
    }
    if (defaultConfig.queryHandler)
      route2.params = Object.assign({}, defaultConfig.queryHandler.parse(search));
    assignParamsToRouteAndLayouts(route2, pathname);
    route2.leftover = url2.replace(new RegExp(route2.regex), "");
    return route2;
  }
  function assignParamsToRouteAndLayouts(route2, pathname) {
    if (route2.paramKeys) {
      const layouts = layoutByPos(route2.layouts);
      const fragments = pathname.split("/").filter(Boolean);
      const routeProps = getRouteProps(route2.path);
      routeProps.forEach((prop, i) => {
        if (prop) {
          route2.params[prop] = fragments[i];
          if (layouts[i])
            layouts[i].param = {[prop]: fragments[i]};
          else
            route2.param = {[prop]: fragments[i]};
        }
      });
    }
  }
  function resolveRedirects(route2, routes2, redirectPath, rewritePath) {
    const {redirect, rewrite} = route2.meta;
    if (redirect || rewrite) {
      redirectPath = redirect ? redirect.path || redirect : redirectPath;
      rewritePath = rewrite ? rewrite.path || rewrite : redirectPath;
      const redirectParams = redirect && redirect.params;
      const rewriteParams = rewrite && rewrite.params;
      const newRoute = routes2.find((r) => r.path.replace(/\/index$/, "") === rewritePath);
      if (newRoute === route2)
        console.error(`${rewritePath} is redirecting to itself`);
      if (!newRoute)
        console.error(`${route2.path} is redirecting to non-existent path: ${rewritePath}`);
      if (redirectParams || rewriteParams)
        newRoute.params = Object.assign({}, newRoute.params, redirectParams, rewriteParams);
      return resolveRedirects(newRoute, routes2, redirectPath, rewritePath);
    }
    return {route: route2, redirectPath, rewritePath};
  }
  function layoutByPos(layouts) {
    const arr = [];
    layouts.forEach((layout) => {
      arr[layout.path.split("/").filter(Boolean).length - 1] = layout;
    });
    return arr;
  }
  function getRouteProps(url2) {
    return url2.split("/").filter(Boolean).map((f) => f.match(/\:(.+)/)).map((f) => f && f[1]);
  }
  var file$1 = "node_modules/@roxi/routify/runtime/Prefetcher.svelte";
  function get_each_context$1(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[1] = list[i];
    return child_ctx;
  }
  function create_each_block$1(key_1, ctx) {
    let iframe;
    let iframe_src_value;
    const block = {
      key: key_1,
      first: null,
      c: function create3() {
        iframe = element("iframe");
        if (!src_url_equal(iframe.src, iframe_src_value = ctx[1].url))
          attr_dev(iframe, "src", iframe_src_value);
        attr_dev(iframe, "frameborder", "0");
        attr_dev(iframe, "title", "routify prefetcher");
        add_location(iframe, file$1, 80, 4, 2274);
        this.first = iframe;
      },
      m: function mount(target, anchor) {
        insert_dev(target, iframe, anchor);
      },
      p: function update2(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty & 1 && !src_url_equal(iframe.src, iframe_src_value = ctx[1].url)) {
          attr_dev(iframe, "src", iframe_src_value);
        }
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(iframe);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_each_block$1.name,
      type: "each",
      source: "(80:2) {#each $actives as prefetch (prefetch.options.prefetch)}",
      ctx
    });
    return block;
  }
  function create_fragment$3(ctx) {
    let div;
    let each_blocks = [];
    let each_1_lookup = new Map();
    let each_value = ctx[0];
    validate_each_argument(each_value);
    const get_key = (ctx2) => ctx2[1].options.prefetch;
    validate_each_keys(ctx, each_value, get_each_context$1, get_key);
    for (let i = 0; i < each_value.length; i += 1) {
      let child_ctx = get_each_context$1(ctx, each_value, i);
      let key = get_key(child_ctx);
      each_1_lookup.set(key, each_blocks[i] = create_each_block$1(key, child_ctx));
    }
    const block = {
      c: function create3() {
        div = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr_dev(div, "id", "__routify_iframes");
        set_style(div, "display", "none");
        add_location(div, file$1, 78, 0, 2160);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(div, null);
        }
      },
      p: function update2(ctx2, [dirty]) {
        if (dirty & 1) {
          each_value = ctx2[0];
          validate_each_argument(each_value);
          validate_each_keys(ctx2, each_value, get_each_context$1, get_key);
          each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, div, destroy_block, create_each_block$1, null, get_each_context$1);
        }
      },
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(div);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].d();
        }
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_fragment$3.name,
      type: "component",
      source: "",
      ctx
    });
    return block;
  }
  var iframeNum = 2;
  var defaults = {
    validFor: 60,
    timeout: 5e3,
    gracePeriod: 1e3
  };
  var queue = writable([]);
  var actives = derived(queue, (q) => q.slice(0, iframeNum));
  actives.subscribe((actives2) => actives2.forEach(({options}) => {
    setTimeout(() => removeFromQueue(options.prefetch), options.timeout);
  }));
  function prefetch(path, options = {}) {
    prefetch.id = prefetch.id || 1;
    path = path.href || path;
    options = {...defaults, ...options};
    options.prefetch = prefetch.id++;
    if (window.routify.prefetched || navigator.userAgent.match("jsdom"))
      return false;
    queue.update((q) => {
      if (!q.some((e) => e.options.path === path))
        q.push({
          url: `${path}__[[routify_url_options]]__${encodeURIComponent(JSON.stringify(options))}`,
          options
        });
      return q;
    });
  }
  function removeFromQueue(idOrEvent) {
    const id2 = idOrEvent.data ? idOrEvent.data.prefetchId : idOrEvent;
    if (!id2)
      return null;
    const entry = get_store_value(queue).find((entry2) => entry2 && entry2.options.prefetch == id2);
    if (entry) {
      const {gracePeriod} = entry.options;
      const gracePromise = new Promise((resolve2) => setTimeout(resolve2, gracePeriod));
      const idlePromise = new Promise((resolve2) => {
        window.requestIdleCallback ? window.requestIdleCallback(resolve2) : setTimeout(resolve2, gracePeriod + 1e3);
      });
      Promise.all([gracePromise, idlePromise]).then(() => {
        queue.update((q) => q.filter((q2) => q2.options.prefetch != id2));
      });
    }
  }
  addEventListener("message", removeFromQueue, false);
  function instance$3($$self, $$props, $$invalidate) {
    let $actives;
    validate_store(actives, "actives");
    component_subscribe($$self, actives, ($$value) => $$invalidate(0, $actives = $$value));
    let {$$slots: slots = {}, $$scope} = $$props;
    validate_slots("Prefetcher", slots, []);
    const writable_props = [];
    Object.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
        console.warn(`<Prefetcher> was created with unknown prop '${key}'`);
    });
    $$self.$capture_state = () => ({
      writable,
      derived,
      get: get_store_value,
      iframeNum,
      defaults,
      queue,
      actives,
      prefetch,
      removeFromQueue,
      $actives
    });
    return [$actives];
  }
  var Prefetcher = class extends SvelteComponentDev {
    constructor(options) {
      super(options);
      init$1(this, options, instance$3, create_fragment$3, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: this,
        tagName: "Prefetcher",
        options,
        id: create_fragment$3.name
      });
    }
  };
  if (import_meta && import_meta.hot) {
    Prefetcher = applyHmr({m: import_meta, id: "/mnt/c/dev/repo/personal/svelte-wordpress-templates/svelte-routify/node_modules/@roxi/routify/runtime/Prefetcher.svelte", hotOptions: {preserveLocalState: false, noPreserveStateKey: ["@hmr:reset", "@!hmr"], preserveAllLocalStateKey: "@hmr:keep-all", preserveLocalStateKey: "@hmr:keep", noReload: false, optimistic: true, acceptNamedExports: true, acceptAccessors: true, injectCss: false, cssEjectDelay: 100, native: false, importAdapterName: "___SVELTE_HMR_HOT_API_PROXY_ADAPTER", noOverlay: false, allowLiveBinding: false}, Component: Prefetcher, ProxyAdapter: adapter, acceptable: true, preserveLocalState: false, emitCss: false});
  }
  var Prefetcher$1 = Prefetcher;
  function getRoutifyContext() {
    return getContext("routify") || rootContext;
  }
  var ready = {
    subscribe(run2) {
      window["routify"].stopAutoReady = true;
      async function ready2() {
        await tick();
        await onPageLoaded({page: get_store_value(route), metatags, afterPageLoad});
      }
      run2(ready2);
      return () => {
      };
    }
  };
  var afterPageLoad = {
    _hooks: [
      (event) => isChangingPage.set(false)
    ],
    subscribe: hookHandler
  };
  var beforeUrlChange = {
    _hooks: [],
    subscribe: hookHandler
  };
  function hookHandler(listener2) {
    const hooks = this._hooks;
    const index = hooks.length;
    listener2((callback) => {
      hooks[index] = callback;
    });
    return (...params2) => {
      delete hooks[index];
      listener2(...params2);
    };
  }
  var params = {
    subscribe(run2) {
      const ctx = getRoutifyContext();
      return derived(ctx, (ctx2) => ctx2.route.params).subscribe(run2);
    }
  };
  var url = {
    subscribe(listener2) {
      const ctx = getRoutifyContext();
      return derived(ctx, (ctx2) => makeUrlHelper(ctx2, ctx2.route, ctx2.routes)).subscribe(listener2);
    }
  };
  function makeUrlHelper($ctx, $currentRoute, $routes) {
    return function url2(path, params2 = {}, options) {
      const {component} = $ctx;
      const inheritedParams = Object.assign({}, $currentRoute.params, component.params);
      let el = path && path.nodeType && path;
      if (el)
        path = path.getAttribute("href");
      path = path ? resolvePath(path) : component.shortPath;
      const route2 = $routes.find((route3) => [route3.shortPath || "/", route3.path].includes(path));
      if (route2 && route2.meta.preload === "proximity" && window.requestIdleCallback) {
        const delay = routify.appLoaded ? 0 : 1500;
        setTimeout(() => {
          window.requestIdleCallback(() => route2.api.preload());
        }, delay);
      }
      const strict = options && options.strict !== false;
      if (!strict)
        path = path.replace(/index$/, "");
      let url3 = resolveUrl(path, params2, inheritedParams);
      if (el) {
        el.href = url3;
        return {
          update(changedParams) {
            el.href = resolveUrl(path, changedParams, inheritedParams);
          }
        };
      }
      return url3;
      function resolvePath(path2) {
        if (path2.match(/^\.\.?\//)) {
          let [, breadcrumbs, relativePath] = path2.match(/^([\.\/]+)(.*)/);
          let dir = component.path.replace(/\/$/, "");
          const traverse = breadcrumbs.match(/\.\.\//g) || [];
          if (component.isPage)
            traverse.push(null);
          traverse.forEach(() => dir = dir.replace(/\/[^\/]+\/?$/, ""));
          path2 = `${dir}/${relativePath}`.replace(/\/$/, "");
          path2 = path2 || "/";
        } else if (path2.match(/^\//))
          ;
        else {
          const matchingRoute = $routes.find((route3) => route3.meta.name === path2);
          if (matchingRoute)
            path2 = matchingRoute.shortPath;
        }
        return path2;
      }
    };
  }
  var goto = {
    subscribe(listener2) {
      const routifyUpdatePage = getContext("routifyupdatepage");
      return derived(url, (url2) => function goto2(path, params2, _static, shallow) {
        const href = url2(path, params2);
        if (!_static)
          history.pushState({}, null, href);
        else
          routifyUpdatePage(href, shallow);
      }).subscribe(listener2);
    }
  };
  var _metatags = {
    subscribe(listener2) {
      this._origin = this.getOrigin();
      return listener2(metatags);
    },
    props: {},
    templates: {},
    services: {
      plain: {propField: "name", valueField: "content"},
      twitter: {propField: "name", valueField: "content"},
      og: {propField: "property", valueField: "content"}
    },
    plugins: [
      {
        name: "applyTemplate",
        condition: () => true,
        action: (prop, value) => {
          const template = _metatags.getLongest(_metatags.templates, prop) || ((x) => x);
          return [prop, template(value)];
        }
      },
      {
        name: "createMeta",
        condition: () => true,
        action(prop, value) {
          _metatags.writeMeta(prop, value);
        }
      },
      {
        name: "createOG",
        condition: (prop) => !prop.match(":"),
        action(prop, value) {
          _metatags.writeMeta(`og:${prop}`, value);
        }
      },
      {
        name: "createTitle",
        condition: (prop) => prop === "title",
        action(prop, value) {
          document.title = value;
        }
      }
    ],
    getLongest(repo, name) {
      const providers = repo[name];
      if (providers) {
        const currentPath = get_store_value(route).path;
        const allPaths = Object.keys(repo[name]);
        const matchingPaths = allPaths.filter((path) => currentPath.includes(path));
        const longestKey = matchingPaths.sort((a, b) => b.length - a.length)[0];
        return providers[longestKey];
      }
    },
    writeMeta(prop, value) {
      const head2 = document.getElementsByTagName("head")[0];
      const match2 = prop.match(/(.+)\:/);
      const serviceName = match2 && match2[1] || "plain";
      const {propField, valueField} = metatags.services[serviceName] || metatags.services.plain;
      const oldElement = document.querySelector(`meta[${propField}='${prop}']`);
      if (oldElement)
        oldElement.remove();
      const newElement = document.createElement("meta");
      newElement.setAttribute(propField, prop);
      newElement.setAttribute(valueField, value);
      newElement.setAttribute("data-origin", "routify");
      head2.appendChild(newElement);
    },
    set(prop, value) {
      if (typeof prop === "string") {
        _metatags.plugins.forEach((plugin) => {
          if (plugin.condition(prop, value))
            [prop, value] = plugin.action(prop, value) || [prop, value];
        });
      }
    },
    clear() {
      const oldElement = document.querySelector(`meta`);
      if (oldElement)
        oldElement.remove();
    },
    template(name, fn) {
      const origin = _metatags.getOrigin;
      _metatags.templates[name] = _metatags.templates[name] || {};
      _metatags.templates[name][origin] = fn;
    },
    update() {
      Object.keys(_metatags.props).forEach((prop) => {
        let value = _metatags.getLongest(_metatags.props, prop);
        _metatags.plugins.forEach((plugin) => {
          if (plugin.condition(prop, value)) {
            [prop, value] = plugin.action(prop, value) || [prop, value];
          }
        });
      });
    },
    batchedUpdate() {
      if (!_metatags._pendingUpdate) {
        _metatags._pendingUpdate = true;
        setTimeout(() => {
          _metatags._pendingUpdate = false;
          this.update();
        });
      }
    },
    _updateQueued: false,
    _origin: false,
    getOrigin() {
      if (this._origin)
        return this._origin;
      const routifyCtx = getRoutifyContext();
      return routifyCtx && get_store_value(routifyCtx).path || "/";
    },
    _pendingUpdate: false
  };
  var metatags = new Proxy(_metatags, {
    set(target, name, value, receiver) {
      const {props} = target;
      if (Reflect.has(target, name))
        Reflect.set(target, name, value, receiver);
      else {
        props[name] = props[name] || {};
        props[name][target.getOrigin()] = value;
      }
      if (window["routify"].appLoaded)
        target.batchedUpdate();
      return true;
    }
  });
  var file = "node_modules/@roxi/routify/runtime/Route.svelte";
  function get_each_context(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[21] = list[i].component;
    child_ctx[22] = list[i].componentFile;
    child_ctx[2] = list[i].decorator;
    child_ctx[1] = list[i].nodes;
    return child_ctx;
  }
  function create_if_block_1(ctx) {
    let each_blocks = [];
    let each_1_lookup = new Map();
    let each_1_anchor;
    let current;
    let each_value = [ctx[4]];
    validate_each_argument(each_value);
    const get_key = (ctx2) => ctx2[7];
    validate_each_keys(ctx, each_value, get_each_context, get_key);
    for (let i = 0; i < 1; i += 1) {
      let child_ctx = get_each_context(ctx, each_value, i);
      let key = get_key(child_ctx);
      each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
    }
    const block = {
      c: function create3() {
        for (let i = 0; i < 1; i += 1) {
          each_blocks[i].c();
        }
        each_1_anchor = empty();
      },
      m: function mount(target, anchor) {
        for (let i = 0; i < 1; i += 1) {
          each_blocks[i].m(target, anchor);
        }
        insert_dev(target, each_1_anchor, anchor);
        current = true;
      },
      p: function update2(ctx2, dirty) {
        if (dirty & 33554621) {
          each_value = [ctx2[4]];
          validate_each_argument(each_value);
          group_outros();
          validate_each_keys(ctx2, each_value, get_each_context, get_key);
          each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block, each_1_anchor, get_each_context);
          check_outros();
        }
      },
      i: function intro(local) {
        if (current)
          return;
        for (let i = 0; i < 1; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o: function outro(local) {
        for (let i = 0; i < 1; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d: function destroy(detaching) {
        for (let i = 0; i < 1; i += 1) {
          each_blocks[i].d(detaching);
        }
        if (detaching)
          detach_dev(each_1_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_1.name,
      type: "if",
      source: "(109:0) {#if $context}",
      ctx
    });
    return block;
  }
  function create_if_block_2(ctx) {
    let route_1;
    let current;
    route_1 = new Route({
      props: {
        decorator: ctx[2],
        nodes: ctx[1],
        scoped: {
          ...ctx[0],
          ...ctx[25]
        }
      },
      $$inline: true
    });
    const block = {
      c: function create3() {
        create_component(route_1.$$.fragment);
      },
      m: function mount(target, anchor) {
        mount_component(route_1, target, anchor);
        current = true;
      },
      p: function update2(ctx2, dirty) {
        const route_1_changes = {};
        if (dirty & 4)
          route_1_changes.decorator = ctx2[2];
        if (dirty & 16)
          route_1_changes.nodes = ctx2[1];
        if (dirty & 33554433)
          route_1_changes.scoped = {
            ...ctx2[0],
            ...ctx2[25]
          };
        route_1.$set(route_1_changes);
      },
      i: function intro(local) {
        if (current)
          return;
        transition_in(route_1.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(route_1.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        destroy_component(route_1, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_2.name,
      type: "if",
      source: "(120:8) {#if component && nodes.length}",
      ctx
    });
    return block;
  }
  function create_default_slot_1(ctx) {
    let if_block_anchor;
    let current;
    let if_block = ctx[21] && ctx[1].length && create_if_block_2(ctx);
    const block = {
      c: function create3() {
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
      },
      m: function mount(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert_dev(target, if_block_anchor, anchor);
        current = true;
      },
      p: function update2(ctx2, dirty) {
        if (ctx2[21] && ctx2[1].length) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty & 16) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block_2(ctx2);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
      },
      i: function intro(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o: function outro(local) {
        transition_out(if_block);
        current = false;
      },
      d: function destroy(detaching) {
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach_dev(if_block_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_default_slot_1.name,
      type: "slot",
      source: "(112:6) <svelte:component         this={componentFile}         let:scoped={scopeToChild}         let:decorator         {scoped}         {scopedSync}         {...node.param || {}}       >",
      ctx
    });
    return block;
  }
  function create_default_slot(ctx) {
    let switch_instance;
    let t;
    let current;
    const switch_instance_spread_levels = [
      {scoped: ctx[0]},
      {scopedSync: ctx[5]},
      ctx[3].param || {}
    ];
    var switch_value = ctx[22];
    function switch_props(ctx2) {
      let switch_instance_props = {
        $$slots: {
          default: [
            create_default_slot_1,
            ({scoped: scopeToChild, decorator}) => ({25: scopeToChild, 2: decorator}),
            ({scoped: scopeToChild, decorator}) => (scopeToChild ? 33554432 : 0) | (decorator ? 4 : 0)
          ]
        },
        $$scope: {ctx: ctx2}
      };
      for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
        switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
      }
      return {
        props: switch_instance_props,
        $$inline: true
      };
    }
    if (switch_value) {
      switch_instance = new switch_value(switch_props(ctx));
    }
    const block = {
      c: function create3() {
        if (switch_instance)
          create_component(switch_instance.$$.fragment);
        t = space();
      },
      m: function mount(target, anchor) {
        if (switch_instance) {
          mount_component(switch_instance, target, anchor);
        }
        insert_dev(target, t, anchor);
        current = true;
      },
      p: function update2(ctx2, dirty) {
        const switch_instance_changes = dirty & 41 ? get_spread_update(switch_instance_spread_levels, [
          dirty & 1 && {scoped: ctx2[0]},
          dirty & 32 && {scopedSync: ctx2[5]},
          dirty & 8 && get_spread_object(ctx2[3].param || {})
        ]) : {};
        if (dirty & 100663317) {
          switch_instance_changes.$$scope = {dirty, ctx: ctx2};
        }
        if (switch_value !== (switch_value = ctx2[22])) {
          if (switch_instance) {
            group_outros();
            const old_component = switch_instance;
            transition_out(old_component.$$.fragment, 1, 0, () => {
              destroy_component(old_component, 1);
            });
            check_outros();
          }
          if (switch_value) {
            switch_instance = new switch_value(switch_props(ctx2));
            create_component(switch_instance.$$.fragment);
            transition_in(switch_instance.$$.fragment, 1);
            mount_component(switch_instance, t.parentNode, t);
          } else {
            switch_instance = null;
          }
        } else if (switch_value) {
          switch_instance.$set(switch_instance_changes);
        }
      },
      i: function intro(local) {
        if (current)
          return;
        if (switch_instance)
          transition_in(switch_instance.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        if (switch_instance)
          transition_out(switch_instance.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (switch_instance)
          destroy_component(switch_instance, detaching);
        if (detaching)
          detach_dev(t);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_default_slot.name,
      type: "slot",
      source: "(111:4) <svelte:component this={decorator} {scoped}>",
      ctx
    });
    return block;
  }
  function create_each_block(key_1, ctx) {
    let first;
    let switch_instance;
    let switch_instance_anchor;
    let current;
    var switch_value = ctx[2];
    function switch_props(ctx2) {
      return {
        props: {
          scoped: ctx2[0],
          $$slots: {default: [create_default_slot]},
          $$scope: {ctx: ctx2}
        },
        $$inline: true
      };
    }
    if (switch_value) {
      switch_instance = new switch_value(switch_props(ctx));
    }
    const block = {
      key: key_1,
      first: null,
      c: function create3() {
        first = empty();
        if (switch_instance)
          create_component(switch_instance.$$.fragment);
        switch_instance_anchor = empty();
        this.first = first;
      },
      m: function mount(target, anchor) {
        insert_dev(target, first, anchor);
        if (switch_instance) {
          mount_component(switch_instance, target, anchor);
        }
        insert_dev(target, switch_instance_anchor, anchor);
        current = true;
      },
      p: function update2(new_ctx, dirty) {
        ctx = new_ctx;
        const switch_instance_changes = {};
        if (dirty & 1)
          switch_instance_changes.scoped = ctx[0];
        if (dirty & 67108925) {
          switch_instance_changes.$$scope = {dirty, ctx};
        }
        if (switch_value !== (switch_value = ctx[2])) {
          if (switch_instance) {
            group_outros();
            const old_component = switch_instance;
            transition_out(old_component.$$.fragment, 1, 0, () => {
              destroy_component(old_component, 1);
            });
            check_outros();
          }
          if (switch_value) {
            switch_instance = new switch_value(switch_props(ctx));
            create_component(switch_instance.$$.fragment);
            transition_in(switch_instance.$$.fragment, 1);
            mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
          } else {
            switch_instance = null;
          }
        } else if (switch_value) {
          switch_instance.$set(switch_instance_changes);
        }
      },
      i: function intro(local) {
        if (current)
          return;
        if (switch_instance)
          transition_in(switch_instance.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        if (switch_instance)
          transition_out(switch_instance.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(first);
        if (detaching)
          detach_dev(switch_instance_anchor);
        if (switch_instance)
          destroy_component(switch_instance, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_each_block.name,
      type: "each",
      source: "(110:2) {#each [$context] as { component, componentFile, decorator, nodes }",
      ctx
    });
    return block;
  }
  function create_if_block$1(ctx) {
    let div;
    let mounted;
    let dispose;
    const block = {
      c: function create3() {
        div = element("div");
        set_style(div, "display", "contents");
        add_location(div, file, 133, 2, 4153);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        if (!mounted) {
          dispose = action_destroyer(ctx[10].call(null, div));
          mounted = true;
        }
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(div);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block$1.name,
      type: "if",
      source: "(133:0) {#if !parentNode}",
      ctx
    });
    return block;
  }
  function create_fragment$2(ctx) {
    let t;
    let if_block1_anchor;
    let current;
    let if_block0 = ctx[4] && create_if_block_1(ctx);
    let if_block1 = !ctx[6] && create_if_block$1(ctx);
    const block = {
      c: function create3() {
        if (if_block0)
          if_block0.c();
        t = space();
        if (if_block1)
          if_block1.c();
        if_block1_anchor = empty();
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        if (if_block0)
          if_block0.m(target, anchor);
        insert_dev(target, t, anchor);
        if (if_block1)
          if_block1.m(target, anchor);
        insert_dev(target, if_block1_anchor, anchor);
        current = true;
      },
      p: function update2(ctx2, [dirty]) {
        if (ctx2[4]) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
            if (dirty & 16) {
              transition_in(if_block0, 1);
            }
          } else {
            if_block0 = create_if_block_1(ctx2);
            if_block0.c();
            transition_in(if_block0, 1);
            if_block0.m(t.parentNode, t);
          }
        } else if (if_block0) {
          group_outros();
          transition_out(if_block0, 1, 1, () => {
            if_block0 = null;
          });
          check_outros();
        }
        if (!ctx2[6]) {
          if (if_block1)
            ;
          else {
            if_block1 = create_if_block$1(ctx2);
            if_block1.c();
            if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
      },
      i: function intro(local) {
        if (current)
          return;
        transition_in(if_block0);
        current = true;
      },
      o: function outro(local) {
        transition_out(if_block0);
        current = false;
      },
      d: function destroy(detaching) {
        if (if_block0)
          if_block0.d(detaching);
        if (detaching)
          detach_dev(t);
        if (if_block1)
          if_block1.d(detaching);
        if (detaching)
          detach_dev(if_block1_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_fragment$2.name,
      type: "component",
      source: "",
      ctx
    });
    return block;
  }
  function instance$2($$self, $$props, $$invalidate) {
    let id2;
    let $context;
    let $route;
    let $parentContext;
    let $routes;
    validate_store(route, "route");
    component_subscribe($$self, route, ($$value) => $$invalidate(14, $route = $$value));
    validate_store(routes$1, "routes");
    component_subscribe($$self, routes$1, ($$value) => $$invalidate(16, $routes = $$value));
    let {$$slots: slots = {}, $$scope} = $$props;
    validate_slots("Route", slots, []);
    let {nodes = []} = $$props;
    let {scoped = {}} = $$props;
    let {decorator = void 0} = $$props;
    let node2 = null;
    let remainingNodes = null;
    let scopedSync = {};
    let parentNode;
    let invalidate = 1;
    const context = writable(null);
    validate_store(context, "context");
    component_subscribe($$self, context, (value) => $$invalidate(4, $context = value));
    const parentContext = getContext("routify") || rootContext;
    validate_store(parentContext, "parentContext");
    component_subscribe($$self, parentContext, (value) => $$invalidate(15, $parentContext = value));
    const setParentNode = (el) => $$invalidate(6, parentNode = el.parentNode);
    setContext("routify", context);
    let lastNodes = [];
    function setComponent(node3) {
      let PendingComponent = node3.component();
      if (PendingComponent instanceof Promise)
        PendingComponent.then(onComponentLoaded);
      else
        onComponentLoaded(PendingComponent);
    }
    function onComponentLoaded(componentFile) {
      $$invalidate(5, scopedSync = {...scoped});
      const ctx = {
        ...$context,
        nodes: remainingNodes,
        decorator: decorator || Noop$1,
        layout: node2.isLayout ? node2 : $parentContext.layout,
        component: node2,
        route: $route,
        routes: $routes,
        componentFile,
        parentNode: parentNode || $parentContext.parentNode
      };
      context.set(ctx);
      set_store_value(parentContext, $parentContext.child = node2, $parentContext);
      if (remainingNodes.length === 0)
        onLastComponentLoaded();
    }
    async function onLastComponentLoaded() {
      await new Promise((resolve2) => setTimeout(resolve2));
      const isOnCurrentRoute = $context.component.path === $route.path;
      if (!window["routify"].stopAutoReady && isOnCurrentRoute)
        onPageLoaded({
          page: $context.component,
          metatags,
          afterPageLoad,
          parentNode
        });
    }
    function getID({meta: meta2, path, param, params: params2}) {
      return JSON.stringify({
        path,
        invalidate,
        param: (meta2["param-is-page"] || meta2["slug-is-page"]) && param,
        queryParams: meta2["query-params-is-page"] && params2
      });
    }
    const writable_props = ["nodes", "scoped", "decorator"];
    Object.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
        console.warn(`<Route> was created with unknown prop '${key}'`);
    });
    $$self.$$set = ($$props2) => {
      if ("nodes" in $$props2)
        $$invalidate(1, nodes = $$props2.nodes);
      if ("scoped" in $$props2)
        $$invalidate(0, scoped = $$props2.scoped);
      if ("decorator" in $$props2)
        $$invalidate(2, decorator = $$props2.decorator);
    };
    $$self.$capture_state = () => ({
      suppressComponentWarnings,
      Noop: Noop$1,
      getContext,
      setContext,
      tick,
      writable,
      metatags,
      afterPageLoad,
      route,
      routes: routes$1,
      rootContext,
      handleScroll,
      onPageLoaded,
      nodes,
      scoped,
      decorator,
      node: node2,
      remainingNodes,
      scopedSync,
      parentNode,
      invalidate,
      context,
      parentContext,
      setParentNode,
      lastNodes,
      setComponent,
      onComponentLoaded,
      onLastComponentLoaded,
      getID,
      id: id2,
      $context,
      $route,
      $parentContext,
      $routes
    });
    $$self.$inject_state = ($$props2) => {
      if ("nodes" in $$props2)
        $$invalidate(1, nodes = $$props2.nodes);
      if ("scoped" in $$props2)
        $$invalidate(0, scoped = $$props2.scoped);
      if ("decorator" in $$props2)
        $$invalidate(2, decorator = $$props2.decorator);
      if ("node" in $$props2)
        $$invalidate(3, node2 = $$props2.node);
      if ("remainingNodes" in $$props2)
        remainingNodes = $$props2.remainingNodes;
      if ("scopedSync" in $$props2)
        $$invalidate(5, scopedSync = $$props2.scopedSync);
      if ("parentNode" in $$props2)
        $$invalidate(6, parentNode = $$props2.parentNode);
      if ("invalidate" in $$props2)
        $$invalidate(11, invalidate = $$props2.invalidate);
      if ("lastNodes" in $$props2)
        $$invalidate(12, lastNodes = $$props2.lastNodes);
      if ("id" in $$props2)
        $$invalidate(7, id2 = $$props2.id);
    };
    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 6146) {
        if (lastNodes !== nodes) {
          $$invalidate(12, lastNodes = nodes);
          $$invalidate(3, [node2, ...remainingNodes] = [...nodes], node2);
          $$invalidate(3, node2.api.reset = () => $$invalidate(11, invalidate++, invalidate), node2);
        }
      }
      if ($$self.$$.dirty & 8) {
        setComponent(node2);
      }
      if ($$self.$$.dirty & 2064) {
        $$invalidate(7, id2 = $context && invalidate && getID($context.component));
      }
      if ($$self.$$.dirty & 16) {
        $context && suppressComponentWarnings($context, tick);
      }
    };
    return [
      scoped,
      nodes,
      decorator,
      node2,
      $context,
      scopedSync,
      parentNode,
      id2,
      context,
      parentContext,
      setParentNode,
      invalidate,
      lastNodes
    ];
  }
  var Route = class extends SvelteComponentDev {
    constructor(options) {
      super(options);
      init$1(this, options, instance$2, create_fragment$2, safe_not_equal, {nodes: 1, scoped: 0, decorator: 2});
      dispatch_dev("SvelteRegisterComponent", {
        component: this,
        tagName: "Route",
        options,
        id: create_fragment$2.name
      });
    }
    get nodes() {
      throw new Error("<Route>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    set nodes(value) {
      throw new Error("<Route>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    get scoped() {
      throw new Error("<Route>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    set scoped(value) {
      throw new Error("<Route>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    get decorator() {
      throw new Error("<Route>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    set decorator(value) {
      throw new Error("<Route>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  };
  if (import_meta && import_meta.hot) {
    Route = applyHmr({m: import_meta, id: "/mnt/c/dev/repo/personal/svelte-wordpress-templates/svelte-routify/node_modules/@roxi/routify/runtime/Route.svelte", hotOptions: {preserveLocalState: false, noPreserveStateKey: ["@hmr:reset", "@!hmr"], preserveAllLocalStateKey: "@hmr:keep-all", preserveLocalStateKey: "@hmr:keep", noReload: false, optimistic: true, acceptNamedExports: true, acceptAccessors: true, injectCss: false, cssEjectDelay: 100, native: false, importAdapterName: "___SVELTE_HMR_HOT_API_PROXY_ADAPTER", noOverlay: false, allowLiveBinding: false}, Component: Route, ProxyAdapter: adapter, acceptable: true, preserveLocalState: false, emitCss: false});
  }
  var Route$1 = Route;
  function init(routes2, callback) {
    let lastRoute = false;
    function updatePage(proxyToUrl, shallow) {
      const url2 = proxyToUrl || currentLocation().fullpath;
      const route$1 = urlToRoute(url2);
      if (route$1.redirectTo) {
        history.replaceStateNative({}, null, route$1.redirectTo);
        delete route$1.redirectTo;
      }
      const currentRoute = shallow && urlToRoute(currentLocation().fullpath, routes2);
      const contextRoute = currentRoute || route$1;
      const nodes = [...contextRoute.layouts, route$1];
      if (lastRoute)
        delete lastRoute.last;
      route$1.last = lastRoute;
      lastRoute = route$1;
      if (!proxyToUrl)
        urlRoute.set(route$1);
      route.set(route$1);
      route$1.api.preload().then(() => {
        isChangingPage.set(true);
        callback(nodes);
      });
    }
    const destroy = createEventListeners(updatePage);
    return {updatePage, destroy};
  }
  function createEventListeners(updatePage) {
    ["pushState", "replaceState"].forEach((eventName) => {
      if (!history[eventName + "Native"])
        history[eventName + "Native"] = history[eventName];
      history[eventName] = async function(state = {}, title, url2) {
        const currentUrl = location.pathname + location.search + location.hash;
        if (url2 === currentUrl)
          return false;
        const {id: id2, path, params: params2} = get_store_value(route);
        state = {id: id2, path, params: params2, ...state};
        const event = new Event(eventName.toLowerCase());
        Object.assign(event, {state, title, url: url2});
        const route$1 = await runHooksBeforeUrlChange(event, url2);
        if (route$1) {
          history[eventName + "Native"].apply(this, [state, title, url2]);
          return dispatchEvent(event);
        }
      };
    });
    let _ignoreNextPop = false;
    const listeners = {
      click: handleClick,
      pushstate: () => updatePage(),
      replacestate: () => updatePage(),
      popstate: async (event) => {
        if (_ignoreNextPop)
          _ignoreNextPop = false;
        else {
          if (await runHooksBeforeUrlChange(event, currentLocation().fullpath)) {
            updatePage();
          } else {
            _ignoreNextPop = true;
            event.preventDefault();
            history.go(1);
          }
        }
      }
    };
    Object.entries(listeners).forEach((args) => addEventListener(...args));
    const unregister = () => {
      Object.entries(listeners).forEach((args) => removeEventListener(...args));
    };
    return unregister;
  }
  function handleClick(event) {
    const el = event.target.closest("a");
    const href = el && el.href;
    if (event.ctrlKey || event.metaKey || event.altKey || event.shiftKey || event.button || event.defaultPrevented)
      return;
    if (!href || el.target || el.host !== location.host)
      return;
    const url2 = new URL(href);
    const relativeUrl = url2.pathname + url2.search + url2.hash;
    event.preventDefault();
    history.pushState({}, "", relativeUrl);
  }
  async function runHooksBeforeUrlChange(event, url2) {
    const route2 = urlToRoute(url2).api;
    for (const hook of beforeUrlChange._hooks.filter(Boolean)) {
      const result = await hook(event, route2, {url: url2});
      if (!result)
        return false;
    }
    return true;
  }
  var {Object: Object_1} = globals;
  function create_if_block(ctx) {
    let route_1;
    let current;
    route_1 = new Route$1({
      props: {nodes: ctx[0]},
      $$inline: true
    });
    const block = {
      c: function create3() {
        create_component(route_1.$$.fragment);
      },
      m: function mount(target, anchor) {
        mount_component(route_1, target, anchor);
        current = true;
      },
      p: function update2(ctx2, dirty) {
        const route_1_changes = {};
        if (dirty & 1)
          route_1_changes.nodes = ctx2[0];
        route_1.$set(route_1_changes);
      },
      i: function intro(local) {
        if (current)
          return;
        transition_in(route_1.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(route_1.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        destroy_component(route_1, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block.name,
      type: "if",
      source: "(58:0) {#if nodes && $route !== null}",
      ctx
    });
    return block;
  }
  function create_fragment$1(ctx) {
    let t;
    let prefetcher;
    let current;
    let if_block = ctx[0] && ctx[1] !== null && create_if_block(ctx);
    prefetcher = new Prefetcher$1({$$inline: true});
    const block = {
      c: function create3() {
        if (if_block)
          if_block.c();
        t = space();
        create_component(prefetcher.$$.fragment);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert_dev(target, t, anchor);
        mount_component(prefetcher, target, anchor);
        current = true;
      },
      p: function update2(ctx2, [dirty]) {
        if (ctx2[0] && ctx2[1] !== null) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty & 3) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block(ctx2);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(t.parentNode, t);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
      },
      i: function intro(local) {
        if (current)
          return;
        transition_in(if_block);
        transition_in(prefetcher.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(if_block);
        transition_out(prefetcher.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach_dev(t);
        destroy_component(prefetcher, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_fragment$1.name,
      type: "component",
      source: "",
      ctx
    });
    return block;
  }
  function instance$1($$self, $$props, $$invalidate) {
    let $route;
    validate_store(route, "route");
    component_subscribe($$self, route, ($$value) => $$invalidate(1, $route = $$value));
    let {$$slots: slots = {}, $$scope} = $$props;
    validate_slots("Router", slots, []);
    let {routes: routes2} = $$props;
    let {config = {}} = $$props;
    let nodes;
    let navigator2;
    window.routify = window.routify || {};
    window.routify.inBrowser = !window.navigator.userAgent.match("jsdom");
    Object.assign(defaultConfig, config);
    const updatePage = (...args) => navigator2 && navigator2.updatePage(...args);
    setContext("routifyupdatepage", updatePage);
    const callback = (res) => $$invalidate(0, nodes = res);
    const cleanup = () => {
      if (!navigator2)
        return;
      navigator2.destroy();
      navigator2 = null;
    };
    let initTimeout = null;
    const doInit = () => {
      clearTimeout(initTimeout);
      initTimeout = setTimeout(() => {
        cleanup();
        navigator2 = init(routes2, callback);
        routes$1.set(routes2);
        navigator2.updatePage();
      });
    };
    onDestroy(cleanup);
    const writable_props = ["routes", "config"];
    Object_1.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
        console.warn(`<Router> was created with unknown prop '${key}'`);
    });
    $$self.$$set = ($$props2) => {
      if ("routes" in $$props2)
        $$invalidate(2, routes2 = $$props2.routes);
      if ("config" in $$props2)
        $$invalidate(3, config = $$props2.config);
    };
    $$self.$capture_state = () => ({
      setContext,
      onDestroy,
      Route: Route$1,
      Prefetcher: Prefetcher$1,
      init,
      route,
      routesStore: routes$1,
      defaultConfig,
      routes: routes2,
      config,
      nodes,
      navigator: navigator2,
      updatePage,
      callback,
      cleanup,
      initTimeout,
      doInit,
      $route
    });
    $$self.$inject_state = ($$props2) => {
      if ("routes" in $$props2)
        $$invalidate(2, routes2 = $$props2.routes);
      if ("config" in $$props2)
        $$invalidate(3, config = $$props2.config);
      if ("nodes" in $$props2)
        $$invalidate(0, nodes = $$props2.nodes);
      if ("navigator" in $$props2)
        navigator2 = $$props2.navigator;
      if ("initTimeout" in $$props2)
        initTimeout = $$props2.initTimeout;
    };
    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 4) {
        if (routes2)
          doInit();
      }
    };
    return [nodes, $route, routes2, config];
  }
  var Router = class extends SvelteComponentDev {
    constructor(options) {
      super(options);
      init$1(this, options, instance$1, create_fragment$1, safe_not_equal, {routes: 2, config: 3});
      dispatch_dev("SvelteRegisterComponent", {
        component: this,
        tagName: "Router",
        options,
        id: create_fragment$1.name
      });
      const {ctx} = this.$$;
      const props = options.props || {};
      if (ctx[2] === void 0 && !("routes" in props)) {
        console.warn("<Router> was created without expected prop 'routes'");
      }
    }
    get routes() {
      throw new Error("<Router>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    set routes(value) {
      throw new Error("<Router>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    get config() {
      throw new Error("<Router>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    set config(value) {
      throw new Error("<Router>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  };
  if (import_meta && import_meta.hot) {
    Router = applyHmr({m: import_meta, id: "/mnt/c/dev/repo/personal/svelte-wordpress-templates/svelte-routify/node_modules/@roxi/routify/runtime/Router.svelte", hotOptions: {preserveLocalState: false, noPreserveStateKey: ["@hmr:reset", "@!hmr"], preserveAllLocalStateKey: "@hmr:keep-all", preserveLocalStateKey: "@hmr:keep", noReload: false, optimistic: true, acceptNamedExports: true, acceptAccessors: true, injectCss: false, cssEjectDelay: 100, native: false, importAdapterName: "___SVELTE_HMR_HOT_API_PROXY_ADAPTER", noOverlay: false, allowLiveBinding: false}, Component: Router, ProxyAdapter: adapter, acceptable: true, preserveLocalState: false, emitCss: false});
  }
  var Router$1 = Router;
  function createNodeMiddleware(fn) {
    const inner = async function execute(payload) {
      return await nodeMiddleware(fn, {
        file: payload.tree,
        state: {treePayload: payload},
        scope: {}
      });
    };
    inner.sync = function executeSync(payload) {
      return nodeMiddlewareSync(fn, {
        file: payload.tree,
        state: {treePayload: payload},
        scope: {}
      });
    };
    return inner;
  }
  async function nodeMiddleware(fn, payload) {
    const _file = await fn(payload);
    if (_file === false)
      return false;
    const file2 = _file || payload.file;
    if (file2.children) {
      const children2 = await Promise.all(file2.children.map(async (_file2) => nodeMiddleware(fn, {
        state: payload.state,
        scope: clone(payload.scope || {}),
        parent: payload.file,
        file: await _file2
      })));
      file2.children = children2.filter(Boolean);
    }
    return file2;
  }
  function nodeMiddlewareSync(fn, payload) {
    const _file = fn(payload);
    if (_file === false)
      return false;
    const file2 = _file || payload.file;
    if (file2.children) {
      const children2 = file2.children.map((_file2) => nodeMiddlewareSync(fn, {
        state: payload.state,
        scope: clone(payload.scope || {}),
        parent: payload.file,
        file: _file2
      }));
      file2.children = children2.filter(Boolean);
    }
    return file2;
  }
  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  var setRegex = createNodeMiddleware(({file: file2}) => {
    if (file2.isPage || file2.isFallback)
      file2.regex = pathToRegex(file2.path, file2.isFallback);
  });
  var setParamKeys = createNodeMiddleware(({file: file2}) => {
    file2.paramKeys = pathToParamKeys(file2.path);
  });
  var setShortPath = createNodeMiddleware(({file: file2}) => {
    if (file2.isFallback || file2.isIndex)
      file2.shortPath = file2.path.replace(/\/[^/]+$/, "");
    else
      file2.shortPath = file2.path;
  });
  var setRank = createNodeMiddleware(({file: file2}) => {
    file2.ranking = pathToRank(file2);
  });
  var addMetaChildren = createNodeMiddleware(({file: file2}) => {
    const node2 = file2;
    const metaChildren = file2.meta && file2.meta.children || [];
    if (metaChildren.length) {
      node2.children = node2.children || [];
      node2.children.push(...metaChildren.map((meta2) => ({isMeta: true, ...meta2, meta: meta2})));
    }
  });
  var setIsIndexable = createNodeMiddleware((payload) => {
    const {file: file2} = payload;
    const {isFallback, meta: meta2} = file2;
    const isDynamic = file2.path.split("/").pop().startsWith(":");
    const isIndex = file2.path.endsWith("/index");
    const isIndexed = meta2.index || meta2.index === 0;
    const isHidden = meta2.index === false;
    file2.isIndexable = isIndexed || !isFallback && !isDynamic && !isIndex && !isHidden;
    file2.isNonIndexable = !file2.isIndexable;
  });
  var assignRelations = createNodeMiddleware(({file: file2, parent: parent2}) => {
    Object.defineProperty(file2, "parent", {get: () => parent2});
    Object.defineProperty(file2, "nextSibling", {get: () => _getSibling(file2, 1)});
    Object.defineProperty(file2, "prevSibling", {get: () => _getSibling(file2, -1)});
    Object.defineProperty(file2, "lineage", {get: () => _getLineage(parent2)});
  });
  function _getLineage(node2, lineage = []) {
    if (node2) {
      lineage.unshift(node2);
      _getLineage(node2.parent, lineage);
    }
    return lineage;
  }
  function _getSibling(file2, direction) {
    if (!file2.root) {
      const siblings = file2.parent.children.filter((c) => c.isIndexable);
      const index = siblings.indexOf(file2);
      return siblings[index + direction];
    }
  }
  var assignIndex = createNodeMiddleware(({file: file2, parent: parent2}) => {
    if (file2.isIndex)
      Object.defineProperty(parent2, "index", {get: () => file2});
  });
  var assignLayout = createNodeMiddleware(({file: file2, scope}) => {
    Object.defineProperty(file2, "layouts", {get: () => getLayouts(file2)});
    function getLayouts(file3) {
      if (!file3.isLayout && file3.meta.reset)
        return [];
      const {parent: parent2} = file3;
      const layout = parent2 && parent2.component && parent2;
      const isReset = layout && (layout.isReset || layout.meta.reset);
      const layouts = parent2 && !isReset && getLayouts(parent2) || [];
      if (layout)
        layouts.push(layout);
      return layouts;
    }
  });
  var createFlatList = (treePayload) => {
    createNodeMiddleware((payload) => {
      if (payload.file.isPage || payload.file.isFallback)
        payload.state.treePayload.routes.push(payload.file);
    }).sync(treePayload);
    treePayload.routes.sort((c, p) => c.ranking >= p.ranking ? -1 : 1);
  };
  var setPrototype = createNodeMiddleware(({file: file2}) => {
    const Prototype2 = file2.root ? Root : file2.children ? file2.isPage ? PageDir : Dir : file2.isReset ? Reset : file2.isLayout ? Layout : file2.isFallback ? Fallback : Page;
    Object.setPrototypeOf(file2, Prototype2.prototype);
    function Layout() {
    }
    function Dir() {
    }
    function Fallback() {
    }
    function Page() {
    }
    function PageDir() {
    }
    function Reset() {
    }
    function Root() {
    }
  });
  var miscPlugins = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    setRegex,
    setParamKeys,
    setShortPath,
    setRank,
    addMetaChildren,
    setIsIndexable,
    assignRelations,
    assignIndex,
    assignLayout,
    createFlatList,
    setPrototype
  });
  var defaultNode = {
    isDir: false,
    ext: "svelte",
    isLayout: false,
    isReset: false,
    isIndex: false,
    isFallback: false,
    isPage: false,
    ownMeta: {},
    meta: {
      recursive: true,
      preload: false,
      prerender: true
    },
    id: "__fallback"
  };
  function restoreDefaults(node2) {
    Object.entries(defaultNode).forEach(([key, value]) => {
      if (typeof node2[key] === "undefined")
        node2[key] = value;
    });
    if (node2.children)
      node2.children = node2.children.map(restoreDefaults);
    return node2;
  }
  var assignAPI = createNodeMiddleware(({file: file2}) => {
    file2.api = new ClientApi(file2);
  });
  var ClientApi = class {
    constructor(file2) {
      this.__file = file2;
      Object.defineProperty(this, "__file", {enumerable: false});
      this.isMeta = !!file2.isMeta;
      this.path = file2.path;
      this.title = _prettyName(file2);
      this.meta = file2.meta;
    }
    get parent() {
      return !this.__file.root && this.__file.parent.api;
    }
    get children() {
      return (this.__file.children || this.__file.isLayout && this.__file.parent.children || []).filter((c) => !c.isNonIndexable).sort((a, b) => {
        if (a.isMeta && b.isMeta)
          return 0;
        a = (a.meta.index || a.meta.title || a.path).toString();
        b = (b.meta.index || b.meta.title || b.path).toString();
        return a.localeCompare(b, void 0, {numeric: true, sensitivity: "base"});
      }).map(({api}) => api);
    }
    get next() {
      return _navigate(this, 1);
    }
    get prev() {
      return _navigate(this, -1);
    }
    async preload() {
      const filePromises = [
        ...this.__file.layouts,
        this.__file,
        this.index && this.index.__file
      ].filter(Boolean).map((file2) => file2.component());
      await Promise.all(filePromises);
    }
    get component() {
      return this.__file.component ? this.__file.component() : this.__file.index ? this.__file.index.component() : false;
    }
    get componentWithIndex() {
      return new Promise((resolve2) => Promise.all([
        this.component,
        this.index && this.index.component
      ]).then((res) => resolve2(res)));
    }
    get index() {
      const child = this.__file.children && this.__file.children.find((child2) => child2.isIndex);
      return child && child.api;
    }
  };
  function _navigate(node2, direction) {
    if (!node2.__file.root) {
      const siblings = node2.parent.children;
      const index = siblings.indexOf(node2);
      return node2.parent.children[index + direction];
    }
  }
  function _prettyName(file2) {
    if (typeof file2.meta.title !== "undefined")
      return file2.meta.title;
    else
      return (file2.shortPath || file2.path).split("/").pop().replace(/-/g, " ");
  }
  var plugins = {
    ...miscPlugins,
    restoreDefaults: ({tree: tree2}) => restoreDefaults(tree2),
    assignAPI
  };
  function buildClientTree(tree2) {
    const order = [
      "restoreDefaults",
      "setParamKeys",
      "setRegex",
      "setShortPath",
      "setRank",
      "assignLayout",
      "setPrototype",
      "addMetaChildren",
      "assignRelations",
      "setIsIndexable",
      "assignIndex",
      "assignAPI",
      "createFlatList"
    ];
    const payload = {tree: tree2, routes: []};
    for (let name of order) {
      const fn = plugins[name].sync || plugins[name];
      fn(payload);
    }
    return payload;
  }
  var _tree = {
    name: "_layout",
    filepath: "/_layout.svelte",
    root: true,
    ownMeta: {
      preload: "proximity"
    },
    absolutePath: "/mnt/c/dev/repo/personal/svelte-wordpress-templates/svelte-routify/src/pages/_layout.svelte",
    children: [
      {
        isFile: true,
        isDir: false,
        file: "_fallback.svelte",
        filepath: "/_fallback.svelte",
        name: "_fallback",
        ext: "svelte",
        badExt: false,
        absolutePath: "/mnt/c/dev/repo/personal/svelte-wordpress-templates/svelte-routify/src/pages/_fallback.svelte",
        importPath: "../src/pages/_fallback.svelte",
        isLayout: false,
        isReset: false,
        isIndex: false,
        isFallback: true,
        isPage: false,
        ownMeta: {},
        meta: {
          recursive: true,
          preload: "proximity",
          prerender: true
        },
        path: "/_fallback",
        id: "__fallback",
        component: () => Promise.resolve().then(() => require_fallback()).then((m) => m.default)
      },
      {
        isFile: false,
        isDir: true,
        file: "[category]",
        filepath: "/[category]",
        name: "[category]",
        ext: "",
        badExt: false,
        absolutePath: "/mnt/c/dev/repo/personal/svelte-wordpress-templates/svelte-routify/src/pages/[category]",
        children: [
          {
            isFile: false,
            isDir: true,
            file: "[subpage]",
            filepath: "/[category]/[subpage]",
            name: "[subpage]",
            ext: "",
            badExt: false,
            absolutePath: "/mnt/c/dev/repo/personal/svelte-wordpress-templates/svelte-routify/src/pages/[category]/[subpage]",
            children: [
              {
                isFile: true,
                isDir: false,
                file: "index.svelte",
                filepath: "/[category]/[subpage]/index.svelte",
                name: "index",
                ext: "svelte",
                badExt: false,
                absolutePath: "/mnt/c/dev/repo/personal/svelte-wordpress-templates/svelte-routify/src/pages/[category]/[subpage]/index.svelte",
                importPath: "../src/pages/[category]/[subpage]/index.svelte",
                isLayout: false,
                isReset: false,
                isIndex: true,
                isFallback: false,
                isPage: true,
                ownMeta: {},
                meta: {
                  recursive: true,
                  preload: "proximity",
                  prerender: true
                },
                path: "/:category/:subpage/index",
                id: "__category__subpage_index",
                component: () => Promise.resolve().then(() => require_build()).then((m) => m.default)
              }
            ],
            isLayout: false,
            isReset: false,
            isIndex: false,
            isFallback: false,
            isPage: false,
            ownMeta: {},
            meta: {
              recursive: true,
              preload: "proximity",
              prerender: true
            },
            path: "/:category/:subpage"
          },
          {
            isFile: true,
            isDir: false,
            file: "index.svelte",
            filepath: "/[category]/index.svelte",
            name: "index",
            ext: "svelte",
            badExt: false,
            absolutePath: "/mnt/c/dev/repo/personal/svelte-wordpress-templates/svelte-routify/src/pages/[category]/index.svelte",
            importPath: "../src/pages/[category]/index.svelte",
            isLayout: false,
            isReset: false,
            isIndex: true,
            isFallback: false,
            isPage: true,
            ownMeta: {
              "query-params-is-page": true
            },
            meta: {
              "query-params-is-page": true,
              recursive: true,
              preload: "proximity",
              prerender: true
            },
            path: "/:category/index",
            id: "__category_index",
            component: () => Promise.resolve().then(() => require_index2()).then((m) => m.default)
          }
        ],
        isLayout: false,
        isReset: false,
        isIndex: false,
        isFallback: false,
        isPage: false,
        ownMeta: {},
        meta: {
          recursive: true,
          preload: "proximity",
          prerender: true
        },
        path: "/:category"
      },
      {
        isFile: true,
        isDir: false,
        file: "index.svelte",
        filepath: "/index.svelte",
        name: "index",
        ext: "svelte",
        badExt: false,
        absolutePath: "/mnt/c/dev/repo/personal/svelte-wordpress-templates/svelte-routify/src/pages/index.svelte",
        importPath: "../src/pages/index.svelte",
        isLayout: false,
        isReset: false,
        isIndex: true,
        isFallback: false,
        isPage: true,
        ownMeta: {
          "query-params-is-page": true
        },
        meta: {
          "query-params-is-page": true,
          recursive: true,
          preload: "proximity",
          prerender: true
        },
        path: "/index",
        id: "_index",
        component: () => Promise.resolve().then(() => require_index3()).then((m) => m.default)
      }
    ],
    isLayout: true,
    isReset: false,
    isIndex: false,
    isFallback: false,
    isPage: false,
    isFile: true,
    file: "_layout.svelte",
    ext: "svelte",
    badExt: false,
    importPath: "../src/pages/_layout.svelte",
    meta: {
      preload: "proximity",
      recursive: true,
      prerender: true
    },
    path: "/",
    id: "__layout",
    component: () => Promise.resolve().then(() => require_layout()).then((m) => m.default)
  };
  var {tree, routes} = buildClientTree(_tree);
  var CLIENT = typeof Symbol !== "undefined" ? Symbol("client") : "@@client";
  function setClient(client) {
    setContext(CLIENT, client);
  }
  function add_css(target) {
    append_styles(target, "svelte-1p49y1t", "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLnN2ZWx0ZSIsIm1hcHBpbmdzIjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbInNyYy9BcHAuc3ZlbHRlIl19 */");
  }
  function create_fragment(ctx) {
    let router;
    let current;
    router = new Router$1({
      props: {
        routes
      },
      $$inline: true
    });
    const block = {
      c: function create3() {
        create_component(router.$$.fragment);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        mount_component(router, target, anchor);
        current = true;
      },
      p: noop,
      i: function intro(local) {
        if (current)
          return;
        transition_in(router.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(router.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        destroy_component(router, detaching);
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
    let _$$props$$$slots = $$props.$$slots, slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
    $$props.$$scope;
    validate_slots("App", slots, []);
    const writable_props = [];
    Object.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
        console.warn(`<App> was created with unknown prop '${key}'`);
    });
    $$self.$capture_state = () => ({
      Router: Router$1,
      routes,
      setClient
    });
    return [];
  }
  var App = class extends SvelteComponentDev {
    constructor(options) {
      super(options);
      init$1(this, options, instance, create_fragment, safe_not_equal, {}, add_css);
      dispatch_dev("SvelteRegisterComponent", {
        component: this,
        tagName: "App",
        options,
        id: create_fragment.name
      });
    }
  };
  if (import_meta && import_meta.hot) {
    App = applyHmr({
      m: import_meta,
      id: "/mnt/c/dev/repo/personal/svelte-wordpress-templates/svelte-routify/src/App.svelte",
      hotOptions: {
        preserveLocalState: false,
        noPreserveStateKey: ["@hmr:reset", "@!hmr"],
        preserveAllLocalStateKey: "@hmr:keep-all",
        preserveLocalStateKey: "@hmr:keep",
        noReload: false,
        optimistic: true,
        acceptNamedExports: true,
        acceptAccessors: true,
        injectCss: false,
        cssEjectDelay: 100,
        native: false,
        importAdapterName: "___SVELTE_HMR_HOT_API_PROXY_ADAPTER",
        noOverlay: false,
        allowLiveBinding: false
      },
      Component: App,
      ProxyAdapter: adapter,
      acceptable: true,
      preserveLocalState: false,
      emitCss: false
    });
  }
  var App$1 = App;
  if (!window.wordpress) {
    console.log("<Fetching wordpress object>");
    fetch("http://svelte-templates.test/wp-json/mammut/wordpress.js?uri=" + window.location.pathname).then((response) => response.json().then((json) => {
      window.wordpress = json;
      HMR(App$1, {
        target: document.body
      });
    }));
  } else {
    HMR(App$1, {
      target: document.body
    });
  }
})();
