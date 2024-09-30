import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ command, mode }) => {
  const port = 3000;
  const env =  loadEnv(mode, process.cwd());

  if(mode === 'development') {
    console.info('Development mode');
  } else {
    console.info('Production mode');
  }
  console.info(env.VITE_NAME);
  console.info(command, mode);
  return {
    server: {
      port,
    },
  };
});
