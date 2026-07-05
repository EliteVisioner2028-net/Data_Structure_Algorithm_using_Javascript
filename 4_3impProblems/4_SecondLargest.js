function secondlargest(arr){
    // What if array is empty?
    if(arr.length < 2){
        return "Array should have atleast two elements";
    }
    let firstlargest = -Infinity;
    let secondlargest = -Infinity;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > firstlargest){
            secondlargest = firstlargest;
            firstlargest = arr[i];
        }
        else if(arr[i] > secondlargest && arr[i] != firstlargest){
            secondlargest = arr[i];
        }
    }
    console.log("Second Largest is : " + secondlargest);

}

let arr = [1,1,2,3,2,4,4];
secondlargest(arr);