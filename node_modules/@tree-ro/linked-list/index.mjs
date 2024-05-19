class Node {
  // Head of List
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }

  append(value) {
    const node = new Node(value);
    this.tail().nextNode = node;
    return this;
  }
  prepend(value) {
    const node = new Node(value, this);

    return node;
  }

  size(node = this, count = 1) {
    const newNode = node.nextNode;
    if (newNode === null) return count;
    return this.size(newNode, ++count);
  }
  head() {
    return this;
  }
  tail(node = this) {
    const newNode = node.nextNode;
    if (newNode === null) return node;
    return this.tail(newNode);
  }

  at(index) {
    let node = this;
    for (let i = 0; i < index; ++i) {
      node = node.nextNode;
    }
    return node;
  }

  pop() {
    const size = this.size();
    this.at(size - 2).nextNode = null;

    return this;
  }

  contains(value) {
    let node = this;
    for (let i = 0; i < this.size(); ++i) {
      if (node.value == value) {
        return true;
      }
      node = node.nextNode;
    }
    return false;
  }

  find(value) {
    let node = this;
    for (let i = 0; i < this.size(); ++i) {
      if (node.value == value) {
        return i;
      }
      node = node.nextNode;
    }
    return null;
  }

  toString() {
    let currentNode = this;
    let stringified = '';

    while (currentNode) {
      stringified += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }

    // Remove the last '->' from the string
    stringified = stringified.slice(0, -4);

    stringified += `-> null`;

    return stringified;
  }

  insertAt(value, index) {
    if (index <= 0) return "Can't insert at head";
    let node = this;
    let lastNode = node;
    for (let i = -1; i < index; ++i) {
      if (i === index - 1) {
        const addition = new Node(value, node);
        lastNode.nextNode = addition;
      }
      lastNode = node;
      node = node.nextNode;
    }
    return this;
  }

  removeAt(index) {
    const pre = this.at(index - 1);
    pre.nextNode = pre.nextNode.nextNode;
    return this;
  }
}

export default Node;
