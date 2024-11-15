
// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
// та будує для них список (ul li) та виводить його через document.write
// зробити за допомоги стрілочних функцій

// const arrayMinValue = (numbers) => {
//     let min = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//         let number =  numbers[i];
//         if (number < min){
//             min = number
//         }
//     }
//     return min;
// }
//
const arrayMinValue = (numbers) => Math.min(...numbers);
console.log (arrayMinValue([21, 42 ,-32, -59, 23]))


