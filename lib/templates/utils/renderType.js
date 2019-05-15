const env = require('jsdoc/env');
const helper = require('jsdoc/util/templateHelper');
const typeLinks = env.opts.typeLinkExt && require(env.opts.typeLinkExt).typeLinks;
const linkto = helper.linkto;
const htmlsafe = helper.htmlsafe;
if(typeLinks){
  for (const typeLink in typeLinks) {
    helper.registerLink(typeLink, typeLinks[typeLink]);
  }
}
module.exports = function renderTypes(type) {
  var name = ((type && type.names) || []).map(htmlsafe).join('|');
  return linkto(name, htmlsafe(name)) 
};
