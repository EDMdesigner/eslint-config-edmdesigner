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
		"suite": "readonly",
		"test": "readonly",
		"describe": "readonly",
		"it": "readonly",
		"expect": "readonly",
		"assert": "readonly",
		"vitest": "readonly",
		"vi": "readonly",
		"beforeAll": "readonly",
		"afterAll": "readonly",
		"beforeEach": "readonly",
		"afterEach": "readonly",
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
