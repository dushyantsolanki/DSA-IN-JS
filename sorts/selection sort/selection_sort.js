let data = [20, 6, 2, 5, 9, 7, 8, 0, 3265, 252, 548];

function selection_sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`phase : ${i}`, arr);
    let minVal = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < minVal) {
        minVal = arr[j];
        arr[j] = arr[i];
        arr[i] = minVal;
      }
    }
  }

  return arr;
}

console.log(selection_sort(data));
