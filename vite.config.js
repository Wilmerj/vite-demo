import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";

export default defineConfig(({ command, mode }) => {
  const port = 3000;
  const env =  loadEnv(mode, process.cwd());

  if(mode === 'development') {
    console.info('Development mode');
    return {
      server: {
        port,
      },
    };
  } else {
    console.info('Production mode');
    return {
      build: {
        lib: {
          entry: resolve(__dirname, 'lib', 'main.js'),
          name: 'demo',
          fileName: (format) => `demo.${format}.js`,
        }
        // rollupOptions: {
        //   input: {
        //     main: resolve(__dirname, 'index.html'),
        //     help: resolve(__dirname, 'help', 'index.html'),
        //   },
        // } // this to use on pages
      }
    };
  }
});
