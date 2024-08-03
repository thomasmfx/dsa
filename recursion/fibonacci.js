// Fn = (Fn - 1) + (Fn - 2) 

function fibs(range) {
  let sequence = [0, 1, 1];

  if (range < 0) return 0;

  for (let i = 3; i < range; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  };

  return sequence;
};

function fibsRec(n) {
  const recursive = (n) => {
    if (n == 0) return [0];
    if (n == 1) return [0, 1];

    const arr = recursive(n - 1);
    return [...arr, arr[n - 1] + arr[n - 2]];
  };

  let arr = recursive(n - 1);
  return arr;
};