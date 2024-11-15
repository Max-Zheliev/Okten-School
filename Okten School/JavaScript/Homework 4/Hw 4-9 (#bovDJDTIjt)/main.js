
// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function foobar(users){
    for (const user of users){
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }

}
foobar([
    {id: 127635, name: 'Maksym', age: 28},
    {id: 236744, name: 'Yuliia', age: 34},
    {id: 465416, name: 'Vlad', age: 25},
    {id: 489651, name: 'Rabek', age: 44},
    {id: 548617, name: 'Ivan', age: 30},
])