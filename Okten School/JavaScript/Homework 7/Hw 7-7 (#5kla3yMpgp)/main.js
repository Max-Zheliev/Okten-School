
// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class Car{
    constructor (model, manufacturer, year, maxSpeed, engineVolume){
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)};
    info () {
        for (const key in this){
            console.log(key, this[key]);
        }};

    increaseMaxSpeed (newSpeed) {
        if (newSpeed > 0)
            this.maxSpeed = this.maxSpeed + newSpeed;
    };

    changeYear (Year){
        this.year = Year;};

    addDriver (driver){
        if (driver)
            this.driver = driver

    };
}
const car = new Car ('Highlander', 'Toyota', '2024', '210', '3.5')
console.log(car)