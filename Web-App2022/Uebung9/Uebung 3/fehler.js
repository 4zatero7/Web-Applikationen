"use strict";

var Hund = function(name, besitzer) {
    this._name = name;
    this._besitzer = besitzer;
};

Hund.prototype.bellen = function() {
    console.log(this._name + " sagt: Wau wau wau!");
};

var Dackel = function(name, besitzer, club) {
    Hund.call(this, name, besitzer);
    this._club = club;
};

Dackel.prototype = new Hund();
Dackel.prototype.constructor = Dackel;

Dackel.prototype.sageSpruch = function() {
    console.log(this._besitzer + " sagt: Ordnung muss sein!");
};

var Boxer = function(name, besitzer, bissig) {
    Hund.call(this, name, besitzer);
    this._bissig = bissig;
};

Boxer.prototype = Object.create(Hund.prototype);
Boxer.prototype.constructor = Boxer;

Boxer.prototype.nenneBeissverhalten = function() {
    var prop = this._bissig ? "bissiger" : "lieber";
    console.log("Ich bin ein " + prop + " Hund.");
};

var waldi = new Dackel("Waldi", "Krause", "Teckel e.V.");
var prinz = new Boxer("Prinz", "Klitschko", false);

waldi.bellen();
waldi.sageSpruch();

prinz.bellen();
prinz.nenneBeissverhalten();
