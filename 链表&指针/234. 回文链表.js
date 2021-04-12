/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let vals = [];
  let node = head;
  while (node) {
    vals.push(node.val);
    node = node.next;
  }
  let i = 0,
    len = vals.length - 1;
  while (i < len / 2) {
    if (vals[i] !== vals[len - i]) {
      return false;
    }
    i++;
  }
  return true;
};

var isPalindrome = function (head) {
  let fast = head,
    slow = head;
  let cur = head,
    pre = null;
  while (fast && fast.next) {
    // 当前节点指向慢指针，可以理解成 cur.next
    cur = slow;
    // 慢指针每次步进一步
    slow = slow.next;
    // 快指针每次步进两步
    fast = fast.next.next;
    // 下一个节点指向前一个节点
    cur.next = pre;
    // 前一个节点变成当前节点
    pre = cur;
  }
  // 当快指针到达时，慢指针刚好到达中点，处理特殊情况：
  if (!!fast) {
    slow = slow.next;
  }
  // 从中点开始，左右依次比较
  while (slow && cur) {
    if (slow.val !== cur.val) {
      return false;
    }
    slow = slow.next;
    cur = cur.next;
  }
  return true;
};
