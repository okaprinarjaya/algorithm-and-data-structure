function depthFirstTraverse(graph, srcNode) {
    const stack = [ srcNode ];

    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current);
        
        const neighbors = graph[current];
        for (let neighbor of neighbors) {
            stack.push(neighbor);
        }
    }
}

function depthFirstTraverseRecursive(graph, sourceNode) {
    console.log(sourceNode);

    // a
    // b
    // e
    // c
    // d

    const neighbors = graph[sourceNode];
    for (let neighbor of neighbors) {
        depthFirstTraverseRecursive(graph, neighbor);
    }
}

const graph = {
	a: ["b", "c"],
	b: ["e"],
	c: ["d"],
	e: [],
	d: []
};

// const graph = {
//     a: ['c', 'b'],
//     b: ['d'],
//     c: ['e'],
//     d: ['f'],
//     e: [],
//     f: []
// };

// const graph = {
// 	f: ["g", "i"],
// 	g: ["h"],
// 	h: [],
// 	i: ["g", "k"],
// 	j: ["i"],
// 	k: []
// };

// console.log("Non-recursion: ");
// depthFirstTraverse(graph, 'a');

console.log("Recursion:")
depthFirstTraverseRecursive(graph, 'a');
