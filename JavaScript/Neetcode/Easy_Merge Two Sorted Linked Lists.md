```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // 建立一個虛擬頭節點（dummy），方便處理頭部
    const dummy = new ListNode(0);
    let current = dummy;  // current 會一直往前推進，負責接節點

    // 只要兩個串列都還有節點，就繼續比
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;     // 接上較小的
            list1 = list1.next;       // list1 前進
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;       // current 也前進
    }

    // 迴圈結束後，最多只剩一條串列有節點，直接接上剩下的全部
    current.next = list1 !== null ? list1 : list2;

    // 回傳真正的頭（dummy.next）
    return dummy.next;
};
```
