const path = require('path');
const fs = require('fs');
const { generateTheme } = require('antd-theme-generator');
const bundle = require('less-bundle-promise');

const root = path.resolve(__dirname, '../../');

const allLess = `
@import './theme/styles/index';
@import './theme/styles/layout/default/index';
@import './theme/styles/layout/fullscreen/index';
@import './abc/index';
@import './chart/index';
`;

fs.writeFileSync(path.resolve(root, '.tmp/all.less'), allLess);

const traget = path.join(root, '../ng-alain/src/assets/alain-default.less');

bundle({
  src: path.join(root, '.tmp/all.less'),
}).then(colorsLess => {
  fs.writeFileSync(traget, colorsLess);
});
