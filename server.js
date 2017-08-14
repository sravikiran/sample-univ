let express = require('express');
let path = require('path');
let ngCore = require('@angular/core');

let app = express();
const PORT = 3000;

// Load zone.js for the server.
require('zone.js/dist/zone-node');

ngCore.enableProdMode();

// Import renderModuleFactory from @angular/platform-server.
var renderModuleFactory = require('@angular/platform-server').renderModuleFactory;

// Import the AOT compiled factory for your AppServerModule.
// This import will change with the hash of your built server bundle.
var AppServerModuleNgFactory = require('./dist-server/main.77fe0e8a4df3d641166c.bundle').AppServerModuleNgFactory;

// Load the index.html file.
var index = require('fs').readFileSync(path.join(__dirname, '.', 'dist', 'index.html')).toString();

app.engine('html', (_, options, callback) => {
  const opts = { document: index, url: options.req.url };
  renderModuleFactory(AppServerModuleNgFactory, opts).then(html => callback(null, html));
});

app.set('view engine', 'html');
app.set('views', 'dist')
app.get('*.*', express.static(path.join(__dirname, '.', 'dist')));

app.get('*', (req, res) => {
  res.render('index', { req });
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}!`);
});
