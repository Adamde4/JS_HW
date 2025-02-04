// #dYQNrBV
// Створити змінні. Присвоїти кожному з них значення:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let hello = "hello"
let text = "owu"
let dom_ua = "com"
let national_domen = "ua"
let numb = "1"
let numb_ten = "10"
let negative_num = "-999"
let password = "123"
const PI = "3.14"
let num_float = "2.7"
let num_16 = "16"
let b_true = "true"
let b_false = "false"

console.log(hello)
console.log(text)
console.log(dom_ua)
console.log(national_domen)
console.log(numb)
console.log(numb_ten)
console.log(negative_num)
console.log(password)
console.log(PI)
console.log(num_float)
console.log(num_16)
console.log(b_true)
console.log(b_false)




// #6Qb97gsv
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
//     З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)


let firstName = "Bohdan"
let middleName = "Petrovich"
let lastName = "Adamitskiy"

let person = `${firstName} ${middleName}  ${lastName}`;
console.log(person)

// #4N0y5tufA
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;

console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))


// #ruUtWDUI
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt()
// отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// та вивести в консоль

let name_person = prompt("Print first name");
let middle_name_person = prompt("Print middle name");
let age_person = (+prompt("Print age"));

console.log(`${name_person} ${middle_name_person} ${age_person}`);