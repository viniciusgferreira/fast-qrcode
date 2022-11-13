/* function generateQRcode (form) {
    fetch("http://api.qrserver.com/v1/create-qr-code/")
    .then()
} */

function generateQRcode () {
    document.getElementById("qr-result-area").innerHTML = "<img src=\"https://api.qrserver.com/v1/create-qr-code/?data=google.com.br\">"
    
}