var img = []; //these are the global variables I use
var centerX;
var centerY;
var cats = [];
var catnumber = 6;
var increment = 0.005;
var previous = -1;

function preload() { //this just preloads the images into the array "img"
	for(i = 0; i < catnumber; i++) {
		var url = i+1;
		img[i] = loadImage("images/"+url+".png");
	}
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	centerX = windowWidth/2
	centerY = windowHeight/2
}

function draw() {
	for (var i = 0; i < cats.length; i++) {
		cats[i][1] += increment;
		var width = cats[i][1]*cats[i][0].width;
		var height = cats[i][1]*cats[i][0].height;
		image(cats[i][0], centerX - width/2, centerY - height/2, width, height)
	}
}

function addCat() {
	var cat = Math.floor(Math.random()*catnumber);
	while(previous == cat) { //this loop ensures the same image isn't used twice in a row
		cat = Math.floor(Math.random()*catnumber);
	}
	cats[cats.length] = [img[cat], 0];
	console.log(cat);
	previous = cat;
}

setInterval(addCat, 300);