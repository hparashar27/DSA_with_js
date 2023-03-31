

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

    find(value){
        if(this.root === null){
            return false
        }
        let current = this.root;
        found = false
        while(current && !found){
            if(value<current.value){
current= current.left;
            }
            if(value>current.value){
current=current.right;
            }else{
                found = true;
            }
        }
        return current
    }

    contain(value){
        if(this.root === null){
            return false
        }
        let current = this.root;
        found = false
        while(current && !found){
            if(value<current.value){
current= current.left;
            }
            if(value>current.value){
current=current.right;
            }else{
                return true;
            }
        }
        return false
    }
}

let tree = new BinarySearchTree();

let arr = [12,3,4,32,34,54,24,124]

for(let i=0;i<arr.length;i++){
    tree.insert(arr[i]);
}