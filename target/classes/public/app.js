function getString() {
    console.log(document.getElementById('text'));
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById('text').innerHTML = this.responseText;
        }
    };
    xhttp.open('GET', 'api/v1/', true);
    xhttp.send();
}
