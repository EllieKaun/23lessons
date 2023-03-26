const tabs = document.querySelectorAll(".tabheader__item")
const tabsParent = document.querySelector(".tabheader__items")
const tabsContent = document.querySelectorAll(".tabcontent")


const hideTabsContent = () => {
    tabsContent.forEach((item) => {
        item.style.display = "none"
    })
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active")
    })
}

const showTabContent = (i = 0) => {
    tabsContent[i].style.display = "block"
    tabs[i].classList.add("tabheader__item_active")
}

hideTabsContent()
showTabContent()


tabsParent.addEventListener("click", (e)=> {
    const target = e.target

    if(target.classList.contains("tabheader__item")){
        tabs.forEach((item, i) => {
            if(item === target){
                hideTabsContent()
                showTabContent(i)
            }
        })
    }
})


const modal = document.querySelector(".modal")
const openModalBtn = document.querySelector(".btn_white")
const closeModalBtn = document.querySelector(".modal__close")

const openModal = () => {
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"
}

openModalBtn.addEventListener("click", openModal)

const closeModal = () => {
    modal.classList.add("hide")
    modal.classList.remove("show")
    document.body.style.overflow = ""
}

closeModalBtn.addEventListener("click", closeModal)


const forms = document.querySelectorAll("form")

const postData  = (form) => {
    form.addEventListener("submit", (e)=>{
        e.preventDefault()
        const formData = new FormData(form)
        const obj = {}
        formData.forEach((item, name) => {
            obj[name] = item
        })
        const json = JSON.stringify(obj)

        const request = new XMLHttpRequest()
        request.open("POST", "server.php")
        request.setRequestHeader("Content-Type", "application/json")
        request.send(json)
    })
}

forms.forEach((item) => {
     postData(item)
})