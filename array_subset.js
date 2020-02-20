/* To find if array 1 is a subset of array2 */

// O(n^2)
const arrChecker = (arr1, arr2) => { 
    return arr1.every(val => arr2.indexOf(val) !== -1);
}

console.log(arrChecker([1, 2, 654], [1, 0, 5, 6, 3, 654, 2]));
console.log(arrChecker([1, 2, 3], [1, 0, 5, 6, 5, 654, 2]));

console.time('positive 1');
arrChecker([1, 2, 654], [1, 0, 5, 6, 3, 654, 2]);
console.timeEnd('positive 1');

console.time('negative 1');
arrChecker([1, 2, 3], [1, 0, 5, 6, 654, 2])
console.timeEnd('negative 1')

const arrChecker2 = (arr1, arr2) => {
    const arr2Values = arr2.reduce((result, val) => {
        result.set(val, val);
        return result
    }, new Map);
    let notFound = arr1.find((val) => arr2Values.get(val) === undefined);
    return notFound === undefined
};

console.log(arrChecker2([1, 2, 654], [1, 0, 5, 6, 3, 654, 2]));
console.log(arrChecker2([1, 2, 3], [1, 0, 5, 6, 5, 654, 2]));


console.time('positive 2');
arrChecker2([1, 2, 654], [1, 0, 5, 6, 3, 654, 2]);
console.timeEnd('positive 2');

console.time('negative 2');
arrChecker2([1, 2, 3], [1, 0, 5, 6, 654, 2])
console.timeEnd('negative 2')