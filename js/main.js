function generateQRcode () {
    let url = document.getElementById("inputUrl").value;
    let qrcode = "<img src=\"https://api.qrserver.com/v1/create-qr-code/?data=" + url + "\">";
    document.getElementById("qr-code").innerHTML = qrcode;
    generateDownload();    
}

function generateDownload () {
    document.getElementById("download").innerHTML = "<button type=\"button\" onclick=\"downloadCode()\">Download</button>";
}

function downloadCode () {
    //DOWNLOAD
}