var webpack = require('webpack');
var path = require('path');
var json = require('json-loader');

module.exports = {
	devtools: 'source-map',
	entry: [
		'./client/index.js',
	],
	output: {
	  path: path.join(__dirname, 'public'),
	  filename: 'bundle.js',
	  publicPath: '/public/'
	},
	plugins: [
	  new webpack.optimize.DedupePlugin(),
	  new webpack.optimize.UglifyJsPlugin({
	    minimize: true,
	    compress: {
	      warnings: false
	    }
	  })
	],
	module: {
		loaders: [
			{ loader: 'babel-loader',
			  test: /\.js$/, 
			  exclude: path.resolve(__dirname, 'node_modules'),
			  include: [
				path.resolve(__dirname, 'client')
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