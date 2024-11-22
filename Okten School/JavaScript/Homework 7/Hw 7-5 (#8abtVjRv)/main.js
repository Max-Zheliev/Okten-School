
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

function UserClient (id, name, surname , email, phone, order) {
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
    this.order = order;
}



let UsersClient = [
    new UserClient (1234, 'ivan', 'ivanov', 'ivanivanov@mail.com', '+48678543098', [{title:'Smartphone', price: 3200}, {title:'Tv', price:4300}]),
    new UserClient (2345, 'Oleksandr', 'Vorobiov', 'vorobioov@mail.com', '+48234890567', [{title:'Ipad', price:4500}, {title:'Drone', price:2300}]),
    new UserClient (2912, 'Dmitro', 'Nalivajko', 'nalivajko@mail.com', '+48036478921', [{title:'Laptop', price:13200}, {title:'Tablet', price:4100}]),
    new UserClient (3456, 'Anna', 'Petrova', 'anna.petrova@mail.com', '+48123456789', [{title:'Smartwatch', price:300}, {title:'Desktop PC', price:8200}]),
    new UserClient (4567, 'Maria', 'Kovalenko', 'maria.kovalenko@mail.com', '+48234567890', [{title:'Monitor', price:2800}, {title:'Keyboard', price:530}]),
    new UserClient (5678, 'Yurii', 'Shevchenko', 'yurii.shevchenko@mail.com', '+48345678901', [{title:'Mouse', price:600}, {title:'Gaming Console', price:5500}]),
    new UserClient (6789, 'Oleg', 'Bondarenko', 'oleg.bondarenko@mail.com', '+48456789012', [{title:'Soundbar', price:3400}, {title:'Laptop', price:19000}]),
    new UserClient (7890, 'Nina', 'Pavlenko', 'nina.pavlenko@mail.com', '+48567890123', [{title:'Keyboard', price:300}, {title:'Printer', price:800}]),
    new UserClient (8901, 'Serhii', 'Tkachenko', 'serhii.tkachenko@mail.com', '+48678901234', [{title:'Drone', price:4200}, {title:'Tablet', price:2100}]),
    new UserClient (9012, 'Olha', 'Didenko', 'olha.didenko@mail.com', '+48789012345', [{title:'Electric Kettle', price:4500}, {title:'Blender', price:320}])
];
const sort = UsersClient.sort ((a, b) => a.order.length - b.order.length);

console.log(sort)