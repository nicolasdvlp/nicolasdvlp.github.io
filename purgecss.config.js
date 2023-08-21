module.exports = {
  content: [
    'index.html',
    'js/*.js',
    'ajax/*.html',
    'vendor/bootstrap/js/*.js',
    'vendor/magnific-popup/*.js',
    'vendor/owl.carousel/*.js',
  ],
  css: [
    'css/*.css',
    'vendor/font-awesome/css/*.css',
    'vendor/bootstrap/css/*.css',
    'vendor/magnific-popup/*.css',
    'vendor/owl.carousel/assets/*.css',
  ]
}

// purgecss --config ./purgecss.config.js --output ./cssx/