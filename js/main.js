/* function generateQRcode (form) {
    fetch("http://api.qrserver.com/v1/create-qr-code/")
    .then()
} */

function generateQRcode () {
    let url = document.getElementById("inputUrl").value;
    let qrcode = "<img src=\"https://api.qrserver.com/v1/create-qr-code/?data=" + url + "\">";
    document.getElementById("qr-result-area").innerHTML = qrcode;
    
}