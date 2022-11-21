module.exports = {
	plugins: [
		"vue",
	],
	extends: [
		"plugin:vue/recommended",
		"plugin:vue/strongly-recommended",
		"plugin:vue/essential",
	],
	rules: {
		"vue/eqeqeq": "error",
		"vue/html-indent": ["error", "tab"],
		"vue/script-indent": ["error", "tab"],
		"vue/keyword-spacing": "error",
		"vue/camelcase": ["error", { properties: "never" }],
		"vue/block-spacing": ["error", "always"],
		"vue/comma-dangle": ["error", "always-multiline"],
		"vue/brace-style": ["error", "1tbs"],
		"vue/arrow-spacing": ["error", { before: true, after: true }],
		"vue/dot-location": ["error", "property"],
		"vue/object-curly-spacing": ["error", "always"],
		"vue/key-spacing": ["error", { beforeColon: false, afterColon: true }],
		"vue/array-bracket-spacing": ["error", "never", { singleValue: true }],
		"vue/max-attributes-per-line": ["error", { singleline: { max: 2, }, multiline: { max: 1, }, }],
		"vue/component-name-in-template-casing": ["error", "PascalCase", { registeredComponentsOnly: false, ignores: ["/^v-/", "/^router-/", "template", "slot", "component", "transition", "i18n", "ckeditor"] }],
		"vue/match-component-file-name": ["error", { extensions: ["js", "vue"], shouldMatchCase: true }],
		"vue/no-boolean-default": ["error", "default-false"],
		"vue/no-deprecated-scope-attribute": "error",
		"vue/require-direct-export": "error",
		"vue/v-slot-style": ["error", { atComponent: "v-slot", default: "shorthand", named: "shorthand" }],
		"vue/valid-v-slot": "error",
		"vue/script-indent": ["error", "tab", { switchCase: 1 }],
		"vue/html-end-tags": "off", // fix conflict with vue/html-self-closing
		"vue/multi-word-component-names": "off"
	},
	overrides: [
		{
			files: ["*.vue"],
			rules: {
				"max-len": "off",
			}
		}
	]
}
