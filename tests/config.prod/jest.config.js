const rollupTransformer = require("../..");

module.exports = {
	transform: {
		"^.+\\.js|svelte$": [
			"rollup-transformer-jest",
			{
				preprocess: rollupTransformer(),
			},
		],
	},
};
