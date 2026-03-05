function setup() {
	console.log("setup: ");
	cnv=new Canvas(windowWidth, windowHeight)

var red = new Sprite (windowWidth/2, windowHeight/2, 50, 'd')
red.color='#ff0000'
}
	var Start = 0
	console.log(Start)
function draw() {
	background(0, 0, 255)
if (mousepresses()) {
	console.log("click")
}
	if (Start = 0) {
		text("Get Green to Red", windowWidth, windowHeight)
	}
}