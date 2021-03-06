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

    var _lifeWidth = 22; //22
    var _lifeHeight = _lifeWidth;

    //Initialize our Diamond data structure from above
    var _startSim = true;
    var _backAnim = false;    
    var diamond = new Diamond(diamondHeight);
    var timeDiff;
    var timeSin;

    window.onkeydown = function(e) {
	location.reload();
    }

    //Start kicks off our main loop
    var counter = 0;
    var updateSpeed = 45;
    me.start = function() {	
	startTime = new Date();
	var timeValue = setInterval(function() {
	    me.update();
	    me.draw();
	    if (timeDiff > 60) {
		clearInterval(timeValue);
	    }
	}, updateSpeed); //main loop refreshes every ~10 / 20 / 60ms
    }

    //Update updates all state in the app
    var seconds;
    var x;
    var y;
    me.update = function() {
	endTime = new Date();
	timeDiff = endTime - startTime; //in ms
	// strip the ms
	timeDiff /= 1000;
	seconds = Math.round(timeDiff);
	if (_startSim) {
	    diamond.updateLifes();
	}
    };

    //Draw draws the entire app
    me.draw = function() {
	//erase previous draw
	me.canvas.width = me.canvas.width;
	//put black sheet over gif
	if (_backAnim === false) {
	    me.ctx.fillStyle = 'black';
	    me.ctx.fillRect(0, 0, me.canvas.width, me.canvas.height);
	}
	//for each life
	diamond.filter(function(life) {
	    return 1>0;
	}).forEach(function(life) {
	    if (life.state === 1) {
		//me.ctx.fillStyle = 'Red';
		me.ctx.fillStyle = '#FC0019'
	    }
	    else if (life.state === 2) {
		//me.ctx.fillStyle = 'Blue';
		me.ctx.fillStyle = '#00EDF5';
	    }
	    else if (life.state === 3) {
		//me.ctx.fillStyle = 'Purple';
		me.ctx.fillStyle = '#5600CC';
	    }
	    else if (life.state === 4) {
		//me.ctx.fillStyle = 'DeepPink';
		me.ctx.fillStyle = '#FF01D7';
	    }
	    else if (life.state === 5) {
		//me.ctx.fillStyle = 'White';
		me.ctx.fillStyle = '#FFEB00';
	    }
	    else if (life.state === 6) {
		//me.ctx.fillStyle = 'Green';
		me.ctx.fillStyle = '#01FF4F';		
	    }
	    else {
		me.ctx.fillStyle = 'Gray';
	    }
	    /* me.ctx.fillRect(life.col * _lifeHeight,
			    life.row * _lifeWidth, 
			    _lifeWidth, _lifeHeight); */

	    //var centerX = canvas.width / 2;
	    //var centerY = canvas.height / 2;
	    var radius = 8;
	    timeSin = Math.sin(timeDiff);

	    me.ctx.beginPath();
	    
	    me.ctx.arc(((life.col * _lifeHeight) + (me.canvas.width / 2) /*+ (timeSin * 100)*/)
		       - ((life.row * _lifeHeight) / 2),
		       life.row * _lifeWidth,
		       radius, 0, 2 * Math.PI, false);
	    me.ctx.fill();
	    me.ctx.lineWidth = 0;	    

	});
    };

    return me;
};

var app = new App("iris", 100, 100, 35); //35
app.start();
