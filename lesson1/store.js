const globalState = {
    signUp: {
    },
    validateEmail: function validateEmail () {
    let email = document.getElementById('input__email').value;
    let InputBlock = document.getElementById('input__form');
    var email_regexp = /[0-9a-zа-я_A-ZА-Я]+@[0-9a-zа-я_A-ZА-Я^.]+\.[a-zа-яА-ЯA-Z]{2,4}/i;

    if (email === "") {
        let small = document.createElement('small');
        small.className = "waring__email";
        small.innerHTML = "Please enter your email address";
        InputBlock.after(small)
        setTimeout(() => small.remove(), 1500);
        return false;
    } else {
        if (!email_regexp.test(email)) {
            let small = document.createElement('small');
            small.className = "waring__email";
            small.innerHTML = "Email contain unsupported characters";
            InputBlock.after(small)
            setTimeout(() => small.remove(), 1500);
            return false;
        } else {
            return true
        }
    }
    },
    validatePassword: function validatePassword () {
        let password1 = document.getElementById('input__password1').value;
        let PasswordBlock = document.getElementById('input__form__password1');
        let passw =  /^[A-Za-z]\w{7,14}$/;
        if (password1 === "") {
            let small = document.createElement('small');
            small.className = "waring__password";
            small.innerHTML = "Please enter your password";
            PasswordBlock.after(small)
            setTimeout(() => small.remove(), 1500);
            return false;
        } else if (!password1.match(passw)) {
            let small = document.createElement('small');
            small.className = "waring__password";
            small.innerHTML = "Password contain unsupported characters";
            PasswordBlock.after(small)
            setTimeout(() => small.remove(), 1500);
            return false;
        } else {
            return true
        }
        
    },
    confirmPassword: function confirmPassword () {
        let password1 = document.getElementById('input__password1').value;
        let password2 = document.getElementById('input__password2').value;
        let PasswordBlock = document.getElementById('input__form__password2');
        if (password1 !== password2) {
            let small = document.createElement('small');
            small.className = "waring__password";
            small.innerHTML = "Password mismatch error";
            PasswordBlock.after(small)
            setTimeout(() => small.remove(), 1500);
            return false;
        }
    }
    
}

const reducer = (type, data) => {
    // console.log('SSSS', type, data)
    switch (type) {
        case 'firstName':
            globalState.signUp[type] = data
        case 'lastName':
            globalState.signUp[type] = data
        case 'email':
            globalState.signUp[type] = data
        case 'password' :
            globalState.signUp[type] = data
    }
}
// my store methods
const getState = () => {
    return globalState
}

const dispatch = (obj = {
    type: '',
    data: {}
}) => {
    reducer(obj.type, obj.data)
}




//my actions

const myFirstName = (data) => {
    // console.log("data", data)
    return dispatch({
        type: 'firstName',
        data
    })
}

const myLastName = (data) => {
    return dispatch({
        type: 'lastName',
        data
    })
}

const myEmail = (data) => {
    return dispatch({
        type: 'email',
        data
    })
}


const myPassword = (data) => {
    return dispatch({
        type: 'password',
        data
    })
}




// (function a(){history.pushState(_,globalState)} )()