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

  insert(data) {
    let newNode = new Node(data);

    const goTo = (currentNode) => {
      if (currentNode.left === null && currentNode.right === null) {
        currentNode.data > newNode.data
        ? currentNode.left = newNode
        : currentNode.right = newNode;
      } else {
        if (currentNode.data > newNode.data) {
          currentNode.left !== null 
          ? goTo(currentNode.left) 
          : currentNode.left = newNode
        } else {
          currentNode.right !== null 
          ? goTo(currentNode.right) 
          : currentNode.right = newNode;
        };
      };
    };

    return goTo(this.root);
  };
};

export { Node, Tree };
