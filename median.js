const values = [8, 7, 7, 9, 5, 4, 2, 9];

function median(values) {
  values.sort(function (a, b) {
    return a - b;
  });

  if (values.length === 0) return 0;

  var half = Math.floor(values.length / 2);

  if (values.length % 2) return values[half];
  else return (values[half - 1] + values[half]) / 2.0;
}

console.log(median(values));
