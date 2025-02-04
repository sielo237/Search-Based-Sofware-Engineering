function runMergeIntervals() {
  const intervalsInput = document
    .getElementById("intervals")
    .value.split(",")
    .map((interval) => {
      const [start, end] = interval.split("-").map(Number);
      return [start, end];
    });

  const result = mergeIntervals(intervalsInput);
  document.getElementById(
    "exercise-output"
  ).textContent = `Merged Intervals: ${JSON.stringify(result)}`;
}

function mergeIntervals(intervals) {
  if (intervals.length <= 1) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const prev = merged[merged.length - 1];
    const curr = intervals[i];

    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      merged.push(curr);
    }
  }

  return merged;
}
