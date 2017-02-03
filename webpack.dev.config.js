var webpack = require('webpack');
var path = require('path');
var json = require('json-loader');

module.exports = {
	devtools: 'eval',
	entry: [
		'webpack-hot-middleware/client',
		path.join(__dirname, '/client/index.js'),
	],
	output: {
	    path: path.join(__dirname, 'public'),
	    filename: 'bundle.js',
	    publicPath: '/public/'
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{ loader: 'babel-loader',
			  test: /\.js$/, 
			  exclude: path.resolve(__dirname, 'node_modules'),
			  include: [
				path.resolve(__dirname, 'client'),
				path.resolve(__dirname, 'app'),
				path.resolve(__dirname, 'server')
			  ]
			},
			{ test: /\.css$/, loader: "style!css" },
			{test: /\.json$/, loader: 'json-loader'}
		]
	},
	resolve: {
		extensions: ['', '.js']
	}
};