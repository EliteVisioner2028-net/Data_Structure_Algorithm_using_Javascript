//Write a function that returns the number of negative numbers in array.

function countNegatives(arr){
    let count = 0;
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] < 0){
            count = count + 1;
        }
    }
    console.log("Negative Numbers are : " + count)
}

let arr = [1,2,-3,4,-5]

countNegatives(arr)
