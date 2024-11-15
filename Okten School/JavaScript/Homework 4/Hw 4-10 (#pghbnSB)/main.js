
// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

function arrayMinValue(numbers){
    let min = numbers[0];
    for (let i = 0; i<numbers.length; i++){
        let number =  numbers[i];
        if (number < min){
            min = number
        }
    }
    return min;
}

console.log (arrayMinValue([21, 42 ,-32, -59, 23]))


