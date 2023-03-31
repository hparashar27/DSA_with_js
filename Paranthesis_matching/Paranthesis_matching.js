// using array as a stack 
function checkParenthesis(str) {
    const stack = [];
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(') {
        stack.push(str[i]);
      } else if (str[i] === ')') {
        if (stack.length === 0) {
          return false; // there is no matching opening parenthesis
        }
        stack.pop();
      }
    }
  
    return stack.length === 0; // if stack is empty, there are no unmatched parentheses
  }
  checkParenthesis("(1 + 2) * (3 - 4)");

//   Using Stack for paranthesis matching 

class Node{
    constructor(val){
        this.val = val;
        this.next = next
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
}

let myStack = new Stack;
myStack.Match("((1 + 2) * 3 - 4))") // false
myStack.Match("((1 + 2) * (3 - 4))") // true