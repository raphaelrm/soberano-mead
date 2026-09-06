import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative assets make the build work both at the GitHub Pages repository URL
// (/REPOSITORY/) and when the dist folder is opened/served elsewhere.
export default defineConfig({
  plugins: [react()],
  base: './'
});
