const semver = require("semver");
const packageJson = require("../package.json");

const version = packageJson.version;

if (!Array.isArray(semver.prerelease(version))) {
	throw new Error("The environment/* branches require a valid pre-release version in the package.json file!");
}
