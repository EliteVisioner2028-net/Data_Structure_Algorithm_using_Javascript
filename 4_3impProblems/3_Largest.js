function findLargest(arr){
    let largest = arr[0];
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] > largest)
            largest = arr[i];
    }
    console.log("Largest Number is : " + largest)
}

let arr = [-1,-2,-3];
findLargest(arr);