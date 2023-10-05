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

  getLength() {
    console.log("Length: " + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }
  /*
The removeDuplicates() function is used to remove duplicate nodes from a linked list. The function traverses the list and
removes nodes with duplicate values while maintaining the relative order of the remaining nodes.

Here's a step-by-step explanation of the logic:

1. Create a Set named values to store the unique values of the linked list nodes.

2. Initialize two pointers: previous, initially set to null, and current, pointing to the head of the linked list.

3. Iterate through the linked list using a while loop that continues as long as current is not null: a. Check if values
   contains the current node's value. If it does, it means the node is a duplicate. Update previous.next to point to 
   current.next (skipping the current node) and decrement the list length by 1. b. If values does not contain the current node's value, add the value to the set and update previous to point to the current node. c. Move the current pointer to the next node.

   The function has a time complexity of O(n), where n is the number of nodes in the list, as it traverses the list only once. 
The space complexity is also O(n), as it uses a set to store unique node values.
*/
  removeDuplicates() {
    if (!this.head) return null;
    let currentElement = this.head;
    let previousElement = null;
    let elementSet = new Set();
    while (currentElement) {
      if (elementSet.has(currentElement.value)) {
        // Remove duplicate from the LL
        previousElement.next = currentElement.next;
        this.length--;
      } else {
        elementSet.add(currentElement.value);
        previousElement = currentElement;
      }
      currentElement = currentElement.next;
    }
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();

myLinkedList.removeDuplicates();

console.log("\nList after removing duplicates:");
myLinkedList.printList();

/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    3
    4
    5
    5
    List after removing duplicates:
    1
    2
    3
    4
    5

*/
