import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// Import the Netlify adapter
import netlify from '@astrojs/netlify/functions';  // Cambiamos a Netlify

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server', // Puedes mantener esta línea si el proyecto requiere salida de servidor
  adapter: netlify(), // Cambiamos a Netlify
});