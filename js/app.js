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

    var _lifeWidth = 22;
    var _lifeHeight = _lifeWidth;

    //Initialize our Diamond data structure from above
    var diamond = new Diamond(diamondHeight);
    var _startSim = true;

    //Start kicks off our main loop
    me.start = function() {
	setInterval(function() {
	    me.update();
	    me.draw();
	}, 10); //main loop refreshes every ~10 / 20 / 60ms
    }

    //Update updates all state in the app
    me.update = function() {
	if (_startSim) {
	    diamond.updateLifes(false);
	}
	if () {

	}
    };

    //Draw draws the entire app
    me.draw = function() {
	//Erase previous draw by filling entire canvas with white
	me.ctx.fillStyle = "rgba(0, 0, 0, 0)";
	me.ctx.fillStyle = 'black';
	me.ctx.fillStyle = "rgba(0, 0, 0, 1)";
	me.ctx.fillRect(0, 0, me.canvas.width, me.canvas.height);

	//for each life
	diamond.filter(function(life) {
	    return 1>0;
	}).forEach(function(life) {
	    if (life.state === 1) {
		me.ctx.fillStyle = 'Red';
	    }
	    else if (life.state === 2) {
		me.ctx.fillStyle = 'Blue';
	    }
	    else if (life.state === 3) {
		me.ctx.fillStyle = 'Purple';
	    }
	    else if (life.state === 4) {
		me.ctx.fillStyle = 'DeepPink';
	    }
	    else if (life.state === 5) {
		me.ctx.fillStyle = 'White';
	    }
	    else if (life.state === 6) {
		me.ctx.fillStyle = 'Green';
	    }
	    else {
		me.ctx.fillStyle = 'Gray';
	    }
	    /*me.ctx.fillRect(life.col * _lifeHeight,
			    life.row * _lifeWidth, 
			    _lifeWidth, _lifeHeight);*/

	    //var centerX = canvas.width / 2;
	    //var centerY = canvas.height / 2;
	    var radius = 8;

	    me.ctx.beginPath();
	    me.ctx.arc(((life.col * _lifeHeight) + (me.canvas.width / 2))
		       - ((life.row * _lifeHeight) / 2),
		       life.row * _lifeWidth,
		       radius, 0, 2 * Math.PI, false);
	    me.ctx.fill();
	    me.ctx.lineWidth = 0;


	});
    };

    return me;
};

var app = new App("iris", 100, 100, 30);
app.start();
