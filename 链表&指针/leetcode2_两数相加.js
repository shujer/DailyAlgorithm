/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let add = 0;
  let root = new ListNode();
  let node = root;
  while (l1 || l2 || add) {
    let num = add;
    if (l1) {
      num += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      num += l2.val;
      l2 = l2.next;
    }
    add = Math.floor(num / 10);
    node.val = num % 10;
    if (l1 || l2 || add) {
      node.next = new ListNode();
      node = node.next;
    }
  }
  return root;
};
