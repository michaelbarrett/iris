alert("working");

var Alchemy = [
    [0, 0, 0, 0, 0, 0, 0],
    [],
    [],
    [],
    [],
    [],
    []
];

var Life = function(row, col, _pyr) {
    var me = this;

    me.state = 0;
    me.row = row;
    me.col = col;

    me.parents = null;
    me.seeFuture = function() {
	return me.parents
    }

    return me;
}

var Field = function(height) {
    
}
