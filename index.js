function merge(arr1, arr2) {
    let newArray = [];
    let status = true;
    let i1 = 0,
        i2 = 0;
    while (status) {
        if (arr1.length || arr2.length) {
            if (arr1.length && arr2.length) {
                if (arr1[i1] <= arr2[i2]) {
                    newArray.push(arr1.shift());
                } else {
                    newArray.push(arr2.shift());
                }
            } else if (arr1.length) {
                newArray.push(arr1.shift());
            } else if (arr2.length) {
                newArray.push(arr2.shift());
            }
        } else {
            status = false;
        }
    }
    return newArray;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return [...arr];
    } else {
        const leftLength = Math.floor(arr.length / 2);
        let leftArray = arr.splice(0, leftLength);
        return merge(mergeSort(leftArray), mergeSort([...arr]));
    }
}

console.log(mergeSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
