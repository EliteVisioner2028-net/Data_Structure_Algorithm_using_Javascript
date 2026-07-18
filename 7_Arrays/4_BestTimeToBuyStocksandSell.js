//Brute force: Using two loops O(n^2)


// Optimize Approach : 
// [7,1,2,3,6,5]
// [1,6] provides more profit


function BS(prices){
    let min = prices[0];
    let maxProfit = 0;

    for(let i = 1; i < prices.length; i++){
        if(prices[i] - min > maxProfit){
            maxProfit = prices[i] - min;
        }
        if(prices[i] < min){
            min = prices[i];
        }
    }
    return maxProfit;
}
let prices = [1,7,2,3,4];
let store = BS(prices);
console.log(store);