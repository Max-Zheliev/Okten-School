//
// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// зробити за допомоги стрілочних функцій

const foobar = (arrayOfPrimitives) =>{
    document.write(`<ul>`);
    for (const item of arrayOfPrimitives)
        document.write(`<li>${item}</li>`);}
    document.write(`</ul>`);
foobar([12, 23, 'qwe', true, false]);
