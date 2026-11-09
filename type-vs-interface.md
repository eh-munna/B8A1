# Type Aliases vs Interfaces in TypeScript

## Introduction

When I started to learn TypeScript, I was wondering whether to write `type` or `interface`. Both can be described as objects, so they look interchangeable. Once I tried both, I found real differences, and they answer one simple question: which one fits this job?

## The core differences

Both can describe an object's shape:

```typescript
interface Course {
  title: string;
  students: number;
}

type Course = {
  title: string;
  students: number;
};
```

The differences show up in other cases:

- A `type` can name any type, including unions like `string | number`. An `interface` only describes objects.
- An interface can be extended later with `extends`. If you write two interfaces with the same name, TypeScript merges them.
- A `type` cannot be reopened. You combine types with `&` instead.

## When to choose which

I use `interface` for object shapes, because it reads clearly and can be extended later. I use `type` when I need a union, a tuple, or a name for something that isn't an object:

```typescript
type Status = 'draft' | 'published';

type Coordinate = [number, number];
```

## Conclusion

Both work for objects, so the choice is mostly about style. As a beginner, use `interface` for object shapes and `type` for unions and other non-object types. Keep the same style across your project, and you'll avoid most of the confusion.
