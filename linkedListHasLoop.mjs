import { LinkedList } from "./linkedList.mjs";

const myLinkedList = new LinkedList(1);

myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(6);

myLinkedList.tail.next = myLinkedList.head.next.next;

function hasLoop(LL) {
  let slow = LL.head;
  let fast = LL.head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}

// hasLoop() {
//     // Initialize slow and fast pointers at head
//     let slow = this.head;
//     let fast = this.head;
//     // Iterate through the list
//     while (fast !== null && fast.next !== null) {
//         // Move slow pointer one step
//         slow = slow.next;
//         // Move fast pointer two steps
//         fast = fast.next.next;
//         // If slow and fast pointers meet, loop exists
//         if (slow === fast) {
//             return true;
//         }
//     }
//     // If no loop is found, return false
//     return false;
// }

console.log("====================================");
const loopFound = hasLoop(myLinkedList);
console.log("Loop Found: ", loopFound);
