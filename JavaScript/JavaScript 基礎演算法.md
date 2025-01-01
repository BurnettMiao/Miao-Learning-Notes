#### JavaScript 基礎演算法

學習基礎的演算法是非常重要的，尤其是在解 LeetCode 題目時。以下是一些基礎演算法的介紹與學習順序，這些是初學者的必備知識點，同時也適合用 JavaScript 實現。

1. 排序算法 (Sorting Algorithms)
   排序是編程中的基本操作，理解排序算法有助於你學習數組處理和效率分析。
   **常見排序算法**

   - 冒泡排序 (Bubble Sort)
     每次比較相鄰元素並交換，直到所有元素有序。

     ```javascript
     function bubbleSort(arr) {
       let n = arr.length;
       for (let i = 0; i < n; i++) {
         for (let j = 0; j < n - i - 1; j++) {
           if (arr[j] > arr[j + 1]) {
             [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // 交換
           }
         }
       }
       return arr;
     }
     ```

   - 選擇排序 (Selection Sort)
     每次從未排序部分找到最小值並放到前面。

     ```javascript
     function selectionSort(arr) {
       let n = arr.length;
       for (let i = 0; i < n - 1; i++) {
         let minIndex = i;
         for (let j = i + 1; j < n; j++) {
           if (arr[j] < arr[minIndex]) minIndex = j;
         }
         [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
       }
       return arr;
     }
     ```

   - 快速排序 (Quick Sort)
     使用分而治之的思想，每次選擇一個樞軸 (pivot) 將數組分成左右兩部分遞歸排序。
     ```javascript
     function quickSort(arr) {
       if (arr.length <= 1) return arr;
       const pivot = arr[arr.length - 1];
       const left = arr.filter((el) => el < pivot);
       const right = arr.filter((el) => el > pivot);
       return [...quickSort(left), pivot, ...quickSort(right)];
     }
     ```

2. 搜索算法 (Searching Algorithms)
   搜索問題在實際場景中非常常見，這裡介紹兩種基礎算法：
   - 線性搜索 (Linear Search)
     遍歷陣列，直到找到目標元素。
     ```javascript
     function linearSearch(arr, target) {
       for (let i = 0; i < arr.length; i++) {
         if (arr[i] === target) return i;
       }
       return -1; // 未找到
     }
     ```
   - 二分搜索 (Binary Search)
     適用於已排序的數組，通過反復縮小範圍進行搜索。
     ```javascript
     function binarySearch(arr, target) {
       let left = 0,
         right = arr.length - 1;
       while (left <= right) {
         const mid = Math.floor((left + right) / 2);
         if (arr[mid] === target) return mid;
         else if (arr[mid] < target) left = mid + 1;
         else right = mid - 1;
       }
       return -1; // 未找到
     }
     ```
3. 基礎遞歸 (Recursion Basics)
   遞歸是一種函數調用自身的技術，非常適合用於分治算法或解決問題中的分解操作。
   **常見例子**
   - 計算階乘 (Factorial)
     ```javascript
     function factorial(n) {
       if (n === 0) return 1; // 基本情況
       return n * factorial(n - 1); // 遞歸調用
     }
     ```
   - 斐波那契數列 (Fibonacci Sequence)
     遞歸解法：
     ```javascript
     function fibonacci(n) {
       if (n <= 1) return n;
       return fibonacci(n - 1) + fibonacci(n - 2);
     }
     ```
     優化：用迭代來避免遞歸的性能問題。
     ```javascript
     function fibonacciIterative(n) {
       if (n <= 1) return n;
       let prev = 0,
         curr = 1;
       for (let i = 2; i <= n; i++) {
         [prev, curr] = [curr, prev + curr];
       }
       return curr;
     }
     ```
4. 貪心算法 (Greedy Algorithm)
   貪心算法每一步都選擇當前看似最優的選擇，適用於一些特定問題。
   - Coin Change Problem (找零問題)
     給定不同面值的硬幣和總金額，找出最少的硬幣數量。
     ```javascript
     function coinChange(coins, amount) {
       coins.sort((a, b) => b - a); // 按值排序
       let count = 0;
       for (let coin of coins) {
         while (amount >= coin) {
           amount -= coin;
           count++;
         }
       }
       return amount === 0 ? count : -1; // -1 表示無法組成
     }
     ```
   - 滑動窗口 (Sliding Window)
     滑動窗口是一種用於子數組或子序列問題的高效技巧。
     - Maximum Sum Subarray of Size K
       找到大小為 𝑘 的子數組，其和最大
       ```javascript
       function maxSubarraySum(arr, k) {
         let maxSum = 0,
           currentSum = 0;
         for (let i = 0; i < arr.length; i++) {
           currentSum += arr[i];
           if (i >= k - 1) {
             maxSum = Math.max(maxSum, currentSum);
             currentSum -= arr[i - (k - 1)];
           }
         }
         return maxSum;
       }
       ```
5. 雙指針技術 (Two Pointer Technique)
   雙指針常用於處理排序數組或子序列問題。

   - Two Sum (已排序數組)
     給定一個已排序數組，找出兩數之和為目標數。

     ```javascript
     function twoSumSorted(arr, target) {
       let left = 0,
         right = arr.length - 1;
       while (left < right) {
         const sum = arr[left] + arr[right];
         if (sum === target) return [left, right];
         else if (sum < target) left++;
         else right--;
       }
       return [];
     }
     ```

**學習建議**

1. 從基礎開始：先掌握排序和搜索等簡單的演算法。
2. 配合 LeetCode：練習基於這些演算法的簡單題目，比如 Two Sum、Maximum Subarray 等。
3. 逐步進階：了解貪心算法、滑動窗口、雙指針等高效技術。
4. 寫代碼總結：每個演算法用不同的例子實踐，並記錄下學到的技巧。
