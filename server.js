let express = require('express');
let path = require('path');
let ngCore = require('@angular/core');
let fs = require('fs');
let glob = require('glob');
let request = require('request');

let app = express();
const PORT = 3000;

// Load zone.js for the server.
require('zone.js/dist/zone-node');

ngCore.enableProdMode();

// Import renderModuleFactory from @angular/platform-server.
let renderModuleFactory = require('@angular/platform-server').renderModuleFactory;

let AppServerModuleNgFactory;

// Load the index.html file.
let index = fs.readFileSync('./dist/index.html', 'utf8');

// Import the AOT compiled factory for your AppServerModule.
// This import will change with the hash of your built server bundle.
//glob(`${__dirname}/dist-server/*.js`, (err, files) => {
AppServerModuleNgFactory = require('./dist-server/main.bundle').AppServerModuleNgFactory;
app.engine('html', (_, options, callback) => {
	const opts = { document: index, url: options.req.url };
	renderModuleFactory(AppServerModuleNgFactory, opts).then(html => callback(null, html));
});
//});

app.set('view engine', 'html');
app.set('views', 'dist')
app.get('*.*', express.static(path.join(__dirname, '.', 'dist')));

app.get('*', (req, res) => {
	res.render('index', { req });
});

app.listen(PORT, () => {
	console.log(`listening on http://localhost:${PORT}!`);
});
