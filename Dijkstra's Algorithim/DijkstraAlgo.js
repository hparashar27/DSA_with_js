// Dijkstra's Algorithm ->

/*

OBJECTIVES
Understand the importance of Dijkstra's
Implement a Weighted Graph
Walk through the steps of Dijkstra's
Implement Dijkstra's using a naive priority queue
Implement Dijkstra's using a binary heap priority queue

Aim - Finds the shortest path between two vertices on a graph

WHY IS IT USEFUL?
GPS - finding fastest route
Network Routing - finds open shortest path for data
Biology - used to model the spread of viruses among humans
Airline tickets - finding cheapest route to your destination
Many other uses!

Approach ->

Every time we look to visit a new node, we pick the node with the smallest known distance to visit first.
Once we’ve moved to the node we’re going to visit, we look at each of its neighbors
For each neighboring node, we calculate the distance by summing the total edges that lead to the node we’re checking from the starting node.
If the new total distance to a node is less than the previous total, we store the new shorter distance for that node.


*/