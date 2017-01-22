import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import postcssImport from 'postcss-import';
import postcssStripInlineComments from 'postcss-strip-inline-comments';
import cssnext from 'postcss-cssnext';
import stylelint from 'stylelint';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ReplacePlugin from 'replace-bundle-webpack-plugin';
import OfflinePlugin from 'offline-plugin';
import path from 'path';
import parseArgs from 'minimist';
import {
	BundleAnalyzerPlugin
} from 'webpack-bundle-analyzer';

const ENV = process.env.NODE_ENV || 'development';
const CSS_MAPS = ENV !== 'production';
const cliArgs = parseArgs(process.argv.slice(2));

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: [ // 'babel-polyfill', // @TODO this is adding some KB
		'./index.js'
	],
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
		filename: 'bundle.js',
		chunkFilename: 'bundle-[id].js'
	},

	resolve: {
		root: [
			path.resolve('./src')
		],
		extensions: [
			'', '.jsx', '.js', '.json', '.css'
		],
		modulesDirectories: [
			path.resolve(__dirname, 'node_modules'),
			'node_modules'
		],
		alias: {
			'react': 'preact-compat',
			'react-dom': 'preact-compat'
		}
	},

	module: {
		preLoaders: [{
			test: /\.jsx?$/,
			exclude: path.resolve(__dirname, 'src'),
			loader: 'source-map'
		}],
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel'
		},
		{
			test: /\.css$/,
			exclude: /node_modules/,
			loader:  ExtractTextPlugin.extract([
				[
					'css-loader?modules',
					'localIdentName=[local]-[hash:base64:5]',
					'importLoaders=1',
					`sourceMap=${CSS_MAPS}`
				].join('&'),
				'postcss-loader?parser=postcss-scss'
			]) 
		},
		{
			test: /\.json$/,
			loader: 'json'
		}, {
			test: /\.(xml|html|txt|md)$/,
			loader: 'raw'
		}, {
			test: /\.(svg|woff2?|ttf|eot|jpe?g|png|gif)(\?.*)?$/i,
			loader: ENV === 'production' ?
				'file?name=[path][name]_[hash:base64:5].[ext]' :
				'url'
		}]
	},

	postcss: () => [
		stylelint({
			ignoreFiles: path.dirname(__dirname, 'node_modules/**/*.css')
		}),
		postcssImport,
		postcssStripInlineComments,
		cssnext({
			browsers: 'last 2 versions'
		})
	],

	plugins: ([
		new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin('style.css',{
			allChunks: true
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(ENV)
		}),
		new HtmlWebpackPlugin({
			template: './index.html',
			minify: {
				collapseWhitespace: true
			}
		}),
		new CopyWebpackPlugin([{
			from: './manifest.json',
			to: './'
		}, {
			from: './favicon.ico',
			to: './'
		}])
	]).concat(ENV === 'production' ?
		[
			// strip out babel-helper invariant checks
			new ReplacePlugin([{
				// this is actually the property name https://github.com/kimhou/replace-bundle-webpack-plugin/issues/1
				partten: /throw\s+(new\s+)?[a-zA-Z]+Error\s*\(/g,
				replacement: () => 'return;('
			}]),
			new OfflinePlugin({
				relativePaths: false,
				AppCache: false,
				ServiceWorker: {
					events: true
				},
				publicPath: '/'
			})
		] :
		[]).concat(cliArgs.stats ?
		[new BundleAnalyzerPlugin()] :
		[]),
	stats: {
		colors: true
	},
	node: {
		global: true,
		process: false,
		Buffer: false,
		__filename: false,
		__dirname: false,
		setImmediate: false
	},

	devtool: ENV === 'production' ?
		'source-map' :
		'cheap-module-eval-source-map',

	devServer: {
		port: process.env.PORT || 8080,
		host: 'localhost',
		colors: true,
		publicPath: '/',
		contentBase: './src',
		compress: true,
		historyApiFallback: true,
		open: true,
		proxy: {
			// OPTIONAL: proxy configuration:
			// '/optional-prefix/**': { // path pattern to rewrite
			//   target: 'http://target-host.com',
			//   pathRewrite: path => path.replace(/^\/[^\/]+\//, '')   // strip first path segment
			// }
		}
	}
};