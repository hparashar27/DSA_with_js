
// In order to convert the infix to postfix we have to make a precedence and isoperand function  -


class Node{
    constructor(val){
        this.val = val;
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top = null ;
        this.bottom = null;
        this.size = 0;
    } 

 push(val){
let newNode = new Node(val);
if(!this.top){
    this.top = newNode;
    this.bottom = newNode;
}
let temp = this.top
this.top = newNode;
this.top.next = temp
this.size++
 }  

 pop(){
if(!this.top){
    return undefined
}else if(this.top === this.bottom){
return this.bottom = null;
}
let removed = this.top;
this.top = removed.next;
size--
return removed.val;
 }

Match(str){
    for(let i =0;i<str.length;i++){
if(str[i] === '('){
    this.push(str[i]);
}else if(str[i] === ')'){
if(this.size === 0){
return false
}else{
    this.pop()
  }
}
    }
    return this.size === 0 ? true : false;
}

// precendence -

pre(x){
if(x === '+' || x === '-' ){
return 1;
}else if(x==='*' || x ==='/'){
    return 2;
}
}

isOperand(x){
if(x==='+' || x==='*' || x ==='/' || x==='-'){
    return 0
}else{
    return 1
}
}

InfixToPostfix(infix){
let i,j = 0;
let postfix = [];
let len = infix.length;
while(infix[i] !== null){
    if(this.isOperand(infix[i])){
        postfix[j++]=infix[i++];
    }
    else{
        if(this.pre(infix[i])>this.pre(this.top.val)){
            this.push(infix[i++]);
        }else{
            postfix[j++] = this.pop()
        }
    }
}
while(this.top!==null){
postfix[j++] = this.pop()
postfix[j]!==null
return postfix
}
}
}

let myStack = new Stack;
myStack.Match("((1 + 2) * 3 - 4))") // false
myStack.Match("((1 + 2) * (3 - 4))") // true
InfixToPostfix("a+b*c-d/e");
