function folgt7(arr){
    for(let i =0; i<=arr.length;i++){
        if(arr[i]===7) {
            arr.push([7]);
            console.log("y"+arr);
        }
        else{
        }
    }
}
var arr = [2,7,5];
console.log(folgt7(arr));
