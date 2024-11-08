
// #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.


let book1 = {
    title: "A court of thorns and roses",
    pageCount: 419,
    genre: "Fantasy",
    authors: [
        {name: "Sarah Janet Maas", age: 38}
    ]
}


let book2 = {
    title: "Harry potter and the philosopher's stone",
    pageCount: 464,
    genre: "Fantasy",
    authors: [
        {name: "Joanne Rowling", age: 59}
    ]
}


let book3 = {
    title: "The Witcher: The Last Wish: Sword of Destiny",
    pageCount: 672,
    genre: "Fantasy",
    authors: [
        {name: "Andrzej Sapkowski", age: 76}
    ]
}


console.log(book1, book2, book3);