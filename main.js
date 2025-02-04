document
  .getElementById("choose-exercise")
  .addEventListener("click", function () {
    const exercise = document.getElementById("exercise").value;
    let info = "";
    let inputs = ""; // Champs d'entrées dynamiques

    // Réinitialiser l'affichage des résultats
    document.getElementById("exercise-output").innerHTML = "";

    switch (exercise) {
      case "binarySearch":
        info = `
              <h2>Exercise 1: Binary Search</h2>
              <p>Binary search is an efficient algorithm for finding an element in a sorted array.
          element in a sorted array. It works by repeatedly dividing
          the array into two halves.
          <br />
          <strong>Time complexity</strong>:O(log<sub>2</sub>
(n))</p>
              <p><strong>Instructions:</strong> Enter a sorted list and a target value. The algorithm will return the index of the target if found, otherwise -1.</p>
              `;
        inputs = `
              <label for="sortedList">Enter a sorted list (comma-separated):</label>
              <input type="text" id="sortedList" value="1, 3, 5, 7, 9, 11"><br>
              <label for="target">Enter the target value:</label>
              <input type="number" id="target" value="5"><br>
              <button onclick="runBinarySearch()">Run Binary Search</button>
          `;
        break;
      case "graphTraversal":
        info = `
              <h2>Exercise 2: Graph Traversal (BFS & DFS)</h2>
              <p><strong>Goal:</strong> Explore a graph using both Breadth-First Search (BFS) and Depth-First Search (DFS) algorithms, starting from a chosen node.
              <br />
          <strong>Time complexity</strong>: O(V + E) where V is the number of vertices and E the number of
          number of edges
</p>
              <p><strong>Instructions:</strong> You can modify the graph structure and specify a start node. The graph is represented as a series of nodes with their respective neighbors.</p>`;
        inputs = `
              <label for="graphInput">Graph (format: A:B,C; B:A,D,E; ...):</label><br>
              <textarea id="graphInput" rows="4" cols="50">A:B,C; B:A,D,E; C:A,F; D:B; E:B,F; F:C,E</textarea><br>
              <label for="startNode">Enter the start node:</label>
              <input type="text" id="startNode" value="A"><br>
              <button onclick="runGraphTraversal()">Run Graph Traversal</button>
          `;
        break;
      case "knapsack":
        info = `
              <h2>Exercise 3: Knapsack Problem</h2>
              <p><strong>Goal:</strong> The backpack problem consists in selecting objects with different values and weights to maximize the total value while respecting a weight constraint.
 <br />
          <strong>Time complexity</strong>:O(n * W) where n is the number of objects and W is the maximum weight

              </p>
              <p><strong>Instructions:</strong> Enter items in the format value-weight and the knapsack's capacity. The algorithm will return the maximum value achievable within the weight limit.</p>`;
        inputs = `
              <label for="items">Enter items (format: value-weight, separated by commas):</label>
              <input type="text" id="items" value="60-10,100-20,120-30"><br>
              <label for="capacity">Enter the capacity of the knapsack:</label>
              <input type="number" id="capacity" value="50"><br>
              <button onclick="runKnapsack()">Run Knapsack</button>
          `;
        break;
      case "mergeIntervals":
        info = `
              <h2>Exercise 4: Merge Intervals</h2>
              <p><strong>Goal:</strong> Merge all overlapping intervals in a given list of time intervals.
              <br />
          <strong>Time complexity</strong>:This algorithm has a complexity of O(n log n) due to the initial sorting.

</p>
              <p><strong>Instructions:</strong> Enter intervals in the format start-end. The algorithm will merge overlapping intervals and return the merged intervals.</p>`;
        inputs = `
              <label for="intervals">Enter intervals (format: start-end, separated by commas):</label>
              <input type="text" id="intervals" value="1-3,2-6,8-10,15-18"><br>
              <button onclick="runMergeIntervals()">Run Merge Intervals</button>
          `;
        break;
      case "kadane":
        info = `
              <h2>Exercise 5: Maximum Subarray Sum (Kadane's Algorithm)</h2>
              <p><strong>Goal:</strong> Find the contiguous subarray within an array which has the largest sum.
              <br />
          <strong>Time complexity</strong>:The algorithm is optimal with a complexity of O(n)

</p>
              <p><strong>Instructions:</strong> Enter an array of integers. The algorithm will return the sum of the maximum subarray.</p>`;
        inputs = `
              <label for="array">Enter the array (comma-separated):</label>
              <input type="text" id="array" value="-2,1,-3,4,-1,2,1,-5,4"><br>
              <button onclick="runKadane()">Run Kadane's Algorithm</button>
          `;
        break;
    }

    document.getElementById("exercise-info").innerHTML = info;
    document.getElementById("exercise-inputs").innerHTML = inputs;
  });
