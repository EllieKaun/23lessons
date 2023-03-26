

// // const arr = [1, 34, 466, 90, 77]

// // const newArr = []

// // const results = arr.reduce((prev, curr) => {
// //     console.log(prev, "prev") 
// //     console.log(curr, "curr")
// //     return newArr.push(curr + prev)
    
// // }, 0)


// // console.log(newArr)


// // function varTest(){
// //     var x = 1
// //     console.log(x, "a")
// //     // if(true){
// //     //     var x = 2
// //     //     console.log(x, "b")
// //     // }
// //     function myFunc(){
// //         var x = 2
// //         console.log(x, "b")
// //     }
// //     myFunc()
// //     console.log(x, "c")
// // }

// // varTest()

// if(true){
//     var x = 1
//     console.log(x)
// }

// console.log(x)


// // let x = 0
// // const letTest = () => {
// //     let x = 1
// //     console.log(x, 'a')
// //     if(true){
// //         let x = 2
// //         console.log(x, "b")
// //     }
// //     console.log(x, "c")
// // }
// // letTest()

// // console.log(x)


// const btns = document.querySelectorAll("button")

// btns.forEach((item) => {
//     item.addEventListener("click", ()=> {
//         // if(item.classList.contains('red')){
//         //     item.classList.remove('red')
//         // } else {
//         //     item.classList.add('red')
//         // }
//         item.classList.toggle('red')
//     })
// })

const wrapper = document.querySelector('.wrapper')

const element = document.createElement("button")
element.innerHTML = '6'

wrapper.append(element)

wrapper.addEventListener("click", (event)=> {
    // console.dir(event.target)
    if(event.target.tagName === "BUTTON"){
        event.target.classList.toggle('red')
    }

})