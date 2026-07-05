const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
    "P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h",
    "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0"
    , "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%",
    "^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",
    ".","?", "/"];

let passwordLength = 15;
let password1 = document.getElementById("password-display1");
let password2 = document.getElementById("password-display2");

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