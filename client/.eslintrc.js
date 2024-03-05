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
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'jsx-quotes': 'off',
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

		'react/function-component-definition': 'off',
		'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
		'react/react-in-jsx-scope': 'off',

		'arrow-body-style': 'off',
		'prefer-destructuring': 'off',
	},
	globals: {
		__IS_DEV__: true,
	},
};
