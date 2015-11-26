var path = require('path');

//figure out if we're in production
var production = process.env.NODE_ENV === 'production';

/**
 * Create a helper method
 * @param {Object} config
 * @param {Object} [config.prefix]
 * @param {Object} [config.manifest]
 */
module.exports = function(config) {
  config = config || {};

  var
    file = path.resolve(process.cwd(), config.manifest || 'rev-manifest.json'),
    manifest = require(file)
  ;

  /**
   * Get the asset path
   * @param {string} path The asset path
   */
  return function(asset) {

    //reload the manifest file so the dev doesn't have to restart the server every time they change the frontend
    if (!production) {
      manifest = require(file);
    }

    return path.join('/', config.prefix || '', manifest[asset] || asset).replace('\\');
  };

};