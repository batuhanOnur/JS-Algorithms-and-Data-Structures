function isPrime(n) {
    if(typeof n != 'number') return 'we can not check string is prime or not'
    if(n < 2) return false;

    for(let i = 2; i < Math.sqrt(n); i++){
        if(n % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(5)); // should be true
console.log(isPrime(1)); // should be false