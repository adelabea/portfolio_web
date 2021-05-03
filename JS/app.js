const name = document.getElementById("name01")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const form = document.getElementById("form")
const textarea = document.getElementById("message")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = `Required fields`
    let submit = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    textarea.innerHTML = ""
    if(name01.value.length <4){
        warnings += `Invalid name <br>`
        submit = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `Invalid email <br>`
        submit = true
    }
    if(textarea.value.length <15){
        warnings += `Invalid message. Please, explain me better your enquiry <br>`
        submit = true
    }

    if(submit){
        textarea.innerHTML = warnings
    }else{
        textarea.innerHTML = "Thank you!"
    }
})