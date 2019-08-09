const withImages = require('next-images');

let images = withImages()

module.exports = {
  images,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/{reactide-website}' : ''
};
