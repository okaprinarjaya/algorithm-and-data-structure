const edges = [
    ["i", "j"],
    ["k", "i"],
    ["m", "k"],
    ["k", "l"],
    ["o", "n"]
];

function undirectedPath(edges, srcNode, dstNode) {
    const graph = buildGraph(edges);
    return hasPath(graph, srcNode, dstNode, new Set());
}

function hasPath(graph, srcNode, dstNode, visited) {
    if (srcNode === dstNode) {
        return true;
    }

    if (visited.has(srcNode)) {
        return false;
    }

    visited.add(srcNode);

    const neighbors = graph[srcNode];
    for (let neighbor of neighbors) {
        if (hasPath(graph, neighbor, dstNode, visited)) {
            return true;
        }
    }

    return false;
}

function buildGraph(edges) {
    const graph = {};

    for (let edge of edges) {
        const [ a, b ] = edge;
        if (!(a in graph)) {
            graph[a] = [];
        }
        if (!(b in graph)) {
            graph[b] = [];
        }

        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
};

// console.log(buildGraph(edges))

console.log(undirectedPath(edges, "j", "l"));
console.log(undirectedPath(edges, "l", "i"));
console.log(undirectedPath(edges, "m", "j"));
console.log(undirectedPath(edges, "i", "o"));
console.log(undirectedPath(edges, "o", "n"));
console.log(undirectedPath(edges, "o", "j"));
