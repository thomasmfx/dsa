let sampleOne = [3, 2, 1, 13, 8, 5, 0, 1];
let sampleTwo = [105, 79, 100, 110];

function mergeSort(arr) {
  if (arr.length == 1) return arr;

  let mid = arr.length / 2;
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  
  return merge(mergeSort(left), mergeSort(right));
};

function merge(left, right) {
  let sorted = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    };
  };

  while (left.length) sorted.push(left.shift());
  while (right.length) sorted.push(right.shift());

  return sorted;
};