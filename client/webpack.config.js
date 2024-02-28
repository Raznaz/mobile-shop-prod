const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MODE = 'development';
// const MODE = 'production';

module.exports = {
	mode: MODE,
	entry: path.resolve(__dirname, 'src', 'index.ts'),
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'build'),
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html'),
		}),
		new webpack.ProgressPlugin(),
	],
	module: {
		//Указываем расширения которые выходят за рамки
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
};
