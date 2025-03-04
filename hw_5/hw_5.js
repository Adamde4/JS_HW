// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const area_rectangle = (side_a, side_b) => side_a * side_b
// console.log(area_rectangle(5,5))


// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

const area_circle = (radius) =>  Math.PI * radius * radius
// console.log(area_circle(5))



// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const area_cylinder = (radius, high) => 2 * Math.PI * radius * high
// console.log(area_cylinder(5, 10))


// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

const array_write = (array) => {
    for (const item of array){
        console.log(item);
    }
}

let users = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false},
    {id: 5, name: 'max', age: 30, status: true},
    {id: 6, name: 'anya', age: 31, status: false},
    {id: 7, name: 'oleg', age: 28, status: false},
    {id: 8, name: 'andrey', age: 29, status: true},
    {id: 9, name: 'masha', age: 30, status: true},
    {id: 10, name: 'olya', age: 31, status: false},
    {id: 11, name: 'max', age: 31, status: true}
]

// array_write(users)



// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

const p_writer = (text) => document.write(`<p>${text}</p>`);
// p_writer('lorem ipsum')





// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий

const ul_li3_creator = (text) =>{
    document.write(`
    <ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>
    `)
}

// ul_li3_creator("prodam garaz")



// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// та виводить його через document.write

const ul_li_no_limit = (text, number) =>{
    document.write("<ul>")
    for (let i = 0; i < number; i++){
        document.write(`<li>${text}</li>`)
    }
    document.write("/<ul>")
}

// ul_li_no_limit("some text ...", 5)




// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write

const Array_ul_li_creator = (array_primitives) =>{
    document.write(`<ul>`)
        for(const item of array_primitives){
            document.write(`<li>${item}</li>`)
        }
    document.write(`</ul>`)
}

// Array_ul_li_creator([123, 123, 2332, 444, "fsdfddfs", true])


// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

const array_object_block_writer = (array) =>{
    for (const object of array){
        document.write("<div>")
        document.write(`${object.id} ${object.name} ${object.age}`)
        document.write("</div>")
    }
}


// array_object_block_writer(users)



//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву


const array_min_value = (numbers) => {
    let number = 0
    for (element of numbers) {
        if (number > element) {
            number = element
        }
    }
}

array_number = [55, 40, 12, 0, -1, 3, 1, 0]
console.log(array_min_value(array_number))


// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

const sum = (arr) => {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
};

// num_arr = [5, 5, 10, 2]
// console.log(sum(num_arr))



// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2) {
    if (arr.length > index1 && arr.length > index2){
        let memory = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = memory
        return arr
    }
    return "404 not found"
}
//
// test = [11,22,33,44]
// console.log(swap(test, 0, 1))

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400


function exchange(sumUAH,currencyValues,exchangeCurrency){
    let chosenCurrency;
    for (const item of currencyValues){
        if (item.currency == exchangeCurrency){
            chosenCurrency = item;

            let result = sumUAH/chosenCurrency.value
            return result
        }
    }
}

// console.log(exchange(10000, [{currency: "USD", value: 25}, {currency: "EUR", value: 42}], "USD"))