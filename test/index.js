var assert = require('assert');
var helper = require('..');

describe('rev-manifest-path', function() {

  it('should return the URL of an asset that was not cache busted', function() {
    var manifest = __dirname+'/rev-manifest.json';
    assert.equal('/img/logo.png', helper({manifest: manifest})('img/logo.png'));
  });

  it('should return the cached busted URL of an asset that was cache busted', function() {
    var manifest = __dirname+'/rev-manifest.json';
    assert.equal('/bundled.d1a51643.css', helper({manifest: manifest})('bundled.css'));
    assert.equal('/bundled.fdfd034b.js', helper({manifest: manifest})('bundled.js'));
  });

  it('should return the prefixed URL of an asset that was not cache busted', function() {
    var manifest = __dirname+'/rev-manifest.json';
    assert.equal('/dist/img/logo.png', helper({manifest: manifest, prefix: '/dist'})('img/logo.png'));
  });

  it('should return the prefixed and cached busted URL of an asset that was cache busted', function() {
    var manifest = __dirname+'/rev-manifest.json';
    assert.equal('/dist/bundled.d1a51643.css', helper({manifest: manifest, prefix: '/dist'})('bundled.css'));
  });

  it('should return the URL without double slashes when the prefix ended in a slash', function() {
    var manifest = __dirname+'/rev-manifest.json';
    assert.equal('/dist/img/logo.png', helper({manifest: manifest, prefix: '/dist/'})('img/logo.png'));
    assert.equal('/dist/bundled.d1a51643.css', helper({manifest: manifest, prefix: '/dist/'})('bundled.css'));
  });

});