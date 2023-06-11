const MiniCssExteactPlugin = require('mini-css-extract-plugin')

module.exports = {
   entry: {
       index: './src/index.js'
   },
   mode: 'development',
   module:{
       rules:[{
           test: /\.css$/,
           use:[MiniCssExteactPlugin.loader, 'css-loader']
       }]
   },
   plugins:[
       new MiniCssExteactPlugin()
   ]
}