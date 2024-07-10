import { Character } from "./Character";

export class Ally extends Character {
  constructor(name, stats, skills, items) {
    super(name, stats, skills);
    this.items = items;
  }
}
