/**
 * 解法一
 */
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) return null;
  let nodeSet = new Set();
  let pA = headA,
    pB = headB;
  while (pA) {
    nodeSet.add(pA);
    pA = pA.next;
  }
  while (pB) {
    if (nodeSet.has(pB)) {
      return pB;
    }
    pB = pB.next;
  }
  return null;
};

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let pA = headA,
    pB = headB;
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return pB;
};
