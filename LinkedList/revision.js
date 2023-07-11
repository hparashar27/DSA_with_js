// single linked list 

class Node{
    constructor(val){
        this.val = val;
        this.next = next;
    }
}

class SingleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
        // push method - adding node in the end of linked list 
 
       push(val){
    let newNode = new Node(val);
    if(!this.head){
this.head = newNode;
this.tail = this.head;
    }
    else{
        this.tail.next =  newNode;
        this.tail = newNode;
        this.length++
    }
    return this
       }

        // pop method - removing node from the end of the linked list
    pop(){
   if(this.head){
    return null;
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
     this.length--;
     if(this.length === 0){
        this.head = null;
        this.tail = null;
     }
    return current
}
        }
    
        // shift - removing node from the starting of the linked list 

 shift(){
if(this.head){
    return undefined;
}
else{
    let current = this.head;
    this.head = current.next ;
    this.length--;
    if(this.length === 0){
        this.tail = null;
    }
    return current;
}
   }
        // unshift - adding node in the starting of the linked list

unshift(val){
    if(!this.head){
        this.head = newNode;
        this.tail = this.head;
            }
    else{
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
}      
         // get - getting the node at particular index 
         get(index){
    if(index<0 || index >= this.length){
        return undefined;
    }
    else{
        let counter = 0;
        let current = this.head;
        while(counter !== index){
            current =current.next;
            counter++
        } 
        return current;
    }
         }
        // set - setting the value of node at particular index
    set(index,value){
        if(index<0 || index >= this.length){
            return undefined;
        }
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = value;
            return true;
        }
        else{
            return false;
        }
    }
        // remove - removing element from a particular position in the linked list 

        // insert - adding new node in between the linked list 
        insert(index,value){
            if(index<0 || index >= this.length){
                return undefined;
            }
            if(index === 0){
 return this.unshift(value); 
            }
            if(index = this.length-1){
 return this.push(value);
            }
            else{
let newNode = new Node(value);
let previousNode = this.get(index-1);
let temp = previousNode.next;
previousNode.next = newNode;
newNode.next = temp;
this.length++;
return true;
            }
        }

remove(index){
    if(index<0 || index >=this.length){
        return false
    }
    if(index === 0){
        return this.shift(); 
      }
    if(index = this.length-1){
        return this.pop();
      }
      else{
        let previousNode = this.get(index-1);
        let removedNode = previousNode.next;
        previousNode.next = removedNode.next;
        this.length--;
        return removedNode;
      }
}
    

    revese(){
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

let next ;
let prev = null;

for(let i = 0;i<this.length;i++){
    next = node.next;
    node.next = prev;
    prev = node;
    node =  next;
}
    }

}
// double linked list 


// circular linked list 