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
    let buch = new Buch("Schwarz", "Duden", "J.K. Rowling", "19.99€") //hallo
    lager.push(buch)
    buch = new Buch("Weiß", "Cornelsen", "", "")
    lager.push(buch)
    buch = new Buch("Orange", "", "", "")
    lager.push(buch)
    buch = new Buch("Gelb", "", "", "")
    lager.push(buch)
}