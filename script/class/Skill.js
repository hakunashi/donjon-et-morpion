export class Skill {
  constructor(name, minDamage, maxDamage, cost) {
    this.name = name;
    this.minDamage = minDamage;
    this.maxDamage = maxDamage;
    this.cost = cost;
  }

  makeDamage(atk) {
    return Math.floor(
      (Math.random() * (this.maxDamage - this.minDamage) + this.minDamage) *
        (atk * 0.1)
    );
  }
}
