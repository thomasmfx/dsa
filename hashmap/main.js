import LinkedList from "../linked-lists/main.js";

function generateBuckets(arr) {
  let mapSize = capacity(arr)
  if (mapSize === 0) mapSize = 16;

  for(let i = 0; i < mapSize; i++) {
    arr.push([new LinkedList()]);
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
  
  if (entries > mapSize * factor) return generateBuckets(arr)
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
};

const test = new HashMap();

console.log(test)