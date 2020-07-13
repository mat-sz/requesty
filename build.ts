import { resolve } from 'path';
import { removeSync, mkdirpSync, copySync, moveSync } from 'fs-extra';
import { sync as spawnSync } from 'cross-spawn';

const BUILD_DIR = resolve('./build');

console.log('Building page...');
spawnSync(resolve('./node_modules/.bin/react-scripts'), ['build'], {
  env: {
    ...process.env,
    INLINE_RUNTIME_CHUNK: 'false',
    GENERATE_SOURCEMAP: 'false',
  },
  cwd: resolve('./page'),
  stdio: 'inherit',
  shell: true,
});

console.log('Creating a build directory...');
try {
  removeSync(BUILD_DIR);
} catch {}

try {
  mkdirpSync(BUILD_DIR);
} catch {}

console.log('Copying build files...');
copySync(resolve('./page/build'), BUILD_DIR, {
  overwrite: true,
  recursive: true,
});

console.log('Updating filenames...');
moveSync(resolve(BUILD_DIR, 'index.html'), resolve(BUILD_DIR, 'page.html'));

console.log('Copying public files...');
copySync(resolve('./public'), BUILD_DIR, {
  overwrite: true,
  recursive: true,
});
