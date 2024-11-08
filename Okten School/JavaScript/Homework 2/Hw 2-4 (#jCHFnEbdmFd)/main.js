
// #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let user = [
    {name: "Николай", username: "Николай", password: "Password12" },
    {name: "Татьяна", username: "Татьяна", password: "Password23" },
    {name: "Владимир", username: "Татьяна", password: "Password34" },
    {name: "Виктория", username: "Виктория", password: "Password45" },
    {name: "Матвей", username: "Матвей", password: "Password56" },
    {name: "Екатерина", username: "Екатерина", password: "Password67" },
    {name: "Павел", username: "Павел", password: "Password78" },
    {name: "Людмила", username: "Людмила", password: "Password89" },
    {name: "Роман", username: "Роман", password: "Password99" },
    {name: "Ольга", username: "Ольга", password: "Password109" },
]


user.forEach(user => console.log(user.name, user.password));