
// #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

function stringToarray(str){
    if (str){
    const split = str.split(' ')
    return split
    }
}
console.log(stringToarray('Ревуть воли як ясла повні'))



// Внутри функции метод split(' ') делит строку на части по пробелам.
// str.split([separator[, limit]]) - Указывает символы, используемые в качестве разделителя внутри строки.
//     Параметр separator может быть как строкой, так и регулярным выражением.