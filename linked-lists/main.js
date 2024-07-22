class LinkedList {
  constructor() {
    this.head = null;
  };

  append(value) {
    if (this.head == null) return this.head = createNode(value);

    let current = this.head;
    while (current.next != null) {
      current = current.next;
    };
    current.next = createNode(value);
  };

  preppend(value) {
    let node = createNode(value);
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
      if(i === index) return current.value;
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
  }
};

function createNode(value) {
  return { value, next: null };
};

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log()

console.log(list);

// list.preppend('hamster')
// list.size()
// list.getHead()
// list.tail()
// list.at(1)
// list.pop()
// list.contains('cat')
// list.find('parrot')
// list.toString()





