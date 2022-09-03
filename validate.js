let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm-password');
let submit = document.getElementById('submit');
let match = false;


submit.addEventListener('click', function(){
    if(password.value === confirmPassword.value) {
        match = true;
    }
    else {
        window.alert('Passwords Do Not Match!');
    }
})

