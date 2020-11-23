/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  if (!head) {
    return head;
  }
  let phead = new ListNode(head.val);
  phead.next = head;
  let node = head;
  let cur = head.next;
  while (cur) {
    if (node.val <= cur.val) {
      node = node.next;
    } else {
      let prev = phead;
      while (prev.next.val <= cur.val) {
        prev = prev.next;
      }
      node.next = cur.next;
      cur.next = prev.next;
      prev.next = cur;
    }
    cur = node.next;
  }
  return phead.next;
};
