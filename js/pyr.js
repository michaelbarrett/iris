alert("working");

var Alchemy = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 4, 3, 3, 4, 1, 1],
    [0, 3, 2, 5, 6, 1, 1],
    [0, 3, 5, 5, 5, 1, 1],
    [0, 4, 6, 5, 3, 1, 1],
    [0, 5, 5, 1, 1, 6, 1],
    [0, 1, 1, 1, 1, 1, 2]
];

var Life = function(row, col, _pyr) {
    var me = this;

    me.state = 0;
    me.row = row;
    me.col = col;

    me.parent1 = null; //int
    me.parent2 = null; //int
    me.seeFuture = function() {
	//return the next state of the life based on parent states
	return alchemy[parent1][parent2];
    }

    return me;
}

var Diamond = function(height) {
    var me = this;
    var _diamond = new Array();
}