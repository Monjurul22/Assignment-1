# How Generics Make Your TypeScript Code Reusable and Strictly Typed

## Introduction

Repeating the same logic for different data types is one of the most common mistakes in early TypeScript code. Generics solve this by allowing you to write a function or component **once** and use it with **any type** — while TypeScript still enforces full type safety.

---

## The Problem Without Generics

Consider a function that returns the first item of an array. Without generics, a separate version is needed for each type:

```typescript
function getFirstNumber(arr: number[]): number {
    return arr[0];
}

function getFirstString(arr: string[]): string {
    return arr[0];
}
```

This is repetitive and does not scale. Adding support for a new type means writing another function with identical logic.

---

## The Solution: Generics

A Generic uses a **type placeholder** — conventionally written as `T` — that gets resolved when the function is called.

```typescript
function getFirst<T>(arr: T[]): T {
    return arr[0];
}
```

One function now handles all types:

```typescript
getFirst([1, 2, 3]);        // T = number → returns 1
getFirst(["a", "b", "c"]); // T = string → returns "a"
getFirst([true, false]);    // T = boolean → returns true
```

TypeScript infers `T` automatically from the argument, and the return type is correctly typed as well.

---

## Adding Constraints

Constraints restrict what `T` can be. The following function retrieves a property value from an object:

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
```

`K extends keyof T` ensures that `K` must be an actual key on `T`. Passing an invalid key becomes a compile-time error instead of a runtime bug:

```typescript
const user = { id: 1, name: "John Doe", age: 21 };

getProperty(user, "name");  // ✅ returns "John Doe"
getProperty(user, "email"); // ❌ compile error — key does not exist on type
```

---

## Generics vs `any`

`any` also accepts all types, but it completely disables TypeScript's type checking:

```typescript
function getFirst(arr: any[]): any {
    return arr[0];
}
```

With `any`, autocomplete, type inference, and compile-time error detection are all lost. Generics provide the same flexibility while keeping all type safety intact.

---

## Conclusion

Generics are a foundational TypeScript feature that enable:

- **Reusability** — one implementation works across all types
- **Type safety** — TypeScript checking is fully maintained
- **Constraints** — generics can be scoped to specific shapes when needed

Writing generic code is what separates flexible, maintainable TypeScript from type-annotated JavaScript.
