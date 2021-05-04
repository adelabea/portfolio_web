const names = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const enquiry = document.getElementById("enquiry")
const form = document.getElementById("form")
const any = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let get = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    any.innerHTML = ""
    if(names.value.length <5){
        warnings += `⚠️ Invalid name (it must contain at least 5 characters). <br>`
        get = true
    }
    if(!regexEmail.test(email.value)){
        warnings += "⚠️ Invalid mail. <br>"
        get = true
    }
    if(phone.value.length <8){
        warnings += `⚠️ Invalid phone number (it must contain at least 8 characters). <br>`
        get = true
    }

    if(enquiry.value.length <12){
        warnings += `⚠️ Invalid enquiry (it must contain at least 12 characters). <br>`
        get = true
    }




    if(get){
        any.innerHTML = warnings
    }else{
        any.innerHTML = "🎉 Enquiry Sent. Thank you 🎉"
    }


    //const form = document.getElementById("form").reset();
    
})