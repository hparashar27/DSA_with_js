// Adjacency list in the graph 

const { version } = require("react");

class Graph {
    constructor(){
        this.adjacencyList = {}; // make a object named for the adjacencyList  
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        }
    }
}