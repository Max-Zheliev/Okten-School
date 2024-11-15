
// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
// зробити за допомоги стрілочних функцій


const foobar = (text, counter) =>{
    document.write('<ul>');
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('<ul/>');

}
foobar( 'Octen School', 5);
// foobar(100);


