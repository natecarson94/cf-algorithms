// Given an integer n, return the largest number that contains exactly n digits.

function largestNumber(n) {
    let arr = [];
    for(let i = 0; i<n; i++){
        arr.push('9');
    }
    
    return Number(arr.reduce((sum,el)=>sum+el,''));
}