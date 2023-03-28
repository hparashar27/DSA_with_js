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

  dequeue(){
    if(!this.first){
        return undefined
    }
    let temp = this.first;
    if(this.first === this.last){
        this.last = null
    }
    else{
        this.first = this.first.next;
        this.size--;
    }
    return temp.val;
  }  
}

// the Queue is abstract data structure based on the principle first in first out ->

