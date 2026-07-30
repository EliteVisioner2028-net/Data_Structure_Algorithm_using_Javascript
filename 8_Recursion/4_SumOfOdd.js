let arr = [1,2,3,4,5];

function oddsum(n){
    let isodd = (arr[n]%2 != 0)
    // Base case
    if(n == 0){
        if(isodd){
            return arr[n];
        }
        else{
            return 0;
        }
    }

    // Recursive case
    if (isodd){
        return arr[n] + oddsum(n-1);
    }
    else{
        return 0 + oddsum(n-1);
    }
}

let store = oddsum(arr.length - 1);
console.log(store)