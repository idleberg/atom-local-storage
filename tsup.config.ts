import { defineConfig } from 'tsup';

export default defineConfig({
	bundle: true,
	clean: true,
	external: ['atom'],
	format: 'cjs',
	minify: true,
	outDir: 'lib',
	platform: 'node',
	target: 'node14',
	treeshake: true,
  entry: ['src/main.ts'],
});
