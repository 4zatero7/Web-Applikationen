'use strict';

var Figur = function(id) {
    this._id = id;
};
Figur.prototype.berechneFlaecheninhalt = function() {};
Figur.prototype.berechneUmfang = function() {};
Figur.prototype.holeId = function() {
    return this._id;
};
var Rechteck = function(id, l, t, w, h) {
    Figur.call(this, id);
    this._left = l;
    this._top = t;
    this._width = w;
    this._height = h;
};
Rechteck.prototype = Object.create(Figur.prototype);
Rechteck.prototype.constructor = Rechteck;
Rechteck.prototype.berechneFlaecheninhalt = function() {
    return _width * _height;
};
Rechteck.prototype.berechneUmfang = function() {
    return "2" * (this._width + this._height)
};
var Kreis = function(id, x, y, r){
Figur.call(this, id);
this._cx = x;
this._cy = y;
this._radius = r;
};
Kreis.prototype = Object.create(Figur.prototype);
Kreis.prototype.constructor = Kreis;
Kreis.prototype.berechneFlaecheninhalt = function() {
    return Math.PI * this._radius * this._radius
};
Kreis.prototype.berechneUmfang = function () {
   return 2 * Math.PI * this._radius;
};
var r = new Rechteck("R", 150, 50,10,20);
var k = new Kreis("K", 50, 50, 20);
console.log("Umfang Rechteck: " + r.berechneUmfang().toFixed(2));
console.log("Fläche Kreis: " + k.berechneFlaecheninhalt.toFixed(2))