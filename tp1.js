
var tableau = [];

for(var i= 0; i<20; i++){
    tableau[i]= Math.floor(Math.random() * 51) -10;
}
var valeur0 = document.getElementById("valeurTemp");
valeur0.innerHTML = tableau[0];
var i = 0;

function afficherValeur(){
    if (i>= tableau.length){
        return;
    }
    valeur0.innerHTML=tableau[i];
    if (tableau[i]<0){
        valeur0.setAttribute("class","bordure-bleue")
    }
    if (0<=tableau[i]<20){
        valeur0.setAttribute("class","bordure-verte")

    }
    if (20<=tableau[i]<30){
        valeur0.setAttribute("class","bordure-orange")

    }
    if (30<=tableau[i]<40){
        valeur0.setAttribute("class","bordure-rouge")

    }
    i++;
    

}

afficherValeur();
setInterval(afficherValeur, 2000);

console.log(tableau);
