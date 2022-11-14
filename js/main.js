function generateQRcode () {
    //GENERATE CODE
    let url = "https://api.qrserver.com/v1/create-qr-code/?data=" + document.getElementById("inputUrl").value + "&format=jpeg";
    let qrImg = document.getElementById("qr-code-img");
    qrImg.src = url;

    const requisicao = fetch (url)
        .then(response => {
            return response.blob();
        })
        .then (myBlob => {
            console.log(myBlob);
            let blobUrl = URL.createObjectURL(myBlob);
            console.log("bloburl: " + blobUrl);

            let a = document.createElement("a");
            a.href = blobUrl;
            a.innerText = "Download";
            a.download = "qr-code.jpeg";
            document.getElementById("download").appendChild(a);
        })
        

    
    

    console.log(requisicao);
}