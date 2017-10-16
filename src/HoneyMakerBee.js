var HoneyMakerBee = function() {
  Bee.call(this);
  
  // this.age = 0;
// this.color = 'pink';
// this.food = 'jelly';
  // this.age = 5;
  // this.color = 'yellow';
  // this.job = 'keep on growing';
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
  
};

HoneyMakerBee.prototype = Object.create(Grub.prototype);

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
}

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
}

HoneyMakerBee.prototype.constructor = HoneyMakerBee;


