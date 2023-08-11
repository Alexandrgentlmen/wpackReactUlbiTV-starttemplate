// const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
	mode: 'development',
	entry: ['@babel/polyfill', './src/index.jsx'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[hash].js'
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './src/index.html' }),
		new CleanWebpackPlugin(),
	],
	devServer: {
		port: 3000,
		'static': {
			directory: './dist'
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: ['@babel/preset-react']
				}
			},
			{
				test: /\.(css|scss)$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				]
			},
			{
				test: /\.(jpg|jpeg|png|svg)$/,
				use: [
					'file-loader',
				]
			}
		]
	},
}