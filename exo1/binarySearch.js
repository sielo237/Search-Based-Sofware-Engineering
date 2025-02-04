function runBinarySearch() {
  const sortedList = document
    .getElementById("sortedList")
    .value.split(",")
    .map(Number);
  const target = parseInt(document.getElementById("target").value);

  // verificatin si la liste est trié
  if (!isSorted(sortedList)) {
    document.getElementById("exercise-output").innerHTML = `
          <div class="error">Error</div>
          <div class="error">The list is not sorted. Please enter a sorted list and try again.</div>
      `;
    return; // arret si la liste n'est pas triée
  }

  const result = binarySearch(sortedList, target);
  document.getElementById("exercise-output").innerHTML = `
      <div class="result-label">Binary Search Result</div>
      <div class="result-value">Sorted List: [${sortedList}]</div>
      <div class="result-value">Target: ${target}</div>
      <div class="result-value">Index: ${
        result === -1 ? "Not found" : result
      }</div>
  `;
}

// vérifié si une liste est triée
function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // si l'élément n'est pas trouve
}
