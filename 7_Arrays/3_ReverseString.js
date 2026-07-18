var reverseString = function(s){

    let length = string.length;
    let halflength = Math.floor(length/2)
    for(let i = 0 ; i < halflength ; i++){
        let temp = s[i];
        s[i]=s[length - 1 - i];
        s[length - 1 - i] = temp;
    }
    console.log(string)
}

let string = ["h", "e", "l", "l", "o"]
reverseString(string);