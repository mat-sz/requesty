import { resolve } from 'path';
import { removeSync, mkdirpSync, copySync, moveSync } from 'fs-extra';
import { sync as spawnSync } from 'cross-spawn';
import 'colors';

const BUILD_DIR = resolve('./build');

const logStep = (step: string) => console.log(('> ' + step).blue);

const buildReactSubproject = (name: string) => {
  logStep(name + ': Building React subproject...');
  spawnSync(resolve('./node_modules/.bin/react-scripts'), ['build'], {
    env: {
      ...process.env,
      INLINE_RUNTIME_CHUNK: 'false',
      GENERATE_SOURCEMAP: 'false',
    },
    cwd: resolve('./', name),
    stdio: 'inherit',
    shell: true,
  });
};

const copyBuildFiles = (name: string) => {
  logStep(name + ': Copying build files...');
  const targetDirectory = resolve(BUILD_DIR, name);

  mkdirpSync(targetDirectory);

  copySync(resolve('./', name, 'build'), targetDirectory, {
    overwrite: true,
    recursive: true,
  });
};

const subprojects = [{ name: 'page', type: 'react' }];

logStep('Removing build directory...');
try {
  removeSync(BUILD_DIR);
} catch {}

logStep('Creating a build directory...');
try {
  mkdirpSync(BUILD_DIR);
} catch {}

for (let subproject of subprojects) {
  switch (subproject.type) {
    case 'react':
      buildReactSubproject(subproject.name);
      break;
    default:
      throw new Error('Unsupported subproject type: ' + subproject.type);
  }

  copyBuildFiles(subproject.name);
}

logStep('Copying public files...');
copySync(resolve('./public'), BUILD_DIR, {
  overwrite: true,
  recursive: true,
});
