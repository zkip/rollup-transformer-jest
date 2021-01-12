import { rollup } from "rollup";

const process = (options) => (source, filenmae) => {
	console.log(options, source, filenmae, "@@@@@@");
};

export default (options) => {
	return {
		process: process(options),
	};
};
