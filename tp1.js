
var tableau = [];

for(var i= 0; i<20; i++){
    tableau[i]= Math.floor(Math.random() * 51) -10;
}
var valeur0 = document.getElementById("valeurTemp");


valeur0.innerHTML = tableau[0];
var i = 0;

var valeur1 = document.getElementById("valeurPhrase");

var plage = document.getElementById("plageTemp");
var historique = document.getElementById("historique");

function definirPlage(valeur) {
    if (valeur < 0) return "Température négative (froid!!)";
    if (valeur < 20) return "Température fraîche";
    if (valeur < 30) return "Température tempérée";
    return "Température élevée (chaud!!!!)";
}

function afficherPhrase(valeur){
    if (valeur < 0) {
        valeur1.textContent= "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
    }
    else if (valeur >= 30 && valeur <= 40) {
        valeur1.textContent= "Caliente ! Vamos a la playa,ho hoho hoho !!";
    }
}
function afficherValeur(){
    
    if  (i>= tableau.length){
        return
    }
    valeur0.textContent= tableau[i];
    valeur0.className= "";

    if (tableau[i] < 0) {
        valeur0.classList.add("bordure-bleue");
        afficherPhrase(tableau[i]);
    }
    else if (tableau[i] >= 0 && tableau[i] < 20) {
        valeur0.classList.add("bordure-verte");
    }
    else if (tableau[i] >= 20 && tableau[i] < 30) {
            valeur0.classList.add("bordure-orange");
    }
    else if (tableau[i] >= 30 && tableau[i] <= 40) {
        valeur0.classList.add("bordure-rouge");            
        afficherPhrase(tableau[i]);

    }
    valeur0.value = tableau[i];
    plage.textContent = definirPlage(tableau[i]);

    var li = document.createElement("li");
    li.textContent = tableau[i] + " °C — " + definirPlage(tableau[i]);
    historique.appendChild(li);

    i++;
    
    
}


afficherValeur();
setInterval(afficherValeur, 2000);

console.log(tableau);
