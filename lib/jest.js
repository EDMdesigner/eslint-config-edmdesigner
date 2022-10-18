module.exports = {
	env: {
		jest: true,
	},
	plugins: [
		"jest"
	],
	extends: [
		"plugin:jest/recommended"
	],
	rules: {
		"jest/consistent-test-it": "error",
		"jest/expect-expect": "error",
		"jest/no-alias-methods": "error",
		"jest/no-commented-out-tests": "error",
		"jest/no-disabled-tests": "warn",
		"jest/no-export": "error",
		"jest/no-focused-tests": "warn",
		"jest/no-identical-title": "error",
		"jest/no-jasmine-globals": "error",
		"jest/no-mocks-import": "error",
		"jest/no-standalone-expect": "error",
		"jest/no-test-prefixes": "error",
		"jest/no-test-return-statement": "error",
		"jest/prefer-called-with": "error",
		"jest/prefer-strict-equal": "error",
		"jest/prefer-to-contain": "error",
		"jest/prefer-to-have-length": "error",
		"jest/prefer-todo": "error",
		"jest/require-top-level-describe": "error",
		"jest/valid-expect-in-promise": "error",
		"jest/valid-expect": "error",
		"jest/valid-title": "error",
	},
	overrides: [
		{
			files: [
				"*.spec.js",
				"*.test.js",
			],


			rules: {
				"max-statements": "off",

			},
		},
	]
}
