const textArea = document.querySelector(".text-area");
const msg = document.querySelector(".encrypted-area");

function encryptButton() {
    let encryptedText = encrypt(textArea.value);
    msg.value = encryptedText;
    textArea.value = "";
    msg.style.backgroundImage = "none";
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
    msg.value = decryptedText;
    textArea.value = "";
    msg.style.backgroundImage = "none";
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
    navigator.clipboard.writeText(text)
    .then(() => {
        alert("Texto copiado al portapapeles");
    })
    .catch((error) => {
        alert("Error al copiar el texto: ", error);
    });

}

