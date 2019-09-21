var App = function(targetElementId, viewWidth, viewHeight, diamondHeight) {
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

    var _lifeWidth = 32;
    var _lifeHeight = _lifeWidth;

    //Initialize our Diamond data structure from above
    var diamond = new Diamond(diamondHeight);
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
	diamond.filter(function(life) {
	    return 1>0;
	}).forEach(function(life) {
	    me.ctx.fillStyle = 'black'; //fill with black
	    me.ctx.fillRect(life.row * _lifeWidth, life.col * _lifeHeight,
			    _lifeWidth, _lifeHeight);
	});
    };

    return me;
};

var app = new App("iris", 100, 100, 5);
app.start();
