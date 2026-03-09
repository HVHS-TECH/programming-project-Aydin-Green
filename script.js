function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth, windowHeight)

	var red = new Sprite(windowWidth / 2, windowHeight / 2, 50, 'd')
	red.color = '#ff0000'
	var green = new Sprite(windowWidth / 2, windowHeight / 2 + 75, 25, 'd')
	green.color = '#00ff00'

}
var Start = 0
console.log(Start)
var Timer = 0
console.log(Timer)
function draw() {
	background(0, 0, 255)
	if (mouse.presses()) {
		console.log("click")
		Start = Start + 1
		console.log(Start)
		if (Start > 0) {
				green.moveTowards(mouseX, mouseY, '1');
		}
	}

	if (Start == 0) {
		textSize(22)
		text("Get Green to Red", (windowWidth / 2) - 75, windowHeight / 2 - 75);
		fill = ('#ffffff');
	}
	else {
		Timer = Timer + 1
		text((Timer / 100), 75, 75)
		console.log(Timer)
	}
}