'use strict';

function Animal(voice){
 this.voice = voice;
}

Animal.prototype.speak =  function(){
  display(this.voice);
}

function Cat(name,color){
  Animal.call(this,'meoow');
  this.name = name;
  this.color = color;
}

Cat.prototype= Animal.prototype; //Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
var fluffy = new Cat('Fluffy','white');

fluffy.speak();

display(fluffy);