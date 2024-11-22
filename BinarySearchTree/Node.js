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

export default Node;