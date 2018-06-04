import babel from 'rollup-plugin-babel';

export default {
	input: 'index.js',
	output: [
		{ file: 'index.es.js', format: 'es' },
		{ file: 'index.cjs.js', format: 'cjs' }
	],
	plugins: [
		babel({
			presets: [
				['env', { modules: false, targets: 'not dead' }]
			]
		})
	]
};
