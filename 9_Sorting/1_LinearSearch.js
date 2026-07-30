let arr = [4, 9, 0, 1];

function ls(arr, target) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == target)
            return i;
    }
    return -1;
}

let target = 0;
console.log(ls(arr, target));