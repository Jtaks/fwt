import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify-es'

export default [
  {
    input: 'src/index.js',
    output: {
      file: './build/bundle.js',
      name: 'fwt',
      format: 'umd'
    },
    plugins: [ resolve() ]
  },
  {
    input: 'src/index.js',
    output: {
      file: './build/bundle.min.js',
      name: 'fwt',
      format: 'umd'
    },
    plugins: [ resolve(), uglify() ]
  }
]
