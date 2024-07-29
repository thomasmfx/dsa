import { Node, Tree } from './classes.js';


let sample = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

function buildTree(array) {

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

let tree = buildTree(sample);

prettyPrint(tree.root);