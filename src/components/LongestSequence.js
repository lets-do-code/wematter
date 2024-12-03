

const findLongestSequence = () => {

    if (arr.length === 0) return 0;
    arr.sort((a, b) => a - b);
    let longest = 1;
    let current = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i - 1] + 1) {
            current++;
        }
        else if (arr[i] !== arr[i - 1]) {
            longest = Math.max(longest, current);
            current = 1;
        }
    }
    return Math.max(longest, current);

}

const inputArray = [2, 3, 6, 8, 0];
console.log(findLongestSequence())