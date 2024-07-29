class Node {
  constructor(data) {
    this.data = data,
    this.left = null,
    this.right = null
  };

  getLeft() {
    return this.left;
  };

  getRight() {
    return this.right;
  };

  setLeft(node) {
    this.left = node;
  };

  setRight(node) {
    this.right = node;
  };
};