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


function getLength (value: string |any[]){

    if(typeof value === 'string'){
        return value.length;
    }
    else if( Array.isArray(value)){
        return value.length;
    }
} 



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




type Items={
    title:string;
    rating:number;
}


function filterByRating (value:Items[]):Items[]{
    value.forEach(item => {
        if (item.rating < 0 || item.rating > 5) {
            console.log(`Invalid rating for "${item.title}". Rating must be between 0 and 5.`);
        }
    });

    return value.filter(item => item.rating > 4 && item.rating <= 5);
} 



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




interface Book{
    title:string;
    author:string;
    publishedYear:number;
    isAvailable:boolean;
}

function printBookDetails(book:Book){
    
    console.log(  `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`);
} 



type ArrayType = string[] | number[];

function getUniqueValues (a:ArrayType, b:ArrayType){



    const newArray:ArrayType=[];

    const isPresent =(value:String|Number)=>{
        let check =false;

        for (let i=0;i<newArray.length;i++){
            if(newArray[i]===value){
                check=true;
            }
        } 

        if(!check){
            newArray.push(value);
        }
    }

    
  for (let i = 0; i < a.length; i++) {
    isPresent(a[i]);
  }
    for (let i = 0; i < b.length; i++) {
        isPresent(b[i]);
    }
    return newArray;
}


type Product={
    name:string;
    price:number;
    quantity:number;
    discount?:number;
}


function calculateTotalPrice(products: Product[]) {
    if (products.length === 0) {
        return 0;
    }

    for (const product of products) {
        if (product.discount !== undefined) {
            if (product.discount < 0 || product.discount > 100) {
                console.log(
                    `Error: Invalid discount value (${product.discount}) for "${product.name}". Discount must be between 0–100.`
                );

                return 0;
            }
        }
    }

    return products.reduce((total, product) => {
        const discount = product.discount ?? 0;
        const discountedPrice =
            product.price - (product.price * discount) / 100;

        return total + discountedPrice * product.quantity;
    }, 0);
}


