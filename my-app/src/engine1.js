const startBattle = (army1, army2, army3) => {
  let activeUnits1 = [...army1];
  let activeUnits2 = [...army2];
  let activeUnits3 = [...army3];

  while (
    activeUnits1.length > 0 &&
    activeUnits2.length > 0 &&
    activeUnits3.length > 0
  ) {
    activeUnits1.sort((a, b) => b.speed - a.speed);
    activeUnits2.sort((a, b) => b.speed - a.speed);
    activeUnits3.sort((a, b) => b.speed - a.speed);

    if (activeUnits1.length > 0) {
      const unit1 = activeUnits1[0];
      const targetArmy = [...activeUnits2, ...activeUnits3].find(
        (army) => army.length > 0
      );
      if (targetArmy) {
        const targetUnit = targetArmy[0];
        targetUnit.health -= unit1.attack - targetUnit.defense;
        if (targetUnit.health <= 0) {
          targetArmy.splice(0, 1);
        }
      }
      activeUnits1.push(activeUnits1.shift());
    }

    if (activeUnits2.length > 0) {
      const unit2 = activeUnits2[0];
      const targetArmy = [...activeUnits3, ...activeUnits1].find(
        (army) => army.length > 0
      );
      if (targetArmy) {
        const targetUnit = targetArmy[0];
        targetUnit.health -= unit2.attack - targetUnit.defense;
        if (targetUnit.health <= 0) {
          targetArmy.splice(0, 1);
        }
      }
      activeUnits2.push(activeUnits2.shift());
    }

    if (activeUnits3.length > 0) {
      const unit3 = activeUnits3[0];
      const targetArmy = [activeUnits1, ...activeUnits2].find(
        (army) => army.length > 0
      );
      if (targetArmy) {
        const targetUnit = targetArmy[0];
        targetUnit.health -= unit3.attack - targetUnit.defense;
        if (targetUnit.health <= 0) {
          targetArmy.splice(0, 1);
        }
      }
      activeUnits3.push(activeUnits3.shift());
    }
  }

  if (activeUnits1.length > 0) {
    return army1;
  } else if (activeUnits2.length > 0) {
    return army2;
  } else if (activeUnits3.length > 0) {
    return army3;
  } else {
    console.log("draw");
    return null;
  }
};

export default startBattle;
