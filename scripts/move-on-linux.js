const path = require('path')
const fs = require('fs-extra')
if (process.platform == 'linux') {
    var from = path.join(__dirname, '..', 'WCjs', 'WebChimera.js.node');
    var to = path.join(__dirname, '..', 'node_modules', 'webchimera.js', 'Release');
    fs.ensureDirSync(to);
    to = path.join(to, 'WebChimera.js.node');
    fs.copySync(from, to);
    console.log('copy file from ' + from + ' to \n' + to);
}