function sumOfOther(arr) {
    let sum = arr.reduce(function (currentSum, current) {
        return currentSum + current;
    });
    let mass = arr.map(function (item) {
        return sum - item;
    });
    return mass;
}

console.log(sumOfOther([2, 3, 4, 1]));