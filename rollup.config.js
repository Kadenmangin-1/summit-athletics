import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import esbuild from 'rollup-plugin-esbuild';
import copy from 'rollup-plugin-copy';

export default {
  input: 'index.html',
  output: {
    dir: 'public',
    format: 'es',
  },
  plugins: [
    nodeResolve(),
    esbuild({
      target: 'es2020',
      minify: true,
    }),
    terser(),
    copy({
      targets: [
        { src: 'assets/**/*', dest: 'public/assets' },
        { src: 'api/**/*', dest: 'public/api' },
      ],
    }),
  ],
};
