import LinkedList from "../linked-lists/main.js";

function generateBuckets(arr) {
  let mapSize = capacity(arr);
  if (mapSize === 0) mapSize = 16;

  for(let i = 0; i < mapSize; i++) {
    arr.push(new LinkedList);
  }
}

function capacity(arr) {
  return arr.length;
}

function loadFactor(arr) {
  let mapSize = capacity(arr);
  let factor = 0.8;

  let entries = 0;
  for (let i = 0; i < mapSize; i++) {
    if (arr[i].head) {
      entries++;
    } 
  }
  
  if (entries > mapSize * factor) return generateBuckets(arr);
}

function createNode(key, value) {
  let node = {
    key: key,
    value: value,
    next: null
  }
  return node;
}

class HashMap {
  constructor() {
    this.map = [];
    generateBuckets(this.map);
    // this.map[0].head = createNode('Carlos', 'Smith')
    // this.map[0].head.next = createNode('Carlos', 'Smith')
  }

  hash(key) {
    let hashCode = 0;
  
    const mapSize = capacity(this.map)
    const primeNumber = 31;
    // key = 'Carlos'
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % mapSize;
    }
  
    return hashCode;
  }
}

const test = new HashMap();
console.log(test.map)
console.log(createNode('Carlos', 'Smith'))
