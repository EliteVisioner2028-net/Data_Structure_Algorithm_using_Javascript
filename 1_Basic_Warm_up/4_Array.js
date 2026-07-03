// Case 1

let arr = [ 1,2,3,4,5];
console.log(arr)
console.log(arr[1])
console.log(arr[0]+arr[1])

let brr = ["Hari" , 7]
console.log(brr)
console.log(brr[0])
console.log(brr[0] + brr[1])
console.log(brr[2]) //undefined

let crr = ["Hari" , 7 , [5,10]]
console.log(crr)
console.log(crr[2])
console.log(crr[2][0])
console.log(crr[2][1])

let drr = ["Hari" , [5,10, [2,13]]]
console.log(drr[1][2][1])