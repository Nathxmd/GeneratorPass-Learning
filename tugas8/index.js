let passwordLength = document.getElementById("password-length");
let password = document.getElementById("password");
let saveButton = document.getElementById("saveButton")

function generatePassword(len) {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+";
    
    const data = lowerAlphabet + upperAlphabet + numbers + symbols;
    let generator = '';
    for (let index = 0; index < len; index ++) {
        generator += data[~~(Math.random() * data.length)];
    }
    return generator;
}

function getPassword() {
    const newPassword = generatePassword(passwordLength.value)
    password.value =  newPassword
}


function savePassword() {
    document.title = password.value
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password saya : ${document.title}`))
    saveButton.setAttribute('download', 'passwordGeneratorLOG.txt')
}

