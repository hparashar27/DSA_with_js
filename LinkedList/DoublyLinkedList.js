class Node{
    constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
    }
}

class DoublyLinkedList{
constructor(){
    this.length = 0;
    this.head = null;
    this.next = null;
}

Push(val){
let newNode = new Node(val);
if(this.length === 0){
    this.head = newNode;
    this.tail = newNode;
}
else{
    this.tail.next = newNode;
    newNode.prev = this.tail
    this.tail = newNode
}
this.length++
return this
}

Pop(){
if(!this.head){
    return undefined
}
if(this.length === 1){
    this.head = null;
    this.tail = null;
}
else{
   let poppedNode = this.tail;
   this.tail = poppedNode.prev;
   this.tail.next = null;
   poppedNode.prev = null
}
this.length--;
return poppedNode;
}

unshift(){
    let newNode = new Node(val);
    if(this.length === 0){
        this.head = newNode;
        this.tail = newNode;
    }
    else{
        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode;
    }
    this.length++
    return this;
}

shift(){
    if(!this.head){
        return undefined
    }
    if(this.length === 1){
        this.head = null;
        this.tail = null;
    }
    else{
        let removed = this.head
        this.head = removed.next
        removed.prev = null;
        removed.next = null
    }
    this.length--;
    return removed ;
}

/* 
the get method ->
 is little different as of singlelinked list , in case of the single linkedlist we can
only traverse in the one direction , but in the case of the doubly linked we can traverse in both direction 
so in order to optimize the getting method , we divide the list by half 

so if the index for which we are looking for is smaller than half length then loop starts from the head to the mid , and if the index is larger than the half length then loop starts from the tail to the mid

*/
 

get(index){
if(index < 0 || index > this.length){
    return false
}
let count , current ;
// from starting to mid
if(index<this.length/2){
count =0 ;
current =this.head
while(count !== index){
    current = current.next;
    count++
}
}else{
    count = this.length-1
    current = this.tail
    while(count !== index){
        current = current.prev;
        count--
}
return current;
}
}

set(index,val){
let foundNode = this.get(index)
if(foundNode != null){
    foundNode.val = val;
    return true
}
else{
    return false;
}
}

insert(index){
    if(index < 0 || index > this.length) return false;
    if(index === 0) return !!this.unshift(val);
    if(index === this.length) return !!this.push(val);

    let newNode = new Node(val);
let beforenode = this.get(index-1);


}

remove(){

}

}

