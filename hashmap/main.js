import LinkedList from "../linked-lists/main.js";

function generateBuckets(arr) {
  for(let i = 0; i < 16; i++) {
    arr.push(new LinkedList());
  };
};

class HashMap {
  constructor() {
    this.map = [];
    generateBuckets(this.map);
  };
};

const test = new HashMap();

console.log(test)
