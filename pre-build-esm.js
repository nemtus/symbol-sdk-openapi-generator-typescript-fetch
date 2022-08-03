const fse = require('fs-extra');

fse.removeSync('lib');
fse.removeSync('dist/esm');
