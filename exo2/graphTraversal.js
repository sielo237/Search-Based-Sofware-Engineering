function runGraphTraversal() {
  const startNode = document.getElementById("startNode").value;
  const graphInput = document.getElementById("graphInput").value;

  // converti le texte d'entrée en graphe
  const graph = parseGraphInput(graphInput);

  const bfsResult = bfs(graph, startNode);
  const dfsResult = dfs(graph, startNode);

  // Afficher les résultats sous forme de chemin avec des flèches
  document.getElementById("exercise-output").innerHTML = `
      <div class="result-label">BFS Result (Breadth-First Search)</div>
      <div class="result-value">${bfsResult.join(" → ")}</div>
      <div class="result-label">DFS Result (Depth-First Search)</div>
      <div class="result-value">${dfsResult.join(" → ")}</div>
  `;
}

// converti l'entrée utilisateur en graphe
function parseGraphInput(input) {
  const graph = {};
  const pairs = input.split(";"); // separatin des différente connexions
  pairs.forEach((pair) => {
    const [node, neighbors] = pair.split(":");
    graph[node.trim()] = neighbors
      .split(",")
      .map((neighbor) => neighbor.trim());
  });
  return graph;
}

function bfs(graph, start) {
  let queue = [start];
  let visited = new Set();
  visited.add(start);

  let result = [];

  while (queue.length > 0) {
    let node = queue.shift();
    result.push(node);

    graph[node].forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    });
  }

  return result;
}

function dfs(graph, start, visited = new Set(), result = []) {
  visited.add(start);
  result.push(start);

  graph[start].forEach((neighbor) => {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited, result);
    }
  });

  return result;
}
