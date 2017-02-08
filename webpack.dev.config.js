var webpack = require('webpack');
var path = require('path');
var json = require('json-loader');

module.exports = {
	devtools: 'eval',
	entry: [
		'webpack-hot-middleware/client',
		path.join(__dirname, '/client/App.js'),
	],
	output: {
	    path: '/',
	    filename: 'bundle.js',
	    publicPath: '/'
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
				'./app.js',
				'./server.js'
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