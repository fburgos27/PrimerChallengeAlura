const textArea = document.querySelector(".text-area");
const msg = document.querySelector(".encrypted-area");
const textImage = document.querySelector(".muneco-text");
const munecoImage = "images/muñeco.svg"

function encryptButton() {
    let encryptedText = encrypt(textArea.value);
    let copybutton = document.querySelector('.copy-button');
    msg.value = encryptedText;
    textArea.value = "";
    textImage.style.display = "none";
    copybutton.style.display = 'block';
    msg.style.height = "58vh";
}

function encrypt(text) {
    text = text.toLowerCase()
    let normalText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    text = normalText;
    let encryptText = text.replace(/e/g, 'enter');
    encryptText = encryptText.replace(/i/g, 'imes');
    encryptText = encryptText.replace(/a/g, 'ai');
    encryptText = encryptText.replace(/o/g, 'ober');
    encryptText = encryptText.replace(/u/g, 'ufat');
    return encryptText;
}

function decryptButton() {
    let decryptedText = decrypt(textArea.value);
    let copybutton = document.querySelector('.copy-button');
    msg.value = decryptedText;
    textArea.value = "";
    copybutton.style.display = 'block';
    textImage.style.display = "none";
    msg.style.height = "58vh";
}

function decrypt(text) {
    const normalText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    text = normalText;
    text = text.toLowerCase()    
    let decryptText = text.replace(/enter/g, 'e');
    decryptText = decryptText.replace(/imes/g, 'i');
    decryptText = decryptText.replace(/ai/g, 'a');
    decryptText = decryptText.replace(/ober/g, 'o');
    decryptText = decryptText.replace(/ufat/g, 'u');
    return decryptText;

}

function copyButton() {
    let text = document.getElementById("e-area").value;
    let copybutton = document.querySelector('.copy-button');
    navigator.clipboard.writeText(text)
    .then(() => {
        alert("Texto copiado al portapapeles");
    })
    .catch((error) => {
        alert("Error al copiar el texto: ", error);
    });
    msg.value = "";
    copybutton.style.display = 'none';
    textImage.style.display = "block";
    msg.style.height = "auto";
}


