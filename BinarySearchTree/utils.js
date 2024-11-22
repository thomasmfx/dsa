function mergeSort(arr) {
  if (arr.length <= 1) return arr;

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

// Acceps a sorted array
function removeDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      arr.splice(i, 1);
    };
  };

  return arr;
};

function formatArray(arr) {
  return removeDuplicates(mergeSort(arr));
};

// console.log(formatArray([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]));

export default formatArray;
