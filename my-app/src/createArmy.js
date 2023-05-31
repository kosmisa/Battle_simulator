import Unit from "./unit";
import unitProps from "./unitProps";

const createArmy = () => {
  const armyUnits = [];
  while (armyUnits.length < 5) {
    const units = new Unit(unitProps);
    armyUnits.push(units);
  }
  return armyUnits;
};

export default createArmy;
