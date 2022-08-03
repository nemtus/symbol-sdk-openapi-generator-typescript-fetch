const fse = require('fs-extra');

fse.removeSync('lib');
fse.removeSync('cdn');
fse.removeSync('dist/index.min.js');
