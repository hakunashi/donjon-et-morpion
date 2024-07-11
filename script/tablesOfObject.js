import { Character } from "./class/Character.js";
import { Ally } from "./class/Ally.js";
import { Enemy } from "./class/Enemy.js";
import { Item } from "./class/Item.js";
import { Skill } from "./class/Skill.js";
import { State } from "./class/State.js";

export const ITEMS = {
  "potion de soin": new Item("Rend un montant de pv", "PV", 30),
  "potion de mana": new Item("Rend un montant de mana", "mana", 30),
};

export const ATTAQUE = new Skill("attaque", 5, 10, 0);

export const SKILLS = {
  "attaque magique": new Skill("attaque magique", 11, 20, 15),
  "attaque magique instable": new Skill("attaque magique", 4, 28, 25),
};

export const MAIN = new Ally(
  "./img",
  "Joueur 1",
  {
    PV: 100,
    actualPV: 100,
    mana: 50,
    actualMana: 50,
    atk: 20,
    def: 5,
    spd: 11,
  },
  [SKILLS["attaque magique"]],
  [
    { quantity: 1, potionDeSoin: ITEMS["potion de soin"] },
    { quantity: 1, potionDeMana: ITEMS["potion de mana"] },
  ]
);

export const ENEMY = new Enemy(
  "./img",
  "Isaac Zoubidou",
  {
    PV: 140,
    actualPV: 140,
    atk: 12,
    def: 7,
    spd: 8,
  },
  [ATTAQUE, SKILLS["attaque magique"]],
  [{ quantity: 1, potionDeSoin: ITEMS["potion de soin"], taux: 40 }]
);
