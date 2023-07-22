const startBattle = (army1, army2, army3) => {
  const armies = [army1, army2, army3];
  const armyNames = ["Army1", "Army2", "Army3"];

  while (armies.filter((army) => army.length > 0).length > 1) {
    for (let i = 0; i < armies.length; i++) {
      const currentArmy = armies[i];
      const otherArmies = armies.filter((_, index) => index !== i);

      for (let j = 0; j < currentArmy.length; j++) {
        const unit = currentArmy[j];
        let targetUnit = null;
        for (let k = 0; k < otherArmies.length; k++) {
          const otherArmy = otherArmies[k];
          if (otherArmy.length > 0) {
            const target = otherArmy.reduce((prev, curr) => {
              return curr.speed > prev.speed ? curr : prev;
            });
            if (!targetUnit || target.speed > targetUnit.speed) {
              targetUnit = target;
            }
          }
        }

        if (targetUnit) {
          // Attack the target unit
          const damage = unit.attackOtherUnit(targetUnit);
          console.log(
            `${unit.name} from ${armyNames[i]} attacked ${
              targetUnit.name
            } from ${
              armyNames[armies.indexOf(targetUnit)]
            } and inflicted ${damage} damage.`
          );

          // Check if the target unit is defeated
          if (targetUnit.health <= 0) {
            const targetArmyIndex = armies.findIndex((army) =>
              army.includes(targetUnit)
            );
            const targetArmyName = armyNames[targetArmyIndex];
            console.log(
              `${targetUnit.name} from ${targetArmyName} has been defeated!`
            );
            const targetIndex =
              otherArmies[targetArmyIndex].indexOf(targetUnit);
            otherArmies[targetArmyIndex].splice(targetIndex, 1);
          }
        }

        // Apply cooldown/wait time for the unit
        unit.cooldown = 1;
      }
    }

    // Reduce cooldown for all units
    for (const army of armies) {
      for (const unit of army) {
        if (unit.cooldown > 0) {
          unit.cooldown--;
        }
      }
    }
  }

  // Determine the winner
  const winnerArmy = armies.find((army) => army.length > 0);
  const winnerName = armyNames[armies.indexOf(winnerArmy)];
  console.log(`The winner is ${winnerName}!`);
  return winnerArmy;
};

export default startBattle;
