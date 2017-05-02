var img = [];
var salads = [];
var saladnum = 6;;
var imagenum = 6;;
var previous;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	//these for loops just pre-load all of the potential images

	for(i = 1; i <= imagenum; i++) {
		img[i] = loadImage("images/"+i+".jpg");
	}

	for(i = 1; i <= saladnum; i++) {
		salads[i] = loadImage("images/salads/salad"+i+".png");
	}
}

function preserveAspect(image) { //this function returns the necessary scale for the image to fill the window without distortion
	imgaspect = image.width/image.height;
	winaspect = windowWidth/windowHeight;

	if(winaspect >= imgaspect) {
		return windowWidth/image.width;
	}
	else {
		return windowHeight/image.height;
	}
}

function reimage() {
	// the following lines pick and draw a background
	var randomImage = Math.floor(Math.random()*imagenum)+1; //generate a random stock image from the set
	while(previous == randomImage) { //this loop ensures the same image isn't used twice in a row
		randomImage = Math.floor(Math.random()*imagenum)+1;
	}
	var scale = preserveAspect(img[randomImage]); //this uses the preserveAspect function to figure out the necessary scale to fill the window without distortion
	var width = scale*img[randomImage].width; //these are the width and height of the image
	var height = scale*img[randomImage].height;
	var x = 0;
	var y = 0;
	if(width > windowWidth) { //this if/else clause centers the image
		x = (width-windowWidth)/-2;
	}
	else {
		y = (height-windowHeight)/-2;
	}
	image(img[randomImage], x, y, width, height); //draws the image
	previous = randomImage;

	//the following lines pick and draw a salad
	//this whole section is basically the same as the section whic draws the stock image, but for the salads
	var randomSalad = Math.floor(Math.random()*saladnum)+1;
	var saladScale = (windowHeight/4.5)/salads[randomSalad].height;
	var saladx = Math.floor(Math.random()*(windowWidth-saladScale*salads[randomSalad].width));
	var salady = Math.floor(Math.random()*(windowHeight/3-saladScale*salads[randomSalad].height)) + 2*windowHeight/3;
	image(salads[randomSalad], saladx, salady, saladScale*salads[randomSalad].width, saladScale*salads[randomSalad].height);
}

setInterval(reimage, 1150); //this calls the function to redraw recursively