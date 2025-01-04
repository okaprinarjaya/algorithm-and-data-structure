const graph = {
	a: ["b", "c"],
	b: ["e"],
	c: ["d"],
	e: [],
	d: []
};

function hasPathDFRecursive(graph, srcNode, dstNode) {
    if (srcNode === dstNode) {
        return true;
    }

    const neighbors = graph[srcNode];
    for (let neighbor of neighbors) {
        if (hasPathDFRecursive(graph, neighbor, dstNode)) {
            return true;
        }
    }

    return false;
}

function hasPathBF(graph, srcNode, dstNode) {
    const queue = [ srcNode ];

    while (queue.length > 0) {
        const current = queue.shift();
        if (current === dstNode) {
            return true;
        }

        const neighbors = graph[current];
        for (let neighbor of neighbors) {
            queue.push(neighbor);
        }
    }

    return false;
}

console.log(hasPathBF(graph, "a", "d"));

console.log(hasPathDFRecursive(graph, "a", "d"));
