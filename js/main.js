function generateQRcode () {
    //GENERATE CODE VIA API
    let url = "https://api.qrserver.com/v1/create-qr-code/?data=" + document.getElementById("inputUrl").value + "&format=jpeg";
    fetch (url)
        .then(response => {
            return response.blob();
        })
        .then (myBlob => {
            let blobUrl = URL.createObjectURL(myBlob);
            
            //RENDER IMG QR CODE
            let imgResult= document.createElement("img");
            imgResult.src = blobUrl;
            imgResult.id = "img-qr-code";
            const imgOld = document.getElementById("img-qr-code");
            imgOld.parentNode.replaceChild(imgResult, imgOld);

            //DOWNLOAD LINK
            let newLink = document.createElement("a");
            newLink.href = blobUrl;
            newLink.innerText = "Download";
            newLink.download = "qr-code.jpeg";
            newLink.id = "download-button";
            newLink.className = "btn btn-primary"
            let oldLink = document.getElementById("download-button")
            document.getElementById("download-buttons-area").replaceChild(newLink, oldLink);
        })
}