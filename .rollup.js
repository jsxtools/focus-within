import babel from 'rollup-plugin-babel';

export default {
	name: 'focusWithin',
	input: 'index.js',
	output: [
		{ file: 'index.es.js', format: 'es' },
		{ file: 'index.umd.js', format: 'umd' }
	],
	plugins: [
		babel({
			presets: [
				['env', { modules: false, targets: 'not dead' }]
			]
		})
	]
};
