const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Hugo PIEDANNA | Portfolio'; // Remplacez par le titre souhaité
      return args;
    });
  }
})
