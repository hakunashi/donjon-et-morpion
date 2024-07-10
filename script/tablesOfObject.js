import { Ally } from "./class/Ally.js";
import { Item } from "./class/Item.js";
import { Skill } from "./class/Skill.js";

export const ITEMS = {
  "potion de soin": new Item("Rend un montant de pv", "PV", 30),
  "potion de mana": new Item("Rend un montant de mana", "mana", 30),
};

export const SKILLS = {
  attaque: new Skill("attaque", 5, 11, 0),
  "attaque magique": new Skill("attaque magique", 11, 20, 15),
  "attaque magique instable": new Skill("attaque magique", 4, 28, 25),
};

export const MAIN = new Ally(
  "Basile",
  {
    PV: 100,
    mana: 70,
    atk: 10,
    def: 5,
    spd: 11,
  },
  [SKILLS["attaque"]],
  [
    { quantity: 1, potionDeSoin: ITEMS["potion de soin"] },
    { quantity: 1, potionDeMana: ITEMS["potion de mana"] },
  ]
);
