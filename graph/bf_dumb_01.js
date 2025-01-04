function breadthFirstTraverse(graph, startNode) {
    const queue = [ startNode ];
    
    while (queue.length > 0) {
        const current = queue.shift();
        console.log(current);
        
        const neighbors = graph[current];
        for (let neighbor of neighbors) {
            queue.push(neighbor);
        }
    }
}

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

const graph = {
	a: ["b", "c"],
	b: ["e"],
	c: ["d"],
	e: [],
	d: []
};


breadthFirstTraverse(graph, 'a');
