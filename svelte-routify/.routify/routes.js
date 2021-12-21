
/**
 * @roxi/routify 2.18.4
 * File generated Tue Dec 21 2021 22:20:48 GMT+0100 (Central European Standard Time)
 */

export const __version = "2.18.4"
export const __timestamp = "2021-12-21T21:20:48.043Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "_layout",
  "filepath": "/_layout.svelte",
  "root": true,
  "ownMeta": {
    "preload": "proximity"
  },
  "absolutePath": "/mnt/c/dev/repo/personal/svelte-wordpress-templates/svelte-routify/src/pages/_layout.svelte",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "_fallback.svelte",
      "filepath": "/_fallback.svelte",
      "name": "_fallback",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/mnt/c/dev/repo/personal/svelte-wordpress-templates/svelte-routify/src/pages/_fallback.svelte",
      "importPath": "../src/pages/_fallback.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": true,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/_fallback",
      "id": "__fallback",
      "component": () => import('../src/pages/_fallback.svelte').then(m => m.default)
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "[category]",
      "filepath": "/[category]",
      "name": "[category]",
      "ext": "",
      "badExt": false,
      "absolutePath": "/mnt/c/dev/repo/personal/svelte-wordpress-templates/svelte-routify/src/pages/[category]",
      "children": [
        {
          "isFile": false,
          "isDir": true,
          "file": "[subpage]",
          "filepath": "/[category]/[subpage]",
          "name": "[subpage]",
          "ext": "",
          "badExt": false,
          "absolutePath": "/mnt/c/dev/repo/personal/svelte-wordpress-templates/svelte-routify/src/pages/[category]/[subpage]",
          "children": [
            {
              "isFile": true,
              "isDir": false,
              "file": "index.svelte",
              "filepath": "/[category]/[subpage]/index.svelte",
              "name": "index",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "/mnt/c/dev/repo/personal/svelte-wordpress-templates/svelte-routify/src/pages/[category]/[subpage]/index.svelte",
              "importPath": "../src/pages/[category]/[subpage]/index.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": true,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": "proximity",
                "prerender": true
              },
              "path": "/:category/:subpage/index",
              "id": "__category__subpage_index",
              "component": () => import('../src/pages/[category]/[subpage]/index.svelte').then(m => m.default)
            }
          ],
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/:category/:subpage"
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/[category]/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/mnt/c/dev/repo/personal/svelte-wordpress-templates/svelte-routify/src/pages/[category]/index.svelte",
          "importPath": "../src/pages/[category]/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {
            "query-params-is-page": true
          },
          "meta": {
            "query-params-is-page": true,
            "recursive": true,
            "preload": "proximity",
            "prerender": true
          },
          "path": "/:category/index",
          "id": "__category_index",
          "component": () => import('../src/pages/[category]/index.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/:category"
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/mnt/c/dev/repo/personal/svelte-wordpress-templates/svelte-routify/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {
        "query-params-is-page": true
      },
      "meta": {
        "query-params-is-page": true,
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    }
  ],
  "isLayout": true,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "isPage": false,
  "isFile": true,
  "file": "_layout.svelte",
  "ext": "svelte",
  "badExt": false,
  "importPath": "../src/pages/_layout.svelte",
  "meta": {
    "preload": "proximity",
    "recursive": true,
    "prerender": true
  },
  "path": "/",
  "id": "__layout",
  "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

