import weapons from "./weaponTypes";
import Unit from "./unit";

const createArmy = () => {
  const armyUnits = [];
  while (armyUnits.length < 5) {
    const unitProps = {
      health: Math.floor(Math.random() * 101) + 50,
      attack: Math.floor(Math.random() * 11) + 40,
      defense: Math.floor(Math.random() * 6) + 19,
      speed: Math.floor(Math.random() * 10) + 1,
      weapon: weapons[Math.floor(Math.random() * weapons.length)],
    };
    const unit = new Unit(unitProps);
    armyUnits.push(unit);
  }
  return armyUnits;
};

export default createArmy;
