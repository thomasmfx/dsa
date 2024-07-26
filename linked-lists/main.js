function createNode(value) {
  return { value: value, next: null };
};

class LinkedList {
  constructor() {
    this.head = createNode(null);
  };

  append(value) {
    if (this.head.value == null) return this.head = createNode(value);

    const iterate = (current) => {
      current.next == null
      ? current.next = createNode(value)
      : iterate(current.next);
    }

    return iterate(this.head);
  };

  preppend(value) {
    let node = createNode(value);
    node.next = this.head;
    this.head = node;
  };

  size() {
    const iterate = (current) => {
      if (current == null) {
        return 0;
      } else {
        return 1 + iterate(current.next);
      }
    }

    return iterate(this.head);
  }

  at(index) {
    const iterate = (current, counter) => {
      if (counter === index ) {
        return current;
      } else {
        return iterate(current.next, counter + 1);
      }
    }

    return iterate(this.head, 0);
  };

  pop() {
    // If there is only one node in the list (the head) then just pop it, because it can't acces the 'next' of null
    if (this.head.next == null) {
      this.head = null;
      return;
    } 
 
    // Since it can't turn the last object into null while accessing it, i turn the 'next' node
    // of the penultimate node into null, i.e the last object

    const iterate = (current) => {
      if (current.next.next == null) {
        current.next = null;
      } else {
        return iterate(current.next)
      }
      
    }

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

  find(value) {
    let current = this.head;
    let i = 0;
    while (current != null) {
      if (current.value === value) return i;
      current = current.next;
      i++;
    };
    return null;
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

  insertAt(value, index) {
    let node = createNode(value);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
      return;
    }
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
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
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

const list = new LinkedList();

list.append("balao");
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

// list.preppend('hamster')
// list.size()
// list.getHead()
// list.tail()
// list.at(1)
// list.pop()
// list.contains('cat')
// list.find('parrot')
// list.toString()
// list.insertAt('wolf', 3)
// list.removeAt(2)
