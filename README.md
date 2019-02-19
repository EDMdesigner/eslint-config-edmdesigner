# eslint-config-edmdesigner

Config is still under refinement, subject to change.

## Usage
```bash
cd [PROJECT_FOLDER]
npm i eslint-config-edmdesigner --save-dev
```
Then add to the repository/project's eslintrc.js: 
```bash
module.exports = {
  extends: 'eslint-config-edmdesigner',
...
```
Rules can be overridden by specific rules, depending on the actual repository/project using it (node/vue/etc.)

_But only that :P_
