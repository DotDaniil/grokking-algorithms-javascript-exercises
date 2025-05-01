const graph = {};
const costs = {};
const parents = {};
const processed = [];

graph["start"] = {};
graph["start"]["a"] = 10;
// graph["start"]["b"] = 2;

graph["a"] = {};
graph["a"]["c"] = 20;
// graph["a"]["d"] = 2;
graph["b"] = {};
graph["b"]["a"] = 1;
graph["b"]["c"] = 1;
graph["c"] = {};
// graph["c"]["d"] = 6;
graph["c"]["fin"] = 30;
// graph["d"] = {};
// graph["d"]["fin"] = 1;
graph["fin"] = {};

console.log(graph);

const infinity = Infinity;
costs["a"] = 10;
costs["b"] = infinity;
costs["c"] = infinity;
// costs["d"] = infinity;
costs["fin"] = infinity;

parents["a"] = "start";
parents["b"] = "c";
parents["c"] = "a";
// parents["d"] = null;
parents["fin"] = "c";

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
console.log("Resul Dijkstra:", findDijkstra());
