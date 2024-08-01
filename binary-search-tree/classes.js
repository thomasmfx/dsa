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
        return currentNode.setChild(newNode);
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
    // Cases to cover: Node is a leaf, Node has both children, Node has only one child; 
    // Reference: geeksforgeeks.org/deletion-in-binary-search-tree/

    // The condition to delete a leaf node is a little trick, since:
    // 1. Trying to acces a property of null throws an error (e.g. null.data)
    // 2. It's not possible to delete a node while accessing it

    // So this algorithm first does:
    // 1. Check if node has left/right before accessing it
    // 2. Check if left or right node is the one to delete
    // 3. Check if node to delete is a leaf. If so, delete it from parent

    // If one of these conditions are not attended, then cover the other 2 cases,
    // where it's possible to manipulate the node to delete while accessing it

    const goTo = (currentNode) => {
    // Node is a leaf
    if (currentNode.hasLeft()) {
      let leftChild = currentNode.left;
      if (leftChild.data === data && leftChild.isLeaf()) {
        return currentNode.deleteLeft();
      };
    };

    if (currentNode.hasRight()) {
      let rightChild = currentNode.right;
      if (rightChild.data === data && rightChild.isLeaf()) {
        return currentNode.deleteRight();
      };
    };

    if (currentNode.data === data) {
      // Node has both children
      if (currentNode.hasBothChildren()) {

        function findInorderSuccessor(node) {
          return !node.left.hasLeft()
          ? node
          : findInorderSuccessor(node.left);
        };

        let successor = findInorderSuccessor(currentNode.right).left;
        currentNode.setData(successor.data);

        return successor.hasRight()
        ? successor.replace(successor.right)
        : successor = null;
      };

      // Node has only one child
      if (currentNode.hasSingleChild()) {
        return currentNode.hasLeft()
        ? currentNode.replace(currentNode.left)
        : currentNode.replace(currentNode.right);
      };
    };

    return currentNode.data > data
    ? goTo(currentNode.left)
    : goTo(currentNode.right);
    };

    return goTo(this.root);
  };

  find(data) {
    function goTo(node) {
      if (node.data === data) return node;

      return node.data > data
      ? goTo(node.left)
      : goTo(node.right);
    };

    return goTo(this.root);
  };
};

export { Node, Tree };
