
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, Shoe) {
        this.name = name;
        this.age = age;
        this.Shoe = Shoe;
    }
}

let cinderellas = [
    new Cinderella('Anna', 19, 35),
    new Cinderella('Maria', 21, 36),
    new Cinderella('Yulia', 24, 37),
    new Cinderella('Viktoria', 22, 38),
    new Cinderella('Olha', 18, 34),
    new Cinderella('Nina', 23, 39),
    new Cinderella('Yana', 20, 37.5),
    new Cinderella('Kateryna', 24, 40),
    new Cinderella('Iryna', 25, 36.5),
    new Cinderella('Svitlana', 26, 35.5),
];

let prince = new Prince('Maksym', 28, 37);

for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.Shoe) {
        prince.wife = cinderella;
    }
}
console.log(prince.wife);

//--------------------------------------------------------------------------------------------------------------//

let foundCinderella = cinderellas.find(cinderella => cinderella.footSize === prince.Shoe);
prince.wifes = foundCinderella;
console.log(prince.wifes);