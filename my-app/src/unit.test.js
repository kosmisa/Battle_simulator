const Unit = require("./unit");

const weapons = [
  { type: "knife", atk_bonus: 2, speed_bonus: 3 },
  { type: "pistol", atk_bonus: 5, speed_bonus: 4 },
  { type: "gun", atk_bonus: 7, speed_bonus: 6 },
  { type: "bomb", atk_bonus: 10, speed_bonus: 2 },
];

describe("Unit", () => {
  let unit;

  const health = Math.floor(Math.random() * 101) + 50;
  const attack = Math.floor(Math.random() * 11) + 40;
  const defense = Math.floor(Math.random() * 6) + 19;
  const speed = Math.floor(Math.random() * 10) + 1;

  beforeEach(() => {
    const weapon = weapons[Math.floor(Math.random() * weapons.length)];
    unit = new Unit({
      health,
      attack,
      defense,
      speed,
      weapon,
    });
    otherUnit = new Unit({
      health,
      attack,
      defense,
      speed,
      weapon,
    });
  });

  test("should be an instance of Unit", () => {
    expect(unit).toBeInstanceOf(Unit);
  });

  test("should have the correct initial properties", () => {
    expect(unit.health).toBe(health);
    expect(unit.attack).toBe(attack);
    expect(unit.defense).toBe(defense);
    expect(unit.speed).toBe(speed);
    expect(weapons).toContainEqual(unit.weapon);
  });

  test("should take damage when attacked", () => {
    const damage = 20;
    unit.takeDamage(damage);
    expect(unit.health).toBe(health - 20);
  });

  test("should attack another unit and reduce its health", () => {
    const expectedDamage = Math.max(
      0,
      unit.attack + unit.weapon.atk_bonus - otherUnit.defense
    );
    const expectedHealth = otherUnit.health - expectedDamage;
    unit.attackOtherUnit(otherUnit);
    expect(otherUnit.health).toBe(expectedHealth);
  });

  test("otherUnit should have the correct initial properties", () => {
    expect(otherUnit.health).toBe(health);
    expect(otherUnit.attack).toBe(attack);
    expect(otherUnit.defense).toBe(defense);
    expect(otherUnit.speed).toBe(speed);
    expect(weapons).toContainEqual(otherUnit.weapon);
  });
});
