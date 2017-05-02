var img;
var scale;
var bois = [];

function preload() {
	img = loadImage("images/datboi.gif");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	// img = loadImage("images/datboi.gif");
}

function draw() {
	for (var i = 0; i < bois.length; i++) {
		image(img, bois[i][0], bois[i][1], img.width*(windowHeight/3)/img.height, img.height*(windowHeight/3)/img.height);
		bois[i][0] += 3;
	}
}

function addBoi() {
	var x = -img.width*(windowHeight/3)/img.height;
	var y = Math.floor(Math.random()*(2*windowHeight/3));
	bois[bois.length] = [x, y];
}

setInterval(addBoi, 1000);