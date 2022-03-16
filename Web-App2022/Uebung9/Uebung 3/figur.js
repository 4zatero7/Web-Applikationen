"use strict";

class Figur {
	constructor(originX, originY, color) {
		this.originX = originX;
		this.originY = originY;
		this.color = color;
	}
	draw(context) {
		context.fillStyle = this.color;
	}
}

class Rechteck extends Figur {
	constructor(originX, originY, width, height, color) {
		super(originX, originY, color);
		this.width = width;
		this.height = height;
	}
	draw(context) {
		super.draw(context);
		context.fillRect(this.originX, this.originY, this.width, this.height);
	}
}

class Kreis extends Figur {
	constructor(originX, originY, radius, color) {
		super(originX, originY, color);
		this.radius = radius;
	}
	draw(context) {
		super.draw(context);
		context.beginPath();
		context.arc(this.originX, this.originY, this.radius, 0, 2 * Math.PI);
		context.fill();
	}
}

/* ------------------------------------------------------------------------ */
function initRendering() {
	let canvas = document.getElementById('canvas');
	let context = canvas.getContext('2d');
	let figuren = [];

	canvas.addEventListener('click', function(event) {
		let left = event.layerX;
		let top  = event.layerY;

		let width  = Math.random() * (canvas.width - left) / 2;
		let height = Math.random() * (canvas.height - top) / 2;

		let r = Math.random() * 256;
		let g = Math.random() * 256;
		let b = Math.random() * 256;

		if (Math.random() < 0.5)
			figuren.push(new Rechteck(left, top, width, height, `rgb(${r},${g},${b})`));
		else
			figuren.push(new Kreis(left, top, (width+height)/2, `rgb(${r},${g},${b})`, true));

		figuren[figuren.length - 1].draw(context);
	}, false);

	document.getElementById('loeschen').addEventListener('click', function() {
		context.clearRect(0, 0, canvas.width, canvas.height);
		//figuren = [];
	}, false);

	document.getElementById('herstellen').addEventListener('click', function() {
		for (let i=0; i<figuren.length; i++)
			figuren[i].draw(context);
	}, false);
}

window.addEventListener("load", initRendering, false);
