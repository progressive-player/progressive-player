const fs = require('fs');

var bundle = fs.readFileSync('public/bundle.js', 'utf-8');
var index = fs.readFileSync('public/index.html', 'utf-8');

bundle = bundle.split('\\n        ').join('');
bundle = bundle.split('\\n    ').join('');
bundle = bundle.split('   ').join('');

index = index.split('\n').join('');
index = index.split('\t').join('');
index = index.split('>    <').join('');

fs.writeFileSync('public/bundle.js', bundle, 'utf-8');
fs.writeFileSync('public/index.html', index, 'utf-8');