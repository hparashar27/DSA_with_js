

class node{
constructor(value){
        this.left = null ;
        this.right = null;
        this.value= value;
}
}

class BinarySearchTree{
    constructor(){
    this.root = null;
    }

    insert(value){
        let newNode = new node(value);
        if(this.root===null){
            this.root = newNode
            return this;
        }
        let current = this.root;
        while(true){
            if(value===current.value){
return undefined;
            }
            if(value<current.value){
                if(current.left===null){
            current.left = newNode;
            return this;
                }else{
                    current =current.left;
                }
            }
            else{
                if(current.right===null){
                    current.right = newNode;
                    return this;
                }
                else{
                    current=current.right
                }
            }
        }
    }
}
