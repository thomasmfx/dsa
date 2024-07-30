import { buildTree } from './main.js';

class Node {
  constructor(data) {
    this.data = data,
    this.left = null,
    this.right = null
  };

  setLeft(node) {
    this.left = node;
  };

  setRight(node) {
    this.right = node;
  };
};

class Tree {
  constructor(arr) {
    this.root = buildTree(arr);
  };
};

export { Node, Tree };
