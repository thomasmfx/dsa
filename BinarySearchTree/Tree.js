import Node from "./Node.js";
import formatArray from "./utils.js";

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

function isNull(obj) {
  return obj == null
  ? true
  : false;
};


class Tree {
  constructor(arr) {
    this.root = buildTree(arr);
  };

  insert(data) {
    if (isNull(data)) return;
    let newNode = new Node(data);

    const goTo = (currentNode) => {
      if (currentNode.data === data) return;

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

        let successor = findInorderSuccessor(currentNode.right);
        let lastInLeft = successor.left;
        currentNode.setData(lastInLeft.data);

        return lastInLeft.hasRight()
        ? successor.replace(lastInLeft.right)
        : successor.deleteLeft();
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
    const goTo = (currentNode) => {
      if (isNull(currentNode)) return null;
      if (currentNode.data === data) return currentNode;

      return currentNode.data > data
      ? goTo(currentNode.left)
      : goTo(currentNode.right);
    };

    return goTo(this.root);
  };

  levelOrder(callback) {
    if (callback == undefined) throw new Error('Callback function is required as a function argument');

    let queue = [this.root]; // FIFO
    let callbackedArray = [];

    while (queue.length > 0) {
      if (queue[0].hasLeft()) queue.push(queue[0].left);
      if (queue[0].hasRight()) queue.push(queue[0].right);

      callbackedArray.push(callback(queue.shift()));
    };

    return callbackedArray;
  };

  inorder(callback) {
    if (callback == undefined) throw new Error('Callback function is required as a function argument');

    let callbackedArray = [];

    function inorderTraversal(current) {
      if (!current) return;

      inorderTraversal(current.left);
      callbackedArray.push(callback(current));
      inorderTraversal(current.right);
    };

    inorderTraversal(this.root);
    return callbackedArray;
  };

  preOrder(callback) {
    if (callback == undefined) throw new Error('Callback function is required as a function argument');

    let callbackedArray = [];

    function preOrderTraversal(current) {
      if (!current) return;

      callbackedArray.push(callback(current));
      preOrderTraversal(current.left);
      preOrderTraversal(current.right);
    };

    preOrderTraversal(this.root);
    return callbackedArray;
  }

  postOrder(callback) {
    if (callback == undefined) throw new Error('Callback function is required as a function argument');

    let callbackedArray = [];

    function postOrderTraversal(current) {
      if (!current) return;

      postOrderTraversal(current.left);
      postOrderTraversal(current.right);
      callbackedArray.push(callback(current));
    };

    postOrderTraversal(this.root);

    return callbackedArray;
  }

  height(node) {
    if (isNull(node)) return null;
    
    let queue = [node];
    let queued = [];
    
    while (queue.length > 0) {
      if (queue[0].hasLeft()) queue.push(queue[0].left);
      if (queue[0].hasRight()) queue.push(queue[0].right);
      
      queued.push(queue.shift());
    };
    
    let longestLeaf = queued.pop();

    function goToLongestLeaf(currentNode, currentHeight) {
      if (currentNode.data === longestLeaf.data) return currentHeight;

      return currentNode.data > longestLeaf.data
      ? goToLongestLeaf(currentNode.left, currentHeight + 1)
      : goToLongestLeaf(currentNode.right, currentHeight + 1);
    };

    return goToLongestLeaf(node, 0);
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

  isBalanced() {
    const checkHeight = (currentNode) => {
      if(currentNode == null) return true;

      let leftHeight = this.height(currentNode.left);
      let rightHeight = this.height(currentNode.right);
  
      if (
        Math.abs(leftHeight - rightHeight) <= 1
        && checkHeight(currentNode.left) == true 
        && checkHeight( currentNode.right) == true
      )
        return true;

      return false;
    };

    return checkHeight(this.root)
  };

  rebalance() {
    function getData(obj) { return obj.data };
    let sortedArray = this.inorder(getData);

    this.root = buildTree(sortedArray);
  };
};

export default Tree;