// ------------------------------------No1------------------------------------------------
// Домашня робота:
// Переишіть цей код використовуючи let const~
// // Замість var
// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }
 


// for(let i=0; i<5; i++){
//     console.log(i);
// }

// ------------------------------------------------------------------------------------


// ------------------------------------No2------------------------------------------------
// // Замість var
// var message = 'test';
// function example() {
//     if (true) {
//         var message = 'Hello, world!';
//         console.log(message);
//     }
//     console.log(message); // Виведе 'Hello, world!'
// }


// let message = 'test';
// function example() {
//     if (true) {
//        let message = 'Hello, world!';
//         console.log(message);
//     }
// }
// example();


// ------------------------------------------------------------------------------------


// ------------------------------------No3------------------------------------------------
// Використовуючи for in  виведіть значення з обєктку в console.log
// const person = {
//     name: 'John',
//     age: 25,
//     occupation: 'Developer'
// };
// for( let key in person ){
//     console.log(`${key}: ${person[key]}`);
// }

// ------------------------------------------------------------------------------------


// // ------------------------------------No4------------------------------------------------
// Використовуючи for of  та for in  виведіть занчення з обєктів які знаходяться в масиві
// const students = [
//     { name: 'Alice', age: 20, grade: 'A' },
//     { name: 'Bob', age: 22, grade: 'B' },
//     { name: 'Charlie', age: 21, grade: 'C' }
// ];
// for(let key of students){
//     console.log(`${key} : ${students[key]}`);
// }

// const students = [
//     { name: 'Alice', age: 20, grade: 'A' },
//     { name: 'Bob', age: 22, grade: 'B' },
//     { name: 'Charlie', age: 21, grade: 'C' }
// ];

// for (let value of students) {
//     for (const key in value) {
//         console.log(`${key}: ${value[key]}`);
//     }
//     console.log('---');
// }


// // ------------------------------------------------------------------------------------


// // ------------------------------------No5------------------------------------------------
// Завдання на map
// Завдання 1: Створіть масив чисел і використайте метод map, щоб створити новий масив, який містить квадрати кожного числа.

// let firstArr = [2,4,6,8,10];
// let secondArr = firstArr.map((value) => value*value);
// console.log(secondArr);


// // ------------------------------------------------------------------------------------


// // ------------------------------------No6------------------------------------------------
// Завдання 2: Напишіть функцію, яка приймає масив і функцію-перетворювач, і використовує map для створення нового масиву, в якому кожен елемент отримує  стрінг до значення 'new value'

// function transformArray(arr, transformer) {
//     return arr.map(() => transformer('new value'));
// }

// const originalArray = [1, 2, 3, 4, 5];
// const newArray = transformArray(originalArray, (value) => value);
// console.log(newArray);



// // ------------------------------------------------------------------------------------


// // ------------------------------------No7------------------------------------------------
// Напишіть функцію, яка використовує forEach для обчислення суми всіх елементів у масиві чисел. Масив наприклад const numberArr = [10,20,30]

// const numberArr = [10,20,30]

// function checkSum(NameArr){
// let sum =0;
// NameArr.forEach(function(number){
//     sum+=number
// });
// return sum;
// }
// let result = checkSum(numberArr);
// console.log(result);


// // ------------------------------------------------------------------------------------


// // ------------------------------------No8------------------------------------------------
// Додаткове завдання:
// Напишіть функцію, яка використовує forEach для створення масиву, що містить лише унікальні елементи вихідного масиву.
// Тобто якщо предаєте numberArr = [10,20,30, 20, 10] отримуєте numberArr = [10,20,30]

// numberArr = [10,20,30, 20, 10];
// newArr =[];
// function checkNum(nameArr){
// nameArr.forEach((num)=> { 
//    if (!newArr.includes(num) ){
//     newArr.push(num);
//    }
// });
// return newArr;
// }
// let result = checkNum(numberArr);
// console.log(result);


// // ------------------------------------------------------------------------------------


// // ------------------------------------No9------------------------------------------------

// Напишіть функцію, що приймає масив чисел і колбек-функцію. Функція повинна використовувати for...of для обходу по масиву та викликати колбек-функцію для кожного елемента. Колбек-функція повинна повертати true або false, вказуючи, чи слід включити поточний елемент до нового масиву.
// const fruits =["apple", "banana", "cherry", "date", "kiwi"];
// let rightFruits =[];
// const letter ='a' ;

// function checkLetter(words){
//     if (words.includes(letter)){
//         rightFruits.push(words);
//     }
// }
// fruits.forEach(checkLetter);
// console.log(rightFruits);

// or

// const words = ['apple', 'banana', 'cherry', 'date', 'kiwi'];
// const filteredWords = [];

// function filterWords(arr, callback) {
//     for (const word of arr) {
//         if (callback(word)) {
//             filteredWords.push(word);
//         }
//     }
//     return filteredWords;
// }

// function LetterA(word) {
//     return word.includes('a');
// }

// const wordsWithA = filterWords(words, LetterA);
// console.log(wordsWithA);
// // ----------------------------------------------------------------------------------------

// // ------------------------------------No10------------------------------------------------
// Передавши масив  [1, 2, 3, 4, 5] і колбек-функція, що відбирає парні числа.

// повині отримати  новий масив з парними числами [2, 4].

// const NumArr = [1, 2, 3, 4, 5];
// let NewArr = [];
// function checkNum(nameArr, callbackFn){
//     for (let num of nameArr){
//         if(callbackFn(num)){
//             NewArr.push(num);
//         }
//     }
// return NewArr;
// }

// function trueNum(num){
//     return num % 2 === 0;
// }
// let result = checkNum(NumArr, trueNum);
// console.log(result);