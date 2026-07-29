const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
    "P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h",
    "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0"
    , "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%",
    "^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",
    ".","?", "/"];

let passwordLength = 15;
let password1 = document.getElementById("password-display1");
let password2 = document.getElementById("password-display2");
let generateBtn = document.getElementById("generate-btn");
let passwordContainer1 = document.getElementById("password-container1");
let passwordContainer2 = document.getElementById("password-container2");

generateBtn.addEventListener("click", generatePasswords);

passwordContainer1.addEventListener("click", function () {
    copyPassword(password1);
});

passwordContainer2.addEventListener("click", function () {
    copyPassword(password2);
});

function generatePassword() {
    let password = "";
    let randomIndex;
    for (let i = 0; i < passwordLength; i++) {
        randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}

function generatePasswords() {
    password1.textContent = generatePassword();
    password2.textContent = generatePassword();
}

function copyPassword(passwordElement) {
    const password = passwordElement.textContent;

    if (password === "") {
        return;
    }

    navigator.clipboard.writeText(password);

    passwordElement.textContent = "Copied!";

    setTimeout(function () {
        passwordElement.textContent = password;
    }, 1000);
}