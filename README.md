# rollup-plugin-superviews

This is a thin wrapper around [superviews.js](https://github.com/davidjamesstone/superviews.js). It provides support for compiling html templates using superviews, which uses Google's [incremental-dom](http://google.github.io/incremental-dom/).

Install it using npm: ```npm i rollup-plugin-superviews -D```.

Incorporate it into your rollup config file:

```Javascript
const superviews = require('rollup-plugin-superviews');

export default [
  {
    input: 'src/entry.js',
    plugins: [
      superviews({
        include: 'src/**/*.html',
        name: 'render', // if not provided defaults to 'render'
        argstr: 'ctrl', // if not provided defaults to 'ctrl'
        mode: 'es6' // if not provided defaults to 'es6'
      })
    ],
    output: {
      file: 'dist/output.js',
    }
  }
];
```

For a list of available options, see [superviews.js](https://github.com/davidjamesstone/superviews.js).
