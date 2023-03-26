

// Node creation  

        class Node{
            constructor(val){
                this.next = null;
                this.val = val;
            }
        }

//  SingleLinkedList ->

class SingleLinkedList{
    constructor(){
        this.head = null ;
        this.tail = null;
        this.length = 0;
    }

    // Push method for adding the node in the end of linked list
    Push(val){
        var newNode = new Node(val);
if(!this.head){
this.head = newNode ;
this.tail = this.head ;
}
else{
    this.tail.next = newNode;
    this.tail = newNode ;
}
this.length++
return this;
    }
 // Pop method for removing the node from the end of linked list
 Pop(){
        if(!this.head){
            return undefined;
        }
        else{
            let current = this.head;
            let newTail = current;
            while(current.next){
                newTail = current;
                current = current.next;
            }
        this.tail = newTail;
        this.tail.next = null;
        length--;
        if(this.length === 0){
        this.head = null;
         this.tail = null;
}
    return current;
}
        }
    
// shift method for removing the node from the starting of linked list

shift(){
if(!this.head){
    return undefined;
}else{
    let currentHead = this.head ;
    this.head = currentHead.next;
    this.length--;
    if(this.length === 0){
        this.tail = null;
    }
}
return currentHead;
}

    // unshift method for adding the node in the starting of linked list
    unshift(){
        var newNode = new Node(val);
if(!this.head){
this.head = newNode ;
this.tail = this.head ;
}
else{
    newNode.next = this.head;
    this.head = newNode;
    this.length++
    return this;
}
    };

        // get method for return the node from the prefer index

        get(index){
if(index<0 || index >= this.length){
    return null
}else{
    let counter =0;
    let current = this.head;
    while(counter !== index){
        current = current.next;
            counter++;
    }
    return current;
}
    };

    // set method for return the node from the prefer index

    set(index,val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    Insert(index,val){
       
if(index<0 || index>this.length){
   return false
}
if(index === 0){
  return !!this.unshift(val)
}if(index = this.length){
 return !!this.Push(val)
}

let newNode = new Node(val)
let prevNode = this.get(index-1);
let temp = prevNode.next
prevNode.next = newNode;
newNode.next = temp
this.length++
return true
    }

remove(index){
        if(index<0 || index>this.length){
            return undefined
         }
         if(index === 0){
            return this.shift()
         }if(index === this.length-1){
          return this.Pop()
         }

         let prev = this.get(index-1);
         let removed = prev.next
         prev.next = removed.next
         this.length--
         return removed;
        }

reverse(){

    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next ;
    let prev= null; 
    for(let i =0;i<this.length; i++){
        next = node.next;
        node.next = prev;
        prev = node;
        node = next ;
    }
    return this;
}
}
