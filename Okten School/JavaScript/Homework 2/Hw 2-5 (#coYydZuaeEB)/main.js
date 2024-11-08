
// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу


let weekTemperatures = [
    {dayOfWeek: "Пятница", morning: "+2 +5", afternoon: "+5 +6", evening: "+4"},
    {dayOfWeek: "Суббота", morning: "+3 +6", afternoon: "+5 +7", evening: "+3 +5"},
    {dayOfWeek: "Воскресенье", morning: "0 +6", afternoon: "+5 +7", evening: "+3 +4"},
    {dayOfWeek: "Понедельник", morning: "0 +4", afternoon: "+4 +5", evening: "+2"},
    {dayOfWeek: "Вторник", morning: "0 +2", afternoon: "+3 +4", evening: "+2"},
    {dayOfWeek: "Среда", morning: "+3 +3", afternoon: "+4", evening: "+3"},
    {dayOfWeek: "Четверг", morning: "+2 +4", afternoon: "+5", evening: "+3 +5"}
];

console.log(weekTemperatures)