class Avion {
    constructor(marque, modele, longueur, nbPlace, reservoir, vitesse) {
      this.marque = marque;
      this.modele = modele;
      this.longueur = longueur;
      this.nbPlace = nbPlace;
      this.reservoir = reservoir;
      this.vitesse = vitesse;
    }
  



get marque() {
    return this._marque;
  }

  set marque(marque) {
    this._marque = marque;
  }

  get modele() {
    return this._modele;
  }
  set modele(modele) {
    this._modele = modele;
  }

  get longueur() {
    return this._longueur;
  }
  set longueur(longueur) {
    this._longueur = longueur;
  }

  get nbPlace() {
    return this._nbPlace;
  }
  set nbPlace(nbPlace) {
    this._nbPlace = nbPlace;
  }

  get reservoir() {
    return this._reservoir;
  }
  set reservoir(reservoir) {
    this._reservoir = reservoir;
  }

  get vitesse() {
    return this._vitesse;
  }
  set vitesse(vitesse) {
    this._vitesse = vitesse;
  }
}


const avion1 = new Avion('Airbus', 'a380', 100, 700, 20000, 900);