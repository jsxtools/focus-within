import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';

export default {
	input: 'codepen.js',
	output: { file: 'codepen.bundle.js', format: 'iife', name: 'focusWithin' },
	plugins: [
		commonjs({
			include: [
				'node_modules/**',
				'../**'
			]
		}),
		babel({
			presets: [
				['env', { modules: false }]
			]
		}),
		uglify()
	]
};
