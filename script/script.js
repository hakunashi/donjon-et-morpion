import { ITEMS, ATTAQUE, MAIN, ENEMY } from "./tablesOfObject.js";

const HUD_LOGS = document.querySelector("main div#hud section#hud-logs ul");
const SECTION_HUD_LOGS = document.querySelector("main div#hud section#hud-logs");
const SECTION_HUD_MENU = document.querySelector("main div#hud section#hud-menu")
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
const DOM_MAIN = document.querySelector(
  "body main"
);
const MAIN_PLAYER = document.querySelector(
  "div#perso1"
);
const SECONDARY_PLAYER = document.querySelector(
  "div#perso2"
);

function characterAtkAnother(defenser, attacker) {
  let damage = ATTAQUE.makeDamage(attacker.stats.atk);
  let date = new Date();
  defenser.takeDamage(attacker, damage);
  logDelay();
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

function logDelay() {
  SECTION_HUD_LOGS.classList.add("full-screen");
  SECTION_HUD_MENU.classList.add("hidden");
  setTimeout(() => {
    SECTION_HUD_LOGS.classList.remove("full-screen");
    SECTION_HUD_MENU.classList.remove("hidden");
  }, 1500)
  
}

function displayKoScreen() {
  if(MAIN.stats.actualPV <= 0) {
    DOM_MAIN.innerHTML = "<h1>GAME OVER</h1> <a href='index.html'>Relancer une partie</a>";
  } else if(ENEMY.stats.actualPV <= 0) {
    ENEMY.stats.actualPV = 0
    displayPVEnemy();
    MAIN_PLAYER.classList.add("victory");
    SECONDARY_PLAYER.classList.add("die");
  }
}

setTimeout(() => {
  MAIN_PLAYER.classList.remove("arrive-perso1")
},5000)

document.addEventListener("DOMContentLoaded", () => {
  displayPVEnemy();
  displayPVMain();
  MAX_ENEMY_PV.textContent = ENEMY.stats.PV;
  MAX_MAIN_PV.textContent = MAIN.stats.PV;

  LI_OPTIONS_HUD.forEach((event) => {
    event.addEventListener("click", (e) => {
      e.preventDefault();
      switch (e.target.id) {
        case "option-attack":
          characterAtkAnother(ENEMY, MAIN);
          displayPVEnemy();
          SECONDARY_PLAYER.classList.add('takeDamage')
          setTimeout(() => {
            SECONDARY_PLAYER.classList.remove('takeDamage')
          }, 1000)
          setTimeout(() => {
            characterAtkAnother(MAIN, ENEMY);
            displayPVMain()
            displayKoScreen();
            MAIN_PLAYER.classList.add('takeDamage')
          setTimeout(() => {
            MAIN_PLAYER.classList.remove('takeDamage')
          }, 1000)
          },1500)
          break;
      }
    });
  });
});
