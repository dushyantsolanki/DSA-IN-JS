let data = [3, 4, 6, 7, 0, 2, 4];

function quickSort(arr, low, heigh) {
  if (low > heigh) return;
  let partionIndex = partionFunc(arr, low, heigh);

  quickSort(arr, low, partionIndex - 1);
  quickSort(arr, partionIndex + 1, heigh);
}

function partionFunc(arr, low, heigh) {
  let pivot = arr[low];
  let i = low;
  let j = heigh;

  while (i < j) {
    while (arr[i] <= pivot && i <= heigh - 1) {
      i++;
    }
    while (arr[j] > pivot && j >= low + 1) {
      j--;
    }
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[low], arr[j]] = [arr[j], arr[low]];

  return j;
}

quickSort(data, 0, data.length - 1);
console.log(data);

// here i can revise a swaping steps
