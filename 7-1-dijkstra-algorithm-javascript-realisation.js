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

const findLowestCostNode = (costs) => {};
