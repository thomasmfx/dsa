# DSA - Data Structures and Algorithms

This repository is a documentation to what i have developed while studying one of the most important topics in Computer Science, and essential to solve problems in a GOOD way: Data Structures and Algorithms.

## Summary

- [Balanced Binary Search Tree](#binary-search-tree)
- [Hashmap](#hashmap)
- [Linked List](#linked-list)
- [Recursion](#recursion)

## Binary Search Tree

A Binary Tree Data Structure is a hierarchical data structure where each node has at most two children, the left child and the right child. Why balanced? Keeping it balanced ensures a good performance, as it provide O(log N) time for **search**, **insert** and **delete**

Code: [binary-search-tree/](./binary-search-tree/)

<div align=center> 
  <img src="./assets/bst.png">
</div>

## Features

### Node

```javascript
class Node {
  constructor(data) {
    this.data = data,
    this.left = null,
    this.right = null

    // Methods to manipulate nodes
  }
}
```

### Tree

```javascript
class Tree {
  constructor(arr) {
    this.root = buildTree(arr)

    // ... Methods listed below
  }
}
```

- `insert(data)` creates a Node with the given value and inserts in the tree

- `deleteItem(data)` deletes the Node with the given data

- `find(data)` returns the node with the given data

- `height(node)` returns the height of the given node in the tree

- `depth(node)` returns the depth of the given node in the tree

- `isBalanced()` checks if tree is balanced

- `rebalance()` rebalances the tree

### Tree's Traversal methods


- Level Order Traversal (aka Breadth First Search or BFS)

  - `levelOrder(callback)`

- Depth First Search or DFS

  - `preOrder(callback)`

  - `postOrder(callback)`

  - `inorder(callback)`

<div align="right">
  <a href="#summary" style="font-weight: bold">&uarr; Summary</a>
</div>