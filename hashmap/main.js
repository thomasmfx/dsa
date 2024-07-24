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

  has(key) {
    let list = this.map;

    for (let i = 0; i < capacity(list); i++) {
      let current = list[i].head;

      while (current != null) {
        if (current.key === key)  return true; 
        current = current.next;
      }
    }

    return false;
  }

  remove(key) {
    let list = this.map;

    for (let i = 0; i < capacity(list); i++) {
      let current = list[i].head;
      // If there is no value in head, current = null, so the while loop don't start
      if (current == null) current = list[i]; 
      // If the key is in the head, head  is removed (and turns into next node)
      if (current.key === key) {
        if (current.next != null) {
          current.key = current.next.key;
          current.value = current.next.value;
          current.next = current.next.next;
        } else {
          // Turn into a new LinkedList to remove head
          list[i] = new LinkedList;
        }
        return true;
      }

      while (current.next != null) {
        if (current.next.key === key) {
          current.next = current.next.next;
          return true;
        }
        current = current.next;
      }
    }

    return false;
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
console.log(test.map[12])
console.log(test.remove('dog'))
console.log(test.remove('jão'))
console.log(test.map[12])
