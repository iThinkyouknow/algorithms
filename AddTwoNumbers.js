/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }

 listNode = {
	val: int,
	next: null
 }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const {log} = console;

var addTwoNumbers = function(l1, l2) {

	const sum = (l1, l2, surplus, linked_list) => {
		const val_1 = l1.val;
	  const val_2 = l2.val;

	  const add = val_1 + val_2;
	  const new_surplus = add - 10;
	  const new_linked_list = (linked_list.val) ? Object.assign(linked_list, {next: {val: add}} );


		if (l1.next === null && l2.next === null) {
			return new_linked_list;
		} else if () {

		} else {
			return sum(l1.next, l2.next, new_surplus, new_linked_list);
		}
	};

	return sum(l1, l2, 0, {});

    
};

const result = addTwoNumbers({
	val: 2,
	next: {
		val: 4,
		next: {
			val: 3,
			next: null
		}
	}
}, {
	val: 5,
	next: {
		val: 6,
		next: {
			val: 4,
			next: null
		}
	}
});