function reverseElement(arr , value){
    let x = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != value ){
            arr[x] = arr[i];
            x = x+1;
        }
    }
    arr.length = x; // [1,2,0,4]
    return x;
}
let arr = [3,1,2,0,3,4,3];
let store = reverseElement(arr , 3);
console.log(arr)
console.log(store)