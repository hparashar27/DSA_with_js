class Node{
    constructor(val){
this.val = val;
this.next = null;
    }
}
class Stack{
    constructor(){
        this.start = null;
        this.last = null;
        this.size = 0;
    }

    push(){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }
        else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    
}
