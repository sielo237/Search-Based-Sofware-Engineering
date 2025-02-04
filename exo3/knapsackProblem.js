function runKnapsack() {
  const itemsInput = document
    .getElementById("items")
    .value.split(",")
    .map((item) => {
      const [value, weight] = item.split("-").map(Number);
      return { value, weight };
    });
  const capacity = parseInt(document.getElementById("capacity").value);

  const { maxValue, selectedItems } = knapsack(itemsInput, capacity);

  // affiche des résultats
  const selectedItemsString = selectedItems
    .map((item) => `Value: ${item.value}, Weight: ${item.weight}`)
    .join("<br>");

  document.getElementById("exercise-output").innerHTML = `
      <div class="result-label">Knapsack Result</div>
      <div class="result-value">Maximum Value: ${maxValue}</div>
      <div class="result-value">Selected Items:</div>
      <div class="result-value">${selectedItemsString}</div>
  `;
}

function knapsack(items, capacity) {
  const n = items.length;
  const dp = Array(n + 1)
    .fill(null)
    .map(() => Array(capacity + 1).fill(0));

  // Remplissage de la table dp
  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (items[i - 1].weight <= w) {
        dp[i][w] = Math.max(
          items[i - 1].value + dp[i - 1][w - items[i - 1].weight],
          dp[i - 1][w]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  // on recupere des objets sélectionnés
  let w = capacity;
  const selectedItems = [];

  for (let i = n; i > 0 && dp[i][w] > 0; i--) {
    if (dp[i][w] !== dp[i - 1][w]) {
      selectedItems.push(items[i - 1]);
      w -= items[i - 1].weight;
    }
  }

  return {
    maxValue: dp[n][capacity], // valeur max
    selectedItems, // objets sélectionné
  };
}
