const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  let maxDragonDmg = Math.floor((Math.random() * (dragon.strength + 1)));
  return maxDragonDmg < 15 ? 15 : maxDragonDmg;
};

const warriorDamage = () => {
  let maxWarriorDamage = Math.floor((Math.random() * (warrior.strength * warrior.weaponDmg)));
  return maxWarriorDamage < warrior.strength ? warrior.strength : maxWarriorDamage;
}

const mageDamage = () => {
  Math.floor((Math.random() * (mage.intelligence * 2 - mage.intelligence) + mage.intelligence));
}

const mageConsumed = () => {
  return {
    damage: mageDamage(),
    mana: mage.mana < 15 ? `Não possui mana suficiente` : (mage.mana -= 15),
  }
}
