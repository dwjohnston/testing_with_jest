# Testing with Jest

Some demonstrations of way to do testing, and mocking, with Jest. 

Some relevant reading: 

[What is the state of the art for testing/mocking functions within a module in 2018? (Stack Overflow)](https://stackoverflow.com/questions/53736766/what-is-the-state-of-the-art-for-testing-mocking-functions-within-a-module-in-20)

[How to mock specific module function? Issue #936 on facebook/jest](https://github.com/facebook/jest/issues/936)

## The approaches

### Dependency Injection

This is my favourite approach so far. 

This approach has you, when writing functions, not refering to other functions directly, but injecting them. In order to hide the function as a parameter - we use the `.bind` method, like so:

```
export const _a = function(_b, ...numbers) {
 return numbers.map(n => _b(n)); 
}; 

export const b = function(n) {
  return n+1; 
}

export const a = _a.bind(null, b); 

console.log(a(1,2,3)) //[2,3,4]
```

### Refer to module via a class object

This approach works, and is perhaps a little less scary looking than dependency injection. 

It has you not referring to functions directly, but via an object, in this case the `this` of a class object. 

eg:

```
class MyModule {
   a(x) {
    return this.b(x);
   }
   
   b(x) {
    return x +1; 
   }
}

export default new MyModule(); 
```

This lets you mutate the functions to your hearts content when testing, and you reset it, you can just declare a new object. 

