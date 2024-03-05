module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'airbnb'],
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
		'import/extensions': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/prefer-default-export': 'off',
		'import/no-unresolved': 'off',
		'import/order': 'off',
		'no-shadow': 'off',
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'no-unused-vars': 'warn',
		'no-underscore-dangle': 'off',
	},
	globals: {
		__IS_DEV__: true,
	},
};
