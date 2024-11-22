function createNode(value = null, next = null) {
  return { value: value, next: next};
};

function isNullOrUndefined(value) {
  if (value === null || value === undefined) {
    return true;
  }

  return false;
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  };

  isEmpty() {
    return this.head === null;
  }

  increaseLength() {
    this.length++;
  }

  decreaseLength() {
    this.length--;
  }

  ensureIndexIsValid(index) {
    if (index < 0 || index > this.length) throw new Error("Index out of bounds")
  }

  clear() {
    this.head = null;
    this.length = 0;
  }

  getLastNode() {
    if (this.isEmpty()) return null;

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  append(value) {
    if (isNullOrUndefined(value)) return false;
    const newNode = createNode(value);

    this.head === null
      ? this.head = newNode
      : this.getLastNode().next = newNode;
    this.increaseLength();
    return true;
  };

  prepend(value) {
    if (isNullOrUndefined(value)) return false;

    const newNode = createNode(value, this.head);
    this.head = newNode;
    this.increaseLength();

    return true;
  };

  size() {
    return this.length;
  };

  at(index) {
    this.ensureIndexIsValid(index);
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode
  };

  pop() {
    if (this.isEmpty()) return false;
    // If there is only one node in the List (the head) then just pop it, because it can't acces the 'next' of null
    if (this.head.next == null) {
      this.head = null;
      this.decreaseLength();
      return true;
    };
 
    // Since it can't turn the last object into null while accessing it, i turn the 'next' node
    // of the penultimate node into null
    let currentNode = this.head;
    for (let i = 1; i < (this.length - 1); i++) {
      currentNode = currentNode.next;
    }

    currentNode.next = null;
    this.decreaseLength();
    return true;
  };

  contains(value) {
    if (isNullOrUndefined(value)) return false;

    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
    }

    return false;
  };

  find(value) {
    if (isNullOrUndefined(value)) return null;
    
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (currentNode.value === value) return i;
      currentNode = currentNode.next
    }

    return null;
  };

  getHead() {
    if (this.isEmpty()) return null;
    return this.head.value;
  };

  tail() {
    if (this.isEmpty()) return null;
    const lastNode = this.getLastNode();
    return lastNode.value;
  }

  toString() {
    if (this.isEmpty()) return 'null';

    let string = '';
    let currentNode = this.head;
    while (currentNode) {
      string += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.next;
    }

    string += 'null';
    return string;
  };

  insertAt(value, index) {
    this.ensureIndexIsValid(index);
    if (isNullOrUndefined(value)) return false;
    if (index === 0) return this.prepend(value)

    const newNode = createNode(value);
    const prevNode = this.at(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.increaseLength();
    return true;
  };

  removeAt(index) {
    this.ensureIndexIsValid(index);
    if (this.isEmpty()) return false;

    if (index === 0) {
      this.head = this.head.next;
    } else {
      // Node previous to the one being removed
      const prevNode = this.at(index - 1);
      prevNode.next = prevNode.next.next;
    }
    
    this.decreaseLength();
    return true;
  };
};

const List = new LinkedList();

List.append("froakie");
List.append("kakuna");
List.append("palkia");
List.append("dialga");
List.append("giratina");
List.append("rayquaza");

// Tests

console.log(List.toString());

// Append values
List.append("pikachu");
List.append("bulbasaur");
console.log(List.toString()); 

// Prepend values
List.prepend("charmander");
console.log(List.toString()); 

// Remotion
List.pop();
console.log(List.toString()); 

// Insert at specific positions
List.insertAt("squirtle", 2);
List.insertAt("latias", List.length);
console.log(List.toString());

// Search
console.log(List.contains("bulbasaur"));
console.log(List.find("pikachu")); 

// Remove at specific position
List.removeAt(1); 
console.log(List.toString());


export default LinkedList;