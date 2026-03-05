function setup() {
	console.log("setup: ");
	cnv=new Canvas(windowWidth, windowHeight)

var red = new Sprite (windowWidth/2, windowHeight/2, 50, 'd')
red.color='#ff0000'
var green = new Sprite (windowWidth/2, windowHeight/2+75, 25, 'd')
green.color='#00ff00'
}
	var Start = 0
	console.log(Start)
function draw() {
	background(0, 0, 255)
if (mouse.presses()) {
	console.log("click")
}
	if (Start = 0) {
		text("Get Green to Red", windowWidth/2, windowHeight/2-75)
	}
}