`use strict`;

// ------------- Aufgabe 2 -------------
// 2.1
document.write("Hallo Web-Apps!<br>");

// 2.2
var zahl=10;

document.write(`for:<br>`);
for(let i=0;i<=zahl;i++){
    if (i % 2) {
        document.write(`Ungerade Zahl ${i}<br>`);
    } else{
        document.write(`Gerade Zahl ${i}<br>`);
    }
}

document.write(`<br>while:<br>`);
let i=0;
while(i<=zahl){
    if(i%2){
        document.write(`Ungerade Zahl ${i}<br>`);
    }
    else{
        document.write(`Gerade Zahl ${i}<br>`);
    }
    i++;
}

document.write(`<br>do-while<br>`);
let j=0;
do{
    if (j % 2) {
        document.write(`Ungerade Zahl ${j}<br>`);
    } else {
        document.write(`Gerade Zahl ${j}<br>`);
    }
    j++;
}while(j<=zahl);

// 2.3
let day = new Date().getDay();
let wochentag = ``;

switch(day){
    case 0:
        wochentag = `Sonntag`;
        break;
    case 1:
        wochentag = `Montag`;
        break;
    case 2:
        wochentag = `Dienstag`;
        break;
    case 3:
        wochentag = `Mittwoch`;
        break;
    case 4:
        wochentag = `Donnerstag`;
        break;
    case 5:
        wochentag = `Freitag`;
        break;
    case 6:
        wochentag = `Samstag`;
        break;
    default:
        break;
}
document.write(`Heutiger Wochentag ${wochentag}`);
//window.alert(`Heutiger Wochentag ${wochentag}`);

// ------------- Aufgabe 3 -------------
// 3.1
function addition(a, b){

    let sum= a + b;
    return sum;
}
document.write(`<br> ${addition(4,7)}`);

function konkatenation(a, b){
    let konk = a+b;
    return konk;
}
document.write(`<br> ${konkatenation(`a`,`b`)}`);

// 3.2
function rekursive(a){
        if(a<= 0){
            return 0;
        }

        return a + rekursive(a-1);
}
document.write(`<br> Summe: ${rekursive(4)}`);

// 3.3
function fakultaetRec(a){
    if(a<=0){
        return 1;
    }
    return a * fakultaetRec(a-1);
}
document.write(`<br> Fakultät:  ${fakultaetRec(3)}`);

function facIter(n) {
    let f = 1;

    for (let i=1; i<=n; i++)
        f *= i;

    return f;
}
document.write("<p>Fakultät (iterativ): " + facIter(5) + "</p>");

// 3.4
function pattern(numLines) {
    let output = "<pre>";

    for (let i = 1; i <= numLines; i++) {
        for (let j = 0; j < numLines - i; j++)
            output += ' ';
        for (let k = 0; k < i * 2 - 1; k++)
            output += '+';
        output += "<br>";
    }
    output += "</pre>";

    return output;
}
document.write("<p>Muster:<br>" + pattern(10) + "</p><hr>");


// ------------- Aufgabe 4 -------------
// 4.1
function arrayGetDay(a){
    let arr = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
   let tag = new Date().getDay();

   tag = arr[a];

    return tag;
}
document.write(`Heutiger Wochentag: ${arrayGetDay(4)}`);

// 4.2
//Erzeugt bestimmte Anzahl an Arrays
//let arr = new Array(n);

// 4.3
function summe(arr){
    let sum=0;
    for(let i=0;i < arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
let arr = [4,6,9];
document.write(`<br>Summe für [${arr}] ist: ${summe(arr)}`);

// 4.4
function groessteZahl(){
    let maxArr = arr[0];
    for(let i=0;i<=arr.length;i++){
        if(maxArr<=arr[i]) {
            maxArr = arr[i];
        }
    }
    return maxArr;
}
document.write(`<br>Größte Zahl: ${groessteZahl(arr)}`);

// 4.5
function testMultiDimMat() {
    return [[1,2],[3,4]];
}
document.write(`<br>Mehrdimensionale Arrays ${testMultiDimMat()}`);
