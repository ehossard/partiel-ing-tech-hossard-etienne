class Avion {
  constructor(marque, modele, longueur, nbPlace, reservoir, vitesse) {
    this.marque = marque;
    this.modele = modele;
    this.longueur = longueur;
    this.nbPlace = nbPlace;
    this.reservoir = reservoir;
    this.vitesse = vitesse;
  }
}

const avion1 = new Avion('Airbus', 'a380', 100, 700, 20000, 900);

