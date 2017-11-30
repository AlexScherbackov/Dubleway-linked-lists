'use strict';

class LinckedListNode{
	constructor(value, next, prev){
		this.value = value;
		this.next = next;
		this.prev = prev;
	}
}

class DoubleLinkedList{
	constructor(){
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	// В то время как в односвязный список добавлять элементы можно только в конец, двухсвязный список позволяет добавлять
  // их и в начало. Для этого существует метод AddFirst.
  addFirst(value){
  	let node = new LinckedListNode(value);
  	const temp = this.first;

  	this.first = node;
  	this.first.next = temp;

  	if(this.length == 0){
  		// Если список был пуст, то оба указателя указывают на новый узел. 
  		this.last = this.first;
  	} else{
  		temp.prev = this.first;
  	}
  	this.length++;
  }

  addLast(value){
  	let node = new LinckedListNode(value);

  	if(this.length == 0){
  		this.first = node;
  	} else {
  		this.last.next = node;
  		node.prev = this.last;
  	}
  	this.last = node;
  	this.length++;
  }

  remove(value){
  	let prev = null;
  	let current = this.first;

  	// 1: Список пуст.     
            // 2: В списке один узел.     
            // 3: Если в списке много узлов:     
            //    a: Узел может быть первым.     
            //    b: Узел может быть последним или средним.  

     while(current != null){
     	if(current.value == value){
     		// Узел находится в середине или в конце списка 
     		if(prev != null){
     			prev.next = current.next;
            // Если это последний элемент списка 
            if(current.next == null){
            	this.last = prev;
            } else{
            	current.next.prev = prev;
            }
            this.length--;
     		}
     		else{
     			this.removeFirst()
     		}
     		return true;
     	}
     	prev = current;
     	current = current.next;
     }
     return false;
  }
  removeFirst(){
  	if(this.length !=0){
  		this.first = this.first.next;
  		this.length--;
  		if(this.length == 0){
  			this.last = null;
  		} else{
  			this.first.prev = null;
  		}
  	}
  }

  removeLast(){
  	if(this.length != 0){
  		if(this.length == 1){
  			this.first = null;
  			this.last = null;
  		} else{
  			this.last.prev.next = null;
  			this.last = this.last.prev;
  		}
  		this.length--;
  	}
  }
}


function formList(arr, list, type){
	
	for(let i = 0; i < arr.length; i++){
		if(type == 1){
			list.addFirst(arr[i]);
		} else if(type == 2){
			list.addLast(arr[i]);
		}
	}
}

var DL = new DoubleLinkedList();

console.log(DL);
formList([1,2,3,4,5,6], DL, 1);
console.log(DL);


var DL2 = new DoubleLinkedList()
console.log(DL2);
formList([1,2,3,4,5,6], DL2, 2);
console.log(DL2);

DL2.remove(2);
console.log(DL2);
DL2.remove(1);
console.log(DL2);

DL2.removeLast();
console.log(DL2);