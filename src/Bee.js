// var Grub = function() {
//   this.age = 0;
//   this.color = 'pink';
//   this.food = 'jelly';
// };

// Grub.prototype.eat = function() {
  
// };


var Bee = function() {
  // this = object.create(Bee.prototype)
  
  Grub.call(this);
// this.age = 0;
// this.color = 'pink';
// this.food = 'jelly';
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

// var bee = new Bee()
// bee.eat()
// bee.prototype to delegate to grub.prototype
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee; // constructor should delegate to function object that created it