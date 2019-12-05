/*
Graph Implementation:

Graph is a non-linear data structure. A graph 'Graph' contains a set of vertices 'Vertex' and set of Edges 'Edge'.
There are directed graphs and undirected graphs.

Two ways to represent a graph: 1) Adjacency Matric 2) Adjacency List

Below is an implementaiton of a graph using adjacency list.

This is done in JavaScript ES6 syntax
*/

class Graph {
    // Constructor Method
    constructor(noOfVertices){
        // This variable stores an integer for the number of vertices in the graph
        this.noOfVertices = noOfVertices;
        // Using ES6's Map Object to implement the Adjacency List
        // where the key of the map holds the vertex and the values holds an array of adjacent nodes
        this.AdjList = new Map();
    }

    // Methods
    addVertex(vertex)
    {
        this.AdjList.set(vertex, []);
    }
    // for adding an edge we need origin and desition
    addEdge(vertex1, vertex2)
    {
        // we find the vertex1 in the AdjList map object then push vertex2 to into the array for that vertex1
        this.AdjList.get(vertex1).push(vertex2);
        // for undirected graphs we need to add the edge going both ways
        this.AdjList.get(vertex2).push(vertex1);
    }
    printGraph()
    {
        var get_vertexes = this.AdjList.keys();
        for(var vertex of get_vertexes)
        {
            var get_adjacents = this.AdjList.get(vertex);
            var conc = ' ';
            for(var adjcent of get_adjacents)
            {
                conc += adjcent + ' ';
            }
            console.log(vertex + ' -> ' + conc);
        }
    }
    bfs(startingNode)
    {
        // we can use a set if we do not have the this.noOfVertices readily available
        var visted = [];
        for(var i = 0; i < this.noOfVertices; i++)
        {
            visited[i] = false;
        }
        var q = new Queue();
        visited[startingNode] = true;
        q.enque(startingNode);

        while(!q.IsEmpty())
        {
            var P = q.deque();
            console.log(P);
            var get_adjacents = this.AdjList.get(P);
            for(var adjacent in get_adjacents)
            {
                var neighbor = get_adjacents[adjacent];
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    q.enque(neighbor);
                }
            }
        }
    }
    dfs(startingNode)
    {
        var visted = [];
        for(var i = 0; i < this.noOfVertices; i++)
        {
            visited[i] = false;
        }
        this.DFS_helper(startingNode, visited);
    }
    DFS_helper(vertex, visited)
    {
        visited[vertex] = true;
        console.log(vertex);
        var get_adjacents = this.AdjList.get(vertex);
        for(var adjacent in get_adjacents)
        {
            var get_vertex = get_adjacents[adjacent];
            if(!visited[get_vertex])
            {
                this.DFS_helper(get_vertex, visited);
            }
        }
    }
}