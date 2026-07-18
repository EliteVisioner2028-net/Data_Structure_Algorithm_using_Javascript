function missing(nums){
    let n = nums.length;
    let totalSum = n * (n+1) / 2;

    let partialSum = 0;
    for(let i = 0; i < n; i++){
        partialSum = partialSum + nums[i];
    }
    return totalSum - partialSum;
}

let arr = [0,1,2,4,5];
console.log(missing(arr));