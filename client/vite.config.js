import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Set the desired host address, e.g., 'localhost' or an IP address
    port: 3001,      // Set the desired port number
  },
});
