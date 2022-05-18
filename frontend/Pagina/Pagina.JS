function getHttpRequest() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}

function demoRequest() {
    var request = getHttpRequest();
    var username = "instrutor5.itajai";
    var password = "Mgg131517";
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            console.log("Foi");
        }
    }
    request.open("POST", "https://codebuddy.io/api-loja/login/", true, username, password);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send();
}
