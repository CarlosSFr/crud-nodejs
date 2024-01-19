const buttonLogin = document.getElementById('login');
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

buttonLogin.addEventListener('click', () => {
    
    window.location.href = "./pages/home/home.html";

});

function validateEmailAndPassword(){

    if(!email){
        buttonLogin.disabled = "true";
    }else if(validateEmail(email)){
        buttonLogin.disabled = "false";
    }else{
        buttonLogin.disabled = "true";
    }

}

function validateEmail(email){
    return /\S+@\S+\.\S+/.test(email);
}




firebase.auth().signInWithEmailAndPassword("carlos.edfrei@gmail.com", "teste123").then(
    response => {
        console.log("success", response);
}).catch(error => {
        console.log("error", error);
});

