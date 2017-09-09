/**
	You are given two non-empty linked lists representing two non-negative integers. 
	The digits are stored in reverse order and each of their nodes contain a single digit. 
	Add the two numbers and return it as a linked list.

	You may assume the two numbers do not contain any leading zero, except the number 0 itself.

	Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
	Output: 7 -> 0 -> 8
	
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

const linked_list_0 = {
	val: 2,
	next: {
		val: 4,
		next: {
			val: 3,
			next: null
		}
	}
};

const linked_list_1 = {
	val: 5,
	next: {
		val: 6,
		next: {
			val: 4,
			next: null
		}
	}
};

const addTwoNumbers = function(l1, l2) {
	const add_two_numbers = (surplus) => (n1) => (n2) => (array_of_values) => {
		const val_1 = (n1 !== null) ? n1.val : 0;
		const val_2 = (n2 !== null) ? n2.val : 0;
		const sum = val_1 + val_2 + surplus;
		const more_than_10 = (sum >= 10);
		const result = (more_than_10) ? (sum - 10) : sum;
		const new_surplus = (more_than_10) ? 1 : 0;
		const new_array_of_values = array_of_values.concat(result);

		const n1_next = (n1 !== null) ? n1.next : null;
    const n2_next = (n2 !== null) ? n2.next : null;

		if (n1_next !== null || n2_next !== null || more_than_10) {
			return add_two_numbers(new_surplus)(n1_next)(n2_next)(new_array_of_values);
		} else {
			return new_array_of_values;
		}
	};
	const sum_array = add_two_numbers(0)(l1)(l2)([]);

	return sum_array;
};

const result = addTwoNumbers(linked_list_0, linked_list_1);
log(result);
