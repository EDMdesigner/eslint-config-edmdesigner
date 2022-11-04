# Chamaileon eslint config

Config is still under refinement, subject to change.

## Usage
```bash
cd [PROJECT_FOLDER]
npm i @EDMdesigner/eslint-config-edmdesigner --save-dev
```
Then add to the repository/project's eslintrc.js:
```javascript
module.exports = {
	extends: [
		"@EDMdesigner/eslint-config-edmdesigner/lib/defaults", // Default rules for backend + frontend
		"@EDMdesigner/eslint-config-edmdesigner/lib/vue", // When it's a frontend code with Vue
		"@EDMdesigner/eslint-config-edmdesigner/lib/vitest", // When the tests are written with vitest
		"@EDMdesigner/eslint-config-edmdesigner/lib/jest" // When the test are written with jest
	]
}
```
