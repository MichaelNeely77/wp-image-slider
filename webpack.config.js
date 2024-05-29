const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

module.exports = {
	...defaultConfig,
	entry: {
		index: path.resolve(__dirname, 'src', 'index.js'),
		frontend: path.resolve(__dirname, 'src', 'frontend')
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'build')
	}
}