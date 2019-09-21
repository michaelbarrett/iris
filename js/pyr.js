//alert("working");

var Alchemy = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 4, 3, 3, 4, 1, 1],
    [0, 3, 2, 5, 6, 1, 1],
    [0, 3, 5, 5, 5, 1, 1],
    [0, 4, 6, 5, 3, 1, 1],
    [0, 5, 5, 1, 1, 6, 1],
    [0, 1, 1, 1, 1, 1, 2]
];

var Life = function(row, col, _diamond) {
    var me = this;

    me.state = 0;
    me.row = row;
    me.col = col;

    me.parent1 = null; //int
    me.parent2 = null; //int
    me.seeFuture = function() {
	//return the next state of the life based on parent states
	return Alchemy[parent1][parent2];
    }

    return me;
}

var Diamond = function(height) {
    var me = this;
    var totalNumOfLifes = (height * (height + 1)) / 2; //num in pyramid
    var _diamond = new Array(totalNumOfLifes);

    var tn;
    var n;
    var i;
    //for every triangular number
    for (n = 0; n < height; n++) { //for every row
	tn = (n * (n+1)) / 2; //calc its tri number
	//for this tn, increment n and instantiate each cell
	for (i = 0; i <= n; i++) {
	    _diamond[tn + i] = new Life(n, tn + i, _diamond);
	    console.log("i: " + i + ", n: " + n + ", tn: " + tn);
	}
    }

    //assign parent ints to lifes
    //_diamond.forEach(function(life) {
    //life.parent1 = ;
    //life.parent2 = ;
    //}

    //update
}

var diamond = new Diamond(5);
