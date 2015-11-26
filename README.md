# rev-manifest-path

Get the cache busted path of an asset from a `gulp-rev` or `gulp-rev-all` manifest.

## Installation

    npm install --save rev-manifest-path

## Usage

```javascript

var helper = require('rev-manifest-path');

var assetPath = helper({
  prefix: '/assets',
  manifest: './build/rev-manifest.json'
});

console.log(assetPath('bundled.js')) //prints "/assets/bundled.fdfd034b.js"
console.log(assetPath('bundled.css')) //prints "/assets/bundled.d1a51643.css"

```
