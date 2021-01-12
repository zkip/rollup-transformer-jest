import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import zResolve from "@zrlps/rollup-plugin-resolve";

export default {
	plugins: [
		resolve(),
		zResolve({
			base: "tests",
			candidateExt: ["svelte"],
		}),
		commonjs(),
	],
};
