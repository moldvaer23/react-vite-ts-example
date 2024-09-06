module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		warnOnUnsupportedTypeScriptVersion: false,
	},
	settings: {
		react: {
			version: 'detect',
		},
		'import/resolver': {
			alias: {
				map: [
					["@app", "src/app"],
					["@components", "src/components"],
					["@services", "src/services"],
					["@utils", "src/utils"],
					["@styles", "src/styles"],
					["@app-types", "src/types"],
					["@app-config", "src/config"],
				],
				extensions: ['.ts', '.tsx', '.js', '.jsx'],
			},
		},
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'prettier',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:jsx-a11y/recommended',
		'plugin:eslint-comments/recommended',
	],
	rules: {
		quotes: [2, 'single', { avoidEscape: true }],
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['error'],
		'@typescript-eslint/no-var-requires': 'off',
		'react/prop-types': 'off',
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'import/no-unresolved': 'off',
		'react-hooks/exhaustive-deps': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'eslint-comments/no-unlimited-disable': 'off',
	},
}
