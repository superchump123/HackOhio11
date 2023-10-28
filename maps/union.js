const rf = require('room-finder');


function createDirections() {
    const leftMainHallway = [
        new rf.Room("")
    ]
    return new rf.Building();
}

function printDirections() {
    console.log(
        new rf.Building([
            new rf.Hallway([
                new rf.Room("A", rf.Direction.LEFT),
                new rf.Room("B", rf.Direction.RIGHT),
                new rf.Turn(rf.Direction.RIGHT),
                new rf.Room("C", rf.Direction.LEFT),
            ]),
        ]).getDirections("A", "C")
    );
}

module.exports = { printDirections };
