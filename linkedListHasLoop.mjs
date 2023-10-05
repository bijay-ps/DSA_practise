import { LinkedList } from "./linkedList.mjs";

const myLinkedList = new LinkedList(1);

myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(6);

myLinkedList.tail.next = myLinkedList.head.next.next;
/*
The hasLoop() function is used to detect if a linked list contains a loop (cycle) or not.
It also utilizes the "tortoise and hare" algorithm.

Here's a step-by-step explanation of the logic:

1. Initialize two pointers, slow and fast, both pointing to the head of the linked list.

2. Traverse the linked list using a while loop. The loop continues as long as fast is not null
 (i.e., it has not reached the end of the list), and fast.next is also not null 
 (i.e., there is at least one more node after the current fast node).

3. Inside the loop, move the slow pointer one step forward (i.e., slow = slow.next) and the fast
   pointer two steps forward (i.e., fast = fast.next.next).

4. Check if the slow and fast pointers have become equal. If they have, it means there is a loop in
 the linked list, and the function returns true.

5. If the loop terminates without the slow and fast pointers becoming equal, it means the linked
   list has no loop, and the function returns false.

The "tortoise and hare" algorithm works by having two pointers move at different speeds
through the linked list. If there is a loop, the faster pointer (the hare) will eventually
catch up to the slower pointer (the tortoise) inside the loop. If there is no loop, the faster
pointer will reach the end of the list.
*/
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
