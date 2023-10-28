function createField(fieldType) {
    if (fieldType != "") {
        if (fieldType == 'email') {
            email()
        } else if (fieldType == 'phone') {
            phone()
        } else if (fieldType == 'post') {
            post()
        }
    }
}


let fieldScope = document.querySelector('#field')

function email() {
    let textField = document.createElement('input')
    let verifyBtn = document.createElement('button')

    textField.type = 'text'
    textField.id = 'emailCheck'

    verifyBtn.type = 'click'
    verifyBtn.class = 'btn btn-info'
    verifyBtn.id = 'verify'
    verifyBtn.textContent = 'Verify'

    fieldScope.append(textField)
    fieldScope.append(verifyBtn)


    emailAddress = document.querySelector('#emailCheck')

    verifyBtn.addEventListener('click', emailCheck)
}

function emailCheck() {
    emailAddress = emailAddress.value
    //console.log(emailAddress)

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)) {
        feedBacks(true, "email address")
    }
    else {
        feedBacks(false, "email address")

    }
    emailAddress = document.querySelector('#emailCheck')

}

function phone() {
    let textField = document.createElement('input')
    let verifyBtn = document.createElement('button')

    textField.type = 'text'
    textField.id = 'phoneCheck'

    verifyBtn.type = 'click'
    verifyBtn.id = 'verify'
    verifyBtn.class = 'btn btn-info'
    verifyBtn.textContent = 'Verify'

    fieldScope.append(textField)
    fieldScope.append(verifyBtn)


    phoneNumber = document.querySelector('#phoneCheck')

    verifyBtn.addEventListener('click', phoneCheck)
}

function phoneCheck() {
    phoneNumber = phoneNumber.value
    if (/^(\+)?(88)?01[0-9]{9}$/.test(phoneNumber)) {
        feedBacks(true, "phone number")
    }
    else {
        feedBacks(false, "phone number")

    }

    phoneNumber = document.querySelector('#phoneCheck')
}


function post() {
    let textField = document.createElement('input')
    let verifyBtn = document.createElement('button')

    textField.type = 'text'
    textField.id = 'postCheck'

    verifyBtn.type = 'click'
    verifyBtn.class = 'btn btn-info'
    verifyBtn.id = 'verify'
    verifyBtn.textContent = 'Verify'

    fieldScope.append(textField)
    fieldScope.append(verifyBtn)


    postCode = document.querySelector('#postCheck')

    verifyBtn.addEventListener('click', postCheck)
}

function postCheck() {
    postCode = postCode.value
    if (/^[0-9]{4}$/.test(postCode)) {
        feedBacks(true, "post code")
    }
    else {
        feedBacks(false, "post code")

    }

    postCode = document.querySelector('#postCheck')
}


function feedBacks(messageType, verifyType) {
    let feedBackScope = document.querySelector('#feedback')
    if (messageType) {
        let result = document.createElement('H3')
        result.textContent = `Your ${verifyType} is valid!`
        feedBackScope.appendChild(result)
    }
    else {
        let result = document.createElement('H3')
        result.textContent = `Your ${verifyType} is invalid!`
        feedBackScope.appendChild(result)
    }
}