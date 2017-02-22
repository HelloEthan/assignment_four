//decalres an array of arcs
var arcs = [];


function setup() {
	createCanvas(windowWidth, windowHeight);
	background('black');
}

function draw() {
  	//iterate through the array and call its methods
  	for(var i=0; i<arcs.length; i++){
  		arcs[i].display();
  		arcs[i].move();
  	}
}

//adds my arc object to the array on when someone clicks

function mouseClicked(){
	arcs.push(new Arc(mouseX, mouseY));
	console.log(arc);
	snedArc(
	{
		'x': mouseX,
		'y': mouseY
	}
	);
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

//the arc object
function Arc(theX, theY){
	//constructor - 
	this.x = theX;
	this.y = theY;
	this.size = random(15, 50);

	//methods
	this.display = function(){
		fill(random(255), random(255), random(255));
		stroke('');
		strokeWeight(0);
		arc(this.x, this.y, this.size, this.size, 0, PI+QUARTER_PI, PIE);
	}

	this.move = function(){
		//add random motion to each arc
		this.x = this.x + random(-20, 20);
		this.y = this.y + random(-20, 20);
	}

	this.poke = function(){
		//check if the mouse overlaps with an arc the drawing won't work without this but, I can't tell what it's actually doing
		if( mouseX > (this.x-this.size/2) &&
			mouseX < (this.x+this.size/2) &&
			mouseY > (this.y-this.size/2) &&
			mouseY < (this.y+this.size/2) ){
			console.log(this.x + "," + this.y);
		return true;
		}else{
			return false;
		}

	}

}

//this should send the arcs from one client to another, i think

function sendArc(message) {
	socket.emit('drawing', message);
}

function otherDraw(dataX, dataY) {
	arcs.push(new Arc(dataX, dataY));
}






