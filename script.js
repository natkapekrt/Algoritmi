function factorialFromDefinition(n) {
    if (n == 0) return 1;
    return n * factorialFromDefinition(n - 1);
}

for (let i = 0; i < 8; i++) {
    console.log("factorial(" + i + ") = " + factorialFromDefinition(i));
}
factorial(0) = 1
factorial(1) = 1
factorial(2) = 2
factorial(3) = 6
factorial(4) = 24
factorial(5) = 120
const factorialFromDefinitionArrow =
    n => n == 0 ? 1 : n * factorialFromDefinitionArrow(n - 1);ň
    const factorialCached = function() {
        const cache = [1];
        return function(n) {
            if (n >= cache.length) {
                for (let i = cache.length; i <= n; i++) {
                    cache[i] = cache[i - 1] * i;
                }
            }
            return cache[n];
        }
    }();
    function faktorial(n) {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    
    
    console.log(faktorial(5));