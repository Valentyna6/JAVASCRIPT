// class Car{
//     constructor(params) {
//   this.name = params.name
//      this.model = params.model
//       this.type = params.type
//        this.color = params.color
//         this.transmisson = params.transmisson
//          this.volume = params.volume
//     }
//     getcarinfo(){
//         console.log(`${this.name} ${this.color} ${this.model}
//         Год выпуска: 2022
//         Разгон до 100 км: ${this.HowTime ? this.HowTime() : '-' }
//         Расход на 100 км: ${this.howliters ? this.howliters() : '-' }
//         Коробка: ${this.transmisson}
//          `)
//     }
// }

// class CarCreate extends Car{
//     constructor(params){
//         super(params)
//     }
//     HowTime(){
//         let time = (this.volume * 3).toFixed(1)
//         return ` ${time} cek`;
//     }
//     howliters(){
//         let liter = (this.volume * 4).toFixed(1)
//         return `${liter} L.`
//     }
// }

// class BMW extends CarCreate{
//     constructor(params){
//         super(params)
//         this.name = 'BMW'
//         this.model = 'x7'     
//         this.type = 'geep'
//     }
// }

// class Audi extends CarCreate{
//     constructor(params){
//         super(params)
//         this.name = 'Audi'
//         this.model = 'A6'
//         this.type ='sedan'
//     }
// }

// const audi = new Audi({
//     color: 'red',
//     transmisson: 'auto',
//     volume:'2.5'
// })

// const bmw = new BMW({
//     color:'black',
//     transmisson:'auto',
//     volume: 2.4
// })

// console.log(bmw.getcarinfo());
// console.log(audi.getcarinfo());

// class Book {
//     constructor(title, author,year){
// this._title = title;
// this._author = author;
// this._year = year;
//     }
//     info(){
//         console.log(`${this._title} ${this._year}`)
//     }
//     get title(){
//         return `${this._title} and ${this._year} `;
//     }
// set title(newTitle){
//     this._title = newTitle;
// }
// }


// let book1 = new Book ('Titanic','James Cameron',1998);
// book1.title = 'titanik new';
// console.log(book1.title);


// Домашня робота:
// 1 Створення класу та об'єкта:
// Створіть клас Person з властивостями name та age.
// Створіть об'єкт з цього класу з ім'ям "John" та віком 30.
// 3 Наслідування:
// Створіть клас Student, який наслідує від класу Person.
// Додайте властивість studentId до класу Student.
// Додайте метод study, який виводить повідомлення про студента
// 2 Методи класу:
// Розширте клас Person, додайте метод sayHello, який виводить повідомлення з привітанням та ім'ям особи в console.log

// class Person {
//     constructor(name, age){
//        this.name = name;
//        this.age = age;
//     }
//     sayHello(){
//         console.log(`Hello ${this.name}`)
//     }
// }

// let John = new Person('John', 30);

// John.sayHello();
// console.log(John);

// class Student extends Person{
//     constructor(name, age, studentId){
//         super(name, age);
//     this.studentId = studentId;
//     }
//     studentInfo(){
//         console.log(`name: ${this.name}  age: ${this.age}  studentId: ${this.studentId} `)
//     }
// }

// let Mike = new Student('Mike', 21, 'TT2324');

// Mike.studentInfo();


// 4 Задачі для практики forEach, reverse  Виведіть значення з масиву в зворотньому порядку
// const numbers = [1, 2, 3, 4, 5];


// let newArry =[1, 2, 3, 4, 5];
// newArry.reverse().forEach(num => console.log(num));

// 5  Задачі для практики map та Math.round
//  Маєте масив чисел з плаваючою комою. Використовуйте map разом з Math.round, щоб створити новий масив, в якому кожне число буде округлене до найближчого цілого.

// const numbers = [1.23, 7.89, 5.907, 10.23];

// const newNumbers = numbers.map(num => Math.round(num));

// console.log(newNumbers);

// Додаткове завдання:
// 1. Вгадай число
// Гравець має вгадати число, яке програма випадково генерує в заданому діапазоні від 1до 20. Після кожної спроби програма повідомляє, чи є загадане число більшим чи меншим від введеного. Гра триває до вгадування числа 


// let randomNumber = Math.floor(Math.random()*20)+1;

// function play(){

// let gestNum = parseInt(prompt('Спробуйте вгадати число від 1 до 20'));
// if(randomNumber > gestNum){
//     alert(`Загадане число більше`);
//     play();
// } else if (randomNumber < gestNum){
//     alert('Загадане число менше');
//     play();
// } else if (randomNumber === gestNum){
//     alert('Вітаємо! Ви вгадали число !');
// }
// else{
//     alert('Помилка вводу');
//     play();
// }

// }
// play();

// Камінь-ножиці-папір
// Гравець вводить свій вибір, а програма генерує власний випадковим чином. Потім визначається переможець за традиційними правилами гри.
// const computerChoices = ['камінь', 'ножиці', 'папір'];

// function game() {
//     const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//     const userChoice = prompt('Виберіть: Камінь, Ножиці або Папір?').toLowerCase();

//     if ((userChoice === 'камінь' && computerChoice === 'ножиці') ||
//         (userChoice === 'ножиці' && computerChoice === 'папір') ||
//         (userChoice === 'папір' && computerChoice === 'камінь')) {
//         alert(`Ви виграли! Ваш вибір - ${userChoice}, вибір комп'ютера - ${computerChoice}.`);
//         game();
//     } else if ((userChoice === 'камінь' && computerChoice === 'папір') ||
//                (userChoice === 'ножиці' && computerChoice === 'камінь') ||
//                (userChoice === 'папір' && computerChoice === 'ножиці')) {
//         alert(`Ви програли! Ваш вибір - ${userChoice}, вибір комп'ютера - ${computerChoice}.`);
//         game();
//     } else if(userChoice === computerChoice) {
//         alert(`Нічия! Ваш вибір - ${userChoice}, вибір комп'ютера - ${computerChoice}.`);
//         game();
//     }
//     else {
//    alert (` Неправильний ввід данних `)
//    game();
//     }
// }

// game();

// function playGame (){
//  const choices = ['камінь', 'ножиці', 'папір'];
//  const computerChoice = choices [Math.floor(Math.random()*3)];
//  const userChoice = prompt ('Виберіть: Камінь, Ножиці або Папір').toLocaleLowerCase();

//  if (!choices.includes(userChoice)){
// alert('Неправильний ввід данних');
// playGame();
//  }

// else if (computerChoice === userChoice){
//     alert (`Нічия! Ваш вибір - ${userChoice}, вибір комп'ютера - ${computerChoice}.`);
//     playGame();
// }
// else if((userChoice === 'камінь' && computerChoice === 'ножиці') ||
//         (userChoice === 'ножиці' && computerChoice === 'папір') ||
//         (userChoice === 'папір' && computerChoice === 'камінь')){
//             alert(`Ви виграли! Ваш вибір - ${userChoice}, вибір комп'ютера - ${computerChoice}.`);
//             playGame();
// }
// else{
//     alert (`Ви програли! Ваш вибір - ${userChoice}, вибір комп'ютера - ${computerChoice}`)
//     playGame(); 
// }
// }

// playGame();