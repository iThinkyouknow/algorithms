const greatestPdtOf3 = (arr) => {
    return arr
        .sort((a, b) => b - a)
        .slice(0, 3)
        .reduce((a, b) => a * b);
};

console.log(greatestPdtOf3([1, 100, 90, 300, 3, 7, 200]));