// Acording to this javascript course there are two ways of traversing the tree ->

// Breadth first search ->
// In this type of tree traversal, traverse the tree by level by level
/*
the algo for the BST iteratively ->

1 - Create a Queue (using an array as well) and variable to store the value of the visited node
2 - Place the root node in the queue, Loop untill the queue get ended 
3 - Dequeue a node from the queue and push the value of node into the variable that store the node
4- if there is a left property on the node dequeued add it to queue
5 - if there is a right property on the node dequeued add it to the queue
6- return the variable that stores the value  
*/

// the code for this traversal is in the BST.js file ->

// Depth First search -> 
// In this type of traversal the tree is traverse in the vertical direction from top to bottom or bottom to top ->


// In this type of traversal three types of the traversal comes in 

// DEPTH PREORDER TRAVERSAL -

/* 
1- Create a variable  to store value of the nodes visited 
2- Store the root in the variable called current 
3- Write a helper function that accepts a node
   *Push the value of node in the variable that store the values
   *if the node has left property ,call the helper function with the left property on the node
   *if the node has right property ,call the helper function with the right property on the node
4- Invoke the helper function with the current variable
5- Return the array of values
   /

// DEPTH INORDER TRAVERSAL 

/*
1- Create a variable  to store value of the nodes visited 
2- Store the root in the variable called current 
3- Write a helper function that accepts a node
   *if the node has left property ,call the helper function with the left property on the node
   *Push the value of node in the variable that store the values
   *if the node has right property ,call the helper function with the right property on the node
4- Invoke the helper function with the current variable
5- Return the array of values
*/

// DEPTH POSTORDER TRAVERSAL 

/*
1- Create a variable  to store value of the nodes visited 
2- Store the root in the variable called current 
3- Write a helper function that accepts a node
   *if the node has left property ,call the helper function with the left property on the node
   *if the node has right property ,call the helper function with the right property on the node
   *Push the value of node in the variable that store the values
4- Invoke the helper function with the current variable
5- Return the array of values
*/


// BFS VS DFS : WHICH ONE IS BEST ->
/*
So in terms of the time complexity both has equal time complexity ,and in terms of space complexity depends on the tree structure ->
so it depends on the type of structure if the depth of the tree is very deep then the DFS is not a good approach 

*/

