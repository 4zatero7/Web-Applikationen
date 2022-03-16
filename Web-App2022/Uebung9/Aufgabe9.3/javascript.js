'use strict';

var Figur = function (originX, originY, color){
    this._originX = originX;
    this._originY = originY;
    this._color = color;
};


var Rechteck = function (originX, originY,color, width, height) {
    Figur.call(this, originX, originY, color);
    this._width = width;
    this._height = height;
};

Rechteck.prototype.draw = function (context){
    context.fillRect(this._originX, this._originY, this._color, this._width, this._height);
};

Rechteck.prototype = Object.create(Figur.prototype);
Rechteck.prototype.constructor = Rechteck;
/*
let loesch = document.getElementById("loeschen");
loesch.addEventListener("click", function (){
    context.clearRect(0,0,canvas.width, canvas.height);
}, false);
*/
let red = (100,104,119);
let rch = new Rechteck(0,0,red,100,100);
rch.draw(context);