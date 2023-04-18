// Adjacency list in the graph 

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

