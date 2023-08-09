var signUpNameInput = document.getElementById("signInput-one");
var signUpEmailInput = document.getElementById("signInput-two");
var signUpPasswordInput = document.getElementById("signInput-three");

    var allAccounts = [];
    if (localStorage.getItem("theUsers") != null) {
      allAccounts = JSON.parse(localStorage.getItem("theUsers"));
    }

function getRegister(){

if (validation() == true && isExist() == false) {
  var accounts = {
    name: signUpNameInput.value,
    email: signUpEmailInput.value,
    password: signUpPasswordInput.value,
  };

  allAccounts.push(accounts);
  localStorage.setItem("theUsers", JSON.stringify(allAccounts));
  clearInputs();
}

}


function clearInputs(){
signUpNameInput.value = "";
signUpEmailInput.value = "";
signUpPasswordInput.value = ""; 

}



function validation(){
    var regexName = /^[A-Za-z]{3,15}$/
    var regexEmail = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm
    var regexPassword = /(?=.{8,})/

    if (regexName.test(signUpNameInput.value) == false || signUpNameInput.value == "") {
        signUpNameInput.classList.add("is-invalid")
        document.getElementById("alert-name").classList.replace("d-none","d-block");
        return false
    }else if(regexEmail.test(signUpEmailInput.value) == false || signUpEmailInput.value == ""){
        signUpNameInput.classList.remove("is-invalid");
        document.getElementById("alert-name").classList.replace("d-block", "d-none");
        signUpEmailInput.classList.add("is-invalid");
        document.getElementById("alert-email").classList.replace("d-none", "d-block");
        return false
    }else if (regexPassword.test(signUpPasswordInput.value) == false ||signUpPasswordInput.value == "") {
        signUpEmailInput.classList.remove("is-invalid");
        document.getElementById("alert-email").classList.replace("d-block", "d-none");
        signUpPasswordInput.classList.add("is-invalid");
        document.getElementById("alert-password").classList.replace("d-none", "d-block");
        return false
    }
    else{
        document.getElementById("success-msg").classList.replace("d-none","d-block");
        document.getElementById("alert-password").classList.replace("d-block", "d-none");

        signUpPasswordInput.classList.remove("is-invalid");
        signUpNameInput.classList.add("is-valid");
        signUpEmailInput.classList.add("is-valid");
        signUpPasswordInput.classList.add("is-valid");
        return true
    }


}

function isExist(){


    for(var i = 0; i<allAccounts.length; i++){

        if (signUpEmailInput.value.toLowerCase() == allAccounts[i].email.toLowerCase()) {

            document.getElementById("existMsg").classList.replace("d-none","d-block");
            return true

        }else{
            document.getElementById("existMsg").classList.replace("d-block","d-none");
            return false
        }


    }



}



//=================    start login   ===================================== 
//=================    start login   ===================================== 


var userNameWelcome = localStorage.getItem("userName")

function getLogin(){

var logInEmailInput = document.getElementById("logInput-one");
var logInPasswordInput = document.getElementById("logInput-two");


for( var i = 0; i< allAccounts.length; i++){

    if (logInEmailInput.value.toLowerCase() == allAccounts[i].email.toLowerCase() && logInPasswordInput.value == allAccounts[i].password) {

        document.getElementById("loginBtn").setAttribute("href","home.html")
        var userName = allAccounts[i].name;
        localStorage.setItem("userName", userName);

    }
    else{
        document.getElementById("loginErrorMsg").classList.replace("d-none","d-block");
    }

}


}

// ===================   start HOme ====================================
// ===================   start HOme ====================================


document.querySelector(".welcomeMsg").innerHTML = `Welcome ${userNameWelcome} In Our Home`;

function getLogingOut(){

    localStorage.removeItem("userName");

}