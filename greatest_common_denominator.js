/* Greatest Common Denominator
The logic is that if larger number % smaller === 0, return smaller.
Else
try again with the smaller % modulo until you get === 0
*/
//  recursive
(() => {
    const gcd = (small, big) => {
        if (small > big) {
            [small, big] = [big, small];
        }
        let remainder = big % small;
        return remainder === 0 
            ? small
            : gcd(remainder, small);
    };

    console.log(gcd(5, 493573498575));
    console.time('r');
    for(let i = 0; i < 1000000; i++) {
        gcd(5, 493573498575);
    }
    console.timeEnd('r');
})();

// iterative
(() => {
    const gcd = (small, big) => {
        if (small > big) {
            [small, big] = [big, small];
        }
        let remainder = big % small;
        while(remainder !== 0) {
            let newRemainder = small % remainder;
            small = remainder;
            remainder = newRemainder;
        }

        return small;
    };

    console.log(gcd(5, 493573498575));
    console.time('I');
    for (let i = 0; i < 1000000; i++) {
        gcd(5, 493573498575);
    }
    console.timeEnd('I');
})();