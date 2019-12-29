const withPlugins = require('next-compose-plugins');
const withImages = require('next-images')
const withSass = require('@zeit/next-sass')
const withFonts = require('next-fonts');

module.exports = withPlugins([
   [withImages, {}],
   [withFonts, {}],
   [withSass, {cssModules: true}],
]);



