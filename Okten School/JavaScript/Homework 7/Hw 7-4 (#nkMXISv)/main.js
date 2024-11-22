
// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

function UserClient (id, name, surname , email, phone, ...Products) {
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
    this.order = Products;
}

function Product(title, price) {
    this.title = title
    this.price = price
}
let UsersClient = [
    new UserClient (1234, 'ivan', 'ivanov', 'ivanivanov@mail.com', '+48678543098', [new Product('Smartphone', 3200), new Product('Tv', 4300)]),
    new UserClient (2345, 'Oleksandr', 'Vorobiov', 'vorobioov@mail.com', '+48234890567', [new Product('Ipad',4500), new Product('Drone', 2300)]),
    new UserClient (2912, 'Dmitro', 'Nalivajko', 'nalivajko@mail.com', '+48036478921', [new Product('Laptop', 13200), new Product('Tablet', 4100)]),
    new UserClient (3456, 'Anna', 'Petrova', 'anna.petrova@mail.com', '+48123456789', [new Product('Smartwatch', 300), new Product('Desktop PC', 8200)]),
    new UserClient (4567, 'Maria', 'Kovalenko', 'maria.kovalenko@mail.com', '+48234567890', [new Product('Monitor', 2800), new Product('Keyboard', 530)]),
    new UserClient (5678, 'Yurii', 'Shevchenko', 'yurii.shevchenko@mail.com', '+48345678901', [new Product('Mouse', 600), new Product('Gaming Console', 5500)]),
    new UserClient (6789, 'Oleg', 'Bondarenko', 'oleg.bondarenko@mail.com', '+48456789012', [new Product('Soundbar', 3400), new Product('Laptop', 19000)]),
    new UserClient (7890, 'Nina', 'Pavlenko', 'nina.pavlenko@mail.com', '+48567890123', [new Product('Keyboard', 300), new Product('Printer', 800)]),
    new UserClient (8901, 'Serhii', 'Tkachenko', 'serhii.tkachenko@mail.com', '+48678901234', [new Product('Drone', 4200), new Product('Tablet', 2100)]),
    new UserClient (9012, 'Olha', 'Didenko', 'olha.didenko@mail.com', '+48789012345', [new Product('Electric Kettle', 4500), new Product('Blender', 320)])
];

 console.log(UsersClient);
