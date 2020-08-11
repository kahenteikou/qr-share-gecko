
browser.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log(request.message);
    sendResponse(document.location.href);
    new QRCode(document.getElementById("qrcode"),document.location.href);
    document.innerHTML="TDN";

});