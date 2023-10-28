const maps = require('./maps/union');
let fs = require('fs');

let nodes = maps.getNodes("OSU Public Safety Office", "West Plaza Entrance");

// fs.writeFileSync('data/nodes.json', JSON.stringify({'nodes': nodes}, null, ' '), 'utf8');

nodeLocations = new Map(); // <string, (number, number)>
