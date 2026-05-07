// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://4pp.studio',
  // Prod branch + custom domain deployment serves from repository root.
  base: '/',
});
