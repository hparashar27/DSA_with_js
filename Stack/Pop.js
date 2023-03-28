class Stack{
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
        pop(){
            if(!this.first) return null;
            var temp = this.first;
            if(this.first === this.last){
                this.last = null;
            }
            this.first = this.first.next;
            this.size--;
            return temp.value;
    }
}
