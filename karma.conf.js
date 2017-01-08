require('babel-register');
var webpack = require('./webpack.config.babel.js');
var path = require('path');

webpack.module.loaders.push({
	test: /\.jsx?$/,
	loader: 'isparta',
	include: path.resolve(__dirname, '../src')
});

module.exports = function(config) {
	config.set({
		basePath: './',
		frameworks: ['mocha', 'chai-sinon'],
		reporters: ['mocha', 'coverage'],
		coverageReporter: {
			reporters: [
				{
					type: 'text-summary'
				},
				{
					type: 'html',
					dir: 'coverage',
					subdir: '.'
				}
			]
		},
		browsers: ['PhantomJS'],
		files: [
			'node_modules/babel-polyfill/dist/polyfill.js',
			'test/*.js'
		],
		preprocessors: {
			'test/**/*.js': ['webpack'],
			'src/**/*.js': ['webpack'],
			'**/*.js': ['sourcemap']
		},
		babelPreprocessor: {
            options: {
                presets: ['es2015']
            }
        },
		webpack: webpack,
		webpackMiddleware: { noInfo: true }
	});
};
