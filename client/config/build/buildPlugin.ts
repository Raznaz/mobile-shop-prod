import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildPlugin({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {
	console.log('🚀', path.resolve(__dirname, 'public', 'index.html'));
	console.log('💚', paths.html);

	return [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new webpack.ProgressPlugin(),
	];
}
