let arr = [0,1,9,10];

function bs(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while(left<=right){
    let middle = Math.floor((left + right)/2);
    if(target > arr[middle]){
        left = middle + 1;
    }
    else if(arr[target] < middle){
        right = middle - 1; 
    }
    else{
        return middle;
    }
}
return -1;
}

let target = 9;
console.log(bs(arr, target));