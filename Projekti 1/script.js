const inputboksi = document.getElementById('inputboksi');
const list = document.getElementById('todo-list');

//Kirjoitetun asian lisäys
function Lisää_tehtävä(){
    if(inputboksi.value === ''){ //Varmistetaan, että tekstikenttä ei ole tyhjä
        alert("Kirjoita jotain");
    }
    else{
        let täyttö = document.createElement("div");
        täyttö.classList.add("tehtävä-wrapper");    //Lisätään wrapper, jotta yliviivaus ei menisi span (Poista) -napin päälle

        let li = document.createElement("li");
        li.innerHTML = inputboksi.value;            //Lisätään teksti mitä kirjoitettu
        
        let span = document.createElement("span");  //Poistamisnappi
        span.innerHTML ="Poista";
        
        täyttö.appendChild(li);     //Lisätään li ja span wrapperiin - Lisätään wrapper
        täyttö.appendChild(span);
        list.appendChild(täyttö);
    }
    inputboksi.value = "";  //Kirjoitetun tekstin lisäämisen jälkeen teksti poistetaan kirjoituskentästä
    tallennaData();
}

list.addEventListener("click", function(valitse){
    if(valitse.target.tagName === "LI"){    
        valitse.target.classList.toggle("tehty"); //Tehtävän merkitseminen jos se on li
        tallennaData();
    }
    else if(valitse.target.tagName === "SPAN"){
        valitse.target.parentElement.remove();  //Poistetaan tehtävä listalta jos se on span
        tallennaData();
    }
});

//Lista tallennetaan localstorageen
function tallennaData(){
    localStorage.setItem("data", list.innerHTML);
}
//Ladataan localstoragesta
function näytäTehtävät(){
    list.innerHTML = localStorage.getItem("data");
}
näytäTehtävät()
