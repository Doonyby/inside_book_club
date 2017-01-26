import path from 'path';
import webpack from 'webpack';

export default {
	devtools: 'eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		path.join(__dirname, '/client/index.js'),
	],
	output: {
		path: '/',
		publicPath: '/'
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		preLoaders: [{test: /\.json$/, loader: 'json'}],
		loaders: [
			{
				test: /\.js$/,
				include: [
					path.join(__dirname, 'client'),
					path.join(__dirname, 'server/shared')
				],
				exclude: path.resolve(__dirname, 'node_modules'),
				loaders: [ 'react-hot', 'babel', 'babel-loader' ]
			}
		]
	},
	resolve: {
		extensions: ['', '.js']
	}
}