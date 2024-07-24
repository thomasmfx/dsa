function createNode(key, value) {
  let node = {
    key: key,
    value: value,
    next: null
  }
  return node;
}

class LinkedList {
  constructor() {
    this.head = null;
  };

  append(node) {
    if (this.head == null) return this.head = node;
    let current = this.head;
    if (current == null) return current = node;

    while (current != null) {
      if (current.key === node.key) return current.value = node.value;
      current = current.next;
    }

    current = node;
  };

  preppend(node) {
    node.next = this.head;
    this.head = node;
  };
  
  size() {
    let current = this.head;
    let i = 0;
    while (current.next != null) {
      current = current.next;
      i++;
    };
    return i;
  };

  at(index) {
    let i = 0;
    let current = this.head;
    while (current != null) {
      if(i === index) return current.node;
      i++;
      current = current.next;
    };
    return null;
  };

  pop() {
    let current = this.head;
    while (current.next.next != null) {
      current = current.next;
    };
    current.next = null;
  };

  contains(node) {
    let current = this.head;
    while (current != null) {
      if (current.node === node) return true;
      current = current.next;
    };
    return false;
  };

  find(node) {
    let current = this.head;
    let i = 0;
    while (current != null) {
      if (current.node === node) return i;
      current = current.next;
      i++;
    };
    return null;
  };

  getHead() {
    return this.head.node;
  };

  tail() {
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    };
    return current.node;
  };

  toString() {
    let string = '';
    let current = this.head;
    while (current != null) {
      string += `( ${current.node} ) -> `;
      current = current.next;
    };
    return string += 'null';
  };

  insertAt(node, index) {
    let current = this.head;
    let i = 0;

    while (current.next != null) {
      i++;
      if (i === index) {
        node.next = current.next;
        current.next = node;
        return;
      };
      current = current.next;
    };

    return null;
  };

  removeAt(index) {
    let current = this.head;
    let i = 0;

    while (current.next != null) {
      i++;
      if (i === index) {
        current.next = current.next.next;
        return;
      } 
      current = current.next;
    };

    return null;
  };
};

export { LinkedList, createNode }