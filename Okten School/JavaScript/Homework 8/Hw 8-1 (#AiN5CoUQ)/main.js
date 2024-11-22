//
// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
//

function clon(object){
    if (object === null || object === undefined){}

    if (typeof object === 'number' && isNaN(object)){}

    if(object){
        let functions = [];
        for (const key in object){
            if (typeof object[key] === 'function' ){
                const functionClone = object[key].bind({});
                functions.push({functionClone, key});
            }
        }

        const cloneObject = JSON.parse(JSON.stringify(object));
        for (const  func of functions){
            cloneObject[func.key] = func.functionClone;
        }

        console.log(cloneObject);
        return cloneObject
    }

    throw new Error("not working");
}

const clone1 = clon({
    name: 'igor',
    age: 33,
    city() {
        console.log('Warszawa')
    },
    homeWork() {
        console.log('8-1')
    }});
clone1.homeWork();