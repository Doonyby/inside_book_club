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
			{ test: /\.js$/, 
			  loaders: [ 'react-hot', 'babel', 'babel-loader' ], 
			  exclude: path.resolve(__dirname, 'node_modules'),
			  include: [
				path.join(__dirname, 'client'),
				path.join(__dirname, 'server/shared')
			  ]
			},
			{ test: /\.css$/, loader: "style!css" }
		]
	},
	resolve: {
		extensions: ['', '.js']
	}
};