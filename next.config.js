const withImages = require('next-images');

const images = withImages()
const env = process.env.NODE_ENV === 'production' ? '/{reactide-website}' : '';

module.exports = withImages({
  exportPathMap: function() {
    return {
      "/": { page: "/" }
    }
  },
  assetPrefix: env
})

