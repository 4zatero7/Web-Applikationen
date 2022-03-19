'use strict';

function vor9(arr){
    for(let i=0;i<=arr.length;i++){
        if(arr[i]===9){
            arr.pop(arr[i]);
            return arr;
        }
        else{
        }
    }
}
var arr = [1,2,5,3,9];
console.log(vor9(arr));