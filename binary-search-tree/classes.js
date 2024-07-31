import { buildTree } from './main.js';

class Node {
  constructor(data) {
    this.data = data,
    this.left = null,
    this.right = null
  };

  setChild(node) {
    this.data > node.data
    ? this.setLeft(node)
    : this.setRight(node);
  };

  setLeft(node) {
    this.left = node;
  };

  setRight(node) {
    this.right = node;
  };

  deleteLeft() {
    this.left = null;
  };

  deleteRight() {
    this.right = null;
  };

  isLeaf() {
    return this.left === null && this.right === null ? true : false;
  };

  hasBothChildren() {
    return this.left !== null && this.right !== null ? true : false;
  };

  hasSingleChild() {
    if (
      (this.left !== null && this.right === null)
      || (this.right !== null && this.left === null)
    ) return true;
  }

  hasLeft() {
    return this.left !== null ? true : false;
  };

  hasRight() {
    return this.right !== null ? true : false;
  };
};

class Tree {
  constructor(arr) {
    this.root = buildTree(arr);
  };

  insert(value) {
    let newNode = new Node(value);

    const goTo = (currentNode) => {
      if (currentNode.isLeaf()) {
        currentNode.setChild(newNode);
      } else {
        if (currentNode.data > newNode.data) {
          currentNode.hasLeft() 
          ? goTo(currentNode.left) 
          : currentNode.setLeft(newNode);
        } else {
          currentNode.hasRight()
          ? goTo(currentNode.right) 
          : currentNode.setRight(newNode);
        };
      };
    };

    return goTo(this.root);
  };
};

export { Node, Tree };
