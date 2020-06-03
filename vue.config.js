module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        // 这里的选项会传递给 postcss-loader
        plugins: [
          require('postcss-px2rem')({
            remUnit: 100, // 1rem等于多px
          })
        ]
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      },
      '/topic/v1': {
        target: 'https://m.you.163.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      },
      '/xhr/search': {
        target: 'https://m.you.163.com',
        changeOrigin: true
      }
    }
  }
}