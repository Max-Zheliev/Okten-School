
// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 35;

if (time>= 0 && time <= 15){
    console.log("Первая часть")
}
else if (time>= 15 && time <= 30){
    console.log("Вторая часть")
}
else if (time>= 30&& time <= 45){
    console.log("Третья часть")
}
else if (time>= 45&& time <= 59){
    console.log("Четвертая часть")
}