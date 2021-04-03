var url = "<ADD URL Here>";

function updateUI(quote, author){
    document.getElementById('author').innerText = author;
    document.getElementById('mainQuote').innerText = quote;
}

function getQuote() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            if(response.content && response.author){
                updateUI(response.content, response.author);
            }
          }
    }
    xhttp.open("GET", url, true);
    xhttp.send();
}

getQuote();