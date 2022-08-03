const fse = require('fs-extra');

fse.copySync('lib', 'dist/esm');
fse.removeSync('lib');
