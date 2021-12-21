require("dotenv").config();
import svelte from "rollup-plugin-svelte-hot";
import resolve from "@rollup/plugin-node-resolve";
import replace from '@rollup/plugin-replace'
import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import { copySync, removeSync } from "fs-extra";
import { spassr } from "spassr";
import getConfig from "@roxi/routify/lib/utils/config";
import autoPreprocess from "svelte-preprocess";
import alias from "@rollup/plugin-alias";
import path from "path";
import babel from "@rollup/plugin-babel";
import { existsSync } from 'fs'

const { distDir } = getConfig(); // use Routify's distDir
const assetsDir = "assets";
const buildDir = `${distDir}/build`;
const production = !process.env.ROLLUP_WATCH;
const projectRootDir = path.resolve(__dirname);

// clear previous builds
production && removeSync(distDir);
removeSync(buildDir);

const serve = () => ({
  writeBundle: async () => {
    const options = {
      assetsDir: [assetsDir, distDir],
      entrypoint: `${assetsDir}/__app.html`,
      script: `${buildDir}/main.js`,
    };
    spassr({ ...options, port: 5000 });
    spassr({ ...options, ssr: true, port: 5005, ssrOptions: { inlineDynamicImports: true, dev: true } });
  },
});
const copyToDist = () => ({
  writeBundle() {
    copySync(assetsDir, distDir);
  },
});

export default {
  preserveEntrySignatures: false,
  input: [`src/main.js`],
  output: {
    sourcemap: true,
    format: "esm",
    dir: buildDir,
    // for performance, disabling filename hashing in development
    chunkFileNames: `[name]${(production && "-[hash]") || ""}.js`,
  },
  // Ignore wordpress not defined warning messages
  onwarn: (warning, onwarn) => {
    if (warning.message !== "'wordpress' is not defined") onwarn(warning)
  },
  plugins: [
    alias({
      entries: [
        {
          find: "@pages",
          replacement: path.resolve(projectRootDir, "src/pages"),
        },
        {
          find: "@utils",
          replacement: path.resolve(projectRootDir, "src/utils"),
        },
      ],
    }),
    svelte({
      emitCss: false,
      preprocess: [
        autoPreprocess(),
      ],
    }),
    replace({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      WORDPRESS_URI: JSON.stringify(process.env.WORDPRESS_URI),
    }),
    // resolve matching modules from current working directory
    resolve({
      browser: true,
      dedupe: (importee) => !!importee.match(/svelte(\/|$)/),
    }),
    babel({
      extensions: [".js", ".mjs", ".html", ".svelte"],
      include: ["src/**", "node_modules/svelte/**"],
    }),
    commonjs(),

    production && terser(),
    !production && serve(),
    !production && livereload({ watch: distDir, delay: 1000 }), // refresh entire window when code is updated
    production && copyToDist(),
  ],
  watch: {
    clearScreen: false,
    buildDelay: 100,
  },
};
