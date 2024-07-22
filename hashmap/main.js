import LinkedList from "../linked-lists/main.js";

function generateBuckets(arr) {
  let mapSize = arr.length;
  if (mapSize === 0) mapSize = 16;

  for(let i = 0; i < mapSize; i++) {
    arr.push(new LinkedList());
  }
}

class HashMap {
  constructor() {
    this.map = [];
    generateBuckets(this.map);
  }

  hash(key) {
    let hashCode = 0;
  
    const mapSize = this.map.length;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % mapSize;
    }
  
    return hashCode;
  }
};

const test = new HashMap();

console.log(test)