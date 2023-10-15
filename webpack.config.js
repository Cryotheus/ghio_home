const path = require("path");
const isWorkflow = !!process.env.GITHUB_RUN_ID;

//shared configuration
let config = {
	entry: "./src/index.ts",

	module: {
		rules: [
			{ //webpack loader for typescript modules/imports
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
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

if (isWorkflow) {
	//config for GitHub Actions Workflow
	config.mode = "production";
} else {
	config.devtool = "inline-source-map";
	config.mode = "development";
}

module.exports = config;