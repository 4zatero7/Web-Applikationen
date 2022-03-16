'use strict';
//Objektinstanz
function Person(name, vorname, alter) {
    this.name = name;
    this.vorname = vorname;
    this.alter = alter;
    this.greet = function() { alert('Hallo'); };
}
let p = new Person('Meier', 'Horst', 85);
let q = new Person('Hernandez', 'Theo', 12);

//p.greet();
document.write(`Mein Name ist ${p.vorname} ${p.name} ich bin ${p.alter} Jahre alt!`);
document.write(`<br> Mein Name ist ${q.vorname} ${q.name} ich bin ${q.alter} Jahre alt!`);

//Klasse
var Hund = function(name, besitzer) {
    this._name = name;
    this._besitzer = besitzer;
};
Hund.prototype.bellen = function() {
    console.log(this._name + ` sagt: Wau wau!`);
};
var waldi = new Hund(`Waldi`, `Krause`);

waldi.bellen();

//Möglichkeit 1. Objekt zur Laufzeit erweiterbar -> Funktion getClub hinzugefügt
/*Hund.prototype.getClub = function() {
    return this._club;
};
waldi.getClub();
*/
/*
//Möglichkeit 2. Alternativ nur eine Instanz erweitern
waldi.getClub = function() {
    return this._club;
};
waldi.newParam = "Quick and dirty...";
waldi.getClub();
*/
// Vererbung
// Konstruktorfunktion schreiben
var Dackel = function(name, besitzer, club) {
    Hund.call(this, name, besitzer);  // Parent-C'tor aufrufen
    this._club = club;
};
// Setup der Prototypenkette
Dackel.prototype = Object.create(Hund.prototype);
Dackel.prototype.constructor = Dackel;

Dackel.prototype.getSpruch = function() {
    console.log(this._besitzer + " sagt: Ordnung muss sein!");
};

// Instanz erzeugen
waldi = new Dackel("Waldi", "Krause", "Teckel e.V.");
waldi.getSpruch();
