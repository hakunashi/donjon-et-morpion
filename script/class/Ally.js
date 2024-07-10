import { Character } from "./Character.js";

export class Ally extends Character {
  constructor(img, name, stats, skills, items) {
    super(img, name, stats, skills);
    this.items = items;
  }
}
