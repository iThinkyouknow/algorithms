/**
 * How many combinations of values (coins) are there for a certain value?
 */

 const coins = [1, 5, 10, 25, 50, 100];

 const coinSums = total => {
    let counter = 0;
    const recurse = (lastIndex, remainder) => {
        const coin = coins[lastIndex];
        if (lastIndex === 0) {
            remainder % coin === 0 && counter++;
            return;
        }

        while(remainder >= 0) {
            recurse(lastIndex - 1, remainder);
            remainder -= coin;
        }
    };

    recurse(coins.length - 1, total)
    return counter;
 };

console.log(coinSums(100));

const coinSums2 = total => {
    let counter = 0;
    const recurse = (lastIndex, remainder) => {
        const coin = coins[lastIndex];
        if (lastIndex === 0) {
            remainder % coin === 0 && counter++;
            return;
        }

        while(remainder >= 0) {
            recurse(lastIndex - 1, remainder);
            remainder -= coin;
        }
    };

    recurse(coins.length - 1, total);
    return counter;
};

console.log(coinSums2(1000));