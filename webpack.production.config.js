var webpack = require('webpack');
var path = require('path');
var json = require('json-loader');

module.exports = {
	devtools: 'eval-source-map',
	entry: [
		'babel-polyfill', __dirname + "/server/server.js",
	],
	output: {
	    path: path.resolve(__dirname, 'public', 'build'),
	    filename: 'bundle.js'
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.CommonsChunkPlugin('common.js'),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.AggressiveMergingPlugin()
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