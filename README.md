## 1. TypeScript-এ Interface এবং Type এর পার্থক্য

TypeScript-এ interface এবং type দুটোই ব্যবহার করা হয় ডেটার structure বা shape নির্ধারণ করতে। 

১. Extension / Inheritance

interface → সহজভাবে extend করা যায়
type → অন্য type কে extend করা যায়, কিন্তু syntax আলাদা

উদাহরণ:

interface Person {
  name: string;
}
interface Student extends Person {
  roll: number;
}

type Person = { name: string };
type Student = Person & { roll: number };

## 2. Declaration Merging

interface → একাধিকবার declare করলে merge হয়
type → merge হয় না (error দিবে)




৩. Complex Types

type alias union, tuple, conditional type ইত্যাদিতে ব্যবহার করা যায়।
interface → এগুলো সাপোর্ট করে না।

type Result = string | number | boolean;
type Pair = [number, number];


2. keyof কীওয়ার্ড এর ব্যবহার

keyof TypeScript-এ খুব গুরুত্বপূর্ণ—এটি একটি object type-এর সব key কে union string literal হিসেবে রিটার্ন করে।

উদাহরণ:

interface User {
  id: number;
  name: string;
  email: string;
}

type UserKeys = keyof User;
//  "id" | "name" | "email"


এবার আমরা এই key গুলো ব্যবহার করতে পারি আরও type-safe কোড লেখার জন্য।
