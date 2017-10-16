var ForagerBee = function() {
  Bee.call(this);
  // this.age = 5;
  // this.color = 'yellow';
  // this.job = 'keep on growing';
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Grub.prototype);

ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function() {
  this.treasureChest.push('treasure');
}

//ForagerBee.forage()