class Buch {
    constructor(Farbe, Verlag, Autor, Preis, Anzahl) {
        this.Farbe = "Farbe"
        this.Verlag = "Verlag"
        this.Autor = "Autor"
        this.Preis = "Preis"
        this.Anzahl = "Anzahl"
    }

    verfuegbar() {
        if (this.Anzahl < 1) {
            console.log("Es ist kein Buch mehr vorhanden")
        } else {
            console.log("Es ist noch mindestens 1 Buch vorhanden")
        }
    }
    verkauft() {
        this.Anzahl = this.Anzahl - 1
    }
}
function neuesBuch() {
    buch = new buch ("", "", "")
}

let lager = []

function init() {
    let buch = new Buch("Schwarz", "Duden", "J.K. Rowling", "19.99€")
    lager.push(buch)
    buch = new Buch("Weiß", "Cornelsen", "Hr. Fricke", "299,99€")
    lager.push(buch)
    buch = new Buch("Orange", "Hamburger Lesehefte", "Georg büchner", "14,99€")
    lager.push(buch)
    buch = new Buch("Gelb", "Duden", "Jonas Körner", "9,99€")
    lager.push(buch)
}