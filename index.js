const test = require('./maps/union');
let fs = require('fs');

let nodes = test.getNodes("OSU Public Safety Office", "West Plaza Entrance");
let nodesObj = {'nodes': nodes}

fs.writeFileSync('data/nodes.json', JSON.stringify(nodesObj, null, ' '), 'utf8');

