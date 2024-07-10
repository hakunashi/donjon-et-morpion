import { Character } from "./Character.js";

export class Enemy extends Character {
  constructor(img, name, stats, skills, drop) {
    super(img, name, stats, skills);
    this.drop = drop;
  }
}
