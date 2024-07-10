class Skill {
  constructor(name, minDamage, maxDamage, cost) {
    this.name = name;
    this.minDamage = minDamage;
    this.maxDamage = maxDamage;
    this.cost = cost;
  }

  makeDamage(atk) {
    return Math.floor(
      (Math.random() * (maxDamage - minDamage) + minDamage) * (atk * 0.1)
    );
  }
}
