class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
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

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  /*
The findMiddleNode() function uses the "tortoise and hare" algorithm to find the middle node of a linked list.
Here's a step-by-step explanation of the logic:

1. Initialize two pointers, slow and fast, both pointing to the head of the linked list.

2. Traverse the linked list using a while loop. The loop continues as long as fast is not null 
(i.e., it has not reached the end of the list), and fast.next is also not null 
(i.e., there is at least one more node after the current fast node).

3.Inside the loop, move the slow pointer one step forward (i.e., slow = slow.next) and the fast 
pointer two steps forward (i.e., fast = fast.next.next).

4.Since the fast pointer moves twice as fast as the slow pointer, by the time the fast pointer 
reaches the end of the list or goes beyond it, the slow pointer will be at the middle node.When 
the loop terminates, return the slow pointer, which now points to the middle node.

In the case of an even number of nodes, the fast pointer will reach the end of the list, 
while the slow pointer will point to the first middle node (the one closer to the head). 
For an odd number of nodes, the fast pointer will go beyond the end of the list, and the slow 
pointer will point to the exact middle node.

*/
  findMiddleNode() {
    let slow_ptr = this.head;
    let fast_ptr = this.head;

    while (fast_ptr && fast_ptr.next) {
      slow_ptr = slow_ptr.next;
      fast_ptr = slow_ptr.next;
    }

    return slow_ptr;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();

const middleNode = myLinkedList.findMiddleNode();
console.log(`\nMiddle node value: ${middleNode.value}`);

// Create a new list with an even number of elements
let myLinkedList2 = new LinkedList(1);
myLinkedList2.push(2);
myLinkedList2.push(3);
myLinkedList2.push(4);
myLinkedList2.push(5);
myLinkedList2.push(6);

console.log("\nOriginal list 2:");
myLinkedList2.printList();

const middleNode2 = myLinkedList2.findMiddleNode();
console.log(`\nMiddle node value of list 2: ${middleNode2}`);

/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    4
    5
    Middle node value: 3
    Original list 2:
    1
    2
    3
    4
    5
    6
    Middle node value of list 2: 4
*/
