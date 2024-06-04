import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'SPORT-GREEN',
        short_name: 'ReactApp',
        description: 'Una aplicación React configurada como PWA usando Vite.',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icons/dog.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: 'icons/dog.png',
            sizes: '128x128',
            type: 'image/png',
            
          },
        ],
        screenshots: [
          {
            src: 'screenshots/animal.png',
            sizes: '512x512',
            type: 'image/png',
            form_factor: 'wide',
          },
          {
            src: 'screenshots/animal.png',
            sizes: '512x512',
            type: 'image/png',
            form_factor: 'narrow',
          },
        ],
      },
    }),
  ],
});
