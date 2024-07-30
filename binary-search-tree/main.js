import { Node, Tree } from './classes.js';
import formatArray from './formatData.js';

let sample = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
// let formated = [1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345];

function buildTree(array) {
  let start = 0;
  let end = array.length - 1; 
  let mid = (start + end) / 2;

  if (start > end) return null;

  array = formatArray(array);
  let node = new Node(array.splice(mid, 1));

  node.setLeft(buildTree(array.slice(start, mid)));
  node.setRight(buildTree(array.slice(mid, end)));

  return node;
};

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  };
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  };
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  };
};

let tree = new Tree(sample);
// tree.insert(18)
// tree.insert(20)
// tree.insert(150)
// tree.insert(380)
// tree.insert(7)
prettyPrint(tree.root);

export { buildTree };