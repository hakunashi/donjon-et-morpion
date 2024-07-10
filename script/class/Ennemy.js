import { Character } from "./Character.js";

export class Ennemy extends Character {
  constructor(name, stats, skills, drop) {
    super(name, stats, skills);
    this.drop = drop;
  }
}
