import { LinkedList, Node } from "./linkedList.mjs";

const myLinkedList = new LinkedList(3);
myLinkedList.push(8);
myLinkedList.push(5);
myLinkedList.push(10);
myLinkedList.push(2);
myLinkedList.push(1);

function partitionList(x) {
  if (!myLinkedList.head) return null;

  let leftList = null;
  let rightList = null;

  let temp = myLinkedList.head;

  while (temp) {
    if (temp.value < x) {
      if (!leftList?.head) {
        leftList = new LinkedList(temp.value);
      } else {
        leftList.push(temp.value);
      }
    } else {
      if (!rightList?.head) {
        rightList = new LinkedList(temp.value);
      } else {
        rightList.push(temp.value);
      }
    }
    temp = temp.next;
  }

  //   leftList.push(rightList.head);
  let curr_right_node = rightList.head;
  while (curr_right_node) {
    leftList.push(curr_right_node.value);
    curr_right_node = curr_right_node.next;
  }

  console.log("======================");
  leftList.printList();
  console.log("###########################");
  console.log("leftList: ", leftList);

  return leftList;
}

partitionList(5);

/*
The partitionList(x) function is used to rearrange a linked list in such a way that all nodes with
values less than x come before nodes with values greater than or equal to x.

Here's a step-by-step explanation of the logic:

1. If the head of the linked list is null, return, as there is nothing to rearrange.

2. Create two dummy nodes, dummy1 and dummy2. These dummy nodes will be used to build two
   separate linked lists: one for nodes with values less than x and the other for nodes with values greater than or equal to x.

3. Initialize two pointers, prev1 and prev2, pointing to dummy1 and dummy2, respectively.
   These pointers will be used to append nodes to the two separate linked lists.

4. Initialize a current pointer pointing to the head of the linked list.

5. Iterate through the linked list using a while loop that continues as long as current is not
   null: a. If the current node's value is less than x, update prev1.next to point to the current node and move prev1 forward. b. If the current node's value is greater than or equal to x, update prev2.next to point to the current node and move prev2 forward. c. Move the current pointer to the next node.

6. After the loop, set prev2.next to null to terminate the second linked list.

7. Connect the two separate linked lists by setting prev1.next to dummy2.next.

8. Update the head of the linked list to point to the next node of dummy1.

The function has a time complexity of O(n), where n is the number of nodes in the list,
as it traverses the list only once.
*/
