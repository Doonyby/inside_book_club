var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtools: 'eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		path.join(__dirname, '/client/index.js'),
	],
	output: {
	    path: __dirname,
	    publicPath: '/',
	    filename: 'bundle.js'
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		preLoaders: [{test: /\.json$/, loader: 'json'}],
		loaders: [
			{ loader: 'babel-loader',
			  test: /\.js$/, 
			  exclude: path.resolve(__dirname, 'node_modules'),
			  include: [
				path.resolve(__dirname, 'client'),
				path.resolve(__dirname, 'server')
			  ],
			  query: {
		        presets: ['es2015', 'react']
		      }
			},
			{ test: /\.css$/, loader: "style!css" }
		]
	},
	resolve: {
		extensions: ['', '.js']
	}
};