import { buildTree } from './main.js';

function isNull(obj) {
  return obj === null
  ? true
  : false;
};

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
    const goTo = (node) => {
      if (isNull(node)) return null;
      if (node.data === data) return node;

      return node.data > data
      ? goTo(node.left)
      : goTo(node.right);
    };

    return goTo(this.root);
  };

  levelOrder(callback) {
    if (callback == undefined) throw new Error('Callback function is required as a function argument');

    let queue = [this.root]; // FIFO
    let callbacked = [];

    while (queue.length > 0) {
      if (queue[0].hasLeft()) queue.push(queue[0].left);
      if (queue[0].hasRight()) queue.push(queue[0].right);

      callbacked.push(callback(queue.shift()));
    };

    return callbacked;

  // Recursive version:
  
  //   function callbackOnQueue() {
  //   if (queue.length <= 0) return callbacked;

  //   if (queue[0].hasLeft()) queue.push(queue[0].left);
  //   if (queue[0].hasRight()) queue.push(queue[0].right);

  //   callbacked.push(callback(queue.shift()));

  //   return callbackOnQueue(queue);
  // };

  // return callbackOnQueue(queue);
  };

  inorder(callback) {
    if (callback == undefined) throw new Error('Callback function is required as a function argument');

    let callbacked = [];

    function inorderTraversal(current) {
      if (!current) return;

      inorderTraversal(current.left);
      callbacked.push(callback(current));
      inorderTraversal(current.right);
    };

    inorderTraversal(this.root);
    return callbacked;
  };

  preOrder(callback) {
    if (callback == undefined) throw new Error('Callback function is required as a function argument');

    let callbacked = [];

    function preOrderTraversal(current) {
      if (!current) return;

      callbacked.push(callback(current));
      preOrderTraversal(current.left);
      preOrderTraversal(current.right);
    };

    preOrderTraversal(this.root);
    return callbacked;
  }

  postOrder(callback) {
    if (callback == undefined) throw new Error('Callback function is required as a function argument');

    let callbacked = [];

    function postOrderTraversal(current) {
      if (!current) return;

      postOrderTraversal(current.left);
      postOrderTraversal(current.right);
      callbacked.push(callback(current));
    };

    postOrderTraversal(this.root);

    return callbacked;
  }

  height(node) {
    if (isNull(node)) return null;

    function getObj(obj){
      return obj;
    };
    let lastLeaf = this.levelOrder(getObj).pop();
    
    function goToLastLeaf(currentNode, currentHeight) {
      if (currentNode.data === lastLeaf.data) return currentHeight;

      return currentNode.data > lastLeaf.data
      ? goToLastLeaf(currentNode.left, currentHeight + 1)
      : goToLastLeaf(currentNode.right, currentHeight + 1);
    };

    return goToLastLeaf(node, 0);
  };

  depth(node) {
    if (isNull(node)) return null;

    const goTo = (currentNode, currentDepth) => {
      if (currentNode.data === node.data) return currentDepth;

      return currentNode.data > node.data
      ? goTo(currentNode.left, currentDepth + 1)
      : goTo(currentNode.right, currentDepth + 1);
    };

    return goTo(this.root, 0);
  };
};

export { Node, Tree };