
// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

function User (id, name, surname , email, phone) {
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
}

let users = [
    new User (1234, 'ivan', 'ivanov', 'ivanivanovmail.com', '+48678543098'),
    new User (2345, 'Oleksandr', 'Vorobiov', 'vorobioovmail.com', '+48234890567'),
    new User (2912, 'Dmitro', 'Nalivajko', 'nalivajkomail.com', '+48036478921'),
    new User (3456, 'Anna', 'Petrova', 'anna.petrova@mail.com', '+48123456789'),
    new User (4567, 'Maria', 'Kovalenko', 'maria.kovalenko@mail.com', '+48234567890'),
    new User (5678, 'Yurii', 'Shevchenko', 'yurii.shevchenko@mail.com', '+48345678901'),
    new User (6789, 'Oleg', 'Bondarenko', 'oleg.bondarenko@mail.com', '+48456789012'),
    new User (7890, 'Nina', 'Pavlenko', 'nina.pavlenko@mail.com', '+48567890123'),
    new User (8901, 'Serhii', 'Tkachenko', 'serhii.tkachenko@mail.com', '+48678901234'),
    new User (9012, 'Olha', 'Didenko', 'olha.didenko@mail.com', '+48789012345')
]

function sortId(user1, user2) {
    return user1.id - user2.id;
}
console.log(users.sort(sortId))


