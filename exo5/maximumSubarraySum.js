function runKadane() {
  const arr = document.getElementById("array").value.split(",").map(Number);

  const { maxSum, subarray } = kadane(arr);

  // affiche des réeultats
  document.getElementById("exercise-output").innerHTML = `
      <div class="result-label">Kadane's Algorithm Result</div>
      <div class="result-value">Maximum Subarray Sum: ${maxSum}</div>
      <div class="result-value">Subarray: [${subarray.join(", ")}]</div>
  `;
}

function kadane(arr) {
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];
  let start = 0,
    end = 0,
    tempStart = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxEndingHere + arr[i]) {
      maxEndingHere = arr[i];
      tempStart = i;
    } else {
      maxEndingHere += arr[i];
    }

    if (maxEndingHere > maxSoFar) {
      maxSoFar = maxEndingHere;
      start = tempStart;
      end = i;
    }
  }

  // retourner la somme maximale et le sous-tableau sélectionné
  return {
    maxSum: maxSoFar,
    subarray: arr.slice(start, end + 1),
  };
}
