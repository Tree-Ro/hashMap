//if (index < 0 || index >= buckets.length) {
//  throw new Error("Trying to access index out of bound");
//}

class HashMap {
  constructor() {
    this.loadFactor = 16;
    this.buckets = [];
    this.capacity = this.buckets.length;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);

      hashCode %= this.loadFactor;
    }

    return hashCode;
  }

  set(key, value) {
    const hashCode = this.hash(key);

    this.buckets[hashCode] = { key: key, value: value };

    return this.buckets;
  }
}

const myMap = new HashMap();

myMap.buckets[myMap.hash('Moo')] = { key: 'Moo', value: 'My catchphrase' };

console.log(myMap.hash('Moo'));
console.log(myMap.buckets);
