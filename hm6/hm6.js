// let newDay = new Date(2001,1,1,12);
// console.log(newDay);

// let nowDate = new Date();
// console.log(`Day ${nowDate.getDate()}`);
// console.log(`Day in week ${nowDate.getDay()}`);
// console.log(`Year ${nowDate.getFullYear()}`);
// console.log(`month ${nowDate.getMonth()}`);
// console.log(`return string: ${nowDate.toDateString()}`);
// console.log(`return UTC ${nowDate.toUTCString()}`);
// console.log(`get json ${nowDate.toJSON()}`);

// string

// let string = 'sky, clouds, san';
// let bigString = "sky, clouds, san, stars";
// console.log(bigString.length);
// console.log(string.length);

// let newString = bigString.replace('clouds','wind');
// console.log(newString);

// let sliceString = bigString.slice(5,11);
// console.log(sliceString);

// let upString = bigString.toUpperCase();
// console.log(upString);

// let lowString = bigString.toLowerCase();
// console.log(lowString);

// newArray =['sky' ,'clouds','san' ,'stars'];
// console.log(newArray);
// let transformArray = newArray.join('!');
// console.log(transformArray);

// let newOne = transformArray.toUpperCase();
// console.log(newOne);

// // let splitArr = newOne.split();
// // let splitArr = newOne.split('');
// let splitArr = newOne.split("-");
// console.log(splitArr);

            // join
// let newArray = ['sky' ,'clouds','san' ,'stars'];
// let array =newArray.join('%');
// console.log(array);


        //    split
// let newArray ='sky ,clouds,san ,stars';
// console.log(newArray);
// let transformArray = newArray.split(',');
// console.log(transformArray);
        // Trim
// let input = prompt('say hi');
// // let newInput = input.trim();
// // let newInput = input.trimStart();
// let newInput = input.trimEnd();
// console.log(newInput);


          // typeof
//           let words = 'hello world';
// console.log(typeof words);

//           let numbers = 132;
// console.log(typeof numbers);

//           let array = [1,2,3];
// console.log(typeof array);

//           let obj = {name: 'valya'};
// console.log(typeof obj);

//           let boolenExample = false;
// console.log(typeof boolenExample);

//           const uniqKey = Symbol('key');
// console.log(typeof uniqKey);
//           const uniqKeyKey = Symbol('key');
// console.log(uniqKey === uniqKeyKey);

// let hello = function(){
//     console.log('Hello');
// }
// console.log(typeof hello);

// class NewOne{
//     constructor(name){
//  this.name=this.name;
//     }
// }
// console.log(typeof NewOne);


// let newDay = new Date(2021,10,3);
// console.log(typeof newDay);

                //Dom - document object model
                //Bom - browser object model (доступ к камере, геолокации пользователя, уведомления)
        
window.onload = function(){
let pEl = document.getElementsByTagName('p');
console.log(pEl);
let classEll = document.getElementsByClassName('test');
console.log(classEll);
let idEl = document.getElementById('main');
console.log(idEl);

let headerEl = document.querySelector('header.container');
console.log(headerEl);
let headerSpanEl = document.querySelectorAll('header span');
console.log(headerSpanEl);
let allspanEl = document.querySelectorAll('span');
console.log(allspanEl);

let spesialLiEl = document.querySelectorAll('.special li');
console.log(spesialLiEl);
let alLiEl = document.querySelectorAll('ul li');
console.log(alLiEl);


let liElement = Array.from(alLiEl);
console.log(liElement);
liElement.forEach(item=>{
    item.innerHTML = "hello";
});

let [...allspanes] = document.querySelectorAll('span');
console.log(allspanes);


let spesialParetn = document.querySelector('.special');
console.log(spesialParetn.children);

let [...childeArr] = spesialParetn.children;
console.log(childeArr);



}
