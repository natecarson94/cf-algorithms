// You are given a two-digit integer n. Return the sum of its digits.

function addTwoDigits(n) {
    let split = n.toString().split('');
   return split.reduce((sum,el) => sum + Number(el),0);
 }
 