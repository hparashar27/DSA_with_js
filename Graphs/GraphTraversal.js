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
 Algo - 
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

        
*/