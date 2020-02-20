/*heapsort*/
let unsortedItems = [3, 19, 1, 14, 8, 7, 3, 19, 1, 14, 8, 7, 3, 19, 1, 14, 8, 7, 3, 19, 1, 14, 8, 7];

const heapSort = (array) => {
    buildMaxHeap(array);

    // // Continue heap sorting until we have
    // // just one element left in the array.
    lastElement = array.length - 1;
    while (lastElement > 0) {
        swap(array, 0, lastElement);
        heapify(array, 0, lastElement);
        lastElement -= 1;
    }
};


const buildMaxHeap = (array) => {
    let i = Math.floor(array.length / 2 - 1); // less than half because there'll only be less than half levels
    while (i >= 0) {
        heapify(array, i, array.length);
        i -= 1;
    }
};

const heapify = (heap, i, max) => {
    while (i < max) {
        let index = i;
        let leftChild = 2 * i + 1;
        let rightChild = leftChild + 1;

        if (leftChild < max && heap[leftChild] > heap[index]) {
            index = leftChild;
        }

        if (rightChild < max && heap[rightChild] > heap[index]) {
            index = rightChild;
        }

        if (index === i) {
            return;
        }

        swap(heap, i, index);

        i = index;
    }
};

const swap = (array, firstItemIndex, lastItemIndex) => {
    const tmp = array[firstItemIndex];
    array[firstItemIndex] = array[lastItemIndex];
    array[lastItemIndex] = tmp;
}
let items = [...unsortedItems];
heapSort(items)
// console.log(items);

const heapSort2 = (array) => {
    buildMaxHeap2(array);

    let lastIndex = array.length - 1;
    while (lastIndex > 0) {
        swap2(array, 0, lastIndex);
        heapify2(array, 0, lastIndex);
        lastIndex--;
    }
};

const buildMaxHeap2 = (array) => {
    let i = Math.floor(array.length / 2 - 1);
    while (i >= 0) {
        heapify2(array, i, array.length);
        i--;
    }
};

const heapify2 = (heap, i, max) => {
    while (i < max) {
        let index = i;
        let leftChild = 2 * i + 1;
        let rightChild = leftChild + 1;

        if (leftChild < max && heap[leftChild] > heap[index]) {
            index = leftChild;
        }

        if (rightChild < max && heap[rightChild] > heap[index]) {
            index = rightChild;
        }

        if (index === i) {
            return;
        }

        swap(heap, i, index);
        i = index;
    }
};

const swap2 = (array, firstIndex, lastIndex) => {
    const tmp = array[firstIndex];
    array[firstIndex] = array[lastIndex];
    array[lastIndex] = tmp;
};

let newItems = [...unsortedItems];
heapSort2(newItems);
// console.log(newItems);

(() => {
    const heapSort = (array) => {
        buildMaxHeap(array);

        let lastIndex = array.length - 1;
        while (lastIndex > 0) {
            swap(array, 0, lastIndex);
            heapify(array, 0, lastIndex);
            lastIndex--;
        }
    };

    const buildMaxHeap = (array) => {
        let i = Math.floor(array.length / 2 - 1);
        while (i >= 0) {
            heapify(array, i, array.length);
            i--;
        }
    };

    const heapify = (heap, i, max) => {
        while (i < max) {
            let index = i;
            let leftChild = 2 * i + 1;
            let rightChild = leftChild + 1;
            if (leftChild < max && heap[leftChild] > heap[index]) {
                index = leftChild;
            }

            if (rightChild < max && heap[rightChild] > heap[index]) {
                index = rightChild;
            }

            if (index === i) {
                return;
            }

            swap(heap, i, index);

            i = index;
        }
    };

    const swap = (array, firstIndex, lastIndex) => {
        const tmp = array[firstIndex];
        array[firstIndex] = array[lastIndex];
        array[lastIndex] = tmp;
    };

    let newItems = [...unsortedItems];
    heapSort(newItems);
    // console.log(newItems);
})();

(() => {
    const heapSort = (array) => {
        buildMaxHeap(array);

        let lastIndex = array.length - 1;
        while (lastIndex > 0) {
            swap(array, 0, lastIndex);
            heapify(array, 0, lastIndex);
            lastIndex--;
        }

    };

    const buildMaxHeap = (array) => {
        let i = Math.floor(array.length / 2 - 1);
        while (i >= 0) {
            heapify(array, i, array.length)
            i--;
        }
    };

    const heapify = (heap, i, max) => {
        while (i < max) {
            let index = i;
            let leftChild = 2 * i + 1;
            let rightChild = leftChild + 1;
            // index becomes the larger of the left and right
            if (leftChild < max && heap[leftChild] > heap[index]) {
                index = leftChild;
            }

            if (rightChild < max && heap[rightChild] > heap[index]) {
                index = rightChild;
            }

            if (index === i) { return; }

            swap(heap, i, index);
            i = index;
        }
    };

    const swap = (array, firstIndex, lastIndex) => {
        [array[firstIndex], array[lastIndex]] = [array[lastIndex], array[firstIndex]];
    };

    let newItems = [...unsortedItems];
    heapSort(newItems);
    // console.log(newItems);

})();

(() => {
    const heapSort = (array) => {
        buildMaxHeap(array);

        let lastIndex = array.length - 1;
        while (lastIndex > 0) {
            swap(array, 0, lastIndex);
            heapify(array, 0, lastIndex);
            lastIndex--;
        }
    };

    const buildMaxHeap = (array) => {
        let level = Math.floor(array.length / 2 - 1);
        while (level >= 0) {
            heapify(array, level, array.length);
            level--;
        }
    };

    const heapify = (heap, i, max) => {
        while (i < max) {
            let index = i;
            let leftChild = 2 * i + 1;
            let rightChild = leftChild + 1;

            index = [leftChild, rightChild]
                .reduce((result, childIndex) => {
                    if (childIndex < max && heap[childIndex] > heap[result]) {
                        return childIndex;
                    } else {
                        return result;
                    }
                },
                    index);

            if (index === i) { return;}
            swap(heap, i, index);
            i = index;
        }
    };

    const swap = (array, firstIndex, lastIndex) => {
        [
            array[firstIndex],
            array[lastIndex]
        ] = [
                array[lastIndex],
                array[firstIndex]
            ]
    };

    let newItems = [...unsortedItems];
    heapSort(newItems);
    console.log(newItems);

})();