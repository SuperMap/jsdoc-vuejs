const env = require('jsdoc/env');
const { resolve } = require('path');
const getTemplatePath = require('./lib/core/getTemplatePath');

const config = env.conf || {};

config['jsdoc-vuejs'] = config['jsdoc-vuejs'] || {};

// Detect JSDoc template if not specified
if (!Object.prototype.hasOwnProperty.call(config['jsdoc-vuejs'], 'template')) {
  config['jsdoc-vuejs'].template = getTemplatePath(env.opts.template || 'default',env.opts.configure);
  env.opts.typeLinkExt && (env.opts.typeLinkExt = resolve(env.opts.configure,'../',env.opts.typeLinkExt));
}

module.exports = config;
