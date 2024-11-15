
// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
// зробити за допомоги стрілочних функцій

// function exchange(sumUAH,currencyValues,exchangeCurrency){
//     let chosenCurrency;
//     for (const item of currencyValues){
//         if(item.currency === exchangeCurrency){
//             chosenCurrency = item;
//         }
//     }
//     let result = sumUAH/chosenCurrency.value;
//     return result;
// }
// console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],


    // 'USD')); //Выбор валюты USD или EUR

const exchange = (sumUAH,currencyValues,exchangeCurrency) =>{
    const chosenCurrency = currencyValues.find( item => item.currency === exchangeCurrency)
     return sumUAH/chosenCurrency.value;
}
console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],

    'USD')); //Выбор валюты USD или EUR