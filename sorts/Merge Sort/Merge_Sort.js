let data = [2, 1, 0, 9, 1, 13,85,699,12,4,692,25];

function mergeSort(arr, low, heigh) {
  if (low >= heigh) return;

  let mid = Math.floor((low + heigh) / 2);

  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, heigh);
  merge(arr, low, mid, heigh);
}

function merge(arr, low, mid, heigh) {
  let tar = [];
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= heigh) {
    if (arr[left] >= arr[right]) {
      tar.push(arr[right]);
      right++;
    } else {
      tar.push(arr[left]);
      left++;
    }
  }

  while (left <= mid) {
    tar.push(arr[left]);
    left++;
  }

  while (right <= heigh) {
    tar.push(arr[right]);
    right++;
  }

  for (let i = 0; i < tar.length; i++) {
    arr[low + i] = tar[i];
  }
}

mergeSort(data, 0, data.length - 1);

console.log(data);
