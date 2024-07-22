let data = [100, 30, 5, 8, 90, 25];

function bubble_sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`phase : ${i}`, arr);
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let tempo = arr[i];
        arr[i] = arr[j];
        arr[j] = tempo;
      }
    }
  }
  return arr;
}

console.log(bubble_sort(data));
