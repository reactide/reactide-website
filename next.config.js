const withImages = require('next-images');

module.exports = withImages({
  assetPrefix: process.env.NODE_ENV === 'production' ? '/reactide-website' : '',
  exportPathMap: function() {
    return {
      "/": { page: "/" }
    }
  },
})

