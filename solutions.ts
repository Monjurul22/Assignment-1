//problem-1

function filterEvenNumbers(numbers:number[]): number[] {
    return numbers.filter((num)=>num%2===0)
}




//problem-2
function reverseString(str:string) :string{
    let reverse="";
    for (let i = str.length-1; i>=0; i--) {
        reverse +=str[i];
    }
    return reverse;
}


//problem--3

type StringOrNumber =string|number;
function checkType(input:StringOrNumber):string {
    if (typeof input==="string") {
        return "String"
    }
    else{
        return "Number"
    }  
}



// problem---4


function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const user = { 
    id: 1, 
    name: "John Doe",
    age: 21 
};




//problem---5
interface Book{
    title:string;
    author:string;
    publishedYear:number;
}
 function toggleReadStatus(book:Book) {
    return{
        ...book,
        isRead:true     
    }
    
}
const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
toggleReadStatus(myBook);


// problem--6
class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
}

class Student extends Person{
    grade: string;
    constructor(name:string,age:number, grade:string){
        super(name,age);
        this.grade=grade;
    }
    getDetails():string{
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
} 
const student = new Student("Alice", 20, "A");
student.getDetails();




// problem---7


function getIntersection(arr1:number[],arr2:number[]):number[] {
    return arr1.filter((item)=> arr2.includes(item));
}
const array=getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])



