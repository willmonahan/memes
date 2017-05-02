var img = []; //this variable will hold the available images
var centerX;
var centerY;
var cats = []; //this array holds all the cats onscreen
var catnumber = 6; // this is the number of cat photos in the folder (I need to change this manually)
var increment = 0.0075; //this is the increment by which the scale of the cats grows
var previous = -1; //this will be used to make sure the cats don't repeat

function preload() { //this just preloads the images into the array "img"
	for(i = 0; i < catnumber; i++) {
		var url = i+1;
		img[i] = loadImage("images/"+url+".png");
	}
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	centerX = windowWidth/2 //thes variables just calculate the center of the screen
	centerY = windowHeight/2
}

function draw() {
	for (var i = 0; i < cats.length; i++) { //cycles through every cat that's been added to the screen
		cats[i][1] += increment; //scales up the cat scale factor
		var width = cats[i][1]*cats[i][0].width; //uses the cat scale to calculate width
		var height = cats[i][1]*cats[i][0].height; //uses the cat scale to calculate height
		image(cats[i][0], centerX - width/2, centerY - height/2, width, height) //displays the cat in the center of the screen at this width/height
	}
}

function addCat() { //this function adds cats to the screen (obviously)
	var cat = Math.floor(Math.random()*catnumber); //this number will generate a random cat from the available cats
	while(previous == cat) { //this loop ensures the same image isn't used twice in a row
		cat = Math.floor(Math.random()*catnumber);
	}
	cats[cats.length] = [img[cat], 0]; //adds the cat image, and the 0 will be incremented as the scale variable
	//console.log(cat);
	previous = cat;
}

setInterval(addCat, 500); //this adds a new cat every 500 ms