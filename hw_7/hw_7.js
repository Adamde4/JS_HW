// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//

function User(id, name, surname, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.phone = phone;
}

let users = [
    new User(2, 'Abrikos', 'Abrikosovich', '3801111111'),
    new User(5, 'Vinograd', 'Vinogradovich', '+3809911111'),
    new User(1, 'Abrikos', 'Garden', '3801112341'),
    new User(2, 'Ananas', 'Ekzotkovych', '380111344451'),
    new User(5, 'Vadim', 'Vadimchyk', '3801645654111'),
    new User(6, 'Igor', 'Igorchuk', '38011145645641'),
    new User(777, 'Sveta', 'Yanykovich', '3801234234521'),
    new User(66, 'Anna', 'Poroshenko', '380112345512'),
    new User(444, 'Maria', 'Abramovich', '38011112342342'),
    new User(14, 'Alex', 'Ryle', '3801122233341')
]
//
// console.log(users)





// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// const filerID_user_func = (user) => user.id % 2 === 0
//
// const new_user_list = users.filter(filerID_user_func)
// console.log(new_user_list)
//





// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// const sortIdUP_users = (user1, user2) => user1.id - user2.id
// console.log(users.sort(sortIdUP_users))





// #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//
//

function Client(id, name, surname , email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let clients = [
    new Client(1, 'Abrikos', 'Abrikosovich', 'abrikosovich@gmail.com', '+38099999999', [{title: 'tv', price: 100}]),
    new Client(2, 'Vinograd', 'Vinogradovich', 'vinogradovich@gmail.com', '+38099999999', [{title: 'phone', price: 500}]),
    new Client(3, 'Abrikos', 'Garden', 'garden@gmail.com', '+38099999999', [{title: 'ECOflo', price: 200}]),
    new Client(4, 'Ananas', 'Ekzotkovych', 'ananas@gmail.com', '+38099999999', [{title: 'dvd', price: 40}, {title: 'ps4', price: 400}]),
    new Client(5, 'Ball', 'Kokosovich', 'ballkokos@gmail.com', '+38099999999', [{title: 'ps4', price: 400}]),
    new Client(6, 'Vadim', 'Vadimchyk', 'vadimchyk@gmail.com', '+38099999999', [{title: 'ps5', price: 700}, {title: 'ps4', price: 400}]),
    new Client(7, 'Igor', 'Igorchuk', 'igorchuk@gmail.com', '+38099999999', [{title: 'xboxOne', price: 700}]),
    new Client(8, 'Sveta', 'Yanykovich', 'yanykovich@gmail.com', '+38099999999', [{title: 'laptop', price: 999}]),
    new Client(9, 'Anna', 'Poroshenko', 'poroshenko@gmail.com', '+38099999999', [{title: 'ps4_slim', price: 300}, {title: 'PC', price: 250}, {title: 'ps4', price: 400}]),
    new Client(10, 'Kokos', 'Kokosovich', 'kokos@gmail.com', '+38099999999', [{title: 'ps4_pro', price: 480}, {title: 'PC'}])
]

// console.log(clients)






// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// const sort = clients.sort((a, b) => a.order.length - b.order.length)
// console.log(sort)






// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//


// function Car(mode, producer, year, maxSpeed, engineVolume) {
//     this.mode = mode;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${maxSpeed}км на годину`)
//     };
//
//     this.info = function() {
//         for(const key in this){
//             console.log(key, this[key])
//         }
//     };
//
//     this.increaseMaxSpeed= function(newSpeed)  {
//         if (newSpeed>0) this.maxSpeed = maxSpeed + newSpeed
//         console.log(newSpeed)
//     };
//
//     this.changeYear= function(newValue)  {
//         if (newValue>this.year) this.year = newValue
//         console.log(this.year)
//     };
//
//     this.addDrive = function (driver) {
//         if (driver) this.driver = driver
//     };
// }

// const car1 = new Car("Oktavia", 'Volkswagen', 2009, 180, 1600)
//
// console.log(car1)
// car1.drive()
// car1.info()
// car1.increaseMaxSpeed(220)
// car1.changeYear(2012)
// car1.addDrive({})





// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//


//
// class Car{
//     constructor(model, producer, year, maxSpeed, engineVolume) {
//         this.mode = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//     }
//
//
//     drive () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed}км на годину`)
//     };
//
//     info () {
//         for(const key in this){
//             console.log(key, this[key])
//         }
//     };
//
//     increaseMaxSpeed (newSpeed)  {
//         if (newSpeed>0) this.maxSpeed += newSpeed
//         console.log(newSpeed)
//     };
//
//     changeYear(newValue)  {
//         if (newValue > this.year) this.year = newValue
//         console.log(this.year)
//     };
//
//     addDrive (driver) {
//         if (driver) this.driver = driver
//     };
//
//
//
// }
//
// const car1 = new Car("Oktavia", 'Volkswagen', 2009, 180, 1600)
// console.log(car1);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(220);
// car1.changeYear(2012);
// car1.addDrive({});






//
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Cinderella{
//
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// const cinderellas = [
//     new Cinderella('asd1', 20, 30),
//     new Cinderella('asd2', 21, 31),
//     new Cinderella('asd3', 22, 32),
//     new Cinderella('asd4', 23, 33),
//     new Cinderella('asd5', 24, 34),
//     new Cinderella('asd6', 25, 35),
//     new Cinderella('asd7', 26, 36),
//     new Cinderella('asd8', 27, 37),
//     new Cinderella('asd9', 28, 38),
//     new Cinderella('asd10', 29, 39),
// ]
//
// class Quing {
//
//     constructor(name, age, sneakers) {
//         this.name = name;
//         this.age = age;
//         this.sneakers = sneakers;
//     }
// }
//
// const quing = new Quing("ASD", 25, 34);
//
// const cinderelaFind = cinderellas.find(cinderella => cinderella.footSize === quing.sneakers);
// quing.wife = cinderelaFind;
// console.log(quing)
//






// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

// const arr = [1, 2, 3, 4]
// Array.prototype.myForeach = function (callback){
//     for (const item of this) {
//         callback(item)
//     }
// }
//
// arr.myForeach((x => console.log(x)))


// Array.prototype.myFilter = function (callback){
//     const arr = []
//     for (const item of this) {
//         if(callback(item)){
//             arr.push(item)
//         }
//     }
//     return arr
// }
//
// const result = clients.myFilter((clients) => clients.surname === ('Kokosovich'));
// console.log(result)