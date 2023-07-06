function memoizedFunction() {
    const cache = {};
  
    return function (n) {
      if (n in cache) {
        console.log('Fetching from cache...');
        return cache[n];
      }
  
      console.log('Calculating result...');
      const result = n * 2;
      cache[n] = result;
      return result;
    };
  }
  
  const memoized = memoizedFunction();
  
  console.log(memoized(5)); // Output: Calculating result... 10
  console.log(memoized(5)); // Output: Fetching from cache... 10
  