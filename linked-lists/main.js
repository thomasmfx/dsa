class LinkedList {
  constructor() {
    this.value = 'HEAD'
    this.next = null
  };

  append(value) {
    let current = this;
    while (current.next != null) {
      current = current.next;
    };
    current.next = createNode(value);
  };

  preppend(value) {
    let node = createNode(value);
    node.next = this.next.next;
    this.next = node;
  };
  
  size() {
    let current = this;
    let i = 0;
    while (current.next != null) {
      current = current.next;
      i++;
    };

    return i;
  };

  at(index) {
    let i = 0;
    let current = this;

    while (current.next != null) {
      if(i === index) return current.value;
      current = current.next;
      i++;
    };

    return null;
  };

  pop() {
    let current = this;

    while (current.next.next != null) {
      current = current.next;
    };

    current.next = null;
  };

  contains(value) {
    let current = this;

    while (current.next != null) {
      if (current.value == value) return true;
      current = current.next;
    };

    return false;
  };

  find(value) {
    let current = this;
    let i = 0;
    while (current.next != null) {
      if (current.value == value) return i;
      current = current.next;
      i++;
    };

    return null;
  };

  head() {
    return this.next.value;
  };

  tail() {
    let current = this;
    while (current.next != null) {
      current = current.next;
    };

    return current.value;
  };

  toString() {
    let string = '';
    let current = this;

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

console.log(list.toString());
