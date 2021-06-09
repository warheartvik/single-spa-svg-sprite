// Temporary until we can use https://github.com/webpack/webpack-dev-server/pull/2143
module.exports = {
    chainWebpack: config => {
      config.devServer.set('inline', false)
      config.devServer.set('hot', true)
      config.devServer
      .headers({
        "Access-Control-Allow-Origin": "*",
      })
      .set("disableHostCheck", true);      
      // config.plugin('SystemJSPublicPathWebpackPlugin').tap((args) => {
      //   args[0].rootDirectoryLevel = 1;
      //   return args;
      // });      
      // Vue CLI 4 output filename is js/[chunkName].js, different from Vue CLI 3
      // More Detail: https://github.com/vuejs/vue-cli/blob/master/packages/%40vue/cli-service/lib/config/app.js#L29
      if (process.env.NODE_ENV !== 'production') {
        config.output.filename(`js/[name].js`)
      }
      config.externals(["vue", "vue-router", /^@warheartmfe\/.+/])
    },
    filenameHashing: false
  }