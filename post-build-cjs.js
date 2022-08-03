const fse = require('fs-extra');

fse.copySync('lib', 'dist/cjs');
fse.removeSync('lib');
