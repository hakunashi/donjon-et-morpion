export class Skill {
  constructor(name, minDamage, maxDamage, cost) {
    this.name = name;
    this.minDamage = minDamage;
    this.maxDamage = maxDamage;
    this.cost = cost;
  }

  makeDamage(atk) {
    let tirage = Math.floor((Math.random() * 8) )

    if (tirage === 7) {
      console.log("coup critique")
      return Math.floor(
      (Math.random() * (this.maxDamage - this.minDamage) + this.minDamage) *
        (atk * 2.5 * 0.1 )
    )
    } else {
      return Math.floor(
        (Math.random() * (this.maxDamage - this.minDamage) + this.minDamage) *
          (atk * 0.1)
      );
    }
    
  }
}
