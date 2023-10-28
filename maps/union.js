const rf = require('room-finder');
const d = require('dijkstrajs');

const westPlazaEntrance = new rf.Room("West Plaza Entrance", rf.Direction.FRONT);
const unionMarket = new rf.Room("Union Market and Espress-OH", rf.Direction.LEFT);
const sloopysDiner = new rf.Room("Sloopy's Diner", rf.Direction.RIGHT);
const woodysTavern = new rf.Room("Woody's Tavern", rf.Direction.LEFT);
const bankConference = new rf.Room("US Bank Conference Theater", rf.Direction.RIGHT);
const perfHallRoom = new rf.Room("Performance Hall", rf.Direction.RIGHT);
const greatHallRoom = new rf.Room("Great Hall Meeting Room", rf.Direction.LEFT);
const infoDesk = new rf.Room("Information Desk", rf.Direction.RIGHT);
const multiculturalCenter = new rf.Room("Multicultural Center", rf.Direction.RIGHT);
const highStreetEntrance = new rf.Room("High Street Entrance", rf.Direction.FRONT);

const bookStore = new rf.Room("University Bookstore", rf.Direction.RIGHT);
const usBank = new rf.Room("US Bank", rf.Direction.LEFT);
const publicSafety = new rf.Room("OSU Public Safety Office", rf.Direction.RIGHT);

function createBuilding() {
    const greatHallToBookstoreFork = new rf.Fork(rf.Direction.LEFT, "Great Hall to Bookstore Hallway", "Bookstore Hallway");
    const mainHallway = new rf.Hallway([
        westPlazaEntrance,
        unionMarket,
        sloopysDiner,
        woodysTavern,
        bankConference,
        perfHallRoom,
        greatHallRoom,
        infoDesk,
        multiculturalCenter,
        greatHallToBookstoreFork,
        highStreetEntrance
    ]);

    const bookstoreHallway = new rf.Hallway([
        new rf.Fork(rf.Direction.FRONT, rf.reverseConnection("Great Hall to Bookstore Hallway"), "Great Hall"),
        bookStore,
        usBank,
        publicSafety
    ]);

    return new rf.Building([mainHallway, bookstoreHallway]);
}

function getNodes(start, end) {
    const prefix = 'BasicRoomNode-$-';
    const floor1 = createBuilding();
    return d.find_path(floor1.graph, prefix + start, prefix + end);
}

module.exports = { getNodes };
