import pkg from "./package.json";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import zResolve from "@zrlps/rollup-plugin-resolve";

export default {
	input: "index.js",
	external: [...Object.keys(pkg.dependencies)],
	output: [
		{
			file: pkg.main,
			exports: "auto",
			format: "cjs",
			sourcemap: true,
		},
		{
			file: pkg.module,
			exports: "auto",
			format: "es",
			sourcemap: true,
		},
	],
	plugins: [resolve(), zResolve(), commonjs()],
};
