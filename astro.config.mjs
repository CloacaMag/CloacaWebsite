import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    integrations: [],
    server: {
        host: true
    },
    redirects:{
    },
    site: 'https://www.cloacamag.com'
});
