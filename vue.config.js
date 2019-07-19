const webpack = require('webpack')
const path = require('path')
module.exports = {
  lintOnSave: false,
  publicPath: './',


  configureWebpack: {

    plugins: [

      new webpack.ProvidePlugin({

        $: "jquery",

        jQuery: "jquery",

        "windows.jQuery": "jquery"

      }),

  


    ]

  }

}