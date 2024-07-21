class LinkedList {
  constructor() {
    this.value = 'HEAD'
    this.next = null
  };

  append(value) {
    let current = this;
    while (current.next != null) {
      current = current.next
    };
    current.next = createNode(value);
  };

  preppend(value) {

  }

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
list.append('Node 1');
list.append('Node 2');
list.append('Node 3');
console.log(list);
console.log(list.toString());


// NOTAS:

// Veja se já não existe um método embutido para executar uma função
// Recursão -> loop
// variáveis