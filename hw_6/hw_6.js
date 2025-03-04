// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// console.log("hello world".length)
// console.log("lorem ipsum".length)
// console.log("javascript is cool".length)
// __________________________________________________________



// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a1 = "hello world"
// let a2 = "lorem ipsum"
// let a3 = "javascript is cool"
// let arr = [a1, a2, a3]
// for (item of arr){
//     console.log(item.toUpperCase())
// }
// __________________________________________________________



// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let b1 = "HELLO WORLD"
// let b2 = "LOREM IPSUM"
// let b3 = "JAVASCRIPT IS COOL"
// let arr = [b1, b2, b3]
// for (item of arr){
//     console.log(item.toLowerCase())
// }
// __________________________________________________________



// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
// console.log(str.length, str)
// str = str.trim()
// console.log(str.length, str)




//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
//
// function stringToarray(str) {
//     if(str){
//         return str.split(" ")
//     }
// }
// let text_1 = 'Ревуть воли як ясла повні';
// console.log(stringToarray(text_1))




// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// const num_arr = [10,8,-7,55,987,-1011,0,1050,0]
//
// const str_num = num_arr.map(number => number.toString())
// console.log(str_num)


// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// function sortNums(array,direction){
//  if(direction === 'ascending') return array.sort((a, b) => a - b)
//  if(direction === 'descending') return array.sort((a, b) => b - a)
// }
//
// let nums = [11,21,3]
// console.log(sortNums(nums,'ascending'))
// console.log(sortNums(nums,'descending'))



// #yo06d74c1C
// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// const coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// const sort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)
//
// const filter = sort.filter((value) => value.monthDuration>5)
//
// filter.map((value, index) => {value.id = index + 1; return  value})
//
// console.log(filter)




//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }


suits = ['spade', 'diamond','heart', 'club']
values = ['6', '7', '8', '9', '10','jack','queen','king', 'ace']

const cards = []
let color = undefined
for (const suit of suits){
    color = (suit === "spade" || suit === "diamond") ? "black" : "red"
    for (const value of values){
        const card = {suitCard: suit, value: value, color: color}
            cards.push(card)
    }
}

// console.log(cards)
// // - знайти піковий туз
// console.log(cards.find(card => card.value === "ace" & card.suitCard === "diamond"))
// // - всі шістки
// console.log(cards.filter(card => card.value === "6"))
// // - всі червоні карти
// console.log(cards.filter((cards => cards.color === "red")))
// // - всі буби
// console.log(cards.filter((cards => cards.suitCard === "spade")))
// // - всі трефи від 9 та більше
// console.log(cards.filter(card => card.suitCard === "club" && (card.value !== '6' || card.value !== '7'
//     || card.value !== '8')))



//
//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }


cards.reduce((accum, card) => {
    switch (card.suitCard){
        case 'spade':
            accum.spades.push(card)
            break;
        case 'diamond':
            accum.diamonds.push(card)
            break;
        case 'heart':
            accum.hearts.push(card)
            break;
        case 'club':
            accum.clubs.push(card)
            break;
    }
    return accum;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
})

console.log(reduce)









// __________________________________________________________
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker