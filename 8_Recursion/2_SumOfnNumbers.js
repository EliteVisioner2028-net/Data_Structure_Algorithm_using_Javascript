function sum(n){
    if(n==0){
        return 0;
    }
    else{
        return n+sum(n-1);
    }
}

let store = sum(5)
console.log("Sum is : " + store);