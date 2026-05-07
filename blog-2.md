# The Four Pillars of OOP in TypeScript

## Introduction

Object-Oriented Programming (OOP) is a way of organizing code around **objects** rather than standalone functions. TypeScript's class system supports all four core OOP principles — Encapsulation, Abstraction, Inheritance, and Polymorphism — each serving a distinct role in keeping large codebases manageable.

---

## 1. Encapsulation

Encapsulation means **restricting direct access** to an object's internal data. Only the methods defined on the class can modify it.

In TypeScript, the `private` modifier enforces this:

```typescript
class BankAccount {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500

account.balance = 99999; // ❌ Error — balance is private
```

External code cannot directly alter `balance`. All modifications must go through the class's own methods, making the behavior predictable and safe.

---

## 2. Abstraction

Abstraction means **hiding implementation details** and exposing only what is necessary. The caller interacts with a clean interface without needing to know the internal logic.

TypeScript's `abstract` classes define this contract:

```typescript
abstract class Shape {
    abstract getArea(): number;

    describe(): string {
        return `Area: ${this.getArea()}`;
    }
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const c = new Circle(5);
console.log(c.describe()); // "Area: 78.53..."
```

`Shape` defines **what** must exist (`getArea`), not **how** it works. Each subclass provides its own implementation. The `describe` method works without knowing the specifics of any particular shape.

---

## 3. Inheritance

Inheritance allows a class to **reuse** properties and methods from a parent class, avoiding code duplication.

```typescript
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

const student = new Student("Alice", 20, "A");
console.log(student.getDetails());
// "Name: Alice, Age: 20, Grade: A"
```

`Student` inherits `name` and `age` from `Person` via `extends`. The `super()` call passes those values up to the parent constructor. Shared logic lives in one place — changes to `Person` automatically apply to all subclasses.

---

## 4. Polymorphism

Polymorphism means **the same method name behaves differently** depending on the class that implements it.

```typescript
class Animal {
    speak(): string {
        return "...";
    }
}

class Dog extends Animal {
    speak(): string {
        return "Woof!";
    }
}

class Cat extends Animal {
    speak(): string {
        return "Meow!";
    }
}

const animals: Animal[] = [new Dog(), new Cat()];

animals.forEach(animal => {
    console.log(animal.speak());
});
// "Woof!"
// "Meow!"
```

Both `Dog` and `Cat` are treated as `Animal`, but each responds to `speak()` differently. This allows writing logic against a parent type while each subclass handles its own specific behavior — keeping code flexible and extensible.

---

## Conclusion

Each pillar addresses a specific design concern:

| Pillar | Purpose |
|---|---|
| Encapsulation | Protects internal state from uncontrolled modification |
| Abstraction | Hides complexity behind a clean interface |
| Inheritance | Eliminates duplication by sharing logic through parent classes |
| Polymorphism | Enables flexible behavior through a unified interface |

Together, these four principles form the foundation of structured, maintainable TypeScript code.
