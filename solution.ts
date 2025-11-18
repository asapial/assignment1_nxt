function formatValue (value : number | string | boolean){

    if(typeof value === 'number'){
        return value*10;
    }
    else if( typeof value === 'string'){
        return value.toUpperCase();
    }
    else if(typeof value === 'boolean'){
        return !value;
    }
}

// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));


function getLength (value: string |any[]){

    if(typeof value === 'string'){
        return value.length;
    }
    else if( Array.isArray(value)){
        return value.length;
    }
} 

// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40]));

class Person {
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

    getDetails (){
        return `'Name: ${this.name}, Age: ${this.age}'`;
    } 
}

// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());


type Items={
    title:string;
    rating:number;
}


function filterByRating (value:Items[]):Items[]{
    const sortedItems = value.filter(item => item.rating > 4);
    return sortedItems;
} 

// const books = [
//   { title: 'Book A', rating: 4.5 },
//   { title: 'Book B', rating: 3.2 },
//   { title: 'Book C', rating: 5.0 },
// ];

// console.log(filterByRating(books));

type User={
    id:number;
    name:string;
    email:string;
    isActive:boolean;
}


function filterActiveUsers (value:User[]):User[]{
    const activeUser=value.filter(user=>user.isActive);
    return activeUser;
}

// const users = [
//   { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
//   { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
//   { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
// ];

// console.log(filterActiveUsers(users));


interface Book{
    title:string;
    author:string;
    publishedYear:number;
    isAvailable:boolean;
}

function printBookDetails(book:Book){
    
    console.log(  `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`);
} 

// const myBook: Book = {
//   title: 'The Great Gatsby',
//   author: 'F. Scott Fitzgerald',
//   publishedYear: 1925,
//   isAvailable: false,
// };

// printBookDetails(myBook);