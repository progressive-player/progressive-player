const fs = require('fs');

var data = fs.readFileSync('public/bundle.js', 'utf-8');
data = data.split("\\n        ").join("");
data = data.split("\\n    ").join("");
data = data.split("   ").join("");

fs.writeFileSync('public/bundle.js', data, 'utf-8');

var data2 = fs.readFileSync('public/index.html', 'utf-8');
data2 = data2.split("\n").join("");
data2 = data2.split("\t").join("");

fs.writeFileSync('public/index.html', data2, 'utf-8');