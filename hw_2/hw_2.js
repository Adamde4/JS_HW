// Масиви та об'єкти
// #67kfznmiMl
// - Створити масив,
//     наповнити його 10 елементами будь-якого типу,
//     вивести кожен елемент в консоль

let array_10 = [0, "2", "hello world", 40, 5, "lol", 7, "2025", 9, false]
console.log(array_10)
console.log(array_10[0])
console.log(array_10[1])
console.log(array_10[2])
console.log(array_10[3])
console.log(array_10[4])
console.log(array_10[5])
console.log(array_10[6])
console.log(array_10[7])
console.log(array_10[8])
console.log(array_10[9])

// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book_1 = {title: "Echoes of the Abys", pageCount: 312, genre: "Horror"}
let book_2 = {title: "Starlit Promises", pageCount: 278, genre: "Romance"}
let book_3 = {title: "The Quantum Paradox", pageCount: 415, genre: "Science Fiction"}

console.log(book_1)
console.log(book_2)
console.log(book_3)


// #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
//     Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book1= {
    title: "title_1",
    pageCount: 400,
    genre: "genre_1",
    authors: [{name: "name_1", age: 20}, {name: "name_2", age: 44}]
}

let book2= {
    title: "title_2",
    pageCount: 333,
    genre: "genre_2",
    authors: [{name: "name_3", age: 19}, {name: "name_4", age: 60}]
}

let book3= {
    title: "title_3",
    pageCount: 42200,
    genre: "genre_3",
    authors: [{name: "name_5", age: 77}, {name: "name_6", age: 71}]
}


// #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". ' +
// 'Поля: name, username,password. Вивести в консоль пароль кожного користувача

let arr_user = [
    {
        name: "Rob",
        username: "rob123",
        password: "qwerty123",
    },

    {
        name: "Kenny",
        username: "kenny123",
        password: "123123123123",
    }, {
        name: "Erick",
        username: "erick123",
        password: "1514131211",
    }, {
        name: "vasya",
        username: "vasya121111",
        password: "qwertyqwerty123",
    }, {
        name: "dima",
        username: "dima11111",
        password: "1111111111",
    }, {
        name: "yaroslav",
        username: "yaroslav1r1",
        password: "ffffffffffff5",
    }, {
        name: "avrora",
        username: "avrora111",
        password: "dddd1",
    }, {
        name: "anton",
        username: "anton123",
        password: "987654321",
    }, {
        name: "kolya",
        username: "kolya1q1",
        password: "cc123cc",
    }, {
        name: "misha",
        username: "misha123",
        password: "mishamishamishamisha",
    },
]
console.log(arr_user[0].password);
console.log(arr_user[1].password);
console.log(arr_user[2].password);
console.log(arr_user[3].password);
console.log(arr_user[4].password);
console.log(arr_user[5].password);
console.log(arr_user[6].password);
console.log(arr_user[7].password);
console.log(arr_user[8].password);
console.log(arr_user[9].password);



// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці,
//     вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати.
//     Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням
// вичключаємо одразу

let temps = [
    {day: "Monday", value:[11, 15, 10]},
    {day: "Tuesday", value:[11, 15, 10]},
    {day: "Wednesday", value:[11, 15, 10]},
    {day: "Thursday", value:[11, 15, 10]},
    {day: "Friday", value:[11, 15, 10]},
    {day: "Saturday", value:[11, 15, 10]},
    {day: "Sunday", value:[11, 15, 10]}
    ];



// Логічні розгалуження:
//     #bAUsaq6LI
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно',
//     інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = +prompt("enter number 1, 0 or -3");
if (isNaN(x)) {
    console.log("Try again");
} else if (x !== 0) {
    console.log("Right");
} else {
    console.log("False");
}




// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).


let time = 25;
if (time >= 0 && time <= 15){
    console.log("first");
} else if (time >= 16 && time <= 30){
    console.log("second");
} else if(time >= 31 && time <= 45){
    console.log("third");
} else if(time >= 46 && time <60){
    console.log("fourth");
} else if(time >= 60){
    console.log("try again")
} else {
    console.log("try again");
}

// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду)
// місяця потрапляє це число (у першу, другу чи третю).

let day_num = 111;
    if (day_num >= 1 && day_num <= 10) {
        console.log("first");
    } else if (day_num >= 11 && day_num <= 20) {
        console.log("second");
    } else if (day_num >= 21 && day_num <= 31) {
        console.log("third");
    } else {
        console.log("try again");
    }


// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch.
//     Користувач вводить порядковий номер дня тижня і
//     на екрані відображається інфа що заплановано на цей день
//     (можна замість плану на день, назву дня англійською).


let day_key = "wednesday"

    switch (day_key) {
        case "monday":
            console.log("plan 'A'")
            break
        case "tuesday":
            console.log("plan 'B'")
            break
        case "wednesday":
            console.log("plan 'D'")
            break
        case "thursday":
            console.log("plan 'D'")
            break
        case "friday":
            console.log("plan 'E'")
            break
        case "saturday":
            console.log("plan 'F'")
            break
        case "sunday":
            console.log("plan 'G'")
            break
}
// #uwsz1RnTQJ1
// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let num_one = +prompt("write first num")
let num_two = +prompt("write second num")

if(num_one > num_two){
    console.log("largest number:", num_one)
} else if(num_two > num_one){
    console.log("largest number:", num_two)
} else if(num_two === num_one){
    console.log("the same numbers")
} else {
    console.log("try again")
}


// #iBvqtjEm
// - є змінна х, яка може прийняти будь-яке значення
// (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     буде присвоювати змінній х значення "default"
// якщо ви намагаєтесь присвоїти в неї falsy-значення
// (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let x_1 = NaN;

if (!x_1) {
    x_1 = 'default';
}
console.log(x_1)

//     #awLXL6TBzg
//     - з файлу arrays.js (лежить в папці 2023 plan )
// взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5){
    console.log("Super")
}
if (coursesAndDurationArray[1].monthDuration > 5){
    console.log("Super")
}
if (coursesAndDurationArray[2].monthDuration > 5){
    console.log("Super")
}
if (coursesAndDurationArray[3].monthDuration > 5){
    console.log("Super")
}
if (coursesAndDurationArray[4].monthDuration > 5){
    console.log("Super")
}
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log("Super")
}