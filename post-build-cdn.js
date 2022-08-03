const fse = require('fs-extra');

fse.copyFileSync('cdn/main.js', 'dist/index.min.js');
fse.removeSync('cdn');
fse.removeSync('lib');
