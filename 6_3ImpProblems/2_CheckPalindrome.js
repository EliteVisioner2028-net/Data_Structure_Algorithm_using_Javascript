function checkPalindrome(n){
    let original = n;
    let reverse = 0;
    while(n>0){
        let rem = n % 10;
        reverse = rem + (reverse*10)
        n = Math.floor(n/10);
    }
    if(reverse === original){
        return "Palindrome";
    }
    else{
        return "Not Palindrome";
    }
}
let store = checkPalindrome(10);
console.log(store);