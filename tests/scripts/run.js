import jest from "jest";
import { rollup } from "rollup";
import path from "path";

const dist_dir_name = "tests/__unit";

function unshiftPathByMap(map, rel_path) {
	return Object.entries(map)
		.map(([name, destination]) => [name, path.join(rel_path, destination)])
		.reduce((r, [name, destination]) => ((r[name] = destination), r), {});
}

async function transpile() {
	const chunk = await rollup({
		input: unshiftPathByMap(
			{
				main: "main.test.js",
			},
			"tests/cases"
		),
		plugins: [
			{
				resolveId(_, importee) {
					if (importee) {
						return {
							id: importee,
							external: true,
						};
					}
				},
			},
		],
	});

	await chunk.write({
		dir: dist_dir_name,
		format: "cjs",
		exports: "auto",
	});
}

async function start() {
	await transpile();

	await jest.run(
		[`--config="tests/config.prod/jest.config.js"`],
		dist_dir_name
	);
}

start();
