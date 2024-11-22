
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

Array.prototype.myForEach = function (callback){
    const yourArray = this;
    for (const item of yourArray){
        callback(item);
    }
};

[
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
].myForEach((x) => console.log(x));

//__________________________________________________//

Array.prototype.myFilter = function (filter){
    const arr = [];
    for (const item of this){
        if (filter(item)){
            arr.push(item);
        }
    }
    return arr;
};
let users = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'katya', age: 27, status: false },
    { name: 'dima', age: 26, status: true },
    { name: 'vlad', age: 32, status: false },
    { name: 'sveta', age: 25, status: true },
    { name: 'inna', age: 24, status: false },
    { name: 'igor', age: 33, status: true },
    { name: 'sergey', age: 34, status: false },
    { name: 'polina', age: 29, status: true },
    { name: 'victor', age: 31, status: false },
    { name: 'arina', age: 28, status: true },
    { name: 'yana', age: 27, status: false }
];

const userFilter = users.myFilter((user) => user.status)
console.log(userFilter)