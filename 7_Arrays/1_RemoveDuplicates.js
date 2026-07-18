function removeDuplicate(arr){
let x = 0;
let n = arr.length;
for(let i = 0; i < n; i++){
    if(arr[i] > arr[x]){
        x = x+1;
        arr[x] = arr[i];
    }
}
// array will remove extra end elements.
arr.length = x + 1; // 4+1 = 5 // [0,1,2,3,4]
return x+1;
}

let arr = [0,0,1,1,1,2,2,3,3,3,4];
let store = removeDuplicate(arr);
console.log(arr);
console.log("Count elements are: " + store);

