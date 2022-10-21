
// function isPowerOfTwo(n){
//     if( n < 1 ) return false;

//     while( n > 1){

//         if(n%2 !== 0) return false

//         n = n / 2; 
//     }

//     return true;
// }

function isPowerOfTwoBitWise(n) {
    if( n < 1 ) return false;

    return (n & (n-1)) === 0 // bitwise
}

console.log(isPowerOfTwoBitWise(5)); // false
console.log(isPowerOfTwoBitWise(1)); // true
console.log(isPowerOfTwoBitWise(2)); // true

// Big-O = O(logn)