// 40-masala 


// function middleNumber(params) {
//     let arr = [...params]
//     let NUMBER = 0
//     let number1 = 0
//     let number2 = 0
//     if(arr.length % 2 == 0){
//         number1 = (arr.length / 2)
//         number2 = (arr.length / 2) - 1
//         NUMBER = (arr[number1] + arr[number2]) / 2
//         return NUMBER
//     }else{
//         NUMBER = (arr.length / 2) - 0.5
//         return (arr[NUMBER]);
//     }
// }
// console.log(middleNumber([1,2,3,4,5]));


// // 41-masala 
// const books = [
//     {
//         title: "Halqa",
//         author: "Akrom Malik",
//         read: false
//     },
//     {
//         title: "Dunyoning ishlari",
//         author: "O'tkir Hoshimov",
//         read: true
//     },
//     {
//         title: "Iymon",
//         author: "Shayx Muhammad Sodiq Muhammad Yusuf",
//         read: true
//     }
// ];

// for (let i = 0; i < books.length; i++) {
//     const book = books[i];
//     if (book.read) {
//         console.log(`${i + 1}. ${book.author} ning ${book.title} kitobi o’qilgan`);
//     } else {
//         console.log(`${i + 1}. ${book.author} ning ${book.title} kitobi o’qilmagan`);
//     }
// }



// // 42-masala 

// function world(arr) {
//     const obj = {}
//     for (let i = 0; i < arr.length; i++) {
//         obj[arr[i]] = arr[i].length;
//     }
//     return obj;
// }
// const item = ["text", "world", "laptop"]
// const box = world(item)
// console.log(box);


// // 43-masala  


// function item(obj, n) {
//     const item_box = {};
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             item_box[key] = obj[key] * n;
//         }
//     }
//     return item_box;
// }

// const n = 3;
// const obj = {a: 2, b: 3, c: 4};
// const item_box = item(obj, n);
// console.log(item_box);



// 44-masala 


// function item(n) {
//     const result = [];
//     for (let i = 1; i <= n; i++) {
//         result.push(Math.pow(2, i));
//     }
//     return result;
// }
// console.log(item(4)); 
// console.log(item(5)); 


// 45-masala 

// function item_box(arr) {
//     const obj = {};
//     arr.forEach(word => {
//         obj[word] = (obj[word] || 0) + 1;
//     });
//     return obj;
// }

// const item = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// const result = item_box(item);
// console.log(result);



// 46-masala 

// function item(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i] * arr[i]);
//     }
//     return result;
// }

// const input = [1, 2, 3, 4, 5];
// const output = item(input);
// console.log(output); 


// // 47-masala 


// // 1-usul
// function item_box(arr) {
//     const item = arr.filter(num => num > 0);
//     return item.reduce((total, num) => total + num, 0);
// }

// const input = [1, -4, 12, 0, -3, 29, -150];
// const output = item_box(input);
// console.log(output); 


// // 2-usul
// const input = [1, -4, 12, 0, -3, 29, -150];
// const item_box = input.filter(num => num > 0);
// const sum = item_box.reduce((acc, curr) => acc + curr, 0);
// console.log(sum); 


// 48-masala 

// function item(str) {
//     const initials = str.split(' ').map(word => word.charAt(0)).join('');
//     return initials;
// }

// const input = 'George Raymond Richard Martin';
// const output = item(input);
// console.log(output); 


// 49-masala 

// function item(arr) {
//     arr.sort((a, b) => a.age - b.age);
//     const youngest = arr[0].age;
//     const oldest = arr[arr.length - 1].age;
//     const difference = oldest - youngest;
//     return difference;
// }
// const input = [
//     {name: 'John', age: 13},
//     {name: 'Mark', age: 56},
//     {name: 'Rachel', age: 45},
//     {name: 'Nate', age: 67},
//     {name: 'Jeniffer', age: 65}
// ];
// const output = item(input);
// console.log(output); 



// 50-masala 


// let Number = function(nums) {
//     const count = {};
//     const result = [];
//     for (const num of nums) {
//         count[num] = (count[num] || 0) + 1;
//     }
//     for (const num in count) {
//         if (count[num] === 1) {
//             result.push(num);
//         }
//     }
//     return result;
// };
// console.log(Number([4, 1, 2, 1, 2, 9, true])); 