class Température {

    constructor() {
        this.valeur0 = document.getElementById("valeurTemp");
        this.valeur1 = document.getElementById("valeurPhrase");
        this.plage = document.getElementById("plageTemp");
        this.historique = document.getElementById("historique");

        this.i = 0;
    }

    createTab() {
        this.tableau = [];
        for (let i = 0; i < 20; i++) {
            this.tableau.push(Math.floor(Math.random() * 51) - 10);
        }
    }

    definirPlage(valeur) {
        if (valeur < 0) return "Température négative (froid)";
        if (valeur < 20) return "Température fraîche";
        if (valeur < 30) return "Température tempérée";
        return "Température élevée (chaud)";
    }

    afficherPhrase(valeur) {
        this.valeur1.textContent = "";
        if (valeur < 0) {
            this.valeur1.textContent = "Brrrrrrr, mets ta cagoule !";
        }
        else if (valeur >= 30) {
            this.valeur1.textContent = "Caliente ! Vamos a la playa ";
        }
    }

    afficherValeur() {

        if (this.i >= this.tableau.length) {
            return;
        }

        const temp = this.tableau[this.i];

        this.valeur0.textContent = temp;
        this.valeur0.className = "";

        if (temp < 0) {
            this.valeur0.classList.add("bordure-bleue");
        }
        else if (temp < 20) {
            this.valeur0.classList.add("bordure-verte");
        }
        else if (temp < 30) {
            this.valeur0.classList.add("bordure-orange");
        }
        else {
            this.valeur0.classList.add("bordure-rouge");
        }

        this.afficherPhrase(temp);
        this.plage.textContent = this.definirPlage(temp);

        const li = document.createElement("li");
        li.textContent = `${temp} °C — ${this.definirPlage(temp)}`;
        this.historique.appendChild(li);

        this.i++;
    }

    demarrer() {
        this.afficherValeur();
        this.timer = setInterval(() => this.afficherValeur(), 2000);
    }
    cacher(){
        
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const app = new Température();
    app.demarrer();
});
