// // // const obj = {
// // //     name: 'Alex',
// // //     age: 21
// // // }


// // const arr = [1, 2, 3, 4 ]
// // // console.log(obj)
// // console.log(arr)


// // // const data = JSON.stringify(obj)
// // const data = JSON.stringify(arr)

// // console.log(data, "stringify")

// // console.log(JSON.parse(data), "parse")


// const btn = document.querySelector("button")

// const wrapper = document.querySelector(".wrapper")

// btn.addEventListener("click",() => {
//     const request = new XMLHttpRequest() //создание запроса
//     request.open("GET", "https://pokeapi.co/api/v2/pokemon/") //объявление метода запроса и его пути
//     request.setRequestHeader("Content-Type", "application/json") //добавление "заголовков"
//     request.send() //отправка запроса
//     request.addEventListener("load", () => {
//         const data = JSON.parse(request.response)
//         // console.log(data.results)
//         data.results.map((item) => {
//             console.log(item.name)
//             const block = document.createElement("div")
//             block.style.height = "150px"
//             block.style.width = "150px"
//             block.style.border = "1px solid"
//             block.style.marginTop = "10px"
//             block.innerHTML = item.name
//             wrapper.append(block)
//         })
//     })
// })

// // {
// //     img: '../',
// //     title: "",
// //     descroption: "",
// //     price: 20
// // }


// string number bool undef null - primitive 
// obj arr - obj 


// const num = 5
// console.log(num)

// const num2 = num + 10
// console.log(num2)


// const obj = {
//     name: 'Alex',
//     id: 1
// }

// const obj2 = { ...obj }
// obj2.name = 'John'
// obj2.age = 25


// console.log(obj, "1")
// console.log(obj2, "2")


// const [one, ...two] = [1, 2, 3, 4, 5, 6, 7, 8]

// console.log(one)
// console.log(two)

const myFunc = (arg1, ...arg2) => {
    console.log(arg1)
    console.log(arg2)
}


myFunc(1, 2,2, 3, 4, 4,5, 5)