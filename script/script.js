import { ITEMS, ATTAQUE, MAIN, ENEMY } from "./tablesOfObject.js";

const HUD_LOGS = document.querySelector("main div#hud section#hud-logs ul");
const LI_OPTIONS_HUD = document.querySelectorAll(
  "div#hud section#hud-menu ul li"
);
const ACTUAL_MAIN_PV = document.querySelector(
  "section#ally-side div#ally-hud div.pv div.health p span#actual-main-pv"
);
const MAX_MAIN_PV = document.querySelector(
  "section#ally-side div#ally-hud div.pv div.health p span#max-main-pv"
);
const ACTUAL_ENEMY_PV = document.querySelector(
  "section#enemy-side div#enemy-hud div.pv div.health p span#actual-enemy-pv"
);
const MAX_ENEMY_PV = document.querySelector(
  "section#enemy-side div#enemy-hud div.pv div.health p span#max-enemy-pv"
);

function characterAtkAnother(defenser, attacker) {
  let damage = ATTAQUE.makeDamage(attacker.stats.atk);
  let date = new Date();
  defenser.takeDamage(attacker, damage);
  addLog(
    `${date.toLocaleTimeString()} - ${attacker.name} attaque ${
      defenser.name
    } et lui inflige ${damage}`
  );
}

function displayPVMain() {
  ACTUAL_MAIN_PV.textContent = MAIN.stats.actualPV;
}

function displayPVEnemy() {
  ACTUAL_ENEMY_PV.textContent = ENEMY.stats.actualPV;
}

function addLog(message) {
  let p = document.createElement("p");
  let li = document.createElement("li");
  p.textContent = message;

  li.appendChild(p);
  HUD_LOGS.prepend(li);
}

document.addEventListener("DOMContentLoaded", () => {
  displayPVEnemy();
  displayPVMain();
  MAX_ENEMY_PV.textContent = ENEMY.stats.PV;
  MAX_MAIN_PV.textContent = MAIN.stats.PV;

  LI_OPTIONS_HUD.forEach((event) => {
    event.addEventListener("click", (e) => {
      e.preventDefault();
      switch (e.target.id) {
        case "option-attaque":
          characterAtkAnother(ENEMY, MAIN);
          characterAtkAnother(MAIN, ENEMY);
          displayPVMain();
          displayPVEnemy();
          break;
      }
    });
  });
});
