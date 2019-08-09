const withImages = require('next-images');

const images = withImages()
const env = process.env.NODE_ENV === 'production' ? '/reactide-website' : '';

module.exports = withImages({
  assetPrefix: process.env.NODE_ENV === 'production' ? '/reactide-website' : '',
  exportPathMap: function() {
    return {
      "/": { page: "/" }
    }
  },
})

