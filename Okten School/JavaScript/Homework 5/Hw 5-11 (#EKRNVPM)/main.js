
// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// зробити за допомоги стрілочних функцій

// function sum(arr){
//     let basket = 0;
//     for (const item of arr){
//         basket = basket + item;
//     }
//     return basket;
// }

const sum = (arr) => arr.reduce((basket, item) => basket+item, 0)

console.log(sum([1,2,10]));



// reduce принимает функцию и начальное значение (0 в нашем случае).