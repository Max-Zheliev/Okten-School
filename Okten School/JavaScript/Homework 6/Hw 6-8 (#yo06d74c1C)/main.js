
// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}


const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
    ];
const sort = coursesAndDurationArray
. sort((a,b) => a.monthDuration - b.monthDuration);
const filter = sort.filter(value => value.monthDuration > 5);
const map = filter.map((value, index) => {
    value.id = index + 1;
    return value;
})
console.log(map);




// sort - Эта функция сравнивает каждую пару курсов (a и b) и решает, какой должен быть раньше a.monthDuration или b.monthDuration.
// filter: Проходит по каждому курсу и проверяет: если monthDuration > 5 (длительность больше 5), оставляет этот курс (пропускает то что мньше 5).
// index - Добовляет id если index = 0 то счет начинаеться с 0, если index + 1 то счет начинеаться с 1
// value - коробка из масива