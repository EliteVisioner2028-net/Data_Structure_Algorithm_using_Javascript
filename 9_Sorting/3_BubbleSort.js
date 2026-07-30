let arr = [9,4,2,3,1];

function bs(arr){
    let n = arr.length;
    for(let i = 0 ; i < n - 1; i++){
        let isswap = false;
        for(let j = 0; j < n-1-i ; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isswap = true;
            }
        }
        if(!isswap) break;
    }
     return arr;
}

let result = bs(arr);
console.log(result);