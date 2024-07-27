function createNode(key = null, value = null) {
  return { key: key, value: value, next: null };
};

class LinkedList {
  constructor() {
    this.head = createNode();
  };

  append(node) {
    if (this.head.value == null) return this.head = node;

    const iterate = (current) => {
      if (current.key === node.key) return current.value = node.value;
      current.next == null
      ? current.next = node
      : iterate(current.next);
    };

    return iterate(this.head);
  };

  preppend(value) {
    let node = createNode(value);
    node.next = this.head;
    this.head = node;
  };

  size() {
    let count = 0;
    let current = this.head;

    while (current != null) {
      if (current.key) {
        count += 1;
      }
      current = current.next;
    }

    return count;
  };

  at(index) {
    const iterate = (current, count) => {
      if (count === index ) {
        return current;
      } else {
        return iterate(current.next, count + 1);
      };
    };

    return iterate(this.head, 0);
  };

  pop() {
    // If there is only one node in the list (the head) then just pop it, because it can't acces the 'next' of null
    if (this.head.next == null) {
      this.head = null;
      return;
    };
 
    // Since it can't turn the last object into null while accessing it, i turn the 'next' node
    // of the penultimate node into null, i.e the last object
    const iterate = (current) => {
      if (current.next.next == null) {
        current.next = null;
      } else {
        return iterate(current.next);
      };
    };

    return iterate(this.head);
  };

  contains(value) {
    let current = this.head;
    while (current != null) {
      if (current.value === value) return true;
      current = current.next;
    };

    return false;
  };

  find(key) {
    const iterate = (current, count) => {
      if (current.key === key) {
        // console.log(count);
        return count;
      } else {
        return iterate(current.next, count + 1);
      };
    };

    return iterate(this.head, 0)
  };

  getHead() {
    return this.head.value;
  };

  tail() {
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    };
    return current.value;
  };

  toString() {
    let string = '';
    let current = this.head;
    while (current != null) {
      string += `( ${current.value} ) -> `;
      current = current.next;
    };
    return string += 'null';
  };

  removeAt(index) {
    const iterate = (current, count) => {
      if (count === index) {
        return Object.assign(current, createNode(current.next));
      } else {
        current.next != null
        ? iterate(current.next, count + 1)
        : null;
      };
    };

    return iterate(this.head, 0);
  };
};

// const test = new LinkedList();
// console.log(test);

export { LinkedList, createNode };

