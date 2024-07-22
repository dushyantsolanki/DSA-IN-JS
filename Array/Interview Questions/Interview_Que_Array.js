// 1. Find the largest element in the array.

// let arr = [2, 5, 9, 3, 0, 1, 4, 56];

// let largestEle;
// for (let i = 0; i < arr.length; i++) {
//   largestEle = arr[i];
//   if (largestEle < arr[i]) {
//     largestEle = arr[i];
//   }
// }

// console.log(largestEle);

// 2. Find the second largest element in this array.
// let arr = [2, 5, 9, 3, 0, 1, 4, 56, -3];

// let largestEle;
// for (let i = 0; i < arr.length; i++) {
//   largestEle = arr[i];
//   if (largestEle < arr[i]) {
//     largestEle = arr[i];
//   }
// }

// let sLargest;

// arr.sort((a, b) => a - b);     // but some time inteview restricted to use of sorting algorith.
// for (let i = arr.length - 1; i >= 0; i--) {
//   if (arr[i] !== largestEle) {
//     sLargest = arr[i];
//     break;
//   }
// }

// console.log(sLargest);

// 3. Find the given array is sorted ?

// let arr = [1, 2, 3, 4, 5, 6];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i - 1] <= arr[i]) {
//   } else {
//     console.log("araay is not sorted");
//     return false;
//   }
// }
// return true;

// 4. Remove a duplicate element from the given array.
let data = [2, 3, 5, 4, 6, 8, 2, 2, 3, 4];
let d = new Set([...data]);
console.log(d);
