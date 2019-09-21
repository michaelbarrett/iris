var App = function(targetElementId, squaresX, squaresY) {
    var me = this;

    //Get the canvas and drawing context
    me.canvas = document.getElementById(targetElementId);
    me.ctx = me.canvas.getContext("2d");

    //Get the start button
    me.button = document.getElementById("start");

    //Initialize page styles
    var body = document.getElementsByTagName('body')[0];
    body.style.margin = '0px';
    body.style.overflow = "hidden";

    //Set height and width to window inner height to make the app fullscreen
    var viewWidth = me.canvas.width = window.innerWidth;
    var viewHeight = me.canvas.height = window.innerHeight;

    squaresX = squaresX || 20;
    squaresY = squaresY || 20;

    //Calculate the height and width of each cell
    var _squareWidth = me.canvas.width / squaresX;
    var _squareHeight = _squareWidth;

    //Initialize our Diamond data structure from above
    var diamond = new Diamond(squaresX, squaresY);
    var _startSim = true;

    //Start kicks off our main loop
    me.start = function() {
	setInterval(function() {
	    me.update();
	    me.draw();
	}, 60); //main loop refreshes every ~60ms
    }

    //Update updates all state in the app
    me.update = function() {
	if(_startSim) {
	    diamond.updateLifes();
	}
    };

    //Draw draws the entire app
    me.draw = function() {
	//Erase previous draw by filling entire canvas with white
	me.ctx.fillStyle = 'white';
	me.ctx.fillRect(0, 0, me.canvas.width, me.canvas.height);

	//for each life
	forEach(function(life) {
	    me.ctx.fillStyle = 'black';
	    me.ctx.fillRect(life.row * _squareWidth, life.col * _squareHeight,
			    _squareWidth, _squareHeight);
	});
    };

    return me;
};

var app = new App("game", 100, 50);
app.start();
