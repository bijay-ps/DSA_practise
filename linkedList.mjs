export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor(value) {
    // Creates a new NODE
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getTail() {
    if (this.tail === null) {
      console.log("Tail: null");
    } else {
      console.log("Tail: " + this.tail.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    // Creates a new NODE and add it to the end
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // Removes the last NODE from the linked list
    // CASE I: If the LL is EMPTY
    if (!this.tail) {
      return;
    }
    // CASE II: If there are NODES and we have to remove the last one
    let current_node = this.head;
    let parent_node = current_node;
    while (current_node.next) {
      parent_node = current_node;
      current_node = current_node.next;
    }
    this.tail = parent_node;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current_node;
  }

  unshift(value) {
    // Creates a new NODE and add it to the beginning
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    // Removes the first NODE from the beginning
    if (!this.head) return;
    const current_node = this.head;
    this.head = current_node.next;
    current_node.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current_node;
  }

  get(index) {
    if (index < 1 || index >= this.length) {
      return undefined;
    }
    let temp = this.head;
    for (let i = 1; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    const node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    // Creates a new NODE and insert it at the correct position
    if (index < 0 || index > this.length) return;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    let nodeAtPrevIndex = this.get(index - 1);
    let nodeAtIndex = this.get(index);
    const newNode = new Node(value);
    nodeAtPrevIndex.next = newNode;
    newNode.next = nodeAtIndex;
    this.length++;
    return this;
  }

  remove(index) {
    // Deletes an exisitng NODE
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return undefined;
    const prevNode = this.get(index - 1);
    const nodeToBeDeleted = prevNode.next;
    prevNode.next = nodeToBeDeleted.next;
    nodeToBeDeleted.next = null;
    this.length--;
    return nodeToBeDeleted;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;

    // for (let i = 0; i < this.length; i++) {
    while (temp) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }

  findMiddleNode() {
    let slow_ptr = this.head;
    let fast_ptr = this.head;

    while (fast_ptr && fast_ptr.next) {
      slow_ptr = slow_ptr.next;
      fast_ptr = fast_ptr.next.next;
    }

    return slow_ptr;
  }

  partitionList(x) {
    if(!this.head) return null;

    const dummy1 = new Node(0);
    const dummy2 = new Node(0);

    let prev1 = dummy1;
    let prev2 = dummy2;
    let cp = this.head;
    
  }
}

function test() {
  // let myLinkedList = new LinkedList(1);
  // myLinkedList.push(2);
  // myLinkedList.push(3);
  // console.log(myLinkedList.printList());
  // myLinkedList.reverse();
  // console.log(myLinkedList.printList());
  let myLinkedList = new LinkedList(1);
  myLinkedList.push(2);
  myLinkedList.push(3);
  myLinkedList.push(4);
  myLinkedList.push(5);

  console.log("Original list:");
  myLinkedList.printList();
  console.log("===========================");
  console.log(myLinkedList.get(1));

  // const rLL = myLinkedList.reverse();
  // rLL.printList();

  // const middleNode = myLinkedList.findMiddleNode();
  // console.log(`\nMiddle node value: ${middleNode.value}`);
}

// test();
