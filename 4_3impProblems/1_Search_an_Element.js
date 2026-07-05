// Write a function that searches for an element in an array and returns the index
// If the element is not present than returns -1

let arr = [1,2,3,4,5,6];

let length = arr.length;
function searchElement(j){
    for(let i = 0 ; i < length; i++){
    if(arr[i] == j){
        return i;
    }
}
return -1;
}

let result = searchElement(4);
console.log(result)
