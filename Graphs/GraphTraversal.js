// Graph traversal algorithm ->

/*
DEPTH FIRST -> Explore as far as possible down one branch before "backtracking"

DFS Traversal psudocode ->

 DFS(vertex):
    if vertex is empty
        return (this is base case)
    add vertex to results list
    mark vertex as visited
    for each neighbor in vertex's neighbors:
       if neighbor is not visited:
          recursively call DFS on neighbor

 Recursive way of DFS

 **************************************** Algo **********************************************

( By recursice -> )

 * The function should accept a starting node 
 * Create a list to store the end result, to be returned at the very end
 * Create an object to store visited vertices
 * Create a helper function which accepts a vertex
 The helper function should return early if the vertex is empty
The helper function should place the vertex it accepts into the visited object and push that vertex into the result array.
Loop over all of the values in the adjacencyList for that vertex
If any of those values have not been visited, recursively 
* invoke the helper function with that vertex
* Return the result array

***************************************** Algo **********************************************

( By iterative -> )

The function should accept a starting node
Create a stack to help use keep track of vertices (use a list/array)
Create a list to store the end result, to be returned at the very end
Create an object to store visited vertices
Add the starting vertex to the stack, and mark it visited
While the stack has something in it:
Pop the next vertex from the stack
If that vertex hasn't been visited yet:
​Mark it as visited
Add it to the result list
Push all of its neighbors into the stack
Return the result array
    
DEPTH FIRST TRAVERSAL

The function should accept a starting node
Create an object to store visited nodes and an array to store the result
Create a helper function which accepts a vertex
The helper function should place the vertex it accepts into the visited object and push that vertex into the results
Loop over all of the values in the adjacencyList for that vertex
If any of those values have not been visited, invoke the helper function with that vertex
return the array of results

BREADTH FIRST 

This function should accept a starting vertex
Create a queue (you can use an array) and place the starting vertex in it
Create an array to store the nodes visited
Create an object to store nodes visited
Mark the starting vertex as visited
Loop as long as there is anything in the queue
Remove the first vertex from the queue and push it into the array that stores nodes visited
Loop over each vertex in the adjacency list for the vertex you are visiting.
If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
Once you have finished looping, return the array of visited nodes
*/


class Graph {
   constructor(){
       this.adjacencyList = {}; // make a object named for the adjacencyList  
   }


   addVertex(vertex){
       if(!this.adjacencyList[vertex]){
           this.adjacencyList[vertex] = []
       }
   }

   addEdge(vertex1,vertex2){
       // this is for the undirected graph ->
this.adjacencyList[vertex1].push(vertex2);
this.adjacencyList[vertex2].push(vertex1);
   }

   removeEdge(v1,v2){
this.adjacencyList[v1] = this.adjacencyList[v1].filter(
           v  => v !== v2
       )
this.adjacencyList[v2] = this.adjacencyList[v2].filter(
           v  => v !== v1
       )
   }

   removeVertex(ver){
       while(this.adjacencyList[ver].length){
           this.adajacentVertex = this.adjacencyList[ver].pop();
           this.removeEdge(ver,adajacentVertex)
       }
       delete this.adjacencyList[ver]
   }

   dfsTraversalRecursive(start){
let result = [];
let visited = {};
const adjacencyList = this.adjacencyList;

function dfs(vertex){
if(!vertex){
   return null;
}
visited[vertex] = true;
result.push(vertex);
adjacencyList[vertex].forEach(neighbor => {
   if(!visited[neighbor]){
      return dfs(neighbor)
   }
});
}
dfs(start);
return result
   }

/*

Iterative ->

let s be a stack
s.push(start);
While S is not empty
vertex = S.pop();
if vertex is not labelled as discovered
visit vertex ( add to result list)
label vertex as discovered
for each of vertex's neighbour , N do
S.push(N)

// Algorithm for the DFS iterative search 

The function should accept a starting node
Create a stack to help use keep track of vertices (use a list/array)
Create a list to store the end result, to be returned at the very end
Create an object to store visited vertices
Add the starting vertex to the stack, and mark it visited
While the stack has something in it:
Pop the next vertex from the stack
  #If that vertex hasn't been visited yet:
       *​Mark it as visited
       *Add it to the result list
       *Push all of its neighbors into the stack
Return the result array
*/

dfsTraversalIterative(start){
    const stack = [];
    const result = [];
    const visited = {};
    let CurrentVertex ;

    visited[start] = true;
    while(stack.length){
        CurrentVertex = stack.pop();
        result.push(CurrentVertex);
        this.adjacencyList[CurrentVertex].forEach(neighbor => {
            if(!vertex[neighbor]){
                vertex[neighbor] = true ;
                stack.push(neighbor);
            }
        })    }
    return result ;
}

// BFS traversal of the graph -> level order traversal , visit neighbor of neighbor 

/*
- This function should accept a starting vertex
- Create a queue (you can use an array) and place the starting vertex in it
- Create an array to store the nodes visited
- Create an object to store nodes visited
- Mark the starting vertex as visited
- Loop as long as there is anything in the queue
- Remove the first vertex from the queue and push it into the array that stores nodes visited
- Loop over each vertex in the adjacency list for the vertex you are visiting.
- If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
- Once you have finished looping, return the array of visited nodes
*/

bfsTraversal(start){
    const queue = [start];
    const result = [];
    const visited = {};
    let CurrentVertex ;
    visited[start] = true;
    while(queue.length){
    CurrentVertex = queue.shift();
    result.push(CurrentVertex);
    this.adjacencyList[vertex].forEach(neighbor =>{
        if(!visited[neighbor]){
            queue.push(neighbor);
        }
    })
    }
    return result
}
 

}

let g = new Graph()
g.addVertex("delhi");
g.addVertex("banglore");
g.addVertex("mumbai");
g.addVertex("guwahti");
g.addEdge("delhi","mumbai");
g.addEdge("banglore","mumbai");
g.addEdge("delhi","guwahti");
g.addEdge("mumbai","banglore");

