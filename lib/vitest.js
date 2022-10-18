module.exports = {
	plugins: [
		"vitest"
	],
	"rules": {
		"vitest/no-skipped-tests": "error",
		"vitest/assertion-type": ["error", { type: "jest" }],
		"vitest/max-nested-describe": ["error", { max: 5 }],
		"vitest/no-identical-title": "error"

	},
	globals: {
        "vi": "readonly",
		"describe": "readonly",
		"expect": "readonly",
		"beforeEach": "readonly",
		"it": "readonly",
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
