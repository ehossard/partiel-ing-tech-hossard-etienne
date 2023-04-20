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
const avion2 = new Avion('Boeing', '747', 70, 660, 241000, 920);
const avion3 = new Avion('Embraer', 'E195', 38, 120, 24500, 820);
const avion4 = new Avion('Bombardier', 'CRJ700', 32, 78, 18200, 830);
const avion5 = new Avion('Airbus', 'A320', 38, 180, 23800, 828);

const tableauAvions = [avion1, avion2, avion3, avion4, avion5];

for (let i = 0; i < tableauAvions.length; i++) {
  console.log(tableauAvions[i].marque + ' ' + tableauAvions[i].modele);
}