import { ResolveOptions } from 'webpack';

export function buildResolved(): ResolveOptions {
	return {
		extensions: ['.tsx', '.ts', '.js'],
	};
}
