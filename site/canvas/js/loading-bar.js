
var settings = {
	"height": "100px",
	"width": "200px"
}

window.onload = function() {
	
	// insertCanvasAtId("loading-bar",200,100);
	var bar = new LoadingBar("loading-bar", 200, 100);
	
}

// function insertCanvasAtId(elementId, width=100, height=100) {
// 	var container = document.getElementById(elementId);
// 	if (container) {
// 		console.log("container found");

// 		var canvas = document.createElement("canvas");
// 		canvas.height = height;
// 		canvas.width = width;
// 		canvas.id = elementId + "-loading-bar";

// 		container.appendChild(canvas);
// 		initCanvas(canvas.id);
// 	}
// 	else {
// 		console.log("no element found by the id of '" + elementId.toString() + "'");
// 	}
// }

// function initCanvas(canvasId){
// 	var canvas = document.getElementById(canvasId);
// 	var ctx = canvas.getContext("2d");
// 	ctx.fillStyle = "FF0000";
// 	ctx.fillRect(0,0,150,75);
// }

function LoadingBar(elementId, width, height) {
	// Initialize
	this.width = width;
	this.height = height;
	this.elementId = elementId;

	var container = document.getElementById(elementId);
	if (!container) {
		throw new Error("Could not find element with id " + elementId);
	}
	this.canvas = document.createElement("canvas");
	this.canvas.height = height;
	canvas.width = width;
	canvas.id = elementId + "-loading-bar";
	container.appendChild(canvas);
}
