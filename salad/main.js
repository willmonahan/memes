var img = [];
var salads = [];
var count = 1;

function preload() {

}

preload();

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	for(i = 1; i <=6; i++) {
		img[i] = loadImage("images/"+i+".jpg");
	}

	for(i = 1; i <=6; i++) {
		salads[i] = loadImage("images/salads/salad"+i+".png");
	}
}

function draw() {

}

function preserveAspect(image) {
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
	var randomImage = Math.floor(Math.random()*6)+1;
	var randomSalad = Math.floor(Math.random()*6)+1;
	var scale = preserveAspect(img[randomImage]);
	var saladScale = (windowHeight/4.5)/salads[randomSalad].height;
	var width = scale*img[randomImage].width;
	var height = scale*img[randomImage].height;
	var x = 0;
	var y = 0;
	if(width > windowWidth) {
		x = (width-windowWidth)/-2;
	}
	else {
		y = (height-windowHeight)/-2;
	}
	image(img[randomImage], x, y, width, height);

	var saladx = Math.floor(Math.random()*(windowWidth-saladScale*salads[randomSalad].width));
	var salady = Math.floor(Math.random()*(windowHeight-saladScale*salads[randomSalad].height));

	image(salads[randomSalad], saladx, salady, saladScale*salads[randomSalad].width, saladScale*salads[randomSalad].height);
	count++
	if(count > 2) {
		count = 1;
	}
}
setInterval(reimage, 1000);