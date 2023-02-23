// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

const arr = [3, 2, 4];

function twoSum(arr, target) {
  //creates a new map to store values
  let map = new Map();

  for (i = 0; i < arr.length; i++) {
    let currentIdx = arr[i];
    let idx2 = target - currentIdx;

    //checks if the map has the second number
    if (map.has(idx2)) {
      return [i, map.get(idx2)];
    }
    map.set(currentIdx, i);
  }
}

let result = twoSum(arr, 6);
console.log(result);
