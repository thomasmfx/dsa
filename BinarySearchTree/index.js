import Tree from './Tree.js';

// let sample = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
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

console.log('\n')
let tree = new Tree(generateRandomList(16));
prettyPrint(tree.root);
console.log('\n')

// Tree Manipulation test - uncomment to run

// console.log('\n');
// console.log('Find 4: ', tree.find(4));
// console.log('Height of 7: ', tree.height(tree.find(7)));
// console.log('Depth of 5: ',tree.depth(tree.find(5)));
// console.log('\n');
// console.log('Insert 10 \n');
// tree.insert(10);
// prettyPrint(tree.root);
// console.log('Delete 9 \n');
// tree.deleteItem(9);
// prettyPrint(tree.root);


// Driver script - uncomment to run

// function callback(obj) {
//   return obj.data;
// };

// console.log('\n');
// // Confirm balance
// console.log('Tree is balanced: ', tree.isBalanced());
// // Print all elements in different orders
// console.log('\n');
// console.log('Level-order: ', tree.levelOrder(callback));
// console.log('Pre-order: ', tree.preOrder(callback));
// console.log('Post-order: ', tree.postOrder(callback));
// console.log('Inorder: ', tree.inorder(callback));
// console.log('\n');
// // Unbalance tree
// tree.insert(150);
// tree.insert(200);
// tree.insert(250);
// // Confirm unbalance
// prettyPrint(tree.root);
// console.log('\n');
// console.log('Tree is balanced: ', tree.isBalanced());
// // Balance tree
// console.log('Rebalanced tree: ');
// console.log('\n');
// tree.rebalance();
// prettyPrint(tree.root);
// // Print all elements in different orders
// console.log('\n');
// console.log('Level-order: ', tree.levelOrder(callback));
// console.log('Pre-order: ', tree.preOrder(callback));
// console.log('Post-order: ', tree.postOrder(callback));
// console.log('Inorder: ', tree.inorder(callback));
// console.log('\n');
