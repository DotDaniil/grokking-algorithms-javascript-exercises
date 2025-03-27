const graph = {};
const costs = {};
const parents = {};
const processed = [];

graph["start"] = {};
graph["start"]["a"] = 6;
graph["start"]["b"] = 2;

graph["a"] = {};
graph["a"]["fin"] = 1;
graph["b"] = {};
graph["b"]["a"] = 3;
graph["b"]["fin"] = 5;
graph["fin"] = {};

console.log(graph);

const infinity = Infinity;
costs["a"] = 6;
costs["b"] = 2;
costs["fin"] = infinity;

parents["a"] = "start";
parents["b"] = "start";
parents["fin"] = null;

const findLowestCostNode = (costs) => {
	let lowestCost = infinity;
	let lowestCostNode = null;

	for (const node in costs) {
		const cost = costs[node];
		if (cost < lowestCost && !processed.includes(node)) {
			lowestCost = cost;
			lowestCostNode = node;
		}
	}

	return lowestCostNode;
};

const findDijkstra = () => {
	let node = findLowestCostNode(costs);

	while (node !== null) {
		const cost = costs[node];
		const neighbors = graph[node];

		for (const neighbor in neighbors) {
			const newCost = cost + neighbors[neighbor];
			if (costs[neighbor] > newCost) {
				costs[neighbor] = newCost;
				parents[neighbor] = node;
			}
		}

		processed.push(node);
		node = findLowestCostNode(costs);
	}

	return { costs, parents };
};

console.log("Before Dijkstra:", costs);
console.log("Resul Dijkstra:" findDijkstra());