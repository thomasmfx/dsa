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
    let current = this.head;
    while (current.next.next != null) {
      current = current.next;
    };
    current.next = null;
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

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.preppend("parrot");
// list.append("hamster");
// list.append("snake");
// list.append("turtle");
console.log(list);
// console.log(list.at(0));
// console.log(list.at(1));
// console.log(list.head);

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
