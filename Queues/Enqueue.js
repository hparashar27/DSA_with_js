class Queue{
    constructor(){
        this.start = null;
        this.last = null;
        this.size = 0;
    }
}

class Node{
    constructor(val){
this.val = val;
this.next = next;
    }
    enqueue(){
        let newNode = new Node(val);
    if(!this.first){
        this.first = newNode;
        this.last = newNode;
    }
    else{
        this.last.next = newNode;
        this.last = newNode;
    }
    return ++this.size;
     }   
    
}