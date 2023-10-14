const path = require("path");

module.exports = {
	devtool: "inline-source-map",
	entry: "./src/index.ts",

	module: {
		//rules: [ ],
	},

	resolve: {
		extensions: [
			".js",
			".ts",
			"tsx",
		],
	},

	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "dist"),
	},
};