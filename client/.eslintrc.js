module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'react', 'i18next'],
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
		'comma-dangle': 'off',
		'max-len': ['error', { code: 100, ignoreComments: true }],
		'react/function-component-definition': 'off',
		'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
		'react/react-in-jsx-scope': 'off',
		// 'react/self-closing-comp': 'off',
		'react/require-default-props': 'off',
		'arrow-body-style': 'off',
		'prefer-destructuring': 'off',
		// 'i18next/no-literal-string': ['error', { markupOnly: true }],
		'i18next/no-literal-string': 'off',
		'react/jsx-wrap-multilines': 'off',
		'react/jsx-props-no-spreading': 'off',
		'object-curly-newline': 'off',
		'no-param-reassign': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
	},
	globals: {
		__IS_DEV__: true,
	},
};
