rollup-plugin-superviews
========================

This is a Rollup plugin to compile html to [incremental-dom](http://google.github.io/incremental-dom/) using [superviews.js](https://github.com/davidjamesstone/superviews.js).  

# Installation and Rollup Configuration
Install it using npm: ```npm i rollup-plugin-superviews -D```.

Incorporate it into your rollup config file. For a list of available options, see [superviews.js](https://github.com/davidjamesstone/superviews.js).

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

# Use

```Javascript
import {render} from './template.html';
import {patch} from 'incremental-dom';

class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `<style>${css}</style><container></container>`;
    this.element = this.shadowRoot.querySelector('container');
  }

  attributeChangedCallback(name, oVal, nVal) {

  }

  connectedCallback() {
    this._updateView();
  }

  disconnectedCallback() {

  }

  _updateView() {
    if (this.element) patch(this.element, render, this);
  }

  static get observedAttributes() {
    return [];
  }
}

customElements.define('my-component', MyComponent);

export { MyComponent };
```
