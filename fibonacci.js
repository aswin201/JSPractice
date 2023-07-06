// Write a program for Fibonnaci series
function fibonacciSeries(n) {
    let fibSeries = [0, 1]; // Initial values of Fibonacci series
  
    // Generate Fibonacci series up to the given number of terms (n)
    for (let i = 2; i < n; i++) {
      const nextTerm = fibSeries[i - 1] + fibSeries[i - 2];
      fibSeries.push(nextTerm);
    }
  
    return fibSeries;
  }
  
  // Usage
  const numberOfTerms = 10;
  const series = fibonacciSeries(numberOfTerms);
  console.log(series); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  


  // Memo
  function fibonacci(n, cache = {}) {
    if (n in cache) {
      return cache[n];
    }
  
    if (n <= 2) {
      return 1;
    }
  
    const result = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
    cache[n] = result;
  
    return result;
  }
  
  console.log(fibonacci(6)); // Output: 8
  console.log(fibonacci(10)); // Output: 55
  