import { ITEMS, ATTAQUE, MAIN, ENEMY } from "./tablesOfObject.js";

const HUD_LOGS = document.querySelector("main div#hud section#hud-logs");

function characterAtkAnother(defenser, attacker) {
  defenser.takeDamage(attacker, ATTAQUE.makeDamage(attacker.stats.atk));
}

document.addEventListener("DOMContentLoaded", () => {
  const LI_OPTIONS_HUD = document.querySelectorAll(
    "div#hud section#hud-menu ul li"
  );

  LI_OPTIONS_HUD.forEach((event) => {
    event.addEventListener("click", (e) => {
      e.preventDefault();
      switch (e.target.id) {
        case "option-attaque":
          characterAtkAnother(ENEMY, MAIN);
          break;
      }
    });
  });
});

console.log(ATTAQUE.makeDamage(30));
