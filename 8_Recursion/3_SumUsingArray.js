let arr = [1,2,3,4,5];

function sum(n){
    if(n == 0){
        return arr[0];
    }
    else{
        return arr[n] + sum(n-1)
    }
}

console.log("Sum is : " + sum(arr.length - 1));