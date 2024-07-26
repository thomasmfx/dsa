import { LinkedList, createNode } from "./linkedList.js";

function generateBuckets(arr) {
  let mapSize = capacity(arr);
  if (mapSize === 0) mapSize = 16;

  for(let i = 0; i < mapSize; i++) {
    arr.push(new LinkedList());
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
    let list = this.map;
    let node = createNode(key, value)
    let bucket = this.hash(key);
    list[bucket].append(node);
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
      } else {
        current = current.next;
      }
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
    let bucket = this.map[this.hash(key)];
    let index = bucket.find(key)
    // console.log(bucket.at(index))
    // bucket.removeAt(index)
    bucket.removeAt(index)
  } 

  length() {
    let list = this.map;
    let count = 0;

    for (let i = 0; i < capacity(list); i++) {
      let current = list[i].head;
      while(current != null) {
        count++;
        current = current.next;
      }
    }

    return count;
  }

  clear() {
    for (let i = 0; i < capacity(this.map); i++) {
      this.map[i] = new LinkedList();
    }
  }

  keys() {
    let list = this.map;
    let keysArr = [];

    for (let i = 0; i < capacity(list); i++) {
      let current = list[i].head;
      while (current != null) {
        keysArr.push(current.key);
        current = current.next;
      }
    }

    return keysArr;
  }

  values() {
    let list = this.map;
    let valuesArr = [];

    for (let i = 0; i < capacity(list); i++) {
     let current = list[i].head;
     while (current != null) {
      valuesArr.push(current.value);
      current = current.next;
     }
    }

    return valuesArr;
  }

  entries() {
    let list = this.map;
    let entriesArr = [];

    for (let i = 0; i < capacity(list); i++) {
      let current = list[i].head;
      while (current != null) {
        entriesArr.push([current.key, current.value]);
        current = current.next;
      }
    }

    return entriesArr;
  }
}

const test = new HashMap()
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
test.set('moon', 'silver')

// console.log(test.map)
test.remove('lion')
test.remove('kite')
// console.log(test.map)
// console.log(test.length())
// console.log(test.remove('dog'))
// console.log(test.remove('jão'))
// console.log(test.map[12])
