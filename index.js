

// document.getElementById("login").addEventListener("click" , () => {

//     window.location.href = "pages/home/home.html";

// });

function validateFields() {
    const emailValid = isEmailValid();
    document.getElementById("forgotten-password").disabled = !emailValid;

    const passwordValid = isPasswordValid();
    document.getElementById("login").disabled = !emailValid || !passwordValid;

}

function isEmailValid() {
    const email = document.getElementById("email").value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function isPasswordValid() {
    const password = document.getElementById("password").value;
    if (!password) {
        return false;
    }
    return true;
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

firebase.auth().signInWithEmailAndPassword("carlos.edfrei@gmail.com", "teste123").then(
    response => {
        console.log("success", response);
    }).catch(error => {
        console.log("error", error);
    });




