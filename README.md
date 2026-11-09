# TypeScript & OOP Assignment

This assignment practices core TypeScript concepts from Modules 1, 2, and 3. It covers basic types, optional, default, and rest parameters, readonly tuples, interfaces, type narrowing, generics, Promises, and object-oriented programming with classes.

## Overview

All eight problems are solved in a single file, `solutions.ts`:

1. `multiplyValue`: multiplies a value by an optional multiplier, defaulting to 2.
2. `processInput`: formats a string, number, or boolean using type narrowing.
3. `formatCoordinate`: builds a location string from a readonly tuple.
4. `concatenateArrays`: merges several arrays of the same type using generics and rest parameters.
5. `Course` and `getPopularCourses`: filters published courses by minimum student count without mutating the input.
6. `pluckValues`: returns one property's values from an array of objects, using `keyof`.
7. `Employee` and `Manager`: a class hierarchy using `protected` and `private` members.
8. `validateAgeAsync`: an async function that resolves or rejects based on age.

## How to Run the Solutions

You need Node.js and TypeScript installed.

Option 1: run with `ts-node` (installed on demand by `npx`):

```bash
npx ts-node solutions.ts
```

Option 2: compile to JavaScript, then run:

```bash
tsc --target es2019 solutions.ts
node solutions.js
```

Option 3: run the TypeScript directly on Node.js 23.6 or newer:

```bash
node solutions.ts
```

Note: `solutions.ts` only defines functions and classes, so running it prints nothing. Call the functions from a separate file to see results.

## Blog posts

- [Type Aliases vs Interfaces](./type-vs-interface.md)
- [Access Modifiers in TypeScript OOP](./access-modifiers.md)
