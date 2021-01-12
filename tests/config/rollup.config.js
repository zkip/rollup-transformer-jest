import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import zResolve from "@zrlps/rollup-plugin-resolve";

export default {
	external: ["jest", "rollup"],
	input: {
		run: "tests/scripts/run.js",
	},
	output: [
		{
			dir: "tests/bin",
			exports: "auto",
			format: "cjs",
			banner: "#!/usr/bin/env node\n",
			entryFileNames: ({ name }) => name,
		},
	],
	plugins: [
		resolve(),
		zResolve({
			base: "./",
		}),
		commonjs(),
	],
};
