// // // // // // // console.log('1')

// // // // // // // const button = document.querySelector("button")

// // // // // // // button.addEventListener("click", () => {
// // // // // // //     console.log("2")
// // // // // // // })

// // // // // // // console.log('3')


// // // // // // // console.log('0')
// // // // // // // setTimeout(() => {console.log("1")}, 1000)
// // // // // // // console.log('2')

// // // // // // setTimeout(() => {
// // // // // //     console.log(0)
// // // // // // }, 0)
// // // // // // setTimeout(() => {
// // // // // //     console.log(1)
// // // // // // }, 1000)
// // // // // // setTimeout(() => {
// // // // // //     console.log(2)
// // // // // // }, 2000)
// // // // // // setTimeout(() => {
// // // // // //     console.log(3)
// // // // // // }, 3000)

// // // // // // console.log('a')
// // // // // // console.log('b')
// // // // // // console.log('c')

// // // // // // setTimeout(() => {
// // // // // //     console.log("a")
// // // // // // }, 1000)

// // // // // // setTimeout(() => {
// // // // // //     console.log("b")
// // // // // // }, 1000)


// // // // // const interval = setInterval(() => {
// // // // //     console.log('interval')
// // // // // }, 1000)

// // // // // // setTimeout( () => clearInterval(interval), 5000)


// // // // // const button = document.querySelector("button")

// // // // // button.addEventListener("click", () => {
// // // // //     clearInterval(interval)
// // // // // })

// // // // const block = document.querySelector(".block")

// // // // let postionX = 0
// // // // let postionY = 0

// // // // const handleBLockMove = () => {
// // // //     if(postionX <= 440){
// // // //         postionX += 16
// // // //         block.style.left = `${postionX}px`
// // // //         setTimeout(handleBLockMove, 100)
// // // //     } else if(postionY <= 440) {
// // // //         postionY += 16
// // // //         block.style.top = `${postionY}px`
// // // //         setTimeout(handleBLockMove, 100)
// // // //     }
// // // // }

// // // // handleBLockMove()


// // // const button = document.querySelector("button")

// // // button.addEventListener("click", () => {
// // //    console.log('a')
// // // })

// // // const addEventListener = (event, callback)

// // // const asyncFunc = () => {
// // //     console.log('1')
// // // }

// // // setTimeout(asyncFunc, 1000)

// // const alertDoHomework = (subject, callback) => {
// //     // alert(`Starting my ${subject} homework`)
// //     callback()
// // }

// // const alertFinished = () => {
// //     let a = 1
// //     // alert("DONNEEEE!")
// //     console.log(a)
// //     const myFunc = () => {
// //         a+=10
// //         console.log(a)
// //     }
// //     myFunc()
// //     console.log(a)
// // }


// // alertDoHomework("math", alertFinished)


// // // setTimeout(()=> {})


// const myFunc = (num) => {
//     console.log(num)
//     return function (number) {
//         console.log(number)
//         return function(numb){
//             console.log(numb, number, num)
//         }
//     }
//     // return true
// }

// const addOne = myFunc(10)

// const addTwo = addOne(1)
// // console.log(addOne)
// addTwo(2)

// const arr = ["Январь", "Февраль", "Апрель", "Март"]

// // console.log(arr[2])

// // arr.forEach((item, i) => {console.log(item, i)})

// const newArr = arr.map((item) => item + " Месяц")

// console.log(newArr)
// console.log(arr)


const fruits = ["apple", "banana", "watermelon", "peach"]

const res = fruits.filter((item) => item.length > 5)

console.log(res)
console.log(fruits)