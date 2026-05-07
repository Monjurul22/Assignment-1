"use strict";
//problem-1
function filterEvenNumbers(numbers) {
    return numbers.filter((num) => num % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
//problem-2
function reverseString(str) {
    let reverse = " ";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}
console.log(reverseString("typescript"));
function checkType(input) {
    if (typeof input === "string") {
        return "String";
    }
    else {
        return "Number";
    }
}
console.log(checkType("Hello"));
console.log(checkType(42));
// problem---4
function getProperty(obj, key) {
    return obj[key];
}
const user = {
    id: 1,
    name: "John Doe",
    age: 21
};
console.log(getProperty(user, "name"));
function toggleReadStatus(book) {
    return {
        ...book,
        isRead: true
    };
}
const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
toggleReadStatus(myBook);
console.log(toggleReadStatus(myBook));
// problem--6
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    grade;
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getDetails() {
        return `Name:${this.name}, Age:${this.age}, Grade:${this.grade}`;
    }
}
const student = new Student("Alice", 20, "A");
student.getDetails();
console.log(student.getDetails());
// problem---7
function getIntersection(arr1, arr2) {
    return arr1.filter((item) => arr2.includes(item));
}
const array = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
console.log(array);
