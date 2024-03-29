module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: 2023,
	},
	env: {
		es6: true,
		node: true,
	},
	plugins: [
		"json",
	],
	extends: [
		"eslint:recommended",
	],
	rules: {
		"no-extend-native": "error",
		"no-use-before-define": ["error", { functions: false }],
		"no-param-reassign": ["error", { "props": false }],
		"no-return-assign": ["error", "always"],
		"no-await-in-loop": "off", // We often need this so this should be disabled
		"no-useless-escape": "off", // We often use the escaped regex so this should be disabled
		curly: ["error", "multi-line"],
		eqeqeq: "error",
		"no-implicit-coercion": ["error", { allow: ["!!"] }],
		//
		//"max-len": ["warn", 120],
		//"max-lines": ["warn", { max: 500 }],
		//complexity: ["warn", 20],
		//"max-statements": ["warn", 40, { ignoreTopLevelFunctions: true }],
		//
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
		"eol-last": ["error", "always"],
		"no-duplicate-imports": "error",
		"no-unused-vars": ["error", { ignoreRestSiblings: true }],
		"no-throw-literal": "error",
		"prefer-promise-reject-errors": "error",
		indent: ["error", "tab", { SwitchCase: 1 }],
		"no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 0 }],
		"lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
		"padded-blocks": ["error", "never"],
		"no-multi-spaces": ["error", { exceptions: { Property: false } }],
		"no-trailing-spaces": "error",
		"keyword-spacing": ["error", { before: true, after: true }],
		"space-in-parens": ["error", "never"],
		"block-spacing": ["error", "always"],
		"space-before-blocks": ["error", "always"],
		"rest-spread-spacing": ["error", "never"],
		"spaced-comment": ["error", "always"],
		camelcase: ["error", { properties: "never" }],
		"comma-dangle": ["error", "always-multiline"],
		"comma-spacing": ["error", { before: false, after: true }],
		"comma-style": ["error", "last"],
		semi: ["error", "always"],
		quotes: ["error", "double", { avoidEscape: true }],
		"brace-style": ["error", "1tbs"],
		"space-infix-ops": ["error", { "int32Hint": false }],
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
		"implicit-arrow-linebreak": ["error", "beside"],
		"dot-location": ["error", "property"],
		"dot-notation": ["error", { allowPattern: "^[a-z]+(_[a-z]+)+$" }],
		"object-curly-spacing": ["error", "always"],
		"object-curly-newline": ["error", { consistent: true }],
		"object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
		"key-spacing": ["error", { beforeColon: false, afterColon: true }],
		"computed-property-spacing": ["error", "never"],
		"no-whitespace-before-property": "error",
		"object-shorthand": ["error", "always"],
		"quote-props": ["error", "as-needed"],
		"newline-per-chained-call": ["error", { ignoreChainWithDepth: 3 }],
		"array-callback-return": "error",
		"array-bracket-spacing": ["error", "never", { singleValue: true }],
		"array-bracket-newline": ["error", "consistent"],
		"array-element-newline": ["error", "consistent"],
	},
};
