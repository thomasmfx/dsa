import { buildTree } from './main.js';

class Node {
  constructor(data) {
    this.data = data,
    this.left = null,
    this.right = null
  };

  setData(data) {
    this.data = data;
  };

  setChild(node) {
    this.data > node.data
    ? this.setLeft(node)
    : this.setRight(node);
  };

  replace(node) {
    Object.assign(this, node);
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
  };

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

  insert(data) {
    let newNode = new Node(data);

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

  deleteItem(data) {
    const goTo = (currentNode) => {
      console.log('Accessing: ', currentNode.data);

      if (currentNode.hasLeft()) {
        let leftChild = currentNode.left;

        if (leftChild.data === data) {
          if (leftChild.isLeaf()) {
            return currentNode.deleteLeft();
          };

          if (leftChild.hasSingleChild()) {
            return leftChild.left !== null
            ? currentNode.setLeft(leftChild.left)
            : currentNode.setLeft(leftChild.right);
          };
        };
      };

      if (currentNode.hasRight()) {
        let rightChild = currentNode.right;

        if (rightChild.data === data) {
          if (rightChild.isLeaf()) {
            return currentNode.deleteRight();
          };
          
          if (rightChild.hasSingleChild()) {
            return rightChild.left !== null
            ? currentNode.setRight(rightChild.left)
            : currentNode.setRight(rightChild.right);
          };
        };
      };

      return currentNode.data > data
      ? goTo(currentNode.left)
      : goTo(currentNode.right);
    };

    return goTo(this.root);
  };
};

export { Node, Tree };
