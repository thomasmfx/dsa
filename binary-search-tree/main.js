import { Node, Tree } from './classes.js';
import formatArray from './formatData.js';

let sample = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
// let formated = [1, 3, 4, 5, 7,     8,     9, 23, 67, 324, 6345];

function buildTree(array) {
  let copy = formatArray(array);
  
  let mid = parseInt(copy.length / 2); 
  let left = copy.slice(0, mid);
  let right = copy.slice(mid + 1);
  
  let node = new Node(copy[mid]);
  
  if (left.length > right.length) return new Node(copy.shift());

  node.setLeft(buildTree(left));
  node.setRight(buildTree(right));

  return node;
};

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) return;

  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '| ' : ' '}`, false);
  };
  console.log(`${prefix}${isLeft ? '- ' : '_ '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? ' ' : '| '}`, true);
  };
};

let tree = new Tree(sample);

// prettyPrint(tree.root);

console.log(tree)

export { buildTree };
