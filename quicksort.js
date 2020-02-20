/*quicksort*/

const quickSort = (items, leftIndex, rightIndex) => {
    if (items.length < 2) {
        return items;
    }
    let pivotIndex = partition(items, leftIndex, rightIndex);
    
    if (leftIndex < pivotIndex - 1) {
        quickSort(items, leftIndex, pivotIndex - 1);
    }

    if (pivotIndex < rightIndex) {
        quickSort(items, pivotIndex, rightIndex);
    }

    return items;
};

const partition = (items, left, right) => {
    const pivot = items[Math.floor((right + left) / 2)];
    while(left <= right) {
        while(items[left] < pivot) {
            left++;
        }

        while(items[right] > pivot) {
            right--;
        }

        if (left <= right) {
    
            swap(items, left, right);
            left++;
            right--;
        }
    }

    return left;
}

const swap = (items, leftPointerIndex, rightPointerIndex) => {
    let tempReference = items[leftPointerIndex];

    items[leftPointerIndex] = items[rightPointerIndex];
    items[rightPointerIndex] = tempReference;
};

let items = [19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46, 19, 22, 63, 105, 99, 88, 32, 1, 2, 46];


// quickSort(items, 0, items.length - 1);

const quickSort2 = (items, leftIndex, rightIndex) => {
    if (items.length < 2) return items;

    const pivotIndex = partition2(items, leftIndex, rightIndex);
    if (leftIndex < pivotIndex - 1) {
        quickSort2(items, leftIndex, pivotIndex - 1);
    }

    if (pivotIndex < rightIndex) {
        quickSort2(items, pivotIndex, rightIndex);
    } 

    return items;
}

const partition2 = (items, leftIndex, rightIndex) => {
    const pivot = items[Math.floor((rightIndex + leftIndex)/ 2)];

    while(leftIndex <= rightIndex) {
        while(items[leftIndex] < pivot) {
            leftIndex++;
        }

        while(items[rightIndex] > pivot) {
            rightIndex--;
        }

        if (leftIndex <= rightIndex) {
            swap2(items, leftIndex, rightIndex);
            leftIndex++;
            rightIndex--;
        }
    }

    return leftIndex;
};

const swap2 = (items, leftIndex, rightIndex) => {
    const temp = items[leftIndex];

    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
};

// console.log(quickSort2([...items], 0, items.length - 1));

const quickSort3 = (items, leftIndex, rightIndex) => {
    if (items.length < 2) return items;

    const pivotIndex = partition3(items, leftIndex, rightIndex);
    if (leftIndex < pivotIndex - 1) {
        quickSort3(items, leftIndex, pivotIndex -1)
    }

    if (pivotIndex < rightIndex) {
        quickSort3(items, pivotIndex, rightIndex);
    }

    return items;
};

const partition3 = (items, leftIndex, rightIndex) => {
    const pivot = items[Math.floor((leftIndex + rightIndex) / 2)];
    while(leftIndex <= rightIndex) {
        while(items[leftIndex] < pivot) {
            leftIndex++;
        }

        while(items[rightIndex] > pivot) {
            rightIndex--;
        }

        if (leftIndex <= rightIndex) {
            swap3(items, leftIndex, rightIndex);
            leftIndex++;
            rightIndex--;
        }
    }

    return leftIndex;
};

const swap3 = (items, leftIndex, rightIndex) => {
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
};

// console.log(quickSort3([...items], 0, items.length - 1));

let newItems = [...items];
console.time('a');
quickSort3(newItems, 0, items.length - 1);
console.timeEnd('a');

const quickSort4 = (items, leftIndex, rightIndex) => {
    if (items.length < 2) {
        return items;
    }

    const pivotIndex = partition4(items, leftIndex, rightIndex);
    if (leftIndex < pivotIndex - 1) {
        quickSort4(items, leftIndex, pivotIndex - 1);
    }
    if (pivotIndex < rightIndex) {
        quickSort4(items, pivotIndex, rightIndex);
    }

    return items;
};

const partition4 = (items, leftIndex, rightIndex) => {
    const pivot = items[Math.floor((leftIndex + rightIndex) / 2)];

    while (leftIndex <= rightIndex) {
        while (items[leftIndex] < pivot) {
            leftIndex++;
        }
        while (items[rightIndex] > pivot) {
            rightIndex--;
        }

        if (leftIndex <= rightIndex) {
            swap4(items, leftIndex, rightIndex);
            leftIndex++;
            rightIndex--;
        }
    }

    return leftIndex;
};

const swap4 = (items, leftIndex, rightIndex) => {
    const temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
};
let items4 = [...items];
console.table(quickSort4(items4, 0, items4.length - 1));