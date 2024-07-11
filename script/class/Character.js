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
    if (this.stats.actualPV < 0) {
      this.status.push("dead");
    }
  }
}
