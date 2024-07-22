let data = [
  2, 3, 0, 5, 8, 9, 6, 3, 2, 1, 4, 5, 6, 7, 0, 5, 80, 600, 1000, 69, 999,
];

for (let i = 1; i < data.length; i++) {
  let current = data[i];
  let j = i - 1;

  while (j >= 0 && current < data[j]) {
    data[j + 1] = data[j];
    j--;
  }
  data[j + 1] = current;
}
console.log(data);
