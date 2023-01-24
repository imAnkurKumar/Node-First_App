//Arrow Function
// const mul = (a, b) => a * b;
// console.log(mul(5, 3));

// Object
// const student = {
//  name : 'ankur Kumar',
//  age : 25,
//  address : 'Bangalore',
//  emailId : 'imankuchgch@gmail.com',
//  great(){
//   console.log('hi my name is '+ this.name)
//  }

// };
// student.great();

// arr = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
// arr = arr.map(function(item){
//  if(item ===' '){
//   return 'empty string';
//  }
//  return item;

// })
// console.log(arr);
// const arr = ['apple', 'oranges' , ' ' , 'mango', ' ' , 'lemon']

// console.log(arr.map(function(item){
//   if(item === " "){
//     return "empty string"
//   }
//   return item;
// }));

//console.log(newarr) // ['apple', 'oranges' , 'empty string' , 'mango', 'empty string' , 'lemon']
// const obj1 = {'key1': 1 , 'key2' : 2}

// const obj2 = { ...obj1, key1: 1000}

// console.log(obj1);

// console.log(obj2);

// console.log("a");
// console.log("b");

// new Promise((resolve) => {
//   setTimeout(() => {
//     console.log("c");
//     resolve();
//   }, 3000);
// })
//   .then(() => {
//     console.log("d");
//   })
//   .then(() => {
//     console.log("e");
//   });

// console.log("a");
// console.log("b");

// new Promise((resolve) => {
//     setTimeout(() => {
//         console.log("c");
//         resolve();
//     }, 3000);
// }).then(() => {
//     console.log("d");
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("e");
//             resolve();
//         }, 0);
//     });
// });

console.log('a');
console.log('b');

async function executeSequence() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log('c');
    await new Promise(resolve => setTimeout(resolve, 0));
    console.log('d');
}

executeSequence();

console.log('e');

