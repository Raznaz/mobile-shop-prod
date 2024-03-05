module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		// 'eslint:recommended',
		// 'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		// 'airbnb',
	],
	// overrides: [
	// 	{
	// 		env: {
	// 			node: true,
	// 		},
	// 		files: ['.eslintrc.{js,cjs}'],
	// 		parserOptions: {
	// 			sourceType: 'script',
	// 		},
	// 	},
	// ],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'react'],
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': 'off',
		quotes: ['error', 'single'],
		semi: 'off',
	},
	globals: {
		__IS_DEV__: true,
	},
};
