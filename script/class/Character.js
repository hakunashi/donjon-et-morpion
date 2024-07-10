export class Character {
  constructor(img, name, stats, skills) {
    this.img = img;
    this.name = name;
    this.stats = stats;
    this.skills = skills;
    this.status = [];
  }

  takeDamage(characterAttacker, damage) {
    this.stats.actualPV = this.stats.actualPV - damage;
    console.log(
      `${characterAttacker.name} attaque ${this.name} et lui inflige ${damage}, PV de ${this.name}: ${this.stats.actualPV}/${this.stats.PV}`
    );
  }
}
