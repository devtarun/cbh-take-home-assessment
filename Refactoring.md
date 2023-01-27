# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

### for dpj.js
The refactored code uses the latest JS syntax, it's more readable, and shorter.
* It first checks is event is present or not.
* It's using ternary operator to check if event.partitionKey is present, if yes it assigns candidate, otherwise, it uses JSON.stringify(event) to create a digest with sha3-512 and assigns candidate.
* It also uses the nullish coalescing operator to return TRIVIAL_PARTITION_KEY if candidate is null or undefined.
* Crypto functionality is segregated from main logic and can be re-used.