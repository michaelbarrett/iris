//alert("working");

var Alchemy = [
    [0, 2, 1, 0, 0, 0, 0],
    [2, 4, 3, 3, 4, 1, 1],
    [1, 3, 2, 5, 6, 1, 1],
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

    me.parent1 = -1; //int
    me.parent2 = -1; //int
    me.seeFuture = function() {
	//return the next state of the life based on parent states
	if (me.parent1 === -1 || me.parent2 === -1) { //set up roots
	    if (me.col === 1) {
		//console.log(me.parent1 + " and " + me.parent2 + " results in 1");
		return 1; //left root (red)
	    }
	    else {
		//console.log(me.parent1 + " and " + me.parent2 + " results in 2");
		return 2; //right root (blue)
	    }
	}
	console.log(me.parent1 + " and " + me.parent2 + " results in " +
		    Alchemy[me.parent1][me.parent2]);
	return Alchemy[me.parent1][me.parent2];
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
    for (n = 1; n < height; n++) { //for every row
	tn = (n * (n+1)) / 2; //calc its tri number
	//for this tn, increment n and instantiate each cell
	for (i = 0; i <= n; i++) {
	    _diamond[tn + i] = new Life(n, i, _diamond);
	}
	//now go thru row again and set up parent ints
	for (i = 0; i <= n; i++) {
	    if (n === 1) { //root has -1 parents
		_diamond[tn + i].parent1 = -1;
		_diamond[tn + i].parent2 = -1;
	    }
	    else if (i === 0) { //if on the left edge
		_diamond[tn + i].parent1 = _diamond[(tn + i) - n].state;
		_diamond[tn + i].parent2 = _diamond[(tn + i) + 1].state;
	    }
	    else if (i === n) { //if on the right edge
		_diamond[tn + i].parent1 = _diamond[(tn + i) - 1].state;
		_diamond[tn + i].parent2 = _diamond[(tn + i) - n - 1].state;
	    }
	    else { //middle life
		_diamond[tn + i].parent1 = _diamond[(tn + i) - n - 1].state; //left parent
		_diamond[tn + i].parent2 = _diamond[(tn + i) - n].state; //right parent
	    }
	}
	//DEBUG LOOP
	for (i = 0; i <= n; i++) {
	    console.log(/*"i: " + i + ", n: " + n + ", tn: " + tn +*/
			", row: " + _diamond[tn + i].row + 
			", col: " + _diamond[tn + i].col + 
			", state: " + _diamond[tn + i].state +
			", parents: " + _diamond[tn + i].parent1 +
			" and " + _diamond[tn + i].parent2); //DEBUG
	}
    }

    //realize life states... and then realize life parents
    me.updateLifes = function() {
	console.log("UPDATE--------------------------");
	//update states of whole diamond
	for (n = 1; n < height; n++) { //for every row
	    tn = (n * (n+1)) / 2; //calc its tri number
	    //for this tn, increment n and update state each cell
	    for (i = 0; i <= n; i++) {		
		_diamond[tn + i].state = _diamond[tn + i].seeFuture();
	    }

	    //DEBUG LOOP
	    for (i = 0; i <= n; i++) {
		console.log(", row: " + _diamond[tn + i].row + 
			    ", col: " + _diamond[tn + i].col + 
			    ", state: " + _diamond[tn + i].state +
			    ", parents: " + _diamond[tn + i].parent1 +
			    " and " + _diamond[tn + i].parent2); //DEBUG
	    }
	}
	//update parents of whole diamond
	for (n = 1; n < height; n++) { //for every row
	    tn = (n * (n+1)) / 2; //calc its tri number
	    //for this tn, increment n and update parents of each cell
	    for () {

	    }
	}
    }
}

var diamond = new Diamond(5);
diamond.updateLifes();
diamond.updateLifes();
