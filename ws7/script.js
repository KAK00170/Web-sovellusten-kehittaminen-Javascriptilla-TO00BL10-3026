//1
function parseData() {
    const quotes = document.getElementsByTagName("quotes");
    let output = "";
    for (let i = 0; i < quotes.length; i++) {
        const quoteTag = quotes[i].getElementsByTagName("quote")[0];
        const authorTag = quotes[i].getElementsByTagName("author")[0];

        const quote = quoteTag ? quoteTag.textContent : "";
        const author = authorTag ? authorTag.textContent : "";

        output += `<p>"${quote}"<br>- ${author}</p>`;
    }
    document.getElementById("ekaquote").innerHTML = output;
}

//2
function loadXMLFile() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "famous-quotes.xml", true);

    xmlhttp.onload = function () {
        document.getElementById("quotes").textContent = xmlhttp.responseText;
    };

    xmlhttp.send();
}

//3
function loadAndParseXML() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "famous-quotes.xml", true);

    xmlhttp.onload = function () {
        let xmlDoc = xmlhttp.responseXML;
        let quotes = xmlDoc.getElementsByTagName("quotes");
        let output = "";

        for (let i = 0; i < quotes.length; i++) {
            let quoteText = quotes[i].getElementsByTagName("quote")[0].textContent;
            let authorTag = quotes[i].getElementsByTagName("author")[0];
            let authorText = authorTag ? authorTag.textContent : "";

            output += `<p>"${quoteText}"<br>- ${authorText}</p>`;
        }

        document.getElementById("tabledata").innerHTML = output;
    };

    xmlhttp.send();
}

//4
//En saanu toimimaan tuli kokoajan vastaan toi
// " has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource."
//Tein Python serverin, että sain tehtyä 2 ja 3, mutta en osannu tehdä 4