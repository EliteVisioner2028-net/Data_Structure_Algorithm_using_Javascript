function Reverse(n){
    let reverse = 0;
    let original = n;
    n = Math.abs(n);
    while(n>0){
        let rem = n % 10;
        reverse = (reverse*10) + rem;
        n = Math.floor(n / 10);
    }
    chr
    return (original<0) ? -reverse : reverse;
}

let store = Reverse(1223);
console.log(store);