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
	  }),
	  new webpack.DefinePlugin({
	      'process.env': {
	        'NODE_ENV': JSON.stringify('production')
	      }
	  })
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