'use strict';
function schafsOhren(n) {
    if(n>-1) {
        if (n == 0) {
            return 0;
        }
            return schafsOhren(n - 1) + 2;
        }
}
let anzSchafe = 10;
console.log(schafsOhren(anzSchafe));