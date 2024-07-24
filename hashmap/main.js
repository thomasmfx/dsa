import { LinkedList, createNode } from "./linkedList.js";

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

function isFull(arr) {
  let mapSize = capacity(arr);
  let loadFactor = 0.75;
  
  let entries = 0;
  for (let i = 0; i < mapSize; i++) {
    if (arr[i].head != null) {
      entries++;
    } 
  }
  
  if(entries > (mapSize * loadFactor)) {
    return true;
  } else {
    return false
  }
}

class HashMap {
  constructor() {
    this.map = [];
    generateBuckets(this.map);
  }

  hash(key) {
    let hashCode = 0;
  
    const mapSize = capacity(this.map)
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % mapSize;
    }
  
    return hashCode;
  }

  set(key, value) {
    let node = createNode(key, value)
    let bucket = this.hash(key);
    this.map[bucket].append(node);
    if (isFull(this.map)) {
      generateBuckets(this.map);
    }
  }

  get(key) {
    let bucket = this.hash(key);
    let list = this.map[bucket];
    let current = list.head;

    while (current != null) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }

    return null;
  }
}

const test = new HashMap();
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
// test.set('moon', 'silver')
console.log(test.map)

// console.log(test.map[1])
// console.log(test.map[11])
// console.log(test.map[12])
