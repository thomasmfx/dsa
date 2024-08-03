import { Node, Tree } from './classes.js';
import formatArray from './formatData.js';

let sample = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

function buildTree(array) {
  let start = 0;
  let end = array.length - 1; 
  let mid = (start + end) / 2;

  if (start > end) return null;

  array = formatArray(array);
  let node = new Node(array.splice(mid, 1)[0]);

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

function generateRandomList(size) {
  let randomList = [];
  for (let i = 0; i < size; i++) {
      randomList.push(Math.floor(Math.random() * 100));
  };
  return randomList;
};

function onlyData(obj) {
  return obj.data;
};


// Driver script
let tree = new Tree(generateRandomList(10));

prettyPrint(tree.root);
console.log('\n');
// Confirm balance
console.log('Tree is balanced: ', tree.isBalanced());
// Print all elements in different orders
console.log('\n');
console.log('Level-order: ', tree.levelOrder(onlyData));
console.log('Pre-order: ', tree.preOrder(onlyData));
console.log('Post-order: ', tree.postOrder(onlyData));
console.log('Inorder: ', tree.inorder(onlyData));
console.log('\n');
// Unbalance tree
tree.insert(150);
tree.insert(200);
tree.insert(250);
// Confirm unbalance
prettyPrint(tree.root);
console.log('\n');
console.log('Tree is balanced: ', tree.isBalanced());
// Balance tree
console.log('Rebalanced tree: ');
console.log('\n');
tree.rebalance();
prettyPrint(tree.root);
// Print all elements in different orders
console.log('\n');
console.log('Level-order: ', tree.levelOrder(onlyData));
console.log('Pre-order: ', tree.preOrder(onlyData));
console.log('Post-order: ', tree.postOrder(onlyData));
console.log('Inorder: ', tree.inorder(onlyData));
console.log('\n');

export { buildTree };
