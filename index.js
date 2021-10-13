module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: 8,
		parser: "babel-eslint",
	},
	env: {
		es6: true,
		node: true,
	},
	plugins: [
		"json",
		"vue",
	],
	extends: [
		"eslint:recommended",
		"plugin:vue/recommended",
		"plugin:vue/strongly-recommended",
		"plugin:vue/essential",
	],
	rules: {
		// JS SAFETY

		"no-extend-native": "error",
		"no-use-before-define": ["error", { functions: false }],
		"no-param-reassign": ["error", { "props": false }],
		"no-return-assign": ["error", "always"],
		"no-await-in-loop": "error",
		curly: ["error", "multi-line"],
		eqeqeq: "error",
		"vue/eqeqeq": "error",
		"no-implicit-coercion": ["error", { allow: [ "!!" ] }],

		// COMPLEXITY

		// "max-len": ["warn", 120],
		// "max-lines": ["warn", { max: 500 }],
		// complexity: ["warn", 20],
		// "max-statements": ["warn", 40, { ignoreTopLevelFunctions: true }],

		// GLOBAL

		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
		"eol-last": ["error", "always"],
		"no-duplicate-imports": "error",
		"no-unused-vars": ["error", { ignoreRestSiblings: true }],
		"no-throw-literal": "error",
		"prefer-promise-reject-errors": "error",

		// GENERAL SPACING

		indent: ["error", "tab", { SwitchCase: 1 }],
		"vue/html-indent": ["error", "tab"],
		"vue/script-indent": ["error", "tab"],

		"no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 0 }],
		"lines-between-class-members": ["error", "always"],
		"padded-blocks": ["error", "never"],

		"no-multi-spaces": ["error", { exceptions: { Property: false } }],
		"no-trailing-spaces": "error",
		"keyword-spacing": ["error", { before: true, after: true }],
		"vue/keyword-spacing": "error",
		"space-in-parens": ["error", "never"],
		"block-spacing": ["error", "always"],
		"vue/block-spacing": ["error", "always"],
		"space-before-blocks": ["error", "always"],
		"rest-spread-spacing": ["error", "never"],
		"spaced-comment": ["error", "always"],

		// GENERAL STYLING

		camelcase: ["error", { properties: "never" }],
		"vue/camelcase": ["error", { properties: "never" }],
		"comma-dangle": ["error", "always-multiline"],
		"vue/comma-dangle": ["error", "always-multiline"],
		"comma-spacing": ["error", { before: false, after: true }],
		"comma-style": ["error", "last"],
		semi: ["error", "always"],
		quotes: ["error", "double", { avoidEscape: true }],
		"brace-style": ["error", "1tbs"],
		"vue/brace-style": ["error", "1tbs"],
		"space-infix-ops": ["error", { "int32Hint": false }],

		// EXPRESSIONS

		"no-var": "error",
		"prefer-const": "error",
		"one-var": ["error", "never"],
		"no-shadow": "error",
		"no-unneeded-ternary": ["error", { defaultAssignment: false }],
		"multiline-ternary": ["error", "always-multiline"],
		"operator-linebreak": ["error", "before", { overrides: { "=": "none", "==": "none", "===": "none", "+=": "none", "-=": "none", "*=": "none", "/=": "none" } }],
		"space-unary-ops": ["error", { words: true, nonwords: false }],
		"no-mixed-operators": "error",
		"new-cap": "error",
		"new-parens": ["error", "always"],
		"no-floating-decimal": "error",

		// FUNCTIONS

		"require-await": "error",
		"func-style": ["error", "declaration", { allowArrowFunctions: true }],
		"no-loop-func": "error",
		"func-call-spacing": ["error", "never"],
		"space-before-function-paren": ["error", { named: "never", anonymous: "always", asyncArrow: "always" }],
		"default-param-last": "error",
		"function-paren-newline": ["error", "multiline-arguments"],
		"function-call-argument-newline": ["error", "consistent"],
		"arrow-parens": ["error", "as-needed", { requireForBlockBody: true }],
		"arrow-spacing": ["error", { before: true, after: true }],
		"vue/arrow-spacing": ["error", { before: true, after: true }],
		"implicit-arrow-linebreak": ["error", "beside"],

		// OBJECTS

		"dot-location": ["error", "property"],
		"vue/dot-location": ["error", "property"],
		"dot-notation": ["error", { allowPattern: "^[a-z]+(_[a-z]+)+$" }],
		"object-curly-spacing": ["error", "always"],
		"vue/object-curly-spacing": ["error", "always"],
		"object-curly-newline": ["error", { consistent: true }],
		"object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
		"key-spacing": ["error", { beforeColon: false, afterColon: true }],
		"vue/key-spacing": ["error", { beforeColon: false, afterColon: true }],
		"computed-property-spacing": ["error", "never"],
		"no-whitespace-before-property": "error",
		"object-shorthand": ["error", "always"],
		"quote-props": ["error", "as-needed"],
		"newline-per-chained-call": ["error", { ignoreChainWithDepth: 3 }],

		// ARRAYS

		"array-callback-return": "error",
		"array-bracket-spacing": ["error", "never", { singleValue: true }],
		"vue/array-bracket-spacing": ["error", "never", { singleValue: true }],
		"array-bracket-newline": ["error", "consistent"],
		"array-element-newline": ["error", "consistent"],

		// VUE

		"vue/max-attributes-per-line": ["error", { singleline: { max: 2, allowFirstLine: true, }, multiline: { max: 1, allowFirstLine: false, }, }],
		"vue/component-name-in-template-casing": ["error", "PascalCase", { registeredComponentsOnly: false, ignores: ["/^v-/", "/^router-/", "template", "slot", "component", "transition"] }],
		"vue/match-component-file-name": ["error", { extensions: ["js", "vue"], shouldMatchCase: true }],
		"vue/no-boolean-default": ["error", "default-false"],
		"vue/no-deprecated-scope-attribute": "error",
		"vue/require-direct-export": "error",
		"vue/v-slot-style": ["error", { atComponent: "v-slot", default: "shorthand", named: "shorthand" }],
		"vue/valid-v-slot": "error",
		"vue/script-indent": ["error", "tab", { switchCase: 1 }],
	},
	overrides: [
		{
			files: [ "*.vue" ],
			rules: {
				"max-len": "off",
			},
		},
		{
			files: [
				"*.spec.js",
				"**/testUtils/**/*.js",
				"**/__mocks__/*.js",
			],
			env: {
				jest: true,
			},
			plugins: [ "jest" ],
			rules: {
				"max-statements": "off",
				"jest/consistent-test-it": "error",
				"jest/expect-expect": "error",
				"jest/no-alias-methods": "error",
				"jest/no-commented-out-tests": "error",
				"jest/no-disabled-tests": "warn",
				"jest/no-export": "error",
				"jest/no-focused-tests": "warn",
				"jest/no-identical-title": "error",
				"jest/no-jasmine-globals": "error",
				"jest/no-jest-import": "error",
				"jest/no-mocks-import": "error",
				"jest/no-standalone-expect": "error",
				"jest/no-test-callback": "error",
				"jest/no-test-prefixes": "error",
				"jest/no-test-return-statement": "error",
				"jest/no-truthy-falsy": "error",
				"jest/no-try-expect": "error",
				"jest/prefer-called-with": "error",
				"jest/prefer-strict-equal": "error",
				"jest/prefer-to-be-null": "error",
				"jest/prefer-to-be-undefined": "error",
				"jest/prefer-to-contain": "error",
				"jest/prefer-to-have-length": "error",
				"jest/prefer-todo": "error",
				"jest/require-top-level-describe": "error",
				"jest/valid-describe": "error",
				"jest/valid-expect-in-promise": "error",
				"jest/valid-expect": "error",
				"jest/valid-title": "error",
			},
		},
	],
};
