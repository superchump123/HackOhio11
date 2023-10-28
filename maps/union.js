const rf = require('room-finder');
const dk = require('dijkstrajs');

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
    const greatHallToBookstoreFork = new rf.Fork(rf.Direction.LEFT, rf.reverseConnection("Great Hall to Bookstore Hallway"), "Bookstore Hallway");
    const mainHallway = new rf.Hallway([
        westPlazaEntrance,
        sloopysDiner,
        bankConference,
        perfHallRoom,
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

function printDirections(start, end) {
    const floor1 = createBuilding();
    console.log(
        floor1.getDirections(start, end)
    );
}

module.exports = { printDirections };
