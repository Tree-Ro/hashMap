import Node from '@tree-ro/linked-list';

class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.buckets = [];
    this.capacity = 16;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);

      hashCode %= 16;
    }

    return hashCode;
  }

  set(key, value) {
    const hashCode = this.hash(key);
    const currentBucket = this.buckets[hashCode];

    this.increaseIfLowCapacity();

    if (currentBucket) {
      if (currentBucket.value.key === key) {
        currentBucket.value.value = value;
        return this.buckets;
      } else {
        currentBucket.append({ key: key, value: value });
        return this.buckets;
      }
    }

    //Only runs if there is no item in bucket
    this.buckets[hashCode] = new Node({ key: key, value: value });
    return this.buckets;
  }

  get(key) {
    const response = this.findNode(key);

    if (response) {
      return response.value;
    } else {
      return null;
    }
  }

  has(key) {
    if (this.findNode(key)) {
      return true;
    } else {
      return false;
    }
  }

  increaseIfLowCapacity() {
    if (this.length() / this.capacity >= this.loadFactor) {
      this.capacity *= 2;
      return this.capacity;
    }
    return false;
  }

  remove(key) {
    const hashCode = this.hash(key);
    const currentBucket = this.buckets[hashCode];

    if (!currentBucket) return false; //Returns false if there is no bucket with that index

    if (currentBucket.value.key === key) {
      if (!currentBucket.nextNode) {
        this.buckets[hashCode] = null;
        return true;
      } else {
        this.buckets[hashCode] = currentBucket.nextNode;
        return true;
      }
    } else if (currentBucket.nextNode) {
      let currentNode = currentBucket;
      for (let i = 0; i < currentBucket.size(); i++) {
        if (currentNode.nextNode.value.key === key) {
          currentNode.nextNode = currentNode.nextNode.nextNode;
          return true;
        }
        currentNode = currentNode.nextNode;
      }
    }

    return false;
  }

  findNode(key) {
    const hashCode = this.hash(key);
    const currentBucket = this.buckets[hashCode];

    if (!currentBucket) return null; //Returns false if there is no bucket with that index

    if (currentBucket.value.key === key) {
      return currentBucket;
    } else {
      let node = currentBucket;
      for (let i = 0; i < currentBucket.size(); i++) {
        if (node.value.key === key) return node;

        node = node.nextNode;
      }
      return null;
    }
  }

  length() {
    let length = 0;

    for (const bucket of this.buckets) {
      if (!bucket) continue;
      length += bucket.size();
    }

    return length;
  }

  clear() {
    this.buckets = [];
  }

  keys() {
    let array = [];

    for (const bucket of this.buckets) {
      if (!bucket) continue;
      let currentNode = bucket;
      for (let i = 0; i < bucket.size(); i++) {
        array.push(currentNode.value.key);
        currentNode = currentNode.nextNode;
      }
    }
    return array;
  }

  values() {
    let array = [];

    for (const bucket of this.buckets) {
      if (!bucket) continue;
      let currentNode = bucket;
      for (let i = 0; i < bucket.size(); i++) {
        array.push(currentNode.value.value);
        currentNode = currentNode.nextNode;
      }
    }
    return array;
  }

  entries() {
    let object = {};

    for (const bucket of this.buckets) {
      if (!bucket) continue;
      let currentNode = bucket;
      for (let i = 0; i < bucket.size(); i++) {
        object[currentNode.value.key] = currentNode.value.value;

        currentNode = currentNode.nextNode;
      }
    }
    return object;
  }
}

const myMap = new HashMap();

//placeholder data
myMap.set('Rich', 'Nope!'); //12
myMap.set('Bob', 'Smith'); //5
myMap.set('Sweden', 'Of course!'); //12
myMap.set('Colombia', 'Nah prob not'); //12
myMap.set('Apples', 'Grocery List'); // 9
myMap.set('Carlos', 'Pre-school Bully'); //12
myMap.set('Baluga Whale', 'Placeholdernr555');
myMap.set('Aleczander', 'Rydback');
myMap.set('Hold up!', 'Hehe, hold down!');
myMap.set('Frogs', 'Miss. Cow');
myMap.set('Potential futures', 'Death');
myMap.set('Potential Pasts', 'Death');
myMap.set('Interests', 'cool things');

console.log(myMap.entries());
