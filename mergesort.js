/* Merge Sort */

const merge = (left, right) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length) {
        result.push(
            left[leftIndex] < right[rightIndex] 
                ? left[leftIndex++] 
                : right[rightIndex++]
        );
    }

    return [
        ...result,
        ...left.slice(leftIndex),
        ...right.slice(rightIndex)
    ];
};

const mergeSort = (items) => {
    if (items.length < 2) return items;

    let middle = Math.floor(items.length / 2);
    let left = items.slice(0, middle);
    let right = items.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
};

let items = [19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46];

// console.log(mergeSort(items));

// console.log(items);



const mergeSort2 = (items) => {
    if (items.length < 2) {
        return items;
    }

    let middle = Math.floor(items.length / 2);
    let left = items.slice(0, middle);
    let right = items.slice(middle);

    return merge2(mergeSort2(left), mergeSort2(right));
};

const merge2 = (left, right) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        result.push(
            left[leftIndex] < right[rightIndex]
                ? left[leftIndex++]
                : right[rightIndex++]
        );
    };
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

console.time('a');
mergeSort2(items);
console.timeEnd('a');

// console.log(mergeSort2(items))

const merge3 = (left, right) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex < left.length && rightIndex < right.length) {
        result.push(
            left[leftIndex] <= right[rightIndex]
                ? left[leftIndex++]
                : right[rightIndex++]
        );
    }
    return [
        ...result,
        ...left.slice(leftIndex),
        ...right.slice(rightIndex)
    ];
};

const mergeSort3 = (items) => {
    if (items.length < 2) return items;
    
    let middle = Math.floor(items.length / 2)
    let left = items.slice(0, middle);
    let right = items.slice(middle);

    return merge3(mergeSort3(left), mergeSort3(right));
};

console.log(mergeSort3(items));

const merge4 = (left, right) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        result.push(
            left[leftIndex] <= right[rightIndex]
                ? left[leftIndex++]
                : right[rightIndex++]
        );
    }

    return [
        ...result,
        ...left.slice(leftIndex),
        ...right.slice(rightIndex)
    ]
};
const mergeSort4 = (items) => {
    if (items.length < 2) return items;

    let middle = Math.floor(items.length / 2);
    let left = items.slice(0, middle);
    let right = items.slice(middle);

    return merge4(mergeSort4(left), mergeSort4(right))
};

console.table(mergeSort4(items));

