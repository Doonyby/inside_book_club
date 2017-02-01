var webpack = require('webpack');
var path = require('path');
var json = require('json-loader');

module.exports = {
	devtools: 'eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		path.join(__dirname, '/client/index.js'),
	],
	output: {
	    path: __dirname,
	    publicPath: './client/',
	    filename: 'bundle.js'
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
				path.resolve(__dirname, 'server')
			  ],
			  query: {
		        presets: ['es2015', 'react', 'stage-2']
		      }
			},
			{ test: /\.css$/, loader: "style!css" },
			{test: /\.json$/, loader: 'json-loader'}
		]
	},
	resolve: {
		extensions: ['', '.js']
	}
};