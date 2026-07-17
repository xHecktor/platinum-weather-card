import typescript from 'rollup-plugin-typescript2';
import keysTransformer from 'ts-transformer-keys/transformer';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';
import json from '@rollup/plugin-json';
import ignore from './rollup-plugins/ignore';
import { ignoreTextfieldFiles } from './elements/ignore/textfield';
import { ignoreSelectFiles } from './elements/ignore/select';
import { ignoreSwitchFiles } from './elements/ignore/switch';

const dev = process.env.ROLLUP_WATCH;

// Some lit versions have `lit/index.js` import `lit-html/is-server.js` while the
// resolved `lit-html` package does not ship that file, which leaves an unresolved
// bare `import "lit-html/is-server.js"` in the bundle that the browser cannot load.
// Provide it as an inlined stub so the output stays self-contained. In the browser
// `isServer` is always false.
const litIsServerStub = {
  name: 'lit-is-server-stub',
  resolveId(source) {
    if (source === 'lit-html/is-server.js') {
      return source;
    }
    return null;
  },
  load(id) {
    if (id === 'lit-html/is-server.js') {
      return 'export const isServer = false;';
    }
    return null;
  },
};

const serveopts = {
  contentBase: ['./dist'],
  host: '0.0.0.0',
  port: 5000,
  allowCrossOrigin: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
};

const plugins = [
  litIsServerStub,
  nodeResolve({}),
  commonjs(),
  typescript({ transformers: [service => ({
    before: [ keysTransformer(service.getProgram()) ],
    after: []
  })] }),
  json(),
  babel({
    exclude: 'node_modules/**',
  }),
  dev && serve(serveopts),
  !dev && terser(),
  ignore({
    files: [...ignoreTextfieldFiles, ...ignoreSelectFiles, ...ignoreSwitchFiles].map((file) => require.resolve(file)),
  }),
];

export default [
  {
    input: 'src/platinum-weather-card.ts',
    output: {
      dir: 'dist',
      format: 'es',
    },
    plugins: [...plugins],
  },
];
