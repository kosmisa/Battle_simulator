class Unit {
  constructor(props) {
    this.name = props.name;
    this.health = props.health;
    this.attack = props.attack;
    this.defense = props.defense;
    this.speed = props.speed;
    this.weapon = props.weapon;
  }

  takeDamage(damage) {
    this.health -= damage;
  }

  attackOtherUnit(otherUnit) {
    const damage = Math.max(
      0,
      this.attack + this.weapon.atk_bonus - otherUnit.defense
    );
    otherUnit.takeDamage(damage);
    return damage;
  }
}

// module.exports = Unit;
export default Unit;
