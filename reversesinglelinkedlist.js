//linkedList --> collection of 
// linkedNode is  called linkedList
// property 
		// value:any,
		//  next:listNode
//singly linked dont have previous property
// ======
// question  
// =======
// --> Q:Give a linked list return in reverse
// according to questuin 
// example 1->2->3->4->null;
// output 4->3->2->1->null;
const linkedlist = 1,2,3,4,5,6;
const reverseLinkedList = function(head){
	let current= head; // ex current --> 1
	let prev = null; // prev = null
	while(current){
		let next = current.next; // nex --> 2
		current.next = prev;  // now  prev --> 2
		prev = current // now prev = 2 --> 1
		current = next;
	}
	return prev;
}

