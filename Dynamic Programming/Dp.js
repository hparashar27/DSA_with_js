// WTF IS DYNAMIC PROGRAMMING

/*
"A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions."
"A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions."

DP - Optimal solution + Overlapping subproblems

OPTIMAL SUBSTRUCTURE -> A problem is said to have optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems

OVERLAPPING SUBPROBLEMS -> A problem is said to have overlapping subproblems if it can be broken down into subproblems which are reused several times

for example if we talk about the fibbncaci series then when we solve it with recurssion then its time complexity is of (2^n)

DYNAMIC PROGRAMMING -> "Using past knowledge to make solving a future problem easier" 

Memorization -> Storing the results of expensive function calls and returning the cached result when the same inputs occur again

Memorized solution for the fibbonaci series

function fib(n, memo=[]){
  if(memo[n] !== undefined) return memo[n]
  if(n <= 2) return 1;
  var res = fib(n-1, memo) + fib(n-2, memo);
  memo[n] = res;
  return res;
}
  by the use of such memorized solution we can improve the time complexity from O(2^n) to O(n);
  
  WE'VE BEEN WORKING TOP-DOWN BUT THERE IS ANOTHER WAY! BOTTOM-UP -

Table -> Storing the result of a previous result in a "table" (usually an array) , Usually done using iteration
Better space complexity can be achieved using tabulation

function fib(n){
    if(n <= 2) return 1;
    var fibNums = [0,1,1];
    for(var i = 3; i <= n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}

AN EXAMPLE:
Write a function called stairs which accepts n number of stairs. Imagine that a person is standing at the bottom of the stairs and wants to reach the top and the person can climb either 1 stair or 2 stairs at a time. Your function should return the number of ways the person can reach the top by only climbing 1 or 2 stairs at a time.

O(2^n) ->

function stairs(n) {
  if (n <= 0) return 0;
  if (n <= 2) return n;
  return stairs(n - 1) + stairs(n - 2);
}

O(n) ->

function stairs(n, memo=[]) {
  if (n <= 0) return 0;
  if (n <= 2) return n;
  if (memo[n] > 0) return memo[n];
  memo[n] = stairs(n - 1, memo) + stairs(n - 2, memo);
  return memo[n];
}

Better space complexity can be achieved using tabulation ->

Time Complexity - O(N)
Space Complexity - O(1)

function stairs(n) {
  if(n < 3) return n;
  let store = [1,1];
  for(let i = 2; i <= n; i++) {
    let total = store[1] + store[0]
    store[0] = store[1]
    store[1] = total
  }
  return store[1];
}

 */