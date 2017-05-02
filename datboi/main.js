var img; //these are the global variables I use
var scale;
var bois = []; //this array will store the position info for each boi that is added to the page
var increment = 15; //this is used for the sine function

function preload() { //this just preloads the image
	img = loadImage("images/datboi.gif");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	// img = loadImage("images/datboi.gif");
}

function draw() {
	for (var i = 0; i < bois.length; i++) { //this for loop makes sure to update the position for each boi in existence
		bois[i][1] = bois[i][2] + (sin(bois[i][0]/45)*increment); //bois[i][1] is the variable read for the y position, but bois[i][2] is the starting y position
		//the line above (line 18) uses a sine function to animate the y position
		image(img, bois[i][0], bois[i][1], img.width*(windowHeight/3)/img.height, img.height*(windowHeight/3)/img.height); //this just draws the image at an appropriate scale, in the correct place
		bois[i][0] += 3; //this increments the x position each time
	}
}

function addBoi() { //this function is used to add a new boi to the screen
	var x = -img.width*(windowHeight/3)/img.height; //the x position is always the same, and positions the boi entirely off the left side of the screen
	var y = Math.floor(Math.random()*(2*windowHeight/3)); //this position randomly generates a y value in the top two thirds of the screen, because the boi is one-third the height of the screen, always
	bois[bois.length] = [x, y, y]; //this adds a new sub-array to the end of the bois array
	//the first two variables and used to change and store position data, but the third variable remains as a record of the boi's starting y position
}

setInterval(addBoi, 1500); //this adds a new boi every 1500 ms