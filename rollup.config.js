import babel from 'rollup-plugin-babel';

export default {
  input: 'index.js',
  output: {
    file: 'index.build.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',

      presets: [
        'react'
      ]
    })
  ]
}
