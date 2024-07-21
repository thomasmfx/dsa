class LinkedList {
  constructor() {
    this.value = 'HEAD'
    this.next = null
  };

  append(value) {
    appendToEnd(this, createNode(value))
  };

  toString() {
    return returnValues(this);
  }
};

function createNode(value) {
  return { value, next: null };
};

const list = new LinkedList();
list.append('Node 1');
list.append('Node 2');
list.append('Node 3');
console.log(list);
console.log(list.toString());

function appendToEnd(obj, newValue) {
  let current = obj;
  while (current.next != null) {
    current = current.next
  };
  current.next = newValue;
}

function returnValues(obj) {
  let string = '';
  let current = obj;

  while (current != null) {
    string += `( ${current.value} ) -> `;
    current = current.next
  }

  return string += 'null';
}

// NOTAS:

// Veja se já não existe um método embutido para executar uma função
// Recursão -> loop
// variáveis