import { useState, useEffect } from "react";
import createArmy from "./createArmy";
import Unit from "./unit";
import startBattle from "./engine";

function App() {
  const [army1, setArmy1] = useState([]);
  const [army2, setArmy2] = useState([]);
  const [army3, setArmy3] = useState([]);
  const [winner, setWinner] = useState(null);

  const handleClick1 = () => {
    const army = createArmy();
    const armyUnits = army.map(
      (props, index) => new Unit({ ...props, name: `Unit${index + 1}` })
    );
    setArmy1(armyUnits);
  };

  const handleClick2 = () => {
    const army = createArmy();
    const armyUnits = army.map(
      (props, index) => new Unit({ ...props, name: `Unit${index + 1}` })
    );
    setArmy2(armyUnits);
  };

  const handleClick3 = () => {
    const army = createArmy();
    const armyUnits = army.map(
      (props, index) => new Unit({ ...props, name: `Unit${index + 1}` })
    );
    setArmy3(armyUnits);
  };

  const handleStart = () => {
    const winnerArmy = startBattle(army1, army2, army3);
    setWinner(winnerArmy);
  };

  const handleReset = () => {
    setArmy1([]);
    setArmy2([]);
    setArmy3([]);
    setWinner(null);
  };

  return (
    <>
      <button onClick={handleClick1}>Create Army1</button>
      <button onClick={handleClick2}>Create Army2</button>
      <button onClick={handleClick3}>Create Army3</button>
      <p>
        <button onClick={handleStart}>Start Battle</button>
        <button onClick={handleReset}>Reset Battle</button>
      </p>
      <h2>Army 1:</h2>
      {army1.map((unit, index) => (
        <div key={index}>
          <p>Name: {unit.name}</p>
          <p>Health: {unit.health}</p>
          <p>Attack: {unit.attack}</p>
          <p>Defense: {unit.defense}</p>
          <p>Speed: {unit.speed}</p>
        </div>
      ))}

      <h2>Army 2:</h2>
      {army2.map((unit, index) => (
        <div key={index}>
          <p>Name: {unit.name}</p>
          <p>Health: {unit.health}</p>
          <p>Attack: {unit.attack}</p>
          <p>Defense: {unit.defense}</p>
          <p>Speed: {unit.speed}</p>
        </div>
      ))}

      <h2>Army 3:</h2>
      {army3.map((unit, index) => (
        <div key={index}>
          <p>Name: {unit.name}</p>
          <p>Health: {unit.health}</p>
          <p>Attack: {unit.attack}</p>
          <p>Defense: {unit.defense}</p>
          <p>Speed: {unit.speed}</p>
        </div>
      ))}

      {winner && (
        <h2>
          Winner:{" "}
          {winner === army1 ? "Army 1" : winner === army2 ? "Army 2" : "Army 3"}
        </h2>
      )}
    </>
  );
}

export default App;
