var path = require('path');

//figure out if we're in production
var production = process.env.NODE_ENV === 'production';

/**
 * Attempt to load the manifest file
 * @param   {string} file
 * @returns {Object}
 */
function load(file) {
  try {
    return require(file);
  } catch(err) {
    return {};
  }
}

/**
 * Create a helper method
 * @param {Object} config
 * @param {string} [config.prefix]
 * @param {string} [config.manifest]
 */
module.exports = function(config) {
  config = config || {};

  var
    file = path.resolve(process.cwd(), config.manifest || 'rev-manifest.json'),
    manifest = load(file)
  ;

  /**
   * Get the asset path
   * @param {string} path The asset path
   */
  return function(asset) {

    //reload the manifest file so the dev doesn't have to restart the server every time they change the frontend
    if (!production) {
      manifest = load(file);
    }

    return path.join('/', config.prefix || '', manifest[asset] || asset).replace('\\');
  };

};